import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Header from "../components/layout/Header";
import DetailModifyModal from "../components/ui/DetailModifyModal";
import SuccessNotificationModal from "../components/ui/SuccessNotificationModal";
import FailureNotificationModal from "../components/ui/FailureNotificationModal";
import { evidenceClient } from "../utils/evidence";
import FinishLoadingModal from "../components/ui/FinishLoadingModal";
import AttachmentChip from "../components/ui/AttachmentChip";
import LoadingDots from "../components/ui/LoadingDots";
import LoadingModal from "../components/ui/LoadingModal";
import iconSymbol from "../assets/iconSymbol.svg";
import ChatPagePlusButton from "../assets/ChatPagePlusButton.svg";
import ChatPageSendButton from "../assets/ChatPageSendButton.svg";
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

const FinishContainer = styled.div`
  position: fixed;
  top: calc(4rem + 1.44rem);
  left: 1.44rem;
  display: flex;
  width: 9.75rem;
  padding: 1.25rem 0;
  flex-direction: column;
  align-items: center;
  gap: 0.8125rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: var(--Main-bk, #f8faff);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.09);
  z-index: 10;
`;

const FinishDateDisplay = styled.div`
  color: var(--seconday, #688ae0);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;

const FinishDateContainer = styled.div`
  display: flex;
  width: 7.5rem;
  height: 2.75rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const DateDisplay = styled.div`
  text-align: center;
  padding: 0.625rem 2.6875rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #b4b4b4;
  line-height: 1.5rem;
`;

const ChatArea = styled.div`
  flex: 1;
  padding: 0 12.5rem;
  padding-top: 1.44rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  scroll-behavior: smooth;
`;

const MessageContainer = styled.div`
  display: flex;
  gap: 0.9375rem;
  position: relative;

  &.user {
    justify-content: flex-end;
  }

  &.ai {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  &.user {
    align-items: flex-end;
  }

  &.ai {
    align-items: flex-start;
  }
`;

const MessageBubble = styled.div`
  max-width: 25rem;
  padding: 1.25rem;
  border-radius: 1.25rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  box-sizing: border-box;

  &.user {
    background: linear-gradient(
      267deg,
      var(--Color, #68b8ea) -99.74%,
      #688ae0 37.78%,
      #8c68e0 177.79%
    );
    color: #fff;
    border-radius: 1.25rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  }

  &.ai {
    background: #fbfbfb;
    color: #313131;
    border: none;
    padding: 1.25rem;
    position: relative;
    border-radius: 1.25rem;
  }
`;

const AIIcon = styled.div`
  width: 1.8125rem;
  height: 1.8125rem;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-right: 1rem;
`;

const TimeStamp = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 0.625rem;
  color: #acacac;
  line-height: 0.8125rem;
  flex-shrink: 0;
  margin-bottom: 0.5rem;
  white-space: nowrap;
