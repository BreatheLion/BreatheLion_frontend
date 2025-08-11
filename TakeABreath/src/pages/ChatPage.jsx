import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../components/layout/Header";
import DetailModifyPage from "./DetailModifyPage";

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
  margin-bottom: 7rem;
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
    background: transparent;
    color: #313131;
    border: none;
    padding-left: 0;
    position: relative;
  }
`;

const AIIcon = styled.div`
  width: 1.8125rem;
  height: 1.8125rem;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 2.5rem;
  margin-right: 1rem;
`;

const AIIconSvg = () => (
  <svg width="29" height="23" viewBox="0 0 29 23" fill="none">
    <g filter="url(#filter0_ii_4_55)">
      <path
        d="M19.7061 0.600098C24.7285 0.600314 28.7998 4.39938 28.7998 9.08545C28.7998 10.1716 28.5783 11.209 28.1797 12.1636C28.579 13.0263 28.8008 13.9698 28.8008 14.9595C28.8008 19.0447 25.0507 22.3567 20.4248 22.3569C17.5879 22.3569 15.0817 21.1101 13.5664 19.2046C12.7527 19.8152 11.7277 20.1811 10.6123 20.1812C7.96896 20.1812 5.82544 18.1359 5.8252 15.6128C5.8252 14.8793 6.00725 14.1861 6.3291 13.5718C3.26465 12.1673 1.51803 10.195 0 8.78564C2.39783 9.73325 4.16686 10.0685 5.60449 9.86084C5.43712 9.3386 5.34572 8.78669 5.3457 8.21533C5.3457 4.97111 8.239 2.34141 11.8076 2.34131C12.5053 2.34131 13.1771 2.44242 13.8066 2.62842C15.3948 1.3642 17.4548 0.600098 19.7061 0.600098Z"
        fill="url(#paint0_linear_4_55)"
      />
    </g>
    <defs>
      <filter
        id="filter0_ii_4_55"
        x="-0.84"
        y="-0.239902"
        width="30.4808"
        height="23.4368"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="0.84" dy="0.84" />
        <feGaussianBlur stdDeviation="6.6" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_55" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-0.84" dy="-0.84" />
        <feGaussianBlur stdDeviation="2.4" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_4_55"
          result="effect2_innerShadow_4_55"
        />
      </filter>
      <linearGradient
        id="paint0_linear_4_55"
        x1="0"
        y1="11.4785"
        x2="47.435"
        y2="14.0574"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.287236" stopColor="#68b8ea" />
        <stop offset="1" stopColor="#FEFEFF" />
      </linearGradient>
    </defs>
  </svg>
);

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
  padding: 0 12.5rem 0.5rem 12.5rem;
`;

const AttachmentChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.5rem;
  border-radius: 1rem;
  background: #f2f2f2;
  color: #313131;
  font-size: 0.75rem;
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

const ProgressWrap = styled.div`
  width: 100%;
  padding: 0 12.5rem 0.5rem 12.5rem;
`;

const ProgressBar = styled.div`
  height: 0.375rem;
  width: 100%;
  background: #e9e9e9;
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.$percent || 0}%;
  background: #68b8ea;
  transition: width 0.15s ease;
`;

const CancelUpload = styled.button`
  border: none;
  background: transparent;
  color: #4a4a4a;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  cursor: pointer;
`;

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

