import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import AttachmentChip from "../components/ui/AttachmentChip";
import { SmallButton } from "../components/ui/Button";
import TitleEditModal from "../components/ui/TitleEditModal";
import DeleteConfirmModal from "../components/ui/DeleteConfirmModal";
import FolderChangeModal from "../components/ui/FolderChangeModal";
import titleEditInRecordIcon from "../assets/titleEditInRecordIcon.svg";
import iconSymbol from "../assets/iconSymbol.svg";
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

const InfoText = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 700;
`;

const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
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

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 2rem;
  align-self: stretch;
  border-radius: 1.875rem;
  background: #fbfbfb;
  padding: 2rem;
  height: calc(100vh - 20rem);
  overflow-y: auto;
`;

const FormGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.78rem;
  width: 100%;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 2.5rem;
  column-gap: 0;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const District = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  color: #313131;
`;

const Label = styled.label`
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #313131;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-width: 5rem;
`;

const Input = styled.div`
  display: flex;
  width: 34.6875rem;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  color: #313131;
`;

const TitleInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.62rem;
`;

const TitleInput = styled.div`
  display: flex;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  color: #313131;
`;

const EditIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;

const TextArea = styled.div`
  display: flex;
  width: 34.6875rem;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  color: #313131;
  white-space: pre-wrap;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: var(--70, #4a4a4a);
  border-radius: 1rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  color: white;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CategoryButton = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  background: var(--70, #4a4a4a);
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
`;

const SeverityContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SeverityButton = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  background: var(--70, #4a4a4a);
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
`;

const AttachmentsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-start;
  width: 37rem;
`;

const severityMap = {
  1: "높음",
  2: "보통",
  3: "낮음",
};

export default function RecordDetailPage({ previousPage, record_id }) {
  const [recordData, setRecordData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showTitleEditModal, setShowTitleEditModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showFolderChangeModal, setShowFolderChangeModal] = useState(false);

  const getPageTitle = () => {
    switch (previousPage) {
      case "recent":
        return "최근 기록";
      case "incident":
        return "모아보기";
      default:
        return "모아보기";
    }
  };

  const getSubtitle = () => {
    const pageTitle = getPageTitle();
    const drawerName = recordData?.drawer_name;
    const title = recordData?.title;

    if (drawerName && title) {
      return `${pageTitle}   >   ${drawerName}   >   ${title}`;
    } else if (drawerName) {
      return `${pageTitle}   >   ${drawerName}`;
    } else if (title) {
      return `${pageTitle}   >   ${title}`;
    } else {
      return pageTitle;
    }
  };

  const handleTitleEdit = () => {
    setShowTitleEditModal(true);
  };

  const handleTitleEditClose = () => {
    setShowTitleEditModal(false);
  };

  const handleTitleEditConfirm = async (newTitle) => {
    try {
      // API 호출: PUT /api/records/{record_id}/title
      const response = await fetch(`/api/records/${record_id}/title`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });

      if (response.ok) {
        // 성공 시 현재 데이터 업데이트
        setRecordData((prev) => ({ ...prev, title: newTitle }));
        setShowTitleEditModal(false);
      } else {
        console.error("제목 수정 실패");
      }
    } catch (error) {
      console.error("제목 수정 중 오류:", error);
    }
  };

  const handleRecordDelete = () => {
    setShowDeleteConfirmModal(true);
  };

  const handleDeleteConfirmClose = () => {
    setShowDeleteConfirmModal(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      // API 호출: DELETE /api/records/{record_id}/delete/
      const response = await fetch(`/api/records/${record_id}/delete/`, {
        method: "DELETE",
      });

      if (response.ok) {
        // 성공 시 이전 페이지로 이동
        if (window.navigation.navigateToDrawer) {
          window.navigation.navigateToDrawer();
        }
      } else {
        console.error("레코드 삭제 실패");
      }
    } catch (error) {
      console.error("레코드 삭제 중 오류:", error);
    }
  };

  const handleChatView = () => {
    // ChatViewPage로 이동
    if (window.navigation.navigateToChatView) {
      window.navigation.navigateToChatView(
        record_id,
        recordData?.title || "제목 없음",
        recordData?.created_at
      );
    }
  };

  const handleFolderEdit = () => {
    setShowFolderChangeModal(true);
  };

  const handleFolderChangeClose = () => {
    setShowFolderChangeModal(false);
  };

  const handleFolderChangeConfirm = async (newFolderName) => {
    try {
      console.log(`새로운 이름:`, newFolderName);
      // API 호출: PATCH /api/records/{record_id}/update/
      const response = await fetch(`/api/records/${record_id}/update/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ drawer_id: newFolderName }),
      });

      if (response.ok) {
        // 성공 시 현재 데이터 새로고침
        fetchRecordData();
        setShowFolderChangeModal(false);
      } else {
        console.error("폴더 변경 실패");
      }
    } catch (error) {
      console.error("폴더 변경 중 오류:", error);
    }
  };

  const fetchRecordData = async () => {
    try {
      setIsLoading(true);

      // JSON Server API 호출
      const data = await jsonServerHelpers.getRecordByRecordId(record_id);

      if (data) {
        setRecordData(data);
      } else {
        throw new Error("기록 데이터를 찾을 수 없습니다.");
      }
    } catch (error) {
      window.handleApiError(error, "기록 데이터 로딩에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecordData();
  }, [record_id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const DISTRICT_CODE_TO_LABEL = {
    GANGNAM: "강남구",
    GANGDONG: "강동구",
    GANGBUK: "강북구",
    GANGSEO: "강서구",
    GWANAK: "관악구",
    GWANGJIN: "광진구",
    GURO: "구로구",
    GEUMCHEON: "금천구",
    NOWON: "노원구",
    DOBONG: "도봉구",
    DONGDAEMUN: "동대문구",
    DONGJAK: "동작구",
    MAPO: "마포구",
    SEODAEMUN: "서대문구",
    SEOCHO: "서초구",
    SEONGDONG: "성동구",
    SEONGBUK: "성북구",
    SONGPA: "송파구",
    YANGCHEON: "양천구",
    YEONGDEUNGPO: "영등포구",
    YONGSAN: "용산구",
    EUNPYEONG: "은평구",
    JONGNO: "종로구",
    JUNG: "중구",
    JUNGRANG: "중랑구",
  };

  if (isLoading) {
    return (
      <PageContainer>
        <Header currentPage="record-detail" />
        <ContentContainer>
          <LoadingText>로딩 중...</LoadingText>
        </ContentContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header currentPage="record-detail" />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>{getSubtitle()}</Subtitle>
          <Title>{recordData?.title || "제목 없음"}</Title>
        </TitleContainer>
        <DetailHeader>
          <SmallButton
            variant="secondary"
            style={{
              borderRadius: "0.5rem",
              border: "1px solid var(--5, #E9E9E9)",
              background: "#FFF",
              color: "var(--50, #7A7A7A)",
              textAlign: "center",
              fontFamily: "Pretendard",
              fontSize: "0.875rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "1.25rem",
            }}
            onClick={handleRecordDelete}
          >
            기록 삭제
          </SmallButton>
          <SmallButton
            variant="secondary"
            style={{
              borderRadius: "0.5rem",
              border: "1px solid var(--BP-Gradation, #68B8EA)",
              background: "#FFF",
              color: "var(--seconday, #688AE0)",
              textAlign: "center",
              fontFamily: "Pretendard",
              fontSize: "0.875rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "1.25rem",
            }}
            onClick={handleChatView}
          >
            채팅 보기
          </SmallButton>
        </DetailHeader>
        <DetailContainer>
          <FormGrid>
            <FormRow>
              <FormField>
                <Label>제목</Label>
                <TitleInputContainer>
                  <TitleInput>{recordData?.title || "제목 없음"}</TitleInput>
                  <EditIcon
                    src={titleEditInRecordIcon}
                    alt="제목 편집"
                    onClick={handleTitleEdit}
                  />
                </TitleInputContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>카테고리</Label>
                <CategoryContainer>
                  {recordData?.categories && (
                    <CategoryButton>{recordData.categories}</CategoryButton>
                  )}
                </CategoryContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>가해자</Label>
                <TagContainer>
                  {recordData?.assailant?.map((item, index) => (
                    <Tag key={index}>{item}</Tag>
                  ))}
                </TagContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>저장 폴더</Label>
                <TitleInputContainer>
                  <TagContainer>
                    {recordData?.drawer_name && (
                      <Tag>{recordData.drawer_name}</Tag>
                    )}
                  </TagContainer>
                  <EditIcon
                    src={titleEditInRecordIcon}
                    alt="폴더 편집"
                    onClick={handleFolderEdit}
                  />
                </TitleInputContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>심각도</Label>
                <SeverityContainer>
                  {recordData?.severity && (
                    <SeverityButton>
                      {severityMap[recordData.severity] || "심각도 정보 없음"}
                    </SeverityButton>
                  )}
                </SeverityContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>발생일시</Label>
                <Input>
                  {recordData?.occurred_at
                    ? formatDate(recordData.occurred_at)
                    : "발생일시 정보 없음"}
                </Input>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>목격자</Label>
                <TagContainer>
                  {recordData?.witness?.map((item, index) => (
                    <Tag key={index}>{item}</Tag>
                  ))}
                </TagContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>발생 장소</Label>
                <Input>{recordData?.location || "발생 장소 정보 없음"}</Input>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>발생 지역</Label>
                <District>
                  {recordData?.district
                    ? DISTRICT_CODE_TO_LABEL[recordData.district] ||
                      recordData.district
                    : "발생 지역 정보 없음"}
                </District>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>발생 정황</Label>
                <TextArea>
                  {recordData?.content || "발생 정황 정보 없음"}
                </TextArea>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>자료</Label>
                <AttachmentsBar>
                  {recordData?.evidences?.map((evidence, index) => (
                    <AttachmentChip
                      key={index}
                      name={evidence.filename}
                      kind={evidence.type}
                      previewUrl={evidence.S3url}
                    />
                  ))}
                </AttachmentsBar>
              </FormField>
            </FormRow>
          </FormGrid>
        </DetailContainer>
      </ContentContainer>

      <TitleEditModal
        isOpen={showTitleEditModal}
        onClose={handleTitleEditClose}
        onConfirm={handleTitleEditConfirm}
        currentTitle={recordData?.title}
        recordData={recordData}
      />

      <DeleteConfirmModal
        isOpen={showDeleteConfirmModal}
        onClose={handleDeleteConfirmClose}
        onConfirm={handleDeleteConfirm}
        title="이 기록을 삭제할까요?"
        subtitle="삭제하면 되돌릴 수 없어요"
      />

      <FolderChangeModal
        isOpen={showFolderChangeModal}
        onClose={handleFolderChangeClose}
        onConfirm={handleFolderChangeConfirm}
        currentFolder={recordData?.drawer_name}
        recordId={record_id}
        recordData={recordData}
      />
    </PageContainer>
  );
}