`;

const InputArea = styled.div`
  padding: 0 12.5rem 2rem 12.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 60rem;
  padding: 0.9375rem 1.25rem 0 1.25rem; 
  flex-direction: column;
  align-items: stretch;
  border-radius: 1.25rem;
  border: 2px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(
        267deg,
        var(--Color, #68b8ea) -67.73%,
        #688ae0 48.44%,
        #8c68e0 122.38%
      )
      border-box;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
`;

const ChatInput = styled.textarea`
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  background: transparent;
  border: none;
  padding: 0; 
  margin: 0;
  color: #313131;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  height: 1.25rem; 
  min-height: 1.25rem; 
  outline: none;
  resize: none; 
  max-height: calc(1.25rem * 4); 
  overflow-y: auto;

  &::placeholder {
    color: #acacac;
  }
`;

const InputActions = styled.div`
  display: flex;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
`;

const SendButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const PlusIcon = styled.div`
  width: 0.875rem;
  height: 0.875rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 0.875rem;
    height: 0.875rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const FinishButton = styled.button`
  height: 2.75rem;
  width: 7rem;
  border-radius: 0.5rem;
  border: 1px solid var(--seconday, #688ae0);
  background: linear-gradient(
    267deg,
    var(--Color, #68b8ea) -99.74%,
    #688ae0 37.78%,
    #8c68e0 177.79%
  );
  font-family: "Pretendard", sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  line-height: 1.125rem;
`;

const FileInput = styled.input`
  display: none;
`;

const AttachmentsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 12.5rem 0 12.5rem;
`;

const BottomPanel = styled.div`
  padding: 0 0 0 0;
  height: 16rem; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  gap: 0.5rem;
  overflow: hidden; 
`;

const Spacer = styled.div`
  flex: 1;
`;



const ChipRemove = styled.button`
  border: none;
  background: #4a4a4a;
  color: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.625rem;
`;

const PreviewThumb = styled.div`
  width: 10rem; 
  height: 6rem; 
  border-radius: 0.25rem;
  overflow: hidden;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


const VideoPreview = styled.video`
  width: 10rem; 
  height: 6rem; 
  border-radius: 0.25rem;
  background: #000;
  object-fit: cover;
`;

const AudioPreview = styled.audio`
  width: 12rem;
  height: 2rem;
`;

const MessageAttachments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const MessageImage = styled.img`
  width: 20rem; 
  height: 12rem; 
  border-radius: 0.5rem;
  object-fit: cover;
  background: #e9e9e9;
  display: block;
`;

const MessageVideo = styled.video`
  width: 20rem; 
  height: 12rem; /* 메시지 이미지와 동일 */
  border-radius: 0.5rem;
  background: #000;
  object-fit: cover;
`;

const MessageAudio = styled.audio`
  width: 20rem;
  height: 2rem;
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
      <FinishContainer>
        <FinishButton onClick={handleFinish} disabled={isFinishing}>
          {isFinishing ? "기록 완료 중..." : "기록 마치기"}
        </FinishButton>
        <FinishDateContainer>
          <FinishDateDisplay>
            {new Date().toLocaleDateString("ko-KR")}
          </FinishDateDisplay>
        </FinishDateContainer>
      </FinishContainer>
      <ChatWrapper>
        <ChatArea ref={chatAreaRef}>
          {messages.map((message) => (
            <MessageContainer key={message.id} className={message.type}>
              <MessageWrapper className={message.type}>
                {message.type === "ai" && (
                  <AIIcon>
                    <img
                      src={iconSymbol}
                      alt="AI 아이콘"
                      style={{ width: "1.8125rem", height: "1.8125rem" }}
                    />
                  </AIIcon>
                )}
                {message.type === "user" && message.time && (
                  <TimeStamp>{message.time}</TimeStamp>
                )}
                <MessageBubble className={message.type}>
                  {message.content === "응답 중입니다" ? (
                    <LoadingDots />
                  ) : (
                    message.content
                  )}
                  {message.type === "user" &&
                    message.attachments &&
                    message.attachments.length > 0 && (
                      <MessageAttachments>
                        {message.attachments.map((att) => (
                          <div key={att.id}>
                            {att.type && att.type.startsWith("image/") && (
                              <MessageImage
                                src={att.previewUrl}
                                alt={att.name}
                              />
                            )}
                            {att.type && att.type.startsWith("video/") && (
                              <MessageVideo src={att.previewUrl} controls />
                            )}
                            {att.type && att.type.startsWith("audio/") && (
                              <MessageAudio src={att.previewUrl} controls />
                            )}
                          </div>
                        ))}
                      </MessageAttachments>
                    )}
                </MessageBubble>
              </MessageWrapper>
            </MessageContainer>
          ))}
        </ChatArea>

        <BottomPanel>
          {attachments.length > 0 && (
            <AttachmentsBar>
              {attachments.map((att) => (
                <AttachmentChip
                  key={att.id}
                  file={att.file}
                  previewUrl={att.previewUrl}
                  mimeType={att.mimeType}
                  name={att.filename}
                  onRemove={() => removeAttachment(att.id)}
                />
              ))}
            </AttachmentsBar>
          )}

          {/* 진행률 바 제거: 로딩 상태는 메시지 버블의 "응답 중입니다"로만 표시 */}

          <InputArea>
            <InputContainer>
              <ChatInput
                ref={inputRef}
                placeholder=""
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                rows={1}
              />
              <InputActions>
                <PlusIcon onClick={handleFileSelect}>
                  <img src={ChatPagePlusButton} alt="파일 첨부" />
                </PlusIcon>
                <SendButton onClick={handleSend} disabled={isLoading}>
                  <img src={ChatPageSendButton} alt="전송" />
                </SendButton>
              </InputActions>
              <FileInput
                ref={fileInputRef}
                type="file"
                accept="image/*,audio/*,video/*"
                multiple
                onChange={handleFilesChosen}
              />
            </InputContainer>
          </InputArea>
        </BottomPanel>
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
