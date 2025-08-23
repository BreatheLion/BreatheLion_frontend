import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../components/layout/Header";

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
`;

const Spacer1 = styled.div`
  height: 0.31rem;
`;

const Organization = styled.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;

const Spacer2 = styled.div`
  height: 1.87rem;
`;

const InfoContainer = styled.div`
  display: flex;
  height: 1.875rem;
  align-items: center;
  gap: 0.3125rem;
  align-self: stretch;
`;

const InfoTitle = styled.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  white-space: nowrap;
  width: 4.375rem;
`;

const InfoContent = styled.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
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
      location: "서울 강남구",
      contact: "02-1234-5678",
      experience: "8년",
      specialization: "우울증·불안장애",
    },
    2: {
      location: "서울 종로구",
      contact: "02-2345-6789",
      experience: "12년",
      specialization: "커리어·직무 스트레스",
    },
    3: {
      location: "서울 서초구",
      contact: "02-3456-7890",
      experience: "5년",
      specialization: "청소년 상담",
    },
    4: {
      location: "서울 마포구",
      contact: "02-4567-8901",
      experience: "10년",
      specialization: "부부 상담",
    },
    5: {
      location: "서울 송파구",
      contact: "02-5678-9012",
      experience: "5년",
      specialization: "대인관계",
    },
    6: {
      location: "서울 영등포구",
      contact: "02-6789-0123",
      experience: "8년",
      specialization: "불안장애·스트레스",
    },
    7: {
      location: "서울 중구",
      contact: "02-7890-1234",
      experience: "12년",
      specialization: "대인관계",
    },
    8: {
      location: "서울 용산구",
      contact: "02-8901-2345",
      experience: "11년",
      specialization: "정신건강",
    },
  };

  // 현재 상담사의 상세 정보 가져오기
  const currentConsultantDetails = consultantData
    ? consultantDetailsData[consultantData.id]
    : {
        location: "서울 강남구",
        contact: "02-1234-5678",
        experience: "8년",
        specialization: "우울증·불안장애",
      };

  return (
    <PageContainer>
      <Header currentPage="consultant-details" />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
        </TitleContainer>

        <InformationContainer>
          <LeftSection>
            <ConsultantName>
              {consultantData?.name || "상담사 이름"}
            </ConsultantName>
            <Spacer1 />
            <Organization>
              {consultantData?.organization || "상담센터"}
            </Organization>
            <Spacer2 />

            <InfoContainer>
              <InfoTitle>위치</InfoTitle>
              <InfoContent>{currentConsultantDetails.location}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>연락처</InfoTitle>
              <InfoContent>{currentConsultantDetails.contact}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>경력</InfoTitle>
              <InfoContent>{currentConsultantDetails.experience}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>전문 분야</InfoTitle>
              <InfoContent>
                {currentConsultantDetails.specialization}
              </InfoContent>
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
