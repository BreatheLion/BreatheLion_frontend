import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import SuccessNotificationModal from "../components/ui/SuccessNotificationModal";
import FailureNotificationModal from "../components/ui/FailureNotificationModal";
import BackButton from "../components/ui/BackButton";
import ContentProveIcon from "../assets/ContentProveIcon.svg";
import ConsultantIcon from "../assets/ConsultantIcon.svg";
import ArrowIcon from "../assets/ArrowIcon.svg";
import { apiHelpers } from "../utils/api";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 57.125rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 4.5rem;
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

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  padding: 1.875rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.625rem;
  background: #fff;
  border-radius: 1.25rem;
  border: 1px solid var(--main-stroke, #bec8e3);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.15);
  }
`;

const CardImageIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

const CardTitle = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
`;

const CardDescription = styled.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  white-space: pre-line;
`;

const HighlightedText = styled.span`
  color: var(--seconday, #688ae0);
`;

export default function ExtractPdfPage({ recordId, recordName, drawerName }) {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");

  const getSubtitle = () => {
    if (drawerName) {
      return `모아보기   >   ${drawerName}   >   ${
        recordName || "기록명"
      }   >   자료 내려받기`;
    } else {
      return `${recordName || "기록명"}   >   자료 내려받기`;
    }
  };

  const handleCardClick = async (cardType) => {
    if (cardType === "내용 증명 받기") {
      navigate(`/get-content-prove/${recordId}`, { state: { recordName } });
    } else if (cardType === "상담 자료 받기") {
      try {
        console.log("상담 자료 PDF 다운로드 시작:", recordId);

        const response = await apiHelpers.createConsultationPdf(recordId);

        console.log("상담 자료 PDF 응답:", response);

        // PDF Blob 데이터를 파일로 다운로드
        if (response instanceof Blob) {
          const url = window.URL.createObjectURL(response);
          const link = document.createElement("a");
          link.href = url;
          link.download = "consult.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);

          setSuccessMessage("상담 자료 PDF가 성공적으로 다운로드되었습니다.");
          setShowSuccessModal(true);
        } else {
          setSuccessMessage("상담 자료가 성공적으로 생성되었습니다.");
          setShowSuccessModal(true);
        }
      } catch (error) {
        console.error("상담 자료 생성 중 오류:", error);
        setFailureMessage("상담 자료 생성에 실패했습니다. 다시 시도해주세요.");
        setShowFailureModal(true);
      }
    }
  };

  return (
    <PageContainer>
      <Header currentPage="extract-pdf" />
      <BackButton onClick={() => navigate(-1)} />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
          <Title>자료 내려받기</Title>
        </TitleContainer>

        <CardsContainer>
          <Card onClick={() => handleCardClick("내용 증명 받기")}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.62rem",
                flex: 1,
              }}
            >
              <CardTitle>내용 증명 받기</CardTitle>
              <CardDescription>
                내용증명은{" "}
                <HighlightedText>
                  내가 상대방에게 보낸 말을 공식적으로 증명해 주는 제도
                </HighlightedText>
                입니다.
                {"\n"}작성자는 같은 문서를 3부 준비해 발신인/ 수신인/ 우체국이
                각각 보관합니다.
                {"\n"}이 기록은 '내가 이런 요구/주장을 했다'는 강력한 증거가
                되며,
                {"\n"}법원이나 경찰에 제출하면 신빙성을 높여주는 자료로
                활용됩니다.
              </CardDescription>
            </div>
            <CardImageIcon src={ArrowIcon} alt="화살표" />
          </Card>

          <Card onClick={() => handleCardClick("상담 자료 받기")}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.62rem",
                flex: 1,
              }}
            >
              <CardTitle>상담 자료 받기</CardTitle>
              <CardDescription>
                기록한 자료를 바탕으로 상담을 진행할 수 있도록 PDF 형식으로
                자료를 만들어 드립니다.
              </CardDescription>
            </div>
            <CardImageIcon src={ArrowIcon} alt="화살표" />
          </Card>
        </CardsContainer>
      </ContentContainer>

      <SuccessNotificationModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="상담 자료 생성 완료"
        message={successMessage}
      />

      <FailureNotificationModal
        isOpen={showFailureModal}
        onClose={() => setShowFailureModal(false)}
        title="상담 자료 생성 실패"
        message={failureMessage}
      />
    </PageContainer>
  );
}
