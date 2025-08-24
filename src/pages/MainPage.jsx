import styled from "styled-components";
import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Logo from "../components/common/Logo";
import MainPageSendButton from "../assets/MainPageSendButton.svg";
import { API_ENDPOINTS, apiCall } from "../utils/api";
import LoadingModal from "../components/ui/LoadingModal";
import SuccessNotificationModal from "../components/ui/SuccessNotificationModal";

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
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
    setShowLoadingModal(true);

    setInputValue("");

    // API 호출 후 응답을 받아서 ChatPage로 이동
    try {
      // API 요청 데이터 준비
      const requestData = {
        message: trimmed,
      };

      // API 요청 데이터 콘솔 출력 (테스트용)
      console.log("API 요청 데이터:", requestData);
      console.log("API 엔드포인트:", API_ENDPOINTS.CHATS_START());

      // 실제 API 호출
      const responseData = await apiCall(API_ENDPOINTS.CHATS_START(), {
        method: "POST",
        body: JSON.stringify(requestData),
      });

      console.log("API 응답 데이터:", responseData);

      // 실제 서버 응답 사용
      const serverResponse = responseData;

      if (serverResponse && serverResponse.isSuccess && serverResponse.data) {
        // API 응답에서 받은 answer를 사용
        const tempResponse = {
          chat_session_id: serverResponse.data.session_id,
          record_id: serverResponse.data.record_id, // 새로운 record_id 필드 추가
          answer: serverResponse.data.answer, // API 응답의 answer 사용
          time: serverResponse.data.message_time,
          date: serverResponse.data.message_date,
        };

        onNavigateToChat({
          userMessage: trimmed,
          serverResponse: tempResponse,
          isLoading: false, // API 응답을 받았으므로 로딩 상태 해제
        });
      } else {
        throw new Error("서버 응답이 올바르지 않습니다.");
      }
    } catch (error) {
      console.log("API 호출 실패, 목업 데이터 사용:", error);

      // 목업 데이터 사용 (FINAL_API_DOCUMENTATION 기반)
      const mockResponse = {
        isSuccess: true,
        code: "200",
        message: "채팅성공",
        data: {
          session_id: 1,
          record_id: 3, // 새로운 record_id 필드 추가
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

      console.log("목업 응답 데이터:", mockResponse);

      // 목업 응답에서 받은 answer를 사용
      const tempResponse = {
        chat_session_id: mockResponse.data.session_id,
        record_id: mockResponse.data.record_id, // 새로운 record_id 필드 추가
        answer: mockResponse.data.answer,
        time: mockResponse.data.message_time,
        date: mockResponse.data.message_date,
      };

      onNavigateToChat({
        userMessage: trimmed,
        serverResponse: tempResponse,
        isLoading: false,
      });
    } finally {
      setIsLoading(false);
      setShowLoadingModal(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // DetailModifyModal에서 전달받은 성공 상태 확인
  useEffect(() => {
    const checkSuccessState = () => {
      // 세션스토리지에서 성공 상태 확인
      const showSuccess = sessionStorage.getItem("showSuccessModal");
      
      if (showSuccess === "true") {
        setShowSuccessModal(true);
        // 세션스토리지에서 제거
        sessionStorage.removeItem("showSuccessModal");
      }
    };

    checkSuccessState();
  }, []);

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

      {showLoadingModal && (
        <LoadingModal
          titleText="AI가 당신의 이야기를 듣고 있어요"
          subText="잠시 후 채팅 화면으로 이동해요"
          autoCloseMs={3000}
          onDone={() => setShowLoadingModal(false)}
          showAutoClose={false}
        />
      )}

      <SuccessNotificationModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="저장 완료"
        message="기록이 성공적으로 저장되었습니다."
      />
    </MainContainer>
  );
}
