import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import ContentProveIcon from "../assets/ContentProveIcon.svg";
import ConsultantIcon from "../assets/ConsultantIcon.svg";

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
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Card = styled.div`
  width: 18.5625rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid var(--main-stroke, #bec8e3);
  background: var(--Main-bk, #f8faff);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.15);
  }
`;

const CardImageIcon = styled.img`
  width: 7.9375rem;
  height: 7.9375rem;
  margin-top: 3.69rem;
  margin-bottom: 2.81rem;
`;

const CardTitle = styled.div`
  color: var(--80, #313131);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.62rem;
`;

const CardDescription = styled.div`
  color: var(--70, #4a4a4a);
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  padding: 0 1rem;
  white-space: pre-line;
  margin-bottom: 3.56rem;
`;

export default function ExtractPdfPage({ recordId, recordName }) {
  const navigate = useNavigate();

  const getSubtitle = () => {
    return `${recordName || "기록명"}   >   자료 내려받기`;
  };

  const handleCardClick = (cardType) => {
    if (cardType === "내용 증명 받기") {
      navigate(`/get-content-prove/${recordId}`, { state: { recordName } });
    } else {
      console.log(`${cardType} 카드 클릭됨`);
      // 추후 구현
    }
  };

  return (
    <PageContainer>
      <Header currentPage="extract-pdf" />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
          <Title>자료 내려받기</Title>
        </TitleContainer>

        <CardsContainer>
          <Card onClick={() => handleCardClick("내용 증명 받기")}>
            <CardImageIcon src={ContentProveIcon} alt="내용 증명" />
            <CardTitle>내용 증명 받기</CardTitle>
            <CardDescription>
              내 권리를 지키고,{"\n"}필요한 법적 도움을 받을 수 있어요
            </CardDescription>
          </Card>

          <Card onClick={() => handleCardClick("상담 자료 받기")}>
            <CardImageIcon src={ConsultantIcon} alt="상담 자료" />
            <CardTitle>상담 자료 받기</CardTitle>
            <CardDescription>
              심리적·신체적 회복을 돕는{"\n"}상담과 의료 지원을 받을 수 있어요
            </CardDescription>
          </Card>
        </CardsContainer>
      </ContentContainer>
    </PageContainer>
  );
}
