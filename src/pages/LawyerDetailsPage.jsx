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
`;

const Spacer1 = styled.div`
  height: 0.31rem;
`;

const LawFirm = styled.div`
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
      location: "서울 강남구",
      contact: "02-1234-5678",
      experience: "8년",
      specialization: "형사 사건",
    },
    2: {
      location: "서울 종로구",
      contact: "02-2345-6789",
      experience: "12년",
      specialization: "지적재산권·특허",
    },
    3: {
      location: "서울 서초구",
      contact: "02-3456-7890",
      experience: "10년",
      specialization: "이혼·가사 사건",
    },
    4: {
      location: "서울 마포구",
      contact: "02-4567-8901",
      experience: "15년",
      specialization: "지적재산권·특허",
    },
    5: {
      location: "서울 송파구",
      contact: "02-5678-9012",
      experience: "11년",
      specialization: "부동산, 건설",
    },
    6: {
      location: "서울 영등포구",
      contact: "02-6789-0123",
      experience: "9년",
      specialization: "노동, 재산",
    },
    7: {
      location: "서울 중구",
      contact: "02-7890-1234",
      experience: "13년",
      specialization: "국제거래, 부채",
    },
    8: {
      location: "서울 용산구",
      contact: "02-8901-2345",
      experience: "7년",
      specialization: "형사, 마약",
    },
  };

  // 현재 변호사의 상세 정보 가져오기
  const currentLawyerDetails = lawyerData
    ? lawyerDetailsData[lawyerData.id]
    : {
        location: "서울 강남구",
        contact: "02-1234-5678",
        experience: "8년",
        specialization: "형사 사건",
      };

  return (
    <PageContainer>
      <Header currentPage="lawyer-details" />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
        </TitleContainer>

        <InformationContainer>
          <LeftSection>
            <LawyerName>{lawyerData?.name || "변호사 이름"}</LawyerName>
            <Spacer1 />
            <LawFirm>{lawyerData?.lawFirm || "법무법인"}</LawFirm>
            <Spacer2 />

            <InfoContainer>
              <InfoTitle>위치</InfoTitle>
              <InfoContent>{currentLawyerDetails.location}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>연락처</InfoTitle>
              <InfoContent>{currentLawyerDetails.contact}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>경력</InfoTitle>
              <InfoContent>{currentLawyerDetails.experience}</InfoContent>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>전문 분야</InfoTitle>
              <InfoContent>{currentLawyerDetails.specialization}</InfoContent>
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
