import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { jsonServerHelpers } from "../utils/api";

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

const LoadingText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
`;

const SummaryContainer = styled.div`
  display: flex;
  width: 55rem;
  padding: 1.5625rem 1.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
  border-radius: 1.25rem;
  background: #fbfbfb;
  margin-top: 2rem;
`;

const SummaryItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const SummaryLabel = styled.div`
  color: var(--50, #7a7a7a);
  text-align: left;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  min-width: 4rem;
`;

const SummaryContent = styled.div`
  color: var(--80, #313131);
  text-align: left;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  flex: 1;
`;

const AssailantTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex: 1;
`;

const AssailantTag = styled.div`
  display: flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.875rem;
  background: var(--70, #4a4a4a);
  color: white;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
`;

const MainContent = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const PlaceholderText = styled.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6.25rem;
  align-self: stretch;
  margin-top: 2rem;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SectionTitleLine = styled.div`
  width: 0.3125rem;
  height: 1.375rem;
  background: var(--seconday, #688ae0);
`;

const SectionTitle = styled.div`
  color: var(--seconday, #688ae0);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
`;

const SectionContentContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 1.875rem;
  border: 1px solid var(--10, #ddd);
  background: #fff;
`;

const LawContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 1.875rem;
  border: 1px solid var(--10, #ddd);
  background: #fff;
`;

const LawHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.62rem;
`;

const LawNameTag = styled.div`
  display: flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  background: #eb7070;
  color: white;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

const LawArticle = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const LawContent = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-top: 0.62rem;
  white-space: pre-wrap;
`;

const LawsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-self: stretch;
`;

const OrganizationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-self: stretch;
`;

const OrganizationContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 1.875rem;
  border: 1px solid var(--10, #ddd);
  background: #fff;
`;

const OrganizationName = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const OrganizationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.19rem;
  align-self: stretch;
  margin-top: 0.94rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.62rem;
`;

const InfoLabel = styled.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  width: 4.375rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  flex: 1;
`;

const InfoLink = styled.a`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  text-decoration: none;
  flex: 1;

  &:hover {
    text-decoration: underline;
  }
`;

export default function AiHelperPage({ drawerId, drawerName }) {
  const [currentDrawerName, setCurrentDrawerName] = useState(drawerName || "");
  const [isLoading, setIsLoading] = useState(true);
  const [summaryData, setSummaryData] = useState(null);

  useEffect(() => {
    // props로 받은 drawerName이 있으면 사용, 없으면 기본값 설정
    if (drawerName) {
      setCurrentDrawerName(drawerName);
    } else {
      // drawerId를 사용해서 drawerName을 가져오는 로직
      // 현재는 임시로 설정
      setCurrentDrawerName("AI 도우미 폴더");
    }
  }, [drawerId, drawerName]);

  const fetchSummaryData = async () => {
    try {
      setIsLoading(true);
      const targetDrawerId = drawerId || 1; // drawerId가 없으면 기본값 1 사용
      console.log("API 호출 시작, drawerId:", targetDrawerId);

      // JSON Server API 호출
      const response = await jsonServerHelpers.getHelpaiByDrawerId(
        targetDrawerId
      );
      console.log("API 응답:", response);

      if (response && response.isSuccess && response.data) {
        // API 응답의 data 객체를 그대로 사용
        console.log("설정할 데이터:", response.data);
        setSummaryData(response.data);
      } else {
        console.log("응답이 유효하지 않음:", response);
        setSummaryData(null);
      }
    } catch (error) {
      console.error("API 호출 에러:", error);
      window.handleApiError(error, "AI 도우미 데이터 로딩에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSummaryData();
  }, [drawerId]);

  const getSubtitle = () => {
    return `${currentDrawerName}   >   AI 도우미`;
  };

  if (isLoading) {
    return (
      <PageContainer>
        <Header currentPage="ai-helper" />
        <ContentContainer>
          <LoadingText>AI 도우미 데이터를 불러오는 중...</LoadingText>
        </ContentContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header currentPage="ai-helper" />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
          <Title>{currentDrawerName}</Title>
        </TitleContainer>

        <SummaryContainer>
          <SummaryItem>
            <SummaryLabel>가해자</SummaryLabel>
            <AssailantTags>
              {summaryData?.assailant?.map((person, index) => (
                <AssailantTag key={index}>{person}</AssailantTag>
              ))}
            </AssailantTags>
          </SummaryItem>

          <SummaryItem>
            <SummaryLabel>기록 갯수</SummaryLabel>
            <SummaryContent>{summaryData?.record_count || 0}개</SummaryContent>
          </SummaryItem>

          <SummaryItem>
            <SummaryLabel>요약</SummaryLabel>
            <SummaryContent>
              {summaryData?.summary || "요약 정보가 없습니다."}
            </SummaryContent>
          </SummaryItem>
        </SummaryContainer>

        <BottomContainer>
          <SectionContainer>
            <SectionTitleContainer>
              <SectionTitleLine />
              <SectionTitle>첫 번째 섹션</SectionTitle>
            </SectionTitleContainer>
            <SectionContentContainer>
              <div>첫 번째 섹션의 내용이 들어갈 자리입니다.</div>
            </SectionContentContainer>
          </SectionContainer>

          <SectionContainer>
            <SectionTitleContainer>
              <SectionTitleLine />
              <SectionTitle>두 번째 섹션</SectionTitle>
            </SectionTitleContainer>
            <LawsContainer>
              {summaryData?.related_laws?.map((law, index) => (
                <LawContainer key={index}>
                  <LawHeader>
                    <LawNameTag>{law.law_name}</LawNameTag>
                    <LawArticle>{law.article}</LawArticle>
                  </LawHeader>
                  <LawContent>{law.content}</LawContent>
                </LawContainer>
              ))}
            </LawsContainer>
          </SectionContainer>

          <SectionContainer>
            <SectionTitleContainer>
              <SectionTitleLine />
              <SectionTitle>세 번째 섹션</SectionTitle>
            </SectionTitleContainer>
            <OrganizationsContainer>
              {summaryData?.organizations?.map((org, index) => (
                <OrganizationContainer key={index}>
                  <OrganizationName>{org.name}</OrganizationName>
                  <OrganizationInfoContainer>
                    <InfoRow>
                      <InfoLabel>대표전화</InfoLabel>
                      <InfoContent>{org.phone}</InfoContent>
                    </InfoRow>
                    <InfoRow>
                      <InfoLabel>상담 · 신고</InfoLabel>
                      <InfoContent>{org.description}</InfoContent>
                    </InfoRow>
                    <InfoRow>
                      <InfoLabel>온라인</InfoLabel>
                      <InfoContent>
                        <InfoLink
                          href={org.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {org.url}
                        </InfoLink>
                      </InfoContent>
                    </InfoRow>
                  </OrganizationInfoContainer>
                </OrganizationContainer>
              ))}
            </OrganizationsContainer>
          </SectionContainer>
          <div style={{ height: "0rem" }}></div>
        </BottomContainer>
      </ContentContainer>
    </PageContainer>
  );
}
