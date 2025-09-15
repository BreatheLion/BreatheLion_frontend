import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Header from "../components/layout/Header";
import DetailModifyModal from "../components/ui/DetailModifyModal";
import SuccessNotificationModal from "../components/ui/SuccessNotificationModal";
import FailureNotificationModal from "../components/ui/FailureNotificationModal";
import { evidenceClient } from "../utils/evidence";
import FinishLoadingModal from "../components/ui/FinishLoadingModal";
import LoadingModal from "../components/ui/LoadingModal";
import MessageList from "../components/chat/MessageList";
import ChatInputBar from "../components/chat/ChatInputBar";
import FinishPanel from "../components/chat/FinishPanel";
import { apiHelpers } from "../utils/api";

const ChatContainer = styled.div`
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const ChatWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export default function ChatPage({ initialChatData }) {
  // localStorage에서 메시지 복원 또는 초기화
  const getStoredMessages = () => {
    try {
      const stored = localStorage.getItem(
        `chat_messages_${initialChatData?.serverResponse?.chat_session_id || 1}`
      );
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error("localStorage에서 메시지 복원 실패:", error);
      return null;
    }
  };

  const [messages, setMessages] = useState(() => {
    // 1. localStorage에서 기존 메시지 확인
    const storedMessages = getStoredMessages();

    if (storedMessages && storedMessages.length > 0) {
      // 기존 대화가 있으면 복원
      return storedMessages;
    }

    // 2. 새로운 대화 시작
    if (initialChatData) {
      const { userMessage, serverResponse } = initialChatData;

      const initialMessages = [
        {
          id: 1,
          type: "user",
          content: userMessage,
          time: new Date().toLocaleTimeString("ko-KR", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
        },
      ];

      // AI 응답 추가
      if (serverResponse) {
        initialMessages.push({
          id: 2,
          type: "ai",
          content: serverResponse.answer,
          time: serverResponse.time,
        });
      }

      return initialMessages;
    }

    return []; // 초기 데이터가 없으면 빈 배열
  });
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [finishResponse, setFinishResponse] = useState(null);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [failureMessage, setFailureMessage] = useState("");
  // attachments: 채팅에서 올린 파일을 즉시 S3 업로드하여 s3Key/previewUrl을 보관
  // { id, filename, type: "IMAGE"|"VIDEO"|"AUDIO", s3Key, previewUrl, mimeType, size }
  const [attachments, setAttachments] = useState([]);
  // messageAttachments: 메시지에서 전송된 모든 첨부파일의 previewUrl들을 수집
  const [messageAttachments, setMessageAttachments] = useState([]);
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const uploadAbortRef = useRef(null);
  const fileInputRef = useRef(null);
  const chatAreaRef = useRef(null);
  const inputRef = useRef(null);
  const USE_FAKE_API = false; // 실제 API 호출을 위해 false로 변경
  const SIMULATE_LATENCY_MS = 3000;
  const fakeTimerRef = useRef(null);
  const MAX_ATTACHMENTS = 10; // 첨부 최대 개수
  const MAX_TOTAL_SIZE = 300 * 1024 * 1024; // 총합 300MB (바이트 단위)

  // chat_session_id와 record_id 추출
  const chatSessionId = initialChatData?.serverResponse?.chat_session_id || 1;
  const recordId = initialChatData?.serverResponse?.record_id || null;

  // 로딩 상태에 따라 메시지 업데이트
  useEffect(() => {
    if (initialChatData && initialChatData.isLoading === false) {
      // 로딩 완료 시 "응답 중입니다" 메시지를 실제 응답으로 교체
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        const aiMessageIndex = updatedMessages.findIndex(
          (msg) => msg.type === "ai" && msg.content === "응답 중입니다"
        );

        if (aiMessageIndex !== -1) {
          updatedMessages[aiMessageIndex] = {
            ...updatedMessages[aiMessageIndex],
            content: initialChatData.serverResponse.answer,
            time: initialChatData.serverResponse.time,
          };
        }

        return updatedMessages;
      });
    }
  }, [initialChatData]);

  // MainPage에서 전달되는 실제 서버 응답을 이벤트로 수신해 메시지 교체
  useEffect(() => {
    const onServerResponse = (e) => {
      const detail = e?.detail || {};
      const answer = detail.answer;
      const time = detail.time || "";
      if (!answer) return;

      setMessages((prev) => {
        const updated = [...prev];
        const idx = updated.findIndex(
          (m) => m.type === "ai" && m.content === "응답 중입니다"
        );
        if (idx !== -1) {
          updated[idx] = { ...updated[idx], content: answer, time };
          return updated;
        }
        return [
          ...updated,
          { id: updated.length + 1, type: "ai", content: answer, time },
        ];
      });
      setIsLoading(false);
    };

    window.addEventListener("chat_server_response", onServerResponse);
    return () =>
      window.removeEventListener("chat_server_response", onServerResponse);
  }, []);

  // 브라우저 뒤로가기/앞으로가기 시 메시지 복원
  useEffect(() => {
    const handleBeforeUnload = () => {
      // 페이지를 떠날 때 현재 메시지를 localStorage에 저장
      try {
        const chatSessionId =
          initialChatData?.serverResponse?.chat_session_id || 1;
        localStorage.setItem(
          `chat_messages_${chatSessionId}`,
          JSON.stringify(messages)
        );
      } catch (error) {
        console.error("페이지 떠날 때 메시지 저장 실패:", error);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [messages, initialChatData?.serverResponse?.chat_session_id]);

  // 메시지가 변경될 때마다 localStorage에 저장하고 하단으로 스크롤
  useEffect(() => {
    // localStorage에 메시지 저장
    try {
      const chatSessionId =
        initialChatData?.serverResponse?.chat_session_id || 1;
      localStorage.setItem(
        `chat_messages_${chatSessionId}`,
        JSON.stringify(messages)
      );
    } catch (error) {
      console.error("localStorage에 메시지 저장 실패:", error);
    }

    // 메시지에서 첨부파일들을 수집하여 messageAttachments 업데이트
    const allMessageAttachments = [];
    messages.forEach((message) => {
      if (
        message.type === "user" &&
        message.attachments &&
        message.attachments.length > 0
      ) {
        message.attachments.forEach((att) => {
          allMessageAttachments.push({
            id: att.id,
            name: att.name,
            type: att.type,
            previewUrl: att.previewUrl,
          });
        });
      }
    });
    setMessageAttachments(allMessageAttachments);

    // 하단으로 스크롤
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages, initialChatData?.serverResponse?.chat_session_id]);

  useEffect(() => {
    // 입력 변경 시 높이 자동 조절 (1~4줄 범위)
    if (!inputRef.current) return;
    const el = inputRef.current;
    el.style.height = "auto";
    const styles = window.getComputedStyle(el);
    const lh = parseFloat(styles.lineHeight) || 20;
    const pt = parseFloat(styles.paddingTop) || 0;
    const pb = parseFloat(styles.paddingBottom) || 0;
    const minH = lh + pt + pb; // 1줄 높이
    const maxH = lh * 4 + pt + pb; // 4줄 높이
    const next = Math.max(minH, Math.min(el.scrollHeight, maxH));
    el.style.height = `${next}px`;
  }, [inputValue]);

  // 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (fakeTimerRef.current) {
        clearTimeout(fakeTimerRef.current);
        fakeTimerRef.current = null;
      }
    };
  }, []);

  const handleFileSelect = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFilesChosen = async (e) => {
    const chosen = Array.from(e.target.files || []);
    if (chosen.length === 0) return;

    // 제한: 최대 10개, 영상/이미지/오디오 허용
    const allowTypes = /^(image|audio|video)\//;
    const current = attachments.length;
    const room = Math.max(0, MAX_ATTACHMENTS - current);
    const accepted = chosen
      .filter((f) => allowTypes.test(f.type))
      .slice(0, room);

    const currentTotalSize = attachments.reduce(
      (sum, att) => sum + (att.size || 0),
      0
    );
    const filesWithinLimit = [];
    let newTotalSize = currentTotalSize;
    for (const file of accepted) {
      if (newTotalSize + file.size <= MAX_TOTAL_SIZE) {
        filesWithinLimit.push(file);
        newTotalSize += file.size;
      } else {
        alert(
          `파일 크기 제한을 초과했습니다. (최대 ${
            MAX_TOTAL_SIZE / (1024 * 1024)
          }MB)`
        );
        break;
      }
    }

    if (filesWithinLimit.length === 0) {
      e.target.value = "";
      return;
    }

    // 파일 업로드 시작 시 로딩 모달 표시
    setShowFileUploadModal(true);

    // 즉시 S3 업로드 후 s3Key/previewUrl 보관
    const basePrefix = `records/${finishResponse?.record_id || recordId}`;
    const prefix = `${basePrefix}/evidence`;
    const uploaded = [];
    for (const file of filesWithinLimit) {
      try {
        const info = await evidenceClient.uploadAndGetPreview({
          prefix,
          file,
          readMinutes: 10,
        });
        uploaded.push({
          id: `${Date.now()}_${file.name}`,
          filename: info.filename,
          type: info.type, // IMAGE | VIDEO | AUDIO
          s3Key: info.s3Key,
          previewUrl: info.previewUrl,
          mimeType: info.mimeType,
          size: info.size,
          file: file, // 원본 파일 객체 추가
        });
      } catch (err) {
        console.error("첨부 업로드 실패", err);
      }
    }

    if (uploaded.length > 0) {
      setAttachments((prev) => [...prev, ...uploaded]);
    }

    // 파일 업로드 완료 시 로딩 모달 숨김
    setShowFileUploadModal(false);
    e.target.value = "";
  };

  const removeAttachment = (id) => {
    setAttachments((prev) => prev.filter((p) => p.id !== id));
  };

  const clearAllAttachments = () => {
    setAttachments((prev) => {
      prev.forEach((p) => p.previewUrl && URL.revokeObjectURL(p.previewUrl));
      return [];
    });
  };

  const handleFinish = async () => {
    if (isFinishing) return;
    setIsFinishing(true);

    try {
      const responseData = await apiHelpers.endChat(chatSessionId, recordId);

      if (responseData.isSuccess) {
        setFinishResponse(responseData.data);
        setShowDetailModal(true);
      } else {
        throw new Error(responseData.message || "채팅 종료 실패");
      }
    } catch (error) {
      console.error("채팅 종료 중 오류:", error);

      // API 에러 시 ChatPage로 돌아가기 (목업 데이터 사용하지 않음)
      alert("채팅 종료에 실패했습니다. 다시 시도해주세요.");

      // 로딩 상태만 해제하고 ChatPage 유지
    } finally {
      setIsFinishing(false);
    }
  };

  const handleFinishDone = (data) => {
    setFinishResponse(data);
    setShowDetailModal(true);
    setIsFinishing(false);
  };

  const handleDetailClose = () => {
    setShowDetailModal(false);
    setFinishResponse(null);
  };

  // 진행률 데모 제거

  const handleSend = async () => {
    if (isLoading) return; // 중복 전송 방지

    const trimmed = inputValue.trim();
    if (!trimmed) {
      setFailureMessage("텍스트를 포함해서 메시지를 전송해야 합니다.");
      setShowFailureModal(true);
      return;
    }

    // chat_session_id 검증
    if (!chatSessionId) {
      window.handleApiError(
        new Error("채팅 세션 ID가 없습니다."),
        "채팅 세션을 찾을 수 없습니다."
      );
      return;
    }

    setIsLoading(true);

    // 사용자/로딩 메시지 추가
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: trimmed,
      time: new Date().toLocaleTimeString("ko-KR", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      attachments: attachments.map((att) => ({
        id: att.id,
        name: att.filename,
        type: att.mimeType,
        previewUrl: att.previewUrl,
      })),
    };
    const loadingMessage = {
      id: messages.length + 2,
      type: "ai",
      content: "응답 중입니다",
      time: "",
    };
    setMessages((prev) => [...prev, userMessage, loadingMessage]);

    // 메시지 첨부파일들의 previewUrl들을 수집
    if (attachments.length > 0) {
      const newMessageAttachments = attachments.map((att) => ({
        id: att.id,
        name: att.filename,
        type: att.mimeType,
        previewUrl: att.previewUrl,
        s3Key: att.s3Key,
        size: att.size,
      }));
      setMessageAttachments((prev) => [...prev, ...newMessageAttachments]);
    }
    // 전송 즉시 입력란 비우기
    setInputValue("");

    // attachments를 evidences로 변환
    const evidences =
      attachments.length > 0
        ? attachments.map((att) => ({
            type: att.type, // "IMAGE" | "VIDEO" | "AUDIO"
            filename: att.filename, // 원본 파일명
            s3Key: att.s3Key, // S3 키
          }))
        : null;

    try {
      console.log("ChatPage API 호출 시작:", {
        chatSessionId,
        trimmed,
        attachments: attachments.length,
        evidences: evidences ? evidences.length : 0,
      });

      const controller = new AbortController();
      uploadAbortRef.current = controller;

      console.log("ChatPage API 호출 실행:", {
        chatSessionId,
        text: trimmed,
        evidences: evidences,
      });

      const serverResponse = await apiHelpers.sendMessage(
        chatSessionId,
        trimmed,
        evidences
      );

      if (serverResponse && serverResponse.isSuccess && serverResponse.data) {
        setMessages((prev) => {
          const updated = [...prev];
          const idx = updated.findIndex(
            (m) => m.type === "ai" && m.content === "응답 중입니다"
          );
          if (idx !== -1) {
            updated[idx] = {
              ...updated[idx],
              content: serverResponse.data.answer,
              time: serverResponse.data.message_time || "",
              date:
                serverResponse.data.message_date ||
                new Date().toISOString().split("T")[0],
            };
          }
          return updated;
        });
      } else {
        throw new Error("서버 응답이 올바르지 않습니다.");
      }

      setInputValue("");
      clearAllAttachments();
    } catch (error) {
      console.error("ChatPage API 호출 실패:", error);
      console.log("API 호출 실패 상세:", {
        chatSessionId,
        trimmed,
        evidences: evidences ? evidences.length : 0,
      });

      // 에러 처리 - 사용자 액션이므로 모달 사용
      setFailureMessage("메시지 전송에 실패했습니다. 다시 시도해주세요.");
      setShowFailureModal(true);

      // 로딩 상태 제거
      setMessages((prev) => {
        const updated = [...prev];
        const idx = updated.findIndex(
          (m) => m.type === "ai" && m.content === "응답 중입니다"
        );
        if (idx !== -1) {
          updated.splice(idx, 1);
        }
        return updated;
      });
    } finally {
      setIsLoading(false);
      uploadAbortRef.current = null;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // 업로드 취소/진행률 UI 제거

  return (
    <ChatContainer>
      <Header currentPage="chat" />
      <FinishPanel isFinishing={isFinishing} onFinish={handleFinish} />
      <ChatWrapper>
        <MessageList messages={messages} chatAreaRef={chatAreaRef} />

        <ChatInputBar
          attachments={attachments}
          inputValue={inputValue}
          isLoading={isLoading}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onSend={handleSend}
          onFileSelect={handleFileSelect}
          onFilesChosen={handleFilesChosen}
          onRemoveAttachment={removeAttachment}
          fileInputRef={fileInputRef}
        />
      </ChatWrapper>

      {isFinishing && !finishResponse && (
        <FinishLoadingModal
          chatSessionId={chatSessionId}
          onDone={handleFinishDone}
        />
      )}

      {/* 파일 업로드 로딩 모달 */}
      {showFileUploadModal && (
        <LoadingModal
          titleText="데이터를 저장하고 있어요"
          subText="잠시 한숨 돌리고 계세요!"
          autoCloseMs={3000}
          onDone={() => setShowFileUploadModal(false)}
          showAutoClose={false}
        />
      )}

      {/* DetailModifyModal 모달 */}
      {showDetailModal &&
        finishResponse &&
        (() => {
          console.log("ChatPage - DetailModifyModal 호출:", {
            finishResponse,
            attachments,
            attachmentsLength: attachments.length,
            messageAttachments,
            messageAttachmentsLength: messageAttachments.length,
          });
          return (
            <DetailModifyModal
              data={finishResponse}
              attachments={attachments} // 미리보기 URL 포함된 첨부파일 데이터 전달
              messageAttachments={messageAttachments} // 메시지에서 전송된 모든 첨부파일 데이터 전달
              onClose={handleDetailClose}
            />
          );
        })()}

      <FailureNotificationModal
        isOpen={showFailureModal}
        onClose={() => setShowFailureModal(false)}
        title="작업 실패"
        message={failureMessage}
      />
    </ChatContainer>
  );
}
