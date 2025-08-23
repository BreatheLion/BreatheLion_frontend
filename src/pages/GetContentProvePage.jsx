import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import MainButton from "../components/ui/Button/MainButton";
import ConfirmModal from "../components/ui/ConfirmModal";
import WarningIcon from "../assets/warningIcon.svg";
import { apiHelpers } from "../utils/api";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;

const ContentContainer = styled.div`
  width: 59rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 1rem;
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 6.44rem;
  margin-bottom: 2rem;
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
  margin-top: 1.4rem;
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
  margin-top: 1.4rem;
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
  margin-bottom: 0.8rem;
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

const PersonSection = styled.div`
  width: 100%;
`;

const VictimSection = styled.div`
  width: 100%;
`;

const PersonSectionTitle = styled.div`
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: Pretendard;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

// 재사용 가능한 입력 래퍼 컴포넌트들
const LabeledInputRow = ({ label, children }) => (
  <InputRow>
    <InputLabel>{label}</InputLabel>
    {children}
  </InputRow>
);

const TextField = ({
  label,
  value,
  onChange,
  placeholder,
  readOnly,
  isInvalid,
}) => (
  <LabeledInputRow label={label}>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      $isInvalid={isInvalid}
    />
  </LabeledInputRow>
);

const AddressField = ({ value, onChange, onSearch, placeholder }) => (
  <LabeledInputRow label="주소">
    <InputGroup>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly
      />
      <AddressSearchButton onClick={onSearch}>주소 찾기</AddressSearchButton>
    </InputGroup>
  </LabeledInputRow>
);

const PhoneField = ({ value, onChange, isInvalid, placeholder }) => (
  <LabeledInputRow label="전화번호">
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      $isInvalid={isInvalid}
    />
  </LabeledInputRow>
);

