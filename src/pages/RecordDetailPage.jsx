import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { SmallButton } from "../components/ui/Button";
import TitleEditModal from "../components/ui/TitleEditModal";
import DeleteConfirmModal from "../components/ui/DeleteConfirmModal";
import FolderChangeModal from "../components/ui/FolderChangeModal";
import FileShowModal from "../components/ui/FileShowModal";
import SuccessNotificationModal from "../components/ui/SuccessNotificationModal";
import FailureNotificationModal from "../components/ui/FailureNotificationModal";
import BackButton from "../components/ui/BackButton";
import titleEditInRecordIcon from "../assets/titleEditInRecordIcon.svg";
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
  border-radius: ${(props) => (props.$isHighSeverity ? "1.875rem" : "1rem")};
  background: ${(props) => (props.$isHighSeverity ? "#FF6D6D" : "#4a4a4a")};
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

const NewAttachmentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  width: 34.6875rem;
`;

const AttachmentPreview = styled.div`
  width: 16rem;
  height: 12rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AudioIcon = styled.div`
  font-size: 3rem;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const FileIcon = styled.div`
  font-size: 2rem;
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
`;

const FileName = styled.div`
  font-size: 0.75rem;
  color: #4a4a4a;
  text-align: center;
  max-width: 90%;
  word-break: break-word;
