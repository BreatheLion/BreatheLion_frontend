import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../components/layout/Header";
import DetailModifyPage from "./DetailModifyPage";
import FinishLoadingModal from "../components/ui/FinishLoadingModal";
import AttachmentChip from "../components/ui/AttachmentChip";
import iconSymbol from "../assets/iconSymbol.svg";

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

const DateDisplay = styled.div`
  text-align: center;
  padding: 2.5rem 0 1.5rem 0;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #b4b4b4;
  line-height: 1.5rem;
`;

const ChatArea = styled.div`
  flex: 1;
  padding: 0 12.5rem;
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
    background: #fbfbfb;
    color: #4a4a4a;
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
  align-items: flex-end; /* 하단 정렬로 라인 일치 */
  gap: 1rem;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 45.9375rem;
  padding: 0.9375rem 1.25rem 0 1.25rem; /* 하단 패딩 제거 */
  flex-direction: column;
  align-items: stretch;
  border-radius: 1.25rem;
  border: 3px solid var(--Color, #68b8ea);
  background: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
`;

const ChatInput = styled.textarea`
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  background: transparent;
  border: none;
  padding: 0; /* 한 줄 기준 컴팩트 */
  margin: 0;
  color: #313131;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  height: 1.25rem; /* 기본 1줄 높이 */
  min-height: 1.25rem; /* 최소 1줄 */
  outline: none;
  resize: none; /* 수동 리사이즈 금지 */
  max-height: calc(1.25rem * 4); /* 최대 4줄 */
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
  background: #68b8ea; /* 배경 파랑 */
  color: #fff; /* 아이콘 흰색 (currentColor) */
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

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
  color: #68b8ea; /* icon color */
  font-size: 2rem;
  line-height: 1;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const FinishButton = styled.button`
  height: 2.75rem;
  width: 7rem;
  background: #fff;
  border: 1px solid var(--10, #ddd);
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #313131;
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
  padding: 0 12.5rem 0 12.5rem; /* 하단 여백 제거로 겹침 방지 */
`;

const BottomPanel = styled.div`
  padding: 0 0 0 0;
  height: 16rem; /* 최대: InputArea 최대 + AttachmentsBar 1줄 보장 (여유 증가) */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 내용은 하단 정렬 */
  gap: 0.5rem;
  overflow: hidden; /* 내부 스クロ롤 금지, 초과분은 잘림 */
`;

const Spacer = styled.div`
  flex: 1;
`;

// Removed local AttachmentChip styled component to avoid name collision with imported AttachmentChip

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
  width: 10rem; /* 고정 크기 */
  height: 6rem; /* 고정 크기 */
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

// 진행률 UI 제거

const VideoPreview = styled.video`
  width: 10rem; /* 이미지 썸네일과 동일 */
  height: 6rem; /* 이미지 썸네일과 동일 */
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
  width: 20rem; /* 고정 크기 */
  height: 12rem; /* 고정 크기 */
  border-radius: 0.5rem;
  object-fit: cover;
  background: #e9e9e9;
  display: block;
`;

const MessageVideo = styled.video`
  width: 20rem; /* 메시지 이미지와 동일 */
  height: 12rem; /* 메시지 이미지와 동일 */
  border-radius: 0.5rem;
  background: #000;
  object-fit: cover;
`;

const MessageAudio = styled.audio`
  width: 20rem;
  height: 2rem;
`;

export default function ChatPage({
  onNavigateToMain,
  onNavigateToDrawer,
  initialChatData,
}) {
  const [messages, setMessages] = useState(() => {
    if (initialChatData) {
      // 서버 응답으로 초기 채팅 구성
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
  const [attachments, setAttachments] = useState([]); // {id, file, previewUrl}
  const uploadAbortRef = useRef(null);
  const fileInputRef = useRef(null);
  const chatAreaRef = useRef(null);
  const inputRef = useRef(null);
  // 진행률 데모/플래그 제거
  // TODO: 백엔드 연동 후 false로 변경 필요
  // 임시 테스트: 3초 지연 후 응답으로 치환 (임시 로직)
  const USE_FAKE_API = true; // 테스트가 끝나면 false로 변경하세요
  const SIMULATE_LATENCY_MS = 3000;
  const fakeTimerRef = useRef(null);
  const MAX_ATTACHMENTS = 5; // 첨부 최대 개수

  // chat_session_id 추출
  const chatSessionId = initialChatData?.serverResponse?.chat_session_id || 1;

  // 로딩 상태에 따라 메시지 업데이트
  useEffect(() => {
    if (initialChatData && initialChatData.isLoading === false) {
      // 로딩 완료 시 "응답 중입니다" 메시지를 실제 응답으로 교체
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        const aiMessageIndex = updatedMessages.findIndex(
          (msg) => msg.type === "ai"
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

  // 메시지가 변경될 때마다 하단으로 스크롤
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

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

  const handleFilesChosen = (e) => {
    const chosen = Array.from(e.target.files || []);
    if (chosen.length === 0) return;
    // 제한: 최대 5개, 영상/이미지/오디오 허용
    const allowTypes = /^(image|audio|video)\//;
    const current = attachments.length;
    const room = Math.max(0, MAX_ATTACHMENTS - current);
    const accepted = chosen
      .filter((f) => allowTypes.test(f.type))
      .slice(0, room);
    const next = accepted.map((file) => ({
      id: `${Date.now()}_${file.name}`,
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setAttachments((prev) => [...prev, ...next]);
    // reset input to allow re-choose same file names
    e.target.value = "";
  };

  const removeAttachment = (id) => {
    setAttachments((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((p) => p.id !== id);
    });
  };

  const clearAllAttachments = () => {
    setAttachments((prev) => {
      prev.forEach((p) => p.previewUrl && URL.revokeObjectURL(p.previewUrl));
      return [];
    });
  };

  const handleFinish = async () => {
    setIsFinishing(true);
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

  const handleDetailSubmit = async (payload) => {
    try {
      const form = new FormData();
      form.append("record_id", String(payload.record_id || ""));
      form.append("title", payload.title || "");
      form.append("content", payload.content || "");
      form.append("severity", String(payload.severity ?? ""));
      form.append("location", payload.location || "");
      form.append("occurred_at", payload.occurred_at || "");
      form.append("drawer", payload.drawer || "");

      (payload.category || []).forEach((v) => form.append("category[]", v));
      (payload.assailant || []).forEach((v) => form.append("assailant[]", v));
      (payload.witness || []).forEach((v) => form.append("witness[]", v));

      // 기존 유지할 서버 파일들: 파일명 기준
      (payload.existing_evidences || []).forEach((ev) => {
        if (ev?.filename) form.append("evidences_keep[]", ev.filename);
      });

      // 새로 추가된 파일 업로드
      (payload.new_files || []).forEach((file) => {
        if (file) form.append("evidences[]", file, file.name);
      });

      // TODO: 백엔드 연동 후 실제 API 호출로 변경
      // 현재는 즉시 메인 화면으로 이동 (임시 로직)
      console.log("저장 API 호출 시뮬레이션:", form);

      onNavigateToMain();
      // await axios.post("/api/records/save/", form);
      // onNavigateToMain();
    } catch (error) {
      console.error("데이터 저장 중 오류:", error);
      // TODO: 백엔드 연동 후 에러 처리 로직 수정
      // 현재는 에러가 발생해도 즉시 메인 화면으로 이동 (임시 로직)
      onNavigateToMain();
    }
  };

  // 진행률 데모 제거

  const handleSend = async () => {
    if (isLoading) return; // 중복 전송 방지

    const trimmed = inputValue.trim();
    if (!trimmed) return;

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
        name: att.file.name,
        type: att.file.type,
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
    // 전송 즉시 입력란 비우기
    setInputValue("");

    // TODO: 백엔드 연동 후 실제 API 호출로 변경 필요
    // 임시 테스트 모드: 3초 지연 후 응답으로 교체 (임시 로직)
    if (USE_FAKE_API) {
      fakeTimerRef.current = setTimeout(() => {
        const mockResponse = {
          answer: "어 고생했어",
          time: new Date().toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          date: new Date().toISOString().split("T")[0],
        };

        setMessages((prev) => {
          const updated = [...prev];
          const idx = updated.findIndex(
            (m) => m.type === "ai" && m.content === "응답 중입니다"
          );
          if (idx !== -1) {
            updated[idx] = {
              ...updated[idx],
              content: mockResponse.answer,
              time: mockResponse.time || "",
            };
          }
          return updated;
        });

        setInputValue("");
        clearAllAttachments();
        setIsLoading(false);
        fakeTimerRef.current = null;
      }, SIMULATE_LATENCY_MS);
      return;
    }

    try {
      // 실제 업로드
      const form = new FormData();
      form.append("chat_session_id", String(chatSessionId));
      form.append("text", trimmed);
      attachments.forEach((att) =>
        form.append("evidences[]", att.file, att.file.name)
      );

      const controller = new AbortController();
      uploadAbortRef.current = controller;

      const response = await axios.post("/api/chats/attach/", form, {
        signal: controller.signal,
      });

      const serverResponse = response.data;

      setMessages((prev) => {
        const updated = [...prev];
        const idx = updated.findIndex(
          (m) => m.type === "ai" && m.content === "응답 중입니다"
        );
        if (idx !== -1) {
          updated[idx] = {
            ...updated[idx],
            content: serverResponse.answer,
            time: serverResponse.time || "",
          };
        }
        return updated;
      });

      setInputValue("");
      clearAllAttachments();
    } catch (error) {
      console.error(error);
      setMessages((prev) => {
        const updated = [...prev];
        const idx = updated.findIndex(
          (m) => m.type === "ai" && m.content === "응답 중입니다"
        );
        if (idx !== -1) {
          updated[idx] = {
            ...updated[idx],
            content: "해당 메세지가 전송되지 않았습니다",
            time: new Date().toLocaleTimeString("ko-KR", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
          };
        }
        return updated;
      });
      setInputValue("");
      clearAllAttachments();
    } finally {
      // 데모 모드에서는 여기 오지 않음
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
      <Header
        onRecordClick={() => {}}
        onDrawerClick={onNavigateToDrawer}
        currentPage="chat"
      />
      <ChatWrapper>
        <DateDisplay>
          {initialChatData?.serverResponse?.date ||
            new Date().toISOString().split("T")[0]}
        </DateDisplay>

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
                  {message.content}
                  {message.type === "user" &&
                    message.attachments &&
                    message.attachments.length > 0 && (
                      <MessageAttachments>
                        {message.attachments.map((att) => (
                          <div key={att.id}>
                            {att.type.startsWith("image/") && (
                              <MessageImage
                                src={att.previewUrl}
                                alt={att.name}
                              />
                            )}
                            {att.type.startsWith("video/") && (
                              <MessageVideo src={att.previewUrl} controls />
                            )}
                            {att.type.startsWith("audio/") && (
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
                  onRemove={() => removeAttachment(att.id)}
                />
              ))}
            </AttachmentsBar>
          )}

          {/* 진행률 바 제거: 로딩 상태는 메시지 버블의 "응답 중입니다"로만 표시 */}

          <InputArea>
            <Spacer />
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_168_2659)">
                      <path
                        d="M1 7H13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 1L7 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_168_2659">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </PlusIcon>
                <SendButton onClick={handleSend} disabled={isLoading}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                      fill="currentColor"
                    />
                  </svg>
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

            <FinishButton onClick={handleFinish} disabled={isFinishing}>
              {isFinishing ? "기록 완료 중..." : "기록 마치기"}
            </FinishButton>
          </InputArea>
        </BottomPanel>
      </ChatWrapper>

      {isFinishing && !finishResponse && (
        <FinishLoadingModal
          chatSessionId={chatSessionId}
          onDone={handleFinishDone}
        />
      )}

      {/* DetailModifyPage 모달 */}
      {showDetailModal && finishResponse && (
        <DetailModifyPage
          data={finishResponse}
          attachments={attachments} // 미리보기 URL 포함된 첨부파일 데이터 전달
          onClose={handleDetailClose}
          onSubmit={handleDetailSubmit}
        />
      )}
    </ChatContainer>
  );
}
