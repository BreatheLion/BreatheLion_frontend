import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
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

const LawyerPhoto = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 0.625rem;
  background: ${(props) =>
    `url(${props.src}) lightgray 0px -0.502px / 100% 106.667% no-repeat`};
  background-size: cover;
  background-position: center;
  border: 1px solid var(--main-stroke, #bec8e3);
`;

const LawyerName = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.4rem;
`;

const LawFirm = styled.div`
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

export default function LawyerDetailsPage() {
  const location = useLocation();
  const lawyerData = location.state?.lawyerData;

  const getSubtitle = () => {
    if (lawyerData) {
      return `변호사 상담   >   ${lawyerData.name}`;
    }
    return "변호사 상담   >   변호사 상세정보";
  };

  // 변호사별 상세 정보 더미 데이터
  const lawyerDetailsData = {
    1: {
      location: "서울특별시 서초구",
      contact: "02-1234-567",
      email: "kms@example.com",
      experience: "서울중앙지검 검사 출신, 8년 경력",
      specialization: "형사 사건",
    },
    2: {
      location: "서울특별시 종로구",
      contact: "02-2345-6789",
      email: "lsh@example.com",
      experience: "대법원 판사 출신, 12년 경력",
      specialization: "지적재산권·특허",
    },
    3: {
      location: "서울특별시 서초구",
      contact: "02-3456-7890",
      email: "pjh@example.com",
      experience: "가정법원 판사 출신, 10년 경력",
      specialization: "이혼·가사 사건",
    },
    4: {
      location: "서울특별시 마포구",
      contact: "02-4567-8901",
      email: "jdh@example.com",
      experience: "특허청 심사관 출신, 15년 경력",
      specialization: "지적재산권·특허",
    },
    5: {
      location: "서울특별시 송파구",
      contact: "02-5678-9012",
      email: "chw@example.com",
      experience: "국토교통부 공무원 출신, 11년 경력",
      specialization: "부동산·건설",
    },
    6: {
      location: "서울특별시 영등포구",
      contact: "02-6789-0123",
      email: "ojm@example.com",
      experience: "노동부 공무원 출신, 9년 경력",
      specialization: "노동·재산",
    },
    7: {
      location: "서울특별시 중구",
      contact: "02-7890-1234",
      email: "hjs@example.com",
      experience: "기획재정부 공무원 출신, 13년 경력",
      specialization: "국제거래·부채",
    },
    8: {
      location: "서울특별시 용산구",
      contact: "02-8901-2345",
      email: "skh@example.com",
      experience: "검찰청 검사 출신, 7년 경력",
      specialization: "형사·마약",
    },
  };

  // 현재 변호사의 상세 정보 가져오기
  const currentLawyerDetails = lawyerData
    ? lawyerDetailsData[lawyerData.id]
    : {
        location: "서울특별시 서초구",
        contact: "02-1234-567",
        email: "kms@example.com",
        experience: "서울중앙지검 검사 출신, 8년 경력",
        specialization: "형사 사건",
      };

  const navigate = useNavigate();

  return (
    <PageContainer>
      <Header currentPage="lawyer-details" />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
          <Title>변호사 상담</Title>
        </TitleContainer>

        <InformationContainer>
          <LeftSection>
            <LawyerName>{lawyerData?.name || "변호사 이름"}</LawyerName>
            <LawFirm>{lawyerData?.lawFirm || "법무법인"}</LawFirm>

            <InfoContainer>
              <InfoTitle>위치</InfoTitle>
              <InfoContent>{currentLawyerDetails.location}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>연락처</InfoTitle>
              <InfoContent>{currentLawyerDetails.contact}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>이메일</InfoTitle>
              <InfoContent>{currentLawyerDetails.email}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>경력</InfoTitle>
              <InfoContent>{currentLawyerDetails.experience}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>전문 분야</InfoTitle>
              <SpecializationTag>
                {currentLawyerDetails.specialization}
              </SpecializationTag>
            </InfoContainer>
          </LeftSection>

          <RightSection>
            <LawyerPhoto src={lawyerData?.image || ""} />
          </RightSection>
        </InformationContainer>
      </ContentContainer>
    </PageContainer>
  );
}
