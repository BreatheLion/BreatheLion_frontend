import styled from "styled-components";
import { useState } from "react";
import Header from "../components/layout/Header";
import Logo from "../components/common/Logo";
import MainPageSendButton from "../assets/MainPageSendButton.svg";

const MainContainer = styled.div`
  background: var(
    --BP-Gradation,
    linear-gradient(
      267deg,
      var(--Color, #68b8ea) -67.73%,
      #688ae0 48.44%,
      #8c68e0 122.38%
    )
  );
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MainTitle = styled.h1`
  color: var(--70, #4a4a4a);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: #666;
  margin: 0 0 4.5rem 0;
  line-height: 1.5;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 41.875rem;
  margin: 0 auto;
`;

const TextInput = styled.input`
  width: 100%;
  height: 3.125rem;
  background: #fff;
  border: none;
  border-radius: 3.125rem;
  padding: 0 4rem 0 1.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--seconday, #688ae0);
  line-height: 1.375rem;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: var(--seconday, #688ae0);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(104, 184, 234, 0.3);
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  aspect-ratio: 1/1;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-50%) scale(1.05);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ArrowIcon = () => <img src={MainPageSendButton} alt="전송 버튼" />;

const LoadingText = styled.span`
  color: #68b8ea;
  font-size: 0.75rem;
  font-weight: 500;
`;

const MainText = styled.div`
  color: rgba(255, 255, 255, 0.37);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.375rem;
  margin-bottom: 2.06rem;
`;

const TitleText = styled.div`
  position: absolute;
  left: 3.63rem;
  top: 7.38rem;
  color: #fff;
  font-family: Pretendard;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.125rem;
  white-space: pre-line;
`;

export default function MainPage({ onNavigateToChat }) {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // 새로운 채팅 시작 시 기존 채팅 localStorage 정리
    const clearPreviousChatSessions = () => {
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("chat_messages_")) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => localStorage.removeItem(key));
    };

    clearPreviousChatSessions();
    setIsLoading(true);

    // 로딩 중일 때 임시 응답으로 ChatPage로 이동
    const tempResponse = {
      chat_session_id: 1,
      answer: "응답 중입니다",
      time: new Date().toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      date: new Date().toISOString().split("T")[0],
    };

    setInputValue("");
    onNavigateToChat({
      userMessage: trimmed,
      serverResponse: tempResponse,
      isLoading: true,
    });

    try {
      // JSON Server API 호출 (POST 요청 시뮬레이션)
      await fetch("http://localhost:3001/records_start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          role: "user",
        }),
      });

      // POST 요청은 성공했지만, 응답은 미리 정의된 데이터 사용
      // 실제 API에서는 서버가 이 응답을 반환할 것
      const mockServerResponse = {
        isSuccess: true,
        code: "200",
        message: "채팅성공",
        data: {
          session_id: 1,
          answer:
            "안녕하세요. 오늘 있으셨던 사건에 대해 이야기해 주셔서 감사합니다. 어떤 일이 있었는지 조금 더 자세히 말씀해 주실 수 있을까요? 어떤 감정을 느끼셨는지도 함께 이야기해 주시면 도움이 될 것 같아요.",
          message_time: new Date().toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          message_date: new Date().toISOString().split("T")[0],
        },
      };

      if (
        mockServerResponse &&
        mockServerResponse.isSuccess &&
        mockServerResponse.data
      ) {
        // 실제 API 구조에 맞게 데이터 가공
        const processedResponse = {
          chat_session_id: mockServerResponse.data.session_id,
          answer: mockServerResponse.data.answer,
          time: mockServerResponse.data.message_time,
          date: mockServerResponse.data.message_date,
        };

        // 두 번째 네비게이션을 막고, 응답은 이벤트로 ChatPage에 전달
        window.dispatchEvent(
          new CustomEvent("chat_server_response", { detail: processedResponse })
        );
      } else {
        throw new Error("서버 응답이 올바르지 않습니다.");
      }
    } catch (error) {
      window.handleApiError(error, "채팅 시작에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <MainContainer>
      <Header currentPage="main" />
      <TitleText>
        당신의 상처가{"\n"}잊히지 않도록,{"\n"}왜곡되지 않도록.
      </TitleText>
      <ContentWrapper>
        <MainText>숨쉬어와 함께 기록해보세요</MainText>
        <InputContainer>
          <TextInput
            type="text"
            placeholder="천천히 기억나는 것부터 말해주세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <ArrowButton onClick={handleSubmit} disabled={isLoading}>
            <ArrowIcon />
          </ArrowButton>
        </InputContainer>
      </ContentWrapper>
    </MainContainer>
  );
}