export default function GetContentProvePage({ recordId, recordName }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const contentContainerRef = React.useRef(null);

  // 가해자 상태
  const [perpetratorName, setPerpetratorName] = useState("");
  const [perpetratorAddress, setPerpetratorAddress] = useState("");
  const [perpetratorDetailAddress, setPerpetratorDetailAddress] = useState("");
  const [perpetratorPhone, setPerpetratorPhone] = useState("");
  const [isPerpetratorPhoneValid, setIsPerpetratorPhoneValid] = useState(true);

  // 피해자 상태
  const [victimName, setVictimName] = useState("");
  const [victimAddress, setVictimAddress] = useState("");
  const [victimDetailAddress, setVictimDetailAddress] = useState("");
  const [victimPhone, setVictimPhone] = useState("");
  const [isVictimPhoneValid, setIsVictimPhoneValid] = useState(true);

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
    // 모든 입력값 초기화
    setPerpetratorName("");
    setPerpetratorAddress("");
    setPerpetratorDetailAddress("");
    setPerpetratorPhone("");
    setVictimName("");
    setVictimAddress("");
    setVictimDetailAddress("");
    setVictimPhone("");
    setIsPerpetratorPhoneValid(true);
    setIsVictimPhoneValid(true);
  };

  const handleAddressSearch = (type) => {
    if (window.daum && window.daum.Postcode) {
      new window.daum.Postcode({
        oncomplete: function (data) {
          const fullAddress = data.address;
          const postcode = data.zonecode;
          const formattedAddress = `${fullAddress} [${postcode}]`;
          if (type === "perpetrator") {
            setPerpetratorAddress(formattedAddress);
          } else {
            setVictimAddress(formattedAddress);
          }
        },
      }).open();
    } else {
      alert("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const handlePhoneNumberChange = (e, type) => {
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

      if (type === "perpetrator") {
        setPerpetratorPhone(formatted);
        // 유효성 검사: 11자리이고 010으로 시작하는지 확인
        const isValid = numbers.length === 11 && numbers.startsWith("010");
        setIsPerpetratorPhoneValid(isValid);
      } else {
        setVictimPhone(formatted);
        // 유효성 검사: 11자리이고 010으로 시작하는지 확인
        const isValid = numbers.length === 11 && numbers.startsWith("010");
        setIsVictimPhoneValid(isValid);
      }
    }
  };

  const handleRecordButtonClick = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirmModalClose = () => {
    setIsConfirmModalOpen(false);
  };

  const handleConfirmModalConfirm = async () => {
    console.log("내용증명 추출 확인됨");
    setIsConfirmModalOpen(false);

    try {
      // 주소와 상세 주소를 합치는 함수
      const combineAddress = (address, detailAddress) => {
        if (!address) return null;
        if (!detailAddress) return address;
        return `${address} ${detailAddress}`;
      };

      // 선택된 카드에 따라 데이터 구조 결정
      const requestData =
        selectedCard === "상대방의 주소를 알아요"
          ? {
              sender_name: victimName, // 발신인(피해자) 이름
              sender_address: combineAddress(
                victimAddress,
                victimDetailAddress
              ), // 발신인(피해자) 주소 + 상세 주소
              sender_phone: null, // 주소를 아는 경우 전화번호는 null
              receiver_name: perpetratorName, // 수신인(가해자) 이름
              receiver_address: combineAddress(
                perpetratorAddress,
                perpetratorDetailAddress
              ), // 수신인(가해자) 주소 + 상세 주소
              receiver_phone: null, // 주소를 아는 경우 전화번호는 null
            }
          : {
              sender_name: victimName, // 발신인(피해자) 이름
              sender_address: null, // 전화번호를 사용하는 경우 주소는 null
              sender_phone: victimPhone, // 발신인(피해자) 전화번호
              receiver_name: perpetratorName, // 수신인(가해자) 이름
              receiver_address: null, // 전화번호를 사용하는 경우 주소는 null
              receiver_phone: perpetratorPhone, // 수신인(가해자) 전화번호
            };

      console.log("API 요청 데이터:", requestData);

      const response = await apiHelpers.createContentProvePdf(
        recordId,
        requestData
      );

      console.log("API 응답 데이터:", response);

      // PDF Blob 데이터를 파일로 다운로드
      if (response instanceof Blob) {
        const url = window.URL.createObjectURL(response);
        const link = document.createElement("a");
        link.href = url;
        link.download = "notice.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        alert("내용증명 PDF가 성공적으로 다운로드되었습니다.");
      } else {
        alert("내용증명이 성공적으로 생성되었습니다.");
      }
    } catch (error) {
      console.error("내용증명 생성 중 오류:", error);
      alert("내용증명 생성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const isRecordButtonVisible = useMemo(() => {
    if (selectedCard === "상대방의 주소를 알아요") {
      return (
        perpetratorName.trim() !== "" &&
        perpetratorAddress.trim() !== "" &&
        perpetratorDetailAddress.trim() !== "" &&
        victimName.trim() !== "" &&
        victimAddress.trim() !== "" &&
        victimDetailAddress.trim() !== ""
      );
    }
    if (selectedCard === "상대방의 주소를 몰라요") {
      return (
        perpetratorName.trim() !== "" &&
        isPerpetratorPhoneValid &&
        perpetratorPhone.trim() !== "" &&
        victimName.trim() !== "" &&
        isVictimPhoneValid &&
        victimPhone.trim() !== ""
      );
    }
    return false;
  }, [
    selectedCard,
    perpetratorName,
    perpetratorAddress,
    perpetratorDetailAddress,
    victimName,
    victimAddress,
    victimDetailAddress,
    perpetratorPhone,
    isPerpetratorPhoneValid,
    victimPhone,
    isVictimPhoneValid,
  ]);

  // 버튼이 활성화될 때 자동 스크롤
  useEffect(() => {
    if (isRecordButtonVisible && contentContainerRef.current) {
      setTimeout(() => {
        contentContainerRef.current.scrollTo({
          top: contentContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [isRecordButtonVisible]);

  return (
    <PageContainer>
      <Header currentPage="get-content-prove" />
      <ContentContainer ref={contentContainerRef}>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
          <Title>내용 증명 받기</Title>
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

            {/* 가해자 InputGroup */}
            <PersonSection>
              <PersonSectionTitle>가해자 정보</PersonSectionTitle>

              <TextField
                label="이름"
                value={perpetratorName}
                onChange={(e) => setPerpetratorName(e.target.value)}
                placeholder="가해자 이름을 입력하세요"
              />

              {selectedCard === "상대방의 주소를 알아요" ? (
                <>
                  <AddressField
                    value={perpetratorAddress}
                    onChange={(e) => setPerpetratorAddress(e.target.value)}
                    onSearch={() => handleAddressSearch("perpetrator")}
                    placeholder="주소 찾기를 통해 가해자의 주소를 입력하세요"
                  />

                  <TextField
                    label="상세 주소"
                    value={perpetratorDetailAddress}
                    onChange={(e) =>
                      setPerpetratorDetailAddress(e.target.value)
                    }
                    placeholder="상세 주소를 입력하세요 (동, 호수 등)"
                  />
                </>
              ) : (
                <PhoneField
                  value={perpetratorPhone}
                  onChange={(e) => handlePhoneNumberChange(e, "perpetrator")}
                  isInvalid={
                    !isPerpetratorPhoneValid && perpetratorPhone.length > 0
                  }
                  placeholder="가해자 전화번호를 입력하세요 (예: 010-1234-5678)"
                />
              )}
            </PersonSection>

            {/* 피해자 InputGroup */}
            <VictimSection>
              <PersonSectionTitle>피해자 정보</PersonSectionTitle>

              <TextField
                label="이름"
                value={victimName}
                onChange={(e) => setVictimName(e.target.value)}
                placeholder="피해자 이름을 입력하세요"
              />

              {selectedCard === "상대방의 주소를 알아요" ? (
                <>
                  <AddressField
                    value={victimAddress}
                    onChange={(e) => setVictimAddress(e.target.value)}
                    onSearch={() => handleAddressSearch("victim")}
                    placeholder="주소 찾기를 통해 피해자의 주소를 입력하세요"
                  />

                  <TextField
                    label="상세 주소"
                    value={victimDetailAddress}
                    onChange={(e) => setVictimDetailAddress(e.target.value)}
                    placeholder="상세 주소를 입력하세요 (동, 호수 등)"
                  />
                </>
              ) : (
                <PhoneField
                  value={victimPhone}
                  onChange={(e) => handlePhoneNumberChange(e, "victim")}
                  isInvalid={!isVictimPhoneValid && victimPhone.length > 0}
                  placeholder="피해자 전화번호를 입력하세요 (예: 010-1234-5678)"
                />
              )}
            </VictimSection>
          </InputContainer>
        )}

        {isRecordButtonVisible && (
          <ButtonContainer>
            <MainButton onClick={handleRecordButtonClick}>
              내용 증명 받기
            </MainButton>
          </ButtonContainer>
        )}
      </ContentContainer>

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={handleConfirmModalClose}
        onConfirm={handleConfirmModalConfirm}
        title="내용증명을 추출할까요?"
        subtitle=""
      />
    </PageContainer>
  );
}
