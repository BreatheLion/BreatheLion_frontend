import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import BackButton from "../components/ui/BackButton";

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

const InformationContainer = styled.div`
  display: flex;
  width: 51rem;
  padding: 2.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.25rem;
  border: 2px solid var(--main-stroke, #bec8e3);
  background: #fff;
  margin-top: 4.06rem;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConsultantPhoto = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 0.625rem;
  background: ${(props) =>
    `url(${props.src}) lightgray 0px -0.502px / 100% 106.667% no-repeat`};
  background-size: cover;
  background-position: center;
  border: 1px solid var(--main-stroke, #bec8e3);
`;

const ConsultantName = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.4rem;
`;

const Experience = styled.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-bottom: 1.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.9rem;
`;

const InfoTitle = styled.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  min-width: 4rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  flex: 1;
`;

const SpecializationTag = styled.div`
  display: flex;
  height: 1.875rem;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.875rem;
  border: 1px solid var(--5, #e9e9e9);
  background: #fff;
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  width: fit-content;
`;

export default function ConsultantConnectDetailPage() {
  const location = useLocation();
  const consultantData = location.state?.consultantData;

  const getSubtitle = () => {
    if (consultantData) {
      return `상담사 매칭   >   ${consultantData.name}`;
    }
    return "상담사 매칭   >   상담사 상세정보";
  };

  // 상담사별 상세 정보 더미 데이터
  const consultantDetailsData = {
    1: {
      experience: "8년",
      introduction: "마음 건강을 지키는 작은 습관부터 함께 찾아가요.",
      contact: "02-1234-567",
      email: "hskim92@example.com",
      consultationMethod: "온라인",
      consultationFee: "50,000원 / 시간",
      specialization: "우울증·불안장애",
    },
    2: {
      experience: "12년",
      introduction: "커리어와 직무 스트레스를 함께 해결해 나가요.",
      contact: "02-2345-6789",
      email: "lsh@example.com",
      consultationMethod: "대면",
      consultationFee: "60,000원 / 시간",
      specialization: "커리어·직무 스트레스",
    },
    3: {
      experience: "5년",
      introduction: "청소년의 마음을 이해하고 함께 성장해요.",
      contact: "02-3456-7890",
      email: "psy@example.com",
      consultationMethod: "온라인",
      consultationFee: "45,000원 / 시간",
      specialization: "청소년 상담·가족 상담",
    },
    4: {
      experience: "10년",
      introduction: "부부 관계 개선을 위한 전문적인 상담을 제공해요.",
      contact: "02-4567-8901",
      email: "couple@example.com",
      consultationMethod: "대면",
      consultationFee: "70,000원 / 시간",
      specialization: "부부 상담·가족 상담",
    },
    5: {
      experience: "5년",
      introduction: "대인관계 문제를 함께 해결해 나가요.",
      contact: "02-5678-9012",
      email: "relation@example.com",
      consultationMethod: "온라인",
      consultationFee: "40,000원 / 시간",
      specialization: "대인관계·자존감",
    },
    6: {
      experience: "8년",
      introduction: "불안과 스트레스를 함께 관리해 나가요.",
      contact: "02-6789-0123",
      email: "anxiety@example.com",
      consultationMethod: "온라인",
      consultationFee: "55,000원 / 시간",
      specialization: "불안장애·스트레스",
    },
    7: {
      experience: "12년",
      introduction: "건강한 대인관계를 위한 상담을 제공해요.",
      contact: "02-7890-1234",
      email: "social@example.com",
      consultationMethod: "대면",
      consultationFee: "65,000원 / 시간",
      specialization: "대인관계·사회성",
    },
    8: {
      experience: "11년",
      introduction: "정신건강 회복을 위한 전문적인 상담을 제공해요.",
      contact: "02-8901-2345",
      email: "mental@example.com",
      consultationMethod: "온라인",
      consultationFee: "75,000원 / 시간",
      specialization: "정신건강·트라우마",
    },
  };

  // 현재 상담사의 상세 정보 가져오기
  const currentConsultantDetails = consultantData
    ? consultantDetailsData[consultantData.id]
    : {
        experience: "8년",
        introduction: "마음 건강을 지키는 작은 습관부터 함께 찾아가요.",
        contact: "02-1234-567",
        email: "hskim92@example.com",
        consultationMethod: "온라인",
        consultationFee: "50,000원 / 시간",
        specialization: "우울증·불안장애",
      };

  const navigate = useNavigate();

  return (
    <PageContainer>
      <Header currentPage="consultant-details" />
      <BackButton onClick={() => navigate(-1)} />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
          <Title>상담사 상담</Title>
        </TitleContainer>

        <InformationContainer>
          <LeftSection>
            <ConsultantName>
              {consultantData?.name || "상담사 이름"}
            </ConsultantName>
            <Experience>경력 {currentConsultantDetails.experience}</Experience>

            <InfoContainer>
              <InfoTitle>한 줄 소개</InfoTitle>
              <InfoContent>{currentConsultantDetails.introduction}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>연락처</InfoTitle>
              <InfoContent>{currentConsultantDetails.contact}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>이메일</InfoTitle>
              <InfoContent>{currentConsultantDetails.email}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>상담 방식</InfoTitle>
              <InfoContent>
                {currentConsultantDetails.consultationMethod}
              </InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>상담료</InfoTitle>
              <InfoContent>
                {currentConsultantDetails.consultationFee}
              </InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>전문 분야</InfoTitle>
              <SpecializationTag>
                {currentConsultantDetails.specialization}
              </SpecializationTag>
            </InfoContainer>
          </LeftSection>

          <RightSection>
            <ConsultantPhoto src={consultantData?.image || ""} />
          </RightSection>
        </InformationContainer>
      </ContentContainer>
    </PageContainer>
  );
}
