import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import ArrowIcon from "../assets/ArrowIcon.svg";
import DownArrowIcon from "../assets/DownArrowIcon.svg";
import SearchIcon from "../assets/SearchIcon.svg";
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
  flex-wrap: wrap;
  gap: 0.5rem;
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

const TimelineSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--5, #f5f5f5);
  }

  img {
    width: 1rem;
    height: 1rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: 10.625rem;
  height: 2rem;
  padding: 0.25rem 0.5rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 2px solid var(--seconday, #688ae0);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  flex: 1;
  margin-right: 0.5rem;

  &::placeholder {
    color: var(--10, #ddd);
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 55rem;
  margin-top: 1rem;
  gap: 0.94rem;
  max-height: 30rem; /* 최대 높이 설정 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
  padding-right: 0.5rem; /* 스크롤바 공간 확보 */
`;

const NoResultsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

const TimelineAxis = styled.div`
  position: absolute;
  left: 1rem; /* MarkerCol 중앙과 일치 */
  width: 2px;
  background: var(--BP-Gradation, #68b8ea);
  z-index: 0;
`;

const TimelineRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const MarkerCol = styled.div`
  position: relative;
  width: 2rem; /* 축 영역 고정 너비 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const MarkerDot = styled.div`
  width: 0.8125rem;
  height: 0.8125rem;
  border-radius: 50%;
  border: 2px solid var(--BP-Gradation, #68b8ea);
  background: ${({ $filled }) =>
    $filled ? "var(--BP-Gradation, #68b8ea)" : "#fff"};
  z-index: 1;
`;

const TimelineDate = styled.div`
  color: var(--BP-Gradation, #68b8ea);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  text-align: left;
  width: 8rem;
  margin-left: 2.19rem;
  flex-shrink: 0;
`;

const TimelineCard = styled.div`
  display: flex;
  padding: 1.25rem 1.875rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1.25rem;
  border: 2px solid var(--10, #ddd);
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  margin-left: 2.19rem; /* 날짜와 카드 사이 간격만 2.19rem로 고정 */

  &:hover {
    border-color: var(--BP-Gradation, #68b8ea);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CategoryTag = styled.div`
  display: flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  border: 1px solid var(--5, #e9e9e9);
  background: ${(props) => (props.$isHighSeverity ? "#EB7070" : "#fff")};
  color: ${(props) =>
    props.$isHighSeverity ? "var(--1, #F2F2F2)" : "var(--50, #7a7a7a)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

const CardTitle = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const CardSummary = styled.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

const CardArrow = styled.img`
  width: 1.23rem;
  height: 1.23rem;
`;

export default function SummaryPage({ folderId, folderName }) {
  const [isLoading, setIsLoading] = useState(true);
  const [summaryData, setSummaryData] = useState(null);
  const [timelineData, setTimelineData] = useState([]);

  // 검색 관련 상태
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("oldest"); // "oldest" | "newest"

  // 축 위치 계산용 ref/state
  const containerRef = useRef(null);
  const dotRefs = useRef([]);
  const [axisStyle, setAxisStyle] = useState({ top: 0, height: 0 });
  const setDotRef = (index, el) => {
    if (el) {
      dotRefs.current[index] = el;
    }
  };

  const getSubtitle = () => {
    return `모아보기   >   ${folderName || "폴더명"}`;
  };

  const fetchSummaryData = useCallback(async () => {
    try {
      setIsLoading(true);

      // 실제 API 호출
      const responseData = await apiHelpers.getHelpai(folderId);

      console.log("API 응답 데이터:", responseData);

      if (responseData && responseData.isSuccess && responseData.data) {
        // 실제 API 구조에 맞게 데이터 가공
        const processedData = {
          drawer_name: responseData.data.drawer_name,
          assailant: responseData.data.assailant,
          record_count: responseData.data.record_count,
          summary: responseData.data.summary,
        };
        setSummaryData(processedData);
      } else {
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
      };

      setSummaryData(mockData);
    } finally {
      setIsLoading(false);
    }
  }, [folderId]);

  const fetchTimelineData = useCallback(
    async (keyword = "") => {
      try {
        // 실제 API 호출 (서버 사이드 검색)
        const responseData = await apiHelpers.getTimeline(folderId, keyword);
        console.log("타임라인 API 응답 데이터:", responseData);

        if (responseData && responseData.isSuccess && responseData.data) {
          setTimelineData(responseData.data.timelines || []);
        } else {
          setTimelineData([]);
        }
      } catch (error) {
        // 목업 데이터 사용 (추후 제거 예정)
        console.log("타임라인 API 호출 실패, 목업 데이터 사용:", error);

        const mockTimelineData = [
          {
            record_id: 1,
            title: "교내에서 발생한 첫 번째 사건",
            location: "교실",
            category: "언어폭력",
            summary: "수업 중 가해자가 피해자에게 심한 욕설을 하였습니다.",
            occurred_at: "2025-06-13",
            severity: 1,
          },
          {
            record_id: 2,
            title: "복도에서의 두 번째 사건",
            location: "복도",
            category: "폭력",
            summary: "복도에서 가해자가 피해자를 밀치고 위협하였습니다.",
            occurred_at: "2025-06-15",
            severity: 2,
          },
          {
            record_id: 3,
            title: "사내 메신저를 통한 괴롭힘",
            location: "사내 메신저",
            category: "언어폭력",
            summary: "메시지에 인사 없이 지시만 하며 피해자를 무시하였습니다.",
            occurred_at: "2025-06-18",
            severity: 0,
          },
          {
            record_id: 4,
            title: "급식실에서의 집단 괴롭힘",
            location: "급식실",
            category: "집단 괴롭힘",
            summary: "여러 명이 함께 피해자를 따돌리고 음식을 뺏었습니다.",
            occurred_at: "2025-06-20",
            severity: 2,
          },
          {
            record_id: 5,
            title: "최근 발생한 심각한 사건",
            location: "운동장",
            category: "폭력",
            summary: "운동장에서 신체적 폭력이 발생하여 피해자가 다쳤습니다.",
            occurred_at: "2025-06-25",
            severity: 2,
          },
        ];

        // 목업 데이터는 키워드와 관계없이 전체 데이터 사용
        // 실제 API에서는 서버에서 필터링된 결과가 옴
        setTimelineData(mockTimelineData);
      }
    },
    [folderId]
  );

  // 검색 실행 함수
  const handleSearch = () => {
    const keyword = searchKeyword.trim();
    fetchTimelineData(keyword);
  };

  // 정렬 변경 함수
  const handleSortChange = () => {
    setSortOrder((prev) => (prev === "oldest" ? "newest" : "oldest"));
  };

  useEffect(() => {
    fetchSummaryData();
    fetchTimelineData();
  }, [fetchSummaryData, fetchTimelineData]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    if (dotRefs.current.length >= 2) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const firstRect = dotRefs.current[0].getBoundingClientRect();
      const lastRect =
        dotRefs.current[dotRefs.current.length - 1].getBoundingClientRect();
      const top = firstRect.top - containerRect.top + firstRect.height / 2;
      const height =
        lastRect.top - firstRect.top + (lastRect.height - firstRect.height) / 2;
      setAxisStyle({ top, height });
    } else {
      // 0개 또는 1개일 때는 축을 숨김 처리
      setAxisStyle({ top: 0, height: 0 });
    }
  }, [timelineData, isLoading]);

  if (isLoading) {
    return (
      <PageContainer>
        <Header currentPage="summary" />
        <ContentContainer>
          <LoadingText>요약 데이터를 불러오는 중...</LoadingText>
        </ContentContainer>
      </PageContainer>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const sortedTimelineData = timelineData.sort((a, b) => {
    const dateA = new Date(a.occurred_at);
    const dateB = new Date(b.occurred_at);
    return sortOrder === "oldest" ? dateA - dateB : dateB - dateA;
  });

  // dotRefs 재수집을 위해 렌더링마다 초기화
  dotRefs.current = [];

  return (
    <PageContainer>
      <Header currentPage="summary" />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
          <Title>{summaryData?.drawer_name || "폴더명"}</Title>
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

        <TimelineSearchContainer>
          <SortButton onClick={handleSortChange}>
            <img src={DownArrowIcon} alt="정렬" />
            <span>{sortOrder === "oldest" ? "오래된 순" : "최신순"}</span>
          </SortButton>

          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <SearchButton onClick={handleSearch}>
              <img src={SearchIcon} alt="검색" />
            </SearchButton>
          </SearchContainer>
        </TimelineSearchContainer>

        {sortedTimelineData.length > 0 ? (
          <TimelineContainer ref={containerRef}>
            {sortedTimelineData.length >= 2 && (
              <TimelineAxis
                style={{ top: axisStyle.top, height: axisStyle.height }}
              />
            )}
            {sortedTimelineData.map((record, index) => (
              <TimelineRow key={record.record_id}>
                <MarkerCol>
                  <MarkerDot
                    ref={(el) => setDotRef(index, el)}
                    $filled={
                      sortOrder === "oldest"
                        ? index === 0
                        : index === sortedTimelineData.length - 1
                    }
                  />
                </MarkerCol>
                <TimelineDate>{formatDate(record.occurred_at)}</TimelineDate>
                <TimelineCard
                  onClick={() => {
                    if (window.navigation.navigateToRecordDetail) {
                      window.navigation.navigateToRecordDetail(
                        "summary",
                        record.record_id
                      );
                    }
                  }}
                >
                  <CardContent>
                    <CardHeader>
                      <CategoryTag $isHighSeverity={record.severity === 2}>
                        {record.category}
                      </CategoryTag>
                      <CardTitle>{record.title}</CardTitle>
                    </CardHeader>
                    <CardSummary>{record.summary}</CardSummary>
                  </CardContent>
                  <CardArrow src={ArrowIcon} alt="더보기" />
                </TimelineCard>
              </TimelineRow>
            ))}
          </TimelineContainer>
        ) : (
          <NoResultsMessage>검색 결과가 없습니다.</NoResultsMessage>
        )}
      </ContentContainer>
    </PageContainer>
  );
}
