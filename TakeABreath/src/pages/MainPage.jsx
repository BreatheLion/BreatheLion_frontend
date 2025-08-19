import styled from "styled-components";
import { useState } from "react";
import Header from "../components/layout/Header";
import Logo from "../components/common/Logo";

const MainContainer = styled.div`
  background: radial-gradient(
    70% 90% at 50% 49.93%,
    #c3e3f7 0%,
    #e8f4fc 26.28%,
    #f1f8fd 39.34%,
    #fff 55.94%
  );

  /*background: radial-gradient(45.56% 69.85% at 50% 49.93%, #FFF 16.15%, #F1F8FD 30.21%, #E8F4FC 55.08%, #C3E3F7 99.43%);*/
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
  justify-content: flex-start;
  padding-top: 20rem;
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
  background: #68b8ea;
  border: none;
  border-radius: 2rem;
  padding: 0 4rem 0 1.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
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
  width: 2rem;
  height: 2rem;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  svg {
    width: 1.25rem;
    height: 1.25rem;
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

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
    <path
      d="M5.00059 19.425C4.66725 19.5583 4.35059 19.529 4.05059 19.337C3.75059 19.145 3.60059 18.866 3.60059 18.5V14L11.6006 12L3.60059 10V5.50001C3.60059 5.13335 3.75059 4.85435 4.05059 4.66301C4.35059 4.47168 4.66725 4.44235 5.00059 4.57501L20.4006 11.075C20.8173 11.2583 21.0256 11.5667 21.0256 12C21.0256 12.4333 20.8173 12.7417 20.4006 12.925L5.00059 19.425Z"
      fill="#68B8EA"
    />
  </svg>
);

const LoadingText = styled.span`
  color: #68b8ea;
  font-size: 0.75rem;
  font-weight: 500;
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
          message_date: new Date()
            .toISOString()
            .split("T")[0]
            .slice(5)
            .replace("-", "-"),
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

        // 실제 응답으로 업데이트 (ChatPage에서 처리)
        onNavigateToChat({
          userMessage: trimmed,
          serverResponse: processedResponse,
          isLoading: false,
        });
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
      <ContentWrapper>
        {/* 로고 유무 테스트 부분입니다! 
        <Logo style={{ marginTop: "4.5rem" }} /> */}
        <MainTitle>
          말하지 못한 상처를, 이제는 말해도 괜찮아요.
          <br />
          당신의 감정과 이야기를, 증거로 지켜드릴게요.
        </MainTitle>
        <SubTitle>
          아픔은 여기에만 남기고, 당신은 한 걸음 나아가도 좋아요.
        </SubTitle>
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
