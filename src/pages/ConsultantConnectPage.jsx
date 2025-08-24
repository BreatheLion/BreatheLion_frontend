import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import BackButton from "../components/ui/BackButton";

// 이미지 import
import Consultant1 from "../assets/consultants/Consultant1.svg";
import Consultant2 from "../assets/consultants/Consultant2.svg";
import Consultant3 from "../assets/consultants/Consultant3.svg";
import Consultant4 from "../assets/consultants/Consultant4.svg";
import Consultant5 from "../assets/consultants/Consultant5.svg";
import Consultant6 from "../assets/consultants/Consultant6.svg";
import Consultant7 from "../assets/consultants/Consultant7.svg";
import Consultant8 from "../assets/consultants/Consultant8.svg";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 65rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 6.31rem; /* 4rem (header) + 2rem (padding) + 0.31rem (additional margin) */
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const Subtitle = styled.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

const Title = styled.h1`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
`;

const ConsultantCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 15.5rem);
  gap: 1rem;
  justify-content: flex-start;
`;

const ConsultantCard = styled.div`
  width: 13rem;
  height: 19.4375rem;
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.625rem;
  border: 1px solid var(--main-stroke, #bec8e3);
  background: var(--Main-bk, #f8faff);
`;

const ConsultantImage = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1.25rem;
  aspect-ratio: 1/1;
  border-radius: 0.3125rem;
  background: ${(props) =>
    `url(${props.src}) lightgray 0px -0.502px / 100% 106.667% no-repeat`};
  background-size: cover;
  background-position: center;
`;

const ConsultantInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.19rem;
  width: 100%;
`;

const ConsultantName = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
`;

const Organization = styled.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

const SpecializationTag = styled.div`
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  border: 1px solid var(--5, #e9e9e9);
  background: #fff;
  color: var(--50, #7a7a7a);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin-top: 0.5rem;
  width: fit-content;
  white-space: nowrap;
`;

// 상담사 더미 데이터
const consultantData = [
  {
    id: 1,
    name: "김하늘 상담사",
    organization: "경력 8년",
    specialization: "우울증·불안장애",
    image: Consultant1,
  },
  {
    id: 2,
    name: "이민준 상담사",
    organization: "경력 12년",
    specialization: "커리어·직무 스트레스",
    image: Consultant2,
  },
  {
    id: 3,
    name: "박소영 상담사",
    organization: "경력 5년",
    specialization: "청소년 상담",
    image: Consultant3,
  },
  {
    id: 4,
    name: "최지훈 상담사",
    organization: "경력 10년",
    specialization: "부부 상담",
    image: Consultant4,
  },
  {
    id: 5,
    name: "한예린 상담사",
    organization: "경력 5년",
    specialization: "대인관계",
    image: Consultant5,
  },
  {
    id: 6,
    name: "정우진 상담사",
    organization: "경력 8년",
    specialization: "불안장애·스트레스",
    image: Consultant6,
  },
  {
    id: 7,
    name: "윤채원 상담사",
    organization: "경력 12년",
    specialization: "대인관계",
    image: Consultant7,
  },
  {
    id: 8,
    name: "강태호 상담사",
    organization: "경력 11년",
    specialization: "정신건강",
    image: Consultant8,
  },
];

export default function ConsultantConnectPage() {
  const navigate = useNavigate();

  const handleConsultantCardClick = (consultant) => {
    navigate("/consultant-details", { state: { consultantData: consultant } });
  };

  return (
    <PageContainer>
      <Header currentPage="consultant-connect" />
      <BackButton onClick={() => navigate(-1)} />
      <ContentContainer>
        <TitleContainer>
          <Title>상담사 상담</Title>
        </TitleContainer>

        <ConsultantCardsContainer>
          {consultantData.map((consultant) => (
            <ConsultantCard
              key={consultant.id}
              onClick={() => handleConsultantCardClick(consultant)}
              style={{ cursor: "pointer" }}
            >
              <ConsultantImage src={consultant.image} />
              <ConsultantInfo>
                <ConsultantName>{consultant.name}</ConsultantName>
                <Organization>{consultant.organization}</Organization>
                <SpecializationTag>
                  {consultant.specialization}
                </SpecializationTag>
              </ConsultantInfo>
            </ConsultantCard>
          ))}
        </ConsultantCardsContainer>
      </ContentContainer>
    </PageContainer>
  );
}
