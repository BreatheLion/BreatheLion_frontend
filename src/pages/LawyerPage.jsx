import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";

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

const LawyerCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 15.5rem);
  gap: 1rem;
  justify-content: flex-start;
`;

const LawyerCard = styled.div`
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

const LawyerImage = styled.div`
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

const LawyerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.19rem;
  width: 100%;
`;

const LawyerName = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
`;

const LawFirm = styled.div`
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

// 변호사 더미 데이터
const lawyerData = [
  {
    id: 1,
    name: "김민수 변호사",
    lawFirm: "법무법인 한결",
    specialization: "형사 사건",
    image: "/src/assets/lawyers/lawyer1.png",
  },
  {
    id: 2,
    name: "이서현 변호사",
    lawFirm: "법무법인 미래",
    specialization: "지적재산권·특허",
    image: "/src/assets/lawyers/lawyer2.png",
  },
  {
    id: 3,
    name: "박준호 변호사",
    lawFirm: "법무법인 대륙아주",
    specialization: "이혼·가사 사건",
    image: "/src/assets/lawyers/lawyer3.png",
  },
  {
    id: 4,
    name: "정다은 변호사",
    lawFirm: "법무법인 바른길",
    specialization: "지적재산권·특허",
    image: "/src/assets/lawyers/lawyer4.png",
  },
  {
    id: 5,
    name: "최현우 변호사",
    lawFirm: "법무법인 해우",
    specialization: "부동산, 건설",
    image: "/src/assets/lawyers/lawyer5.png",
  },
  {
    id: 6,
    name: "오지민 변호사",
    lawFirm: "법무법인 새빛",
    specialization: "노동, 재산",
    image: "/src/assets/lawyers/laweyer6.png",
  },
  {
    id: 7,
    name: "한지수 변호사",
    lawFirm: "법무법인 정윤",
    specialization: "국제거래, 부채",
    image: "/src/assets/lawyers/lawyer7.png",
  },
  {
    id: 8,
    name: "서강훈 변호사",
    lawFirm: "법무법인 다온",
    specialization: "형사, 마약",
    image: "/src/assets/lawyers/lawyer8.png",
  },
];

export default function LawyerPage() {
  const navigate = useNavigate();

  const handleLawyerCardClick = (lawyer) => {
    navigate("/lawyer-details", { state: { lawyerData: lawyer } });
  };

  return (
    <PageContainer>
      <Header currentPage="lawyer" />
      <ContentContainer>
        <TitleContainer>
          <Title>변호사 상담</Title>
        </TitleContainer>

        <LawyerCardsContainer>
          {lawyerData.map((lawyer) => (
            <LawyerCard
              key={lawyer.id}
              onClick={() => handleLawyerCardClick(lawyer)}
              style={{ cursor: "pointer" }}
            >
              <LawyerImage src={lawyer.image} />
              <LawyerInfo>
                <LawyerName>{lawyer.name}</LawyerName>
                <LawFirm>{lawyer.lawFirm}</LawFirm>
                <SpecializationTag>{lawyer.specialization}</SpecializationTag>
              </LawyerInfo>
            </LawyerCard>
          ))}
        </LawyerCardsContainer>
      </ContentContainer>
    </PageContainer>
  );
}
