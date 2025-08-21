import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import MainButton from "../components/ui/Button/MainButton";
import WarningIcon from "../assets/warningIcon.svg";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 55rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 6.44rem;
`;

const Subtitle = styled.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: pre;
`;

const Title = styled.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`;

const DescriptionText = styled.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  text-align: left;
  white-space: pre-line;
  margin-top: 0.63rem;
`;

const HighlightedText = styled.span`
  color: var(--seconday, #688ae0);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;

const MainContent = styled.div`
  width: 100%;
  margin-top: 3.63rem;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 26.25rem;
  height: 8.375rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: ${(props) =>
    props.$selected
      ? "3px solid var(--seconday, #688AE0)"
      : "1px solid var(--main-stroke, #BEC8E3)"};
  background: var(--Main-bk, #f8faff);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.div`
  color: ${(props) =>
    props.$hasSelection && !props.$selected ? "var(--10, #DDD)" : "#000"};
  text-align: left;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  margin-bottom: 0.94rem;
  margin-left: 1.88rem;
`;

const CardDescription = styled.div`
  color: ${(props) =>
    props.$hasSelection && !props.$selected ? "var(--10, #DDD)" : "#000"};
  text-align: left;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin-left: 1.88rem;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-top: 3.19rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const WarningContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.06rem;
  width: 100%;
  height: 2.75rem;
  margin-bottom: 1.38rem;
`;

const WarningIconImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

const WarningText = styled.div`
  color: #e44343;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  white-space: pre-line;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const InputLabel = styled.div`
  color: #000;
  text-align: left;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: nowrap;
  width: 8rem;
  flex-shrink: 0;
`;

const Input = styled.input`
  display: flex;
  width: 34.6875rem;
  max-width: 34.6875rem;
  padding: 0.625rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid ${(props) => (props.$isInvalid ? "#ff6b6b" : "#ddd")};
  background: ${(props) => (props.$isInvalid ? "#fff5f5" : "#fff")};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => (props.$isInvalid ? "#ff6b6b" : "#68b8ea")};
    background: ${(props) => (props.$isInvalid ? "#fff5f5" : "#e6f6ff")};
  }

  &:disabled {
    background: #f5f5f5;
    color: #666;
  }

  &:read-only {
    background: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
`;

const AddressSearchButton = styled.button`
  display: flex;
  width: 5.875rem;
  height: 2.375rem;
  padding: 0.56rem 1rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid var(--seconday, #688ae0);
  background: linear-gradient(
    267deg,
    var(--Color, #68b8ea) -99.74%,
    #688ae0 37.78%,
    #8c68e0 177.79%
  );
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(104, 138, 224, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.88rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

export default function GetContentProvePage({ recordName }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [additionalInputValue, setAdditionalInputValue] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  useEffect(() => {
    // 다음 주소 API 스크립트 로드
    const script = document.createElement("script");
    script.src =
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      const existingScript = document.querySelector(
        `script[src="${script.src}"]`
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const getSubtitle = () => {
    return `${recordName || "기록명"}   >   자료 내려받기   >   내용 증명 받기`;
  };

  const handleCardClick = (cardType) => {
    setSelectedCard(selectedCard === cardType ? null : cardType);
    setInputValue(""); // 카드 선택이 변경되면 입력값 초기화
    setAdditionalInputValue(""); // 추가 입력값도 초기화
    setIsPhoneNumberValid(true); // 유효성 상태 초기화
  };

  const getInputLabel = () => {
    if (selectedCard === "상대방의 주소를 알아요") {
      return "우편 번호";
    } else if (selectedCard === "상대방의 주소를 몰라요") {
      return "상대방 전화번호 입력";
    }
    return "";
  };

  const getAdditionalInputLabel = () => {
    if (selectedCard === "상대방의 주소를 알아요") {
      return "상세 주소";
    }
    return "";
  };

  const handleAddressSearch = () => {
    if (window.daum && window.daum.Postcode) {
      new window.daum.Postcode({
        oncomplete: function (data) {
          const fullAddress = data.address;
          const postcode = data.zonecode;
          const formattedAddress = `${fullAddress} [${postcode}]`;
          setInputValue(formattedAddress);
        },
      }).open();
    } else {
      alert("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // 숫자만 추출
    const numbers = value.replace(/[^0-9]/g, "");

    // 11자리로 제한
    if (numbers.length <= 11) {
      let formatted = numbers;

      // 3자리, 7자리마다 '-' 추가
      if (numbers.length > 3) {
        formatted = numbers.slice(0, 3) + "-" + numbers.slice(3);
      }
      if (numbers.length > 7) {
        formatted =
          numbers.slice(0, 3) +
          "-" +
          numbers.slice(3, 7) +
          "-" +
          numbers.slice(7);
      }

      setInputValue(formatted);

      // 유효성 검사: 11자리이고 010으로 시작하는지 확인
      const isValid = numbers.length === 11 && numbers.startsWith("010");
      setIsPhoneNumberValid(isValid);
    }
  };

  const handleRecordButtonClick = () => {
    console.log("이대로 기록할게요 버튼 클릭됨");
    // 추후 구현
  };

  const shouldShowRecordButton = () => {
    if (selectedCard === "상대방의 주소를 알아요") {
      // 좌측 카드: 두 입력 필드 모두 작성된 경우
      return inputValue.trim() !== "" && additionalInputValue.trim() !== "";
    } else if (selectedCard === "상대방의 주소를 몰라요") {
      // 우측 카드: 전화번호가 유효한 경우
      return isPhoneNumberValid && inputValue.trim() !== "";
    }
    return false;
  };

  return (
    <PageContainer>
      <Header currentPage="get-content-prove" />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
          <Title>내용 증명 받기</Title>
          <DescriptionText>
            내용증명은{" "}
            <HighlightedText>
              내가 상대방에게 보낸 말을 공식적으로 증명해 주는 제도
            </HighlightedText>
            입니다.
            {"\n"}작성자는 같은 문서를 3부 준비해 발신인/ 수신인/ 우체국이 각각
            보관합니다.
            {"\n"}이 기록은 '내가 이런 요구/주장을 했다'는 강력한 증거가 되며,
            {"\n"}법원이나 경찰에 제출하면 신빙성을 높여주는 자료로 활용됩니다.
          </DescriptionText>
        </TitleContainer>

        <MainContent>
          <Card
            $selected={selectedCard === "상대방의 주소를 알아요"}
            onClick={() => handleCardClick("상대방의 주소를 알아요")}
          >
            <CardTitle
              $selected={selectedCard === "상대방의 주소를 알아요"}
              $hasSelection={selectedCard !== null}
            >
              상대방의 주소를 알아요
            </CardTitle>
            <CardDescription
              $selected={selectedCard === "상대방의 주소를 알아요"}
              $hasSelection={selectedCard !== null}
            >
              우체국 내용 증명, 전자 내용 증명을 보낼 수 있어요
            </CardDescription>
          </Card>
          <Card
            $selected={selectedCard === "상대방의 주소를 몰라요"}
            onClick={() => handleCardClick("상대방의 주소를 몰라요")}
          >
            <CardTitle
              $selected={selectedCard === "상대방의 주소를 몰라요"}
              $hasSelection={selectedCard !== null}
            >
              상대방의 주소를 몰라요
            </CardTitle>
            <CardDescription
              $selected={selectedCard === "상대방의 주소를 몰라요"}
              $hasSelection={selectedCard !== null}
            >
              상대방의 전화번호로 전자 내용 증명을 보낼 수 있어요
            </CardDescription>
          </Card>
        </MainContent>

        {selectedCard && (
          <InputContainer>
            <WarningContainer>
              <WarningIconImage src={WarningIcon} alt="경고" />
              <WarningText>
                내용증명 제출시 3부 모두 동일해야만 효력이 인정됩니다.{"\n"}작성
                후 임의로 줄을 긋거나 수정할 수 없으므로, 제출 전 반드시 내용을
                충분히 확인해 주십시오.
              </WarningText>
            </WarningContainer>

            <InputRow>
              <InputLabel>{getInputLabel()}</InputLabel>
              <InputGroup>
                <Input
                  type="text"
                  value={inputValue}
                  onChange={
                    selectedCard === "상대방의 주소를 알아요"
                      ? (e) => setInputValue(e.target.value)
                      : handlePhoneNumberChange
                  }
                  placeholder={
                    selectedCard === "상대방의 주소를 알아요"
                      ? "주소 찾기를 통해 상대방의 주소를 입력하세요"
                      : "상대방 전화번호를 입력하세요 (예: 010-1234-5678)"
                  }
                  readOnly={selectedCard === "상대방의 주소를 알아요"}
                  $isInvalid={
                    selectedCard === "상대방의 주소를 몰라요" &&
                    !isPhoneNumberValid &&
                    inputValue.length > 0
                  }
                />
                {selectedCard === "상대방의 주소를 알아요" && (
                  <AddressSearchButton onClick={handleAddressSearch}>
                    주소 찾기
                  </AddressSearchButton>
                )}
              </InputGroup>
            </InputRow>

            {selectedCard === "상대방의 주소를 알아요" && (
              <InputRow>
                <InputLabel>{getAdditionalInputLabel()}</InputLabel>
                <Input
                  type="text"
                  value={additionalInputValue}
                  onChange={(e) => setAdditionalInputValue(e.target.value)}
                  placeholder="상세 주소를 입력하세요 (동, 호수 등)"
                />
              </InputRow>
            )}
          </InputContainer>
        )}

        {shouldShowRecordButton() && (
          <ButtonContainer>
            <MainButton onClick={handleRecordButtonClick}>
              내용 증명 받기
            </MainButton>
          </ButtonContainer>
        )}
      </ContentContainer>
    </PageContainer>
  );
}