`;

const severityMap = {
  0: "낮음",
  1: "보통",
  2: "높음",
};

export default function RecordDetailPage({ previousPage, record_id }) {
  const navigate = useNavigate();
  const [recordData, setRecordData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showTitleEditModal, setShowTitleEditModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showFolderChangeModal, setShowFolderChangeModal] = useState(false);
  const [showFileModal, setShowFileModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const detailContainerRef = useRef(null);

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
      // API 호출: PATCH /api/records/{record_id}/title
      const responseData = await apiHelpers.updateRecordTitle(
        record_id,
        newTitle
      );

      if (responseData.isSuccess) {
        // 성공 시 현재 데이터 업데이트
        setRecordData((prev) => ({ ...prev, title: newTitle }));
        setShowTitleEditModal(false);

        // 성공 모달 표시
        setSuccessMessage("제목이 수정되었습니다.");
        setShowSuccessModal(true);
      } else {
        throw new Error(responseData.message || "제목 수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("제목 수정 중 오류:", error);

      // 실패 모달 표시
      setFailureMessage("제목 수정 중 오류가 발생했습니다.");
      setShowFailureModal(true);
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
      const responseData = await apiHelpers.deleteRecord(record_id);

      if (responseData.isSuccess) {
        // 성공 시 이전 페이지에 따라 적절한 탭으로 이동
        if (window.navigation.navigateToDrawer) {
          const tab = previousPage === "summary" ? "incident" : "recent";
          window.navigation.navigateToDrawer(tab);
        }
      } else {
        throw new Error(responseData.message || "레코드 삭제에 실패했습니다.");
      }
    } catch (error) {
      console.error("레코드 삭제 중 오류:", error);

      // 실패 모달 표시
      setFailureMessage("레코드 삭제 중 오류가 발생했습니다.");
      setShowFailureModal(true);
    }
  };

  const handleChatView = () => {
    // ChatViewPage로 이동
    if (window.navigation.navigateToChatView) {
      window.navigation.navigateToChatView(
        record_id,
        recordData?.title || "제목 없음",
        recordData?.created_at,
        previousPage === "summary" ? recordData?.drawer_name : null
      );
    }
  };

  const handlePdfExtract = () => {
    // ExtractPdfPage로 이동
    if (window.navigation.navigateToExtractPdf) {
      window.navigation.navigateToExtractPdf(
        record_id,
        recordData?.title || "제목 없음",
        previousPage === "summary" ? recordData?.drawer_name : null
      );
    }
  };

  // handleDetailPdfDownload 함수 제거됨

  const handleFolderEdit = () => {
    setShowFolderChangeModal(true);
  };

  const handleFolderChangeClose = () => {
    setShowFolderChangeModal(false);
  };

  const handleFolderChangeConfirm = async (newFolderName, newFolderId) => {
    try {
      console.log(`새로운 폴더 이름:`, newFolderName);
      console.log(`새로운 폴더 ID:`, newFolderId);
      // API 호출: PATCH /api/records/{record_id}/drawer/new/{new_drawer_id}/
      const responseData = await apiHelpers.updateRecordDrawer(
        record_id,
        newFolderId
      );

      if (responseData.isSuccess) {
        // 성공 시 현재 데이터 새로고침
        fetchRecordData();
        setShowFolderChangeModal(false);

        // 성공 모달 표시
        setSuccessMessage("폴더가 변경되었습니다.");
        setShowSuccessModal(true);
      } else {
        throw new Error(responseData.message || "폴더 변경에 실패했습니다.");
      }
    } catch (error) {
      console.error("폴더 변경 중 오류:", error);

      // 실패 모달 표시
      setFailureMessage("폴더 변경 중 오류가 발생했습니다.");
      setShowFailureModal(true);
    }
  };

  const handleFileClick = (evidence) => {
    console.log("RecordDetailPage - handleFileClick 호출:", evidence);
    setSelectedFile({
      filename: evidence.filename,
      type: evidence.type,
      url: evidence.view_url || evidence.s3_url, // URL 정보 추가
      mimeType: evidence.mimeType, // mimeType 추가
    });
    setShowFileModal(true);
  };

  const handleFileModalClose = () => {
    setShowFileModal(false);
    setSelectedFile(null);
  };

  const fetchRecordData = async () => {
    try {
      setIsLoading(true);

      // 실제 API 호출
      const responseData = await apiHelpers.getRecordDetail(record_id);

      console.log("API 응답 데이터:", responseData);

      if (responseData && responseData.isSuccess && responseData.data) {
        // API 응답에서 data 필드를 추출하고 필드명 매핑
        const apiData = responseData.data;
        const mappedData = {
          ...apiData,
          drawer_name: apiData.drawer, // drawer를 drawer_name으로 매핑
        };

        console.log("매핑된 데이터:", mappedData);
        setRecordData(mappedData);
      } else {
        throw new Error("기록 데이터를 찾을 수 없습니다.");
      }
    } catch (error) {
      window.handleApiError(
        error,
        "오류가 발생했습니다. 메인 페이지로 이동합니다."
      );
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
      <BackButton onClick={() => navigate(-1)} />
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
              padding: "0.75rem 1.5rem",
            }}
            onClick={handlePdfExtract}
          >
            PDF 추출
          </SmallButton>
        </DetailHeader>
        <DetailContainer ref={detailContainerRef}>
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
                <TagContainer>
                  {recordData?.category && <Tag>{recordData.category}</Tag>}
                </TagContainer>
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
                  {recordData?.severity !== undefined && (
                    <SeverityButton $isHighSeverity={recordData.severity >= 2}>
                      {recordData.severity !== null
                        ? severityMap[recordData.severity]
                        : "심각도 정보 없음"}
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
                <Label>발생 정황</Label>
                <TextArea>
                  {recordData?.content || "발생 정황 정보 없음"}
                </TextArea>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label>자료</Label>
                <NewAttachmentsContainer>
                  {recordData?.evidences?.map((evidence, index) => {
                    // 파일 확장자를 기반으로 한 타입 감지 추가
                    const getFileTypeFromExtension = (filename) => {
                      const extension = filename
                        .split(".")
                        .pop()
                        ?.toLowerCase();
                      const imageExtensions = [
                        "jpg",
                        "jpeg",
                        "png",
                        "gif",
                        "bmp",
                        "webp",
                      ];
                      const videoExtensions = [
                        "mp4",
                        "avi",
                        "mov",
                        "wmv",
                        "flv",
                        "webm",
                      ];
                      const audioExtensions = [
                        "mp3",
                        "wav",
                        "m4a",
                        "aac",
                        "ogg",
                      ];

                      if (imageExtensions.includes(extension)) return "IMAGE";
                      if (videoExtensions.includes(extension)) return "VIDEO";
                      if (audioExtensions.includes(extension)) return "AUDIO";
                      return "FILE";
                    };

                    // API에서 받은 타입과 파일 확장자를 모두 고려
                    const apiType = evidence.type;
                    const extensionType = getFileTypeFromExtension(
                      evidence.filename
                    );
                    const finalType = apiType || extensionType;

                    const isImage =
                      finalType === "PHOTO" || finalType === "IMAGE";
                    const isVideo = finalType === "VIDEO";
                    const isAudio = finalType === "AUDIO";
                    const isFile = finalType === "FILE";

                    console.log(`Evidence ${index}:`, {
                      apiType,
                      extensionType,
                      finalType,
                      filename: evidence.filename,
                      s3_url: evidence.s3_url,
                      isImage,
                      isVideo,
                      isAudio,
                      isFile,
                    });

                    return (
                      <AttachmentPreview
                        key={index}
                        onClick={() => handleFileClick(evidence)}
                        style={{ cursor: "pointer" }}
                      >
                        {isImage && (
                          <PreviewImage
                            src={evidence.view_url || evidence.s3_url}
                            alt={evidence.filename}
                            onError={(e) => {
                              console.error(
                                "Image failed to load:",
                                e.target.src
                              );
                              e.target.style.display = "none";
                            }}
                            onLoad={() => {
                              console.log(
                                "Image loaded successfully:",
                                evidence.view_url || evidence.s3_url
                              );
                            }}
                          />
                        )}
                        {isVideo && (
                          <video
                            src={evidence.view_url || evidence.s3_url}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            onError={(e) => {
                              console.error(
                                "Video failed to load:",
                                e.target.src
                              );
                              e.target.style.display = "none";
                            }}
                            onLoad={() => {
                              console.log(
                                "Video loaded successfully:",
                                evidence.view_url || evidence.s3_url
                              );
                            }}
                          />
                        )}
                        {isAudio && (
                          <AudioIcon>
                            🎵
                            <FileName>{evidence.filename}</FileName>
                          </AudioIcon>
                        )}
                        {isFile && (
                          <FileIcon>
                            📄
                            <FileName>{evidence.filename}</FileName>
                          </FileIcon>
                        )}
                      </AttachmentPreview>
                    );
                  })}
                </NewAttachmentsContainer>
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

      <FileShowModal
        isOpen={showFileModal}
        onClose={handleFileModalClose}
        file={selectedFile}
        fileUrl={
          selectedFile?.view_url ||
          selectedFile?.s3_url ||
          selectedFile?.url ||
          ""
        }
      />

      <SuccessNotificationModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="작업 완료"
        message={successMessage}
      />

      <FailureNotificationModal
        isOpen={showFailureModal}
        onClose={() => setShowFailureModal(false)}
        title="작업 실패"
        message={failureMessage}
      />
    </PageContainer>
  );
}