export default function ChatPage({ onNavigateToMain, initialChatData }) {
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
  const [overallProgress, setOverallProgress] = useState(0);
  const uploadAbortRef = useRef(null);
  const fileInputRef = useRef(null);
  const chatAreaRef = useRef(null);
  const inputRef = useRef(null);

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

  const handleFileSelect = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFilesChosen = (e) => {
    const chosen = Array.from(e.target.files || []);
    if (chosen.length === 0) return;
    // 제한: 최대 3개, 영상/이미지/오디오 허용
    const allowTypes = /^(image|audio|video)\//;
    const current = attachments.length;
    const room = Math.max(0, 3 - current);
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

    try {
      // 서버 연결 테스트 (실제로는 주석 처리)
      // const response = await axios.post("/api/chats/end/", {
      //   chat_session_id: chatSessionId,
      // });
      // const finishResponse = response.data;

      // 더미 데이터로 테스트
      const finishResponse = {
        record_id: 3,
        title: "동방에서 일어난 무시무시한 사건",
        category: ["괴롭힘"],
        content: "오늘 해승이가 해원이를 괴롭혔다",
        severity: 1,
        location: "동방",
        created_at: "2025-08-05T10:00:00",
        occurred_at: "2025-08-01T14:30:00",
        assailant: ["서해승", "이예림"],
        witness: ["오영록"],
        drawers: ["00 커피 폭언", "기차역 살인사건"],
        evidences: [
          {
            filename: "해원이 욕설 파일",
            type: "audio",
            url: "url~~",
          },
          {
            filename: "폭행 당시 사진",
            type: "image",
            url: "url2~~",
          },
        ],
      };

      console.log("기록 완료 응답:", finishResponse);

      // 응답 데이터를 저장하고 모달 표시
      setFinishResponse(finishResponse);
      setShowDetailModal(true);
    } catch (error) {
      console.error("기록 완료 중 오류:", error);
      alert("기록 완료 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsFinishing(false);
    }
  };

  const handleDetailClose = () => {
    setShowDetailModal(false);
    setFinishResponse(null);
  };

  const handleDetailSubmit = async (formData) => {
    try {
      // 수정된 데이터를 서버로 전송하는 API 호출
      // TODO: 실제 API 엔드포인트로 수정
      console.log("수정된 데이터:", formData);

      // 성공 시 MainPage로 이동
      onNavigateToMain();
    } catch (error) {
      console.error("데이터 저장 중 오류:", error);
      alert("데이터 저장 중 오류가 발생했습니다. 다시 시도해주세요.");
      // 에러 발생 시 모달 유지
    }
  };

  const handleSend = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setIsLoading(true);

    // 사용자 메시지 + 로딩 메시지 UI
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
    setMessages([...messages, userMessage, loadingMessage]);

    try {
      // multipart 전송
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
        onUploadProgress: ({ loaded, total }) => {
          if (!total) return;
          const pct = Math.round((loaded / total) * 100);
          setOverallProgress(pct);
        },
      });

      const serverResponse = response.data;

      // 로딩 메시지를 서버 응답으로 교체
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

      // 성공 후 입력/첨부 초기화
      setInputValue("");
      setOverallProgress(0);
      clearAllAttachments();
    } catch (error) {
      console.error(error);
      // 실패 메시지로 교체 + 입력/첨부 초기화
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
      setOverallProgress(0);
      clearAllAttachments();
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

  const cancelUpload = () => {
    if (uploadAbortRef.current) {
      uploadAbortRef.current.abort();
    }
  };

  return (
    <ChatContainer>
      <Header />
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
                    <AIIconSvg />
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

        {attachments.length > 0 && (
          <AttachmentsBar>
            {attachments.map((att) => (
              <AttachmentChip key={att.id}>
                {att.file.type.startsWith("image/") && (
                  <PreviewThumb>
                    <img src={att.previewUrl} alt={att.file.name} />
                  </PreviewThumb>
                )}
                {att.file.type.startsWith("video/") && (
                  <VideoPreview src={att.previewUrl} controls />
                )}
                {att.file.type.startsWith("audio/") && (
                  <AudioPreview src={att.previewUrl} controls />
                )}
                <span>{att.file.name}</span>
                <ChipRemove onClick={() => removeAttachment(att.id)}>
                  ×
                </ChipRemove>
              </AttachmentChip>
            ))}
          </AttachmentsBar>
        )}

        {isLoading && (
          <ProgressWrap>
            <ProgressBar>
              <ProgressFill $percent={overallProgress} />
            </ProgressBar>
            <CancelUpload onClick={cancelUpload}>업로드 취소</CancelUpload>
          </ProgressWrap>
        )}

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
      </ChatWrapper>

      {/* DetailModifyPage 모달 */}
      {showDetailModal && finishResponse && (
        <DetailModifyPage
          data={finishResponse}
          onClose={handleDetailClose}
          onSubmit={handleDetailSubmit}
        />
      )}
    </ChatContainer>
  );
}
