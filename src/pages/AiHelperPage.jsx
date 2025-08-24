import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/layout/Header";
import MainButton from "../components/ui/Button/MainButton";
import SuccessNotificationModal from "../components/ui/SuccessNotificationModal";
import FailureNotificationModal from "../components/ui/FailureNotificationModal";
import { apiHelpers } from "../utils/api";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 55rem;
  margin: 0 auto;
  min-height: calc(100vh - 4rem);
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
  width: 100%;
  padding: 1.5625rem 1.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
  border-radius: 1.25rem;
  background: #fbfbfb;
  margin-top: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const SummaryItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
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
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const AssailantTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex: 1;
  flex-wrap: wrap;
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

const CareGuideText = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  white-space: pre-wrap;
`;

const ClickableText = styled.span`
  color: var(--seconday, #688ae0);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem !important;
  padding-bottom: 2rem;
`;

export default function AiHelperPage({ drawerId, drawerName }) {
  const navigate = useNavigate();
  const [currentDrawerName, setCurrentDrawerName] = useState(drawerName || "");
  const [isLoading, setIsLoading] = useState(true);
  const [summaryData, setSummaryData] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");

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

      // 실제 API 호출
      const responseData = await apiHelpers.getHelpai(targetDrawerId);
      console.log("API 응답:", responseData);

      if (responseData && responseData.isSuccess && responseData.data) {
        // API 응답 데이터 구조에 맞게 처리
        const processedData = {
          ...responseData.data,
          // related_laws가 객체인 경우 laws 배열을 추출
          related_laws:
            responseData.data.related_laws?.laws ||
            responseData.data.related_laws ||
            [],
        };
        console.log("설정할 데이터:", processedData);
        setSummaryData(processedData);
      } else {
        console.log("응답이 유효하지 않음:", responseData);
        setSummaryData(null);
      }
    } catch (error) {
      // 목업 데이터 사용 (추후 제거 예정)
      console.log("API 호출 실패, 목업 데이터 사용:", error);

      const mockData = {
        drawer_name: "동방에서 벌어진 일",
        assailant: ["김민재", "정다은"],
        record_count: 5,
        summary:
          "교내에서 학생 간 심한 욕설과 폭력이 발생하였습니다. 가해자들이 피해자를 지속적으로 괴롭혔으며, 이는 학교 폭력에 해당하는 행위입니다.",
        care_guide:
          "이런 상황에서 가장 중요한 것은 안전입니다. 즉시 신고하고 증거를 수집하세요. 학교나 경찰에 도움을 요청하는 것이 필요합니다.",
        related_laws: [
          {
            law_name: "학교폭력예방 및 대책에 관한 법률",
            article: "제2조(정의)",
            content:
              "이 법에서 '학교폭력'이란 학교 내외에서 학생을 대상으로 발생한 상해, 폭행, 감금, 협박, 약취·유인, 명예훼손·모욕, 공갈, 강요 및 성폭력, 따돌림, 정보통신망을 이용한 음란·폭력정보 등에 의하여 신체·정신 또는 재산상의 피해를 수반하는 행위를 말한다.",
          },
          {
            law_name: "형법",
            article: "제260조(상해)",
            content:
              "사람의 신체를 상해한 자는 7년 이하의 징역, 10년 이하의 자격정지 또는 1천만원 이하의 벌금에 처한다.",
          },
          {
            law_name: "형법",
            article: "제307조(명예훼손)",
            content:
              "공연히 사실을 적시하여 사람의 명예를 훼손한 자는 2년 이하의 징역이나 금고 또는 500만원 이하의 벌금에 처한다.",
          },
        ],
        organizations: [
          {
            name: "학교폭력신고센터",
            description: "학교폭력 피해자 상담 및 신고",
            phone: "117",
            url: "https://www.schoolviolence.or.kr",
          },
          {
            name: "청소년폭력예방재단",
            description: "청소년 폭력 예방 및 상담",
            phone: "1388",
            url: "https://www.1388.or.kr",
          },
          {
            name: "경찰청 사이버안전국",
            description: "사이버 폭력 신고 및 상담",
            phone: "182",
            url: "https://www.police.go.kr/www/open/cyber",
          },
        ],
      };

      setSummaryData(mockData);
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

  const handlePdfExtractClick = async () => {
    try {
      const targetDrawerId = drawerId || 1;
      console.log("PDF 다운로드 시작, drawerId:", targetDrawerId);

      // API 호출하여 PDF Blob 받기
      const response = await apiHelpers.downloadPdf(targetDrawerId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Blob 데이터 받기
      const blob = await response.blob();

      // 파일명 추출 (서버에서 고정으로 오는 경우)
      const filename = "timeline.pdf";

      // Blob URL 생성
      const url = window.URL.createObjectURL(blob);

      // 임시 링크 생성 및 클릭
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      // 정리
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // 성공 모달 표시
      setSuccessMessage("PDF 파일이 다운로드되었습니다.");
      setShowSuccessModal(true);

      console.log("PDF 다운로드 완료");
    } catch (error) {
      console.error("PDF 다운로드 중 오류:", error);

      // 실패 모달 표시
      setFailureMessage("PDF 다운로드에 실패했습니다. 다시 시도해주세요.");
      setShowFailureModal(true);
    }
  };

  const handleConsultantClick = () => {
    // ConsultantPage로 이동
    navigate("/consultant");
  };

  const handleBackToList = () => {
    // 이전 페이지로 돌아가기
    navigate(-1);
  };

  const renderCareGuideText = () => {
    const careGuide = summaryData?.care_guide || "";
    const additionalText =
      "\n당신의 선택은 과거의 아픔에 머무는 것이 아니라, 더 안전하고 밝은 내일을 향한 중요한 발걸음이에요.\n\n앞으로도 같은 상황을 피하기 어려워 반복된다면, 그때마다 용기 내어 기록해 주세요.\n\n이 기록들은 흩어지지 않고 당신을 지켜주는 든든한 증거가 될 거예요. \n\n숨쉬어 서비스는 사건 타임라인을 통해 상담 과정에서 내용을 한눈에 확인하실 수 있도록 정리해 드리고,\n또한 변호사·상담사 연계 기능으로 법적·심리적 도움을 함께 이어드리고 있어요.\n(서랍장에서는 사건별로 개별 내용증명과 상담 자료도 추출하실 수 있어요.)\n\n앞으로도 같은 상황을 피하기 어려워 반복된다면, 그때마다 용기 내어 기록해 주세요.\n이 기록들은 흩어지지 않고 당신을 지켜주는 든든한 증거가 될 거예요.";

    const fullText = careGuide + additionalText;

    // 텍스트를 분할하여 클릭 가능한 부분 처리
    const parts = fullText.split(/(사건 타임라인|변호사·상담사 연계 기능)/);

    return parts.map((part, index) => {
      if (part === "사건 타임라인") {
        return (
          <ClickableText key={index} onClick={handlePdfExtractClick}>
            {part}
          </ClickableText>
        );
      } else if (part === "변호사·상담사 연계 기능") {
        return (
          <ClickableText key={index} onClick={handleConsultantClick}>
            {part}
          </ClickableText>
        );
      } else {
        return part;
      }
    });
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
            <SummaryLabel>기록 횟수</SummaryLabel>
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
              <SectionTitle>케어 가이드</SectionTitle>
            </SectionTitleContainer>
            <SectionContentContainer>
              <CareGuideText>{renderCareGuideText()}</CareGuideText>
            </SectionContentContainer>
          </SectionContainer>

          <SectionContainer>
            <SectionTitleContainer>
              <SectionTitleLine />
              <SectionTitle>유사 법률 및 판례</SectionTitle>
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
              <SectionTitle>피해 상담 및 신고</SectionTitle>
            </SectionTitleContainer>
            <OrganizationsContainer>
              {summaryData?.organizations &&
              summaryData.organizations.length > 0 ? (
                summaryData.organizations.map((org, index) => (
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
                ))
              ) : (
                <OrganizationContainer>
                  <OrganizationName>
                    상담 기관 정보가 없습니다.
                  </OrganizationName>
                </OrganizationContainer>
              )}
            </OrganizationsContainer>
          </SectionContainer>
        </BottomContainer>
        <ButtonContainer>
          <MainButton onClick={handleBackToList}>목록으로</MainButton>
        </ButtonContainer>
      </ContentContainer>
      <SuccessNotificationModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="다운로드 완료"
        message={successMessage}
      />

      <FailureNotificationModal
        isOpen={showFailureModal}
        onClose={() => setShowFailureModal(false)}
        title="다운로드 실패"
        message={failureMessage}
      />
    </PageContainer>
  );
}
