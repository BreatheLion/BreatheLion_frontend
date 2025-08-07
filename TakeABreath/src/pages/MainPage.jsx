import styled from "styled-components";
import { useState } from "react";
import Header from "../components/layout/Header";
import Logo from "../components/common/Logo";

const MainContainer = styled.div`
  background: radial-gradient(
    128.88% 112.29% at 52.3% 53.31%,
    #fffaf8 0%,
    #fffbf9 15.23%,
    #ecffe4 45.24%,
    #abdd95 100%
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
  justify-content: flex-start;
  padding-top: 20rem;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 2.25rem;
  font-family: "Pretendard";
  font-weight: 700;
  color: #000;
  margin: 2.5rem 0 1rem 0;
  line-height: 2.3125rem;
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
  background: #abdd95;
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
    box-shadow: 0 0 0 2px rgba(171, 221, 149, 0.3);
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
`;

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
    <path
      d="M5.00059 19.425C4.66725 19.5583 4.35059 19.529 4.05059 19.337C3.75059 19.145 3.60059 18.866 3.60059 18.5V14L11.6006 12L3.60059 10V5.50001C3.60059 5.13335 3.75059 4.85435 4.05059 4.66301C4.35059 4.47168 4.66725 4.44235 5.00059 4.57501L20.4006 11.075C20.8173 11.2583 21.0256 11.5667 21.0256 12C21.0256 12.4333 20.8173 12.7417 20.4006 12.925L5.00059 19.425Z"
      fill="#93CF79"
    />
  </svg>
);

export default function MainPage() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      // 다음 페이지로 이동하는 로직 (나중에 구현)
      console.log("입력된 내용:", inputValue);
      alert(`입력된 내용: ${inputValue}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        <Logo style={{ marginTop: "4.5rem" }} />
        <MainTitle>기억을 넘어서, 대화로.</MainTitle>
        <SubTitle>AI에게 털어놓은 말이, 나를 지키는 증거가 됩니다.</SubTitle>
        <InputContainer>
          <TextInput
            type="text"
            placeholder="내용을 입력하세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <ArrowButton onClick={handleSubmit}>
            <ArrowIcon />
          </ArrowButton>
        </InputContainer>
      </ContentWrapper>
    </MainContainer>
  );
}
