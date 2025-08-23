import styled from "styled-components";
import { useState, useEffect } from "react";
import { SmallButton } from "./Button";
import SuccessNotificationModal from "./SuccessNotificationModal";
import FailureNotificationModal from "./FailureNotificationModal";
import { apiHelpers } from "../../utils/api";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 1.25rem;
  padding: 3.125rem;
  width: 90%;
  max-width: 22rem;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  box-shadow: 0 0.25rem 1.875rem 0 rgba(0, 0, 0, 0.08);
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;

const Subtitle = styled.p`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`;

const FolderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  padding: 0.5625rem 0;
  border-radius: 0.625rem;
  min-height: 3rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  max-width: 100%;
  text-align: center;
`;

const FolderTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.125rem 0.625rem;
  border-radius: 1.875rem;
  height: 1.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ selected }) =>
    selected
      ? `
        background: var(--70, #4a4a4a);
        color: var(--1, #f2f2f2);
      `
      : `
        background: var(--1, #f2f2f2);
        color: var(--50, #7a7a7a);
        border: 1px solid var(--5, #e9e9e9);
      `}

  &:hover {
    opacity: 0.8;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 0.9375rem;
  justify-content: center;
`;

export default function FolderChangeModal({
  isOpen,
  onClose,
  onConfirm,
  currentFolder,
  recordId,
  recordData,
}) {
  const [selectedFolder, setSelectedFolder] = useState(currentFolder || "");
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [availableFolders, setAvailableFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      fetchFolders();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedFolder(currentFolder || "");
  }, [currentFolder, isOpen]);

  const fetchFolders = async () => {
    setIsLoading(true);
    try {
      // 실제 API 호출
      const data = await apiHelpers.getDrawersList();

      if (
        data &&
        data.data &&
        data.data.drawers &&
        Array.isArray(data.data.drawers)
      ) {
        console.log("API 응답 폴더:", data.data.drawers);
        setAvailableFolders(data.data.drawers);
      } else {
        setAvailableFolders([]);
      }
    } catch (error) {
      // 목업 데이터 사용 (추후 제거 예정)
      console.log("API 호출 실패, 목업 데이터 사용:", error);
      const mockData = {
        isSuccess: true,
        code: "200",
        message: "서랍 목록 조회 성공",
        data: {
          drawers: [
            {
              drawer_id: 1,
              name: "상도동 커피 폭언",
              record_count: 3,
              create_at: "2025.08.16",
              update_at: "2025.08.20",
            },
            {
              drawer_id: 2,
              name: "회기동 함박",
              record_count: 8,
              create_at: "2025.08.06",
              update_at: "2025.08.19",
            },
            {
              drawer_id: 3,
              name: "동방에서 벌어진 일",
              record_count: 5,
              create_at: "2025.08.10",
              update_at: "2025.08.18",
            },
          ],
        },
      };
      setAvailableFolders(mockData.data.drawers);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFolderSelect = (folder) => {
    setSelectedFolder(folder.name);
    setSelectedFolderId(folder.drawer_id);
  };

  const handleConfirm = async () => {
    if (
      selectedFolder &&
      selectedFolder !== currentFolder &&
      selectedFolderId
    ) {
      try {
        const responseData = await apiHelpers.updateRecordDrawer(
          recordId,
          selectedFolderId
        );

        if (responseData.isSuccess) {
          setSuccessMessage(`"${selectedFolder}" 폴더로 이동되었습니다.`);
          setShowSuccessModal(true);
          onConfirm(selectedFolder);
          onClose();
        } else {
          throw new Error(responseData.message || "폴더 변경에 실패했습니다.");
        }
      } catch (error) {
        console.error("폴더 변경 중 오류:", error);

        // 에러 타입에 따른 메시지 설정
        if (error.name === "TypeError" && error.message.includes("fetch")) {
          setFailureMessage("네트워크 연결을 확인해주세요.");
        } else if (error.message.includes("폴더 변경에 실패했습니다")) {
          setFailureMessage(error.message);
        } else {
          setFailureMessage(
            "폴더 변경 중 오류가 발생했습니다. 다시 시도해주세요."
          );
        }

        setShowFailureModal(true);
      }
    }
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleCancel} data-modal="open">
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <HeaderSection>
          <Title>폴더 변경</Title>
          <Subtitle>변경할 폴더를 선택하세요</Subtitle>
        </HeaderSection>

        <FolderSection>
          {console.log("렌더링 상태:", {
            isLoading,
            availableFolders: availableFolders.length,
          })}
          {isLoading ? (
            <div>폴더 목록을 불러오는 중...</div>
          ) : availableFolders.length > 0 ? (
            availableFolders.map((folder) => (
              <FolderTag
                key={folder.drawer_id}
                selected={selectedFolder === folder.name}
                onClick={() => handleFolderSelect(folder)}
              >
                {folder.name}
              </FolderTag>
            ))
          ) : (
            <div>사용 가능한 폴더가 없습니다.</div>
          )}
        </FolderSection>

        <ButtonSection>
          <SmallButton variant="secondary" onClick={handleCancel}>
            취소
          </SmallButton>
          <SmallButton
            variant="primary"
            onClick={handleConfirm}
            disabled={!selectedFolder || selectedFolder === currentFolder}
          >
            변경
          </SmallButton>
        </ButtonSection>
      </ModalContainer>

      <SuccessNotificationModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="폴더 변경 완료"
        message={successMessage}
      />

      <FailureNotificationModal
        isOpen={showFailureModal}
        onClose={() => setShowFailureModal(false)}
        title="폴더 변경 실패"
        message={failureMessage}
      />
    </ModalOverlay>
  );
}
