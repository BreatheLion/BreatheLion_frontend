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
  line-height: 1.5rem;
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
  align-items: center;
  gap: 1rem;
`;

const InputContainer = styled.div`
  position: relative;
  flex: 1;
  height: 2.75rem;
  background: #68b8ea;
  border-radius: 3.125rem;
  display: flex;
  align-items: center;
`;

const ChatInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 0 3.5rem 0 3.25rem;
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const SendButton = styled.button`
  position: absolute;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: white;
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

const FinishButton = styled.button`
  height: 2.75rem;
  width: 7rem;
  background: transparent;
  border: none;
  border-radius: 0.625rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #313131;
  cursor: pointer;
  line-height: 1.125rem;

  &:hover {
    background: rgba(49, 49, 49, 0.1);
  }
`;

const PlusIcon = styled.div`
  position: absolute;
  left: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const FileInput = styled.input`
  display: none;
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
  const fileInputRef = useRef(null);
  const chatAreaRef = useRef(null);

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

  const handleFileSelect = () => {
    // 파일 선택 기능 (현재는 비활성화)
    // fileInputRef.current?.click();
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

    // 사용자 메시지 추가
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: trimmed,
      time: new Date().toLocaleTimeString("ko-KR", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    };

    // "응답 중입니다" 메시지 추가
    const loadingMessage = {
      id: messages.length + 2,
      type: "ai",
      content: "응답 중입니다",
      time: new Date().toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };

    setMessages([...messages, userMessage, loadingMessage]);
    setInputValue("");

    try {
      const response = await axios.post("/api/chats/attach/", {
        chat_session_id: chatSessionId,
        evidence: null, // 파일 없이 텍스트만 전송
        text: trimmed,
      });

      const serverResponse = response.data;

      // "응답 중입니다" 메시지를 실제 응답으로 교체
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        const loadingMessageIndex = updatedMessages.findIndex(
          (msg) => msg.content === "응답 중입니다"
        );

        if (loadingMessageIndex !== -1) {
          updatedMessages[loadingMessageIndex] = {
            ...updatedMessages[loadingMessageIndex],
            content: serverResponse.answer,
            time: serverResponse.time,
          };
        }

        return updatedMessages;
      });
    } catch (error) {
      console.error(error);

      // "응답 중입니다" 메시지를 에러 메시지로 교체
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        const loadingMessageIndex = updatedMessages.findIndex(
          (msg) => msg.content === "응답 중입니다"
        );

        if (loadingMessageIndex !== -1) {
          updatedMessages[loadingMessageIndex] = {
            ...updatedMessages[loadingMessageIndex],
            content: "해당 메세지가 전송되지 않았습니다 해당 메세지가 전송되지 않았습니다해당 메세지가 전송되지 않았습니다해당 메세지가 전송되지 않았습니다",
            time: new Date().toLocaleTimeString("ko-KR", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
          };
        }

        return updatedMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
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
                </MessageBubble>
              </MessageWrapper>
            </MessageContainer>
          ))}
        </ChatArea>

        <InputArea>
          <InputContainer>
            <PlusIcon onClick={handleFileSelect}>+</PlusIcon>
            <FileInput
              ref={fileInputRef}
              type="file"
              multiple
              onChange={(e) => {
                // 파일 선택 처리 (현재는 비활성화)
                console.log("파일 선택됨:", e.target.files);
              }}
            />
            <ChatInput
              type="text"
              placeholder=""
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <SendButton onClick={handleSend} disabled={isLoading}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                  fill="#68b8ea"
                />
              </svg>
            </SendButton>
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
