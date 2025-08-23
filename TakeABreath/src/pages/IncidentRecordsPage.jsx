import { useState, useEffect } from "react";
import styled from "styled-components";
import { TitleDrawerButton } from "../components/ui/Button";
import IncidentCard from "../components/ui/IncidentCard";
import FolderDeleteSelectionUI from "../components/ui/FolderDeleteSelectionUI";
import FolderDeleteConfirmModal from "../components/ui/DeleteConfirmModal";
import SuccessNotificationModal from "../components/ui/SuccessNotificationModal";
import FailureNotificationModal from "../components/ui/FailureNotificationModal";
import { apiHelpers } from "../utils/api";

const SettingButtonContainer = styled.div`
  position: absolute;
  left: calc(50% + 24.09375rem);
`;

const SettingButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: inline-flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
  border-radius: 0.625rem;
  background: #ffffff;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.19);
  z-index: 9999;
  margin-top: 0.5rem;
  backdrop-filter: blur(0);
  isolation: isolate;
`;

const ModalItem = styled.div`
  display: flex;
  width: 9.0625rem;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(49, 49, 49, 0.1);
  }
`;

const ModalIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

const ModalText = styled.span`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
`;

const CardsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  align-items: center;
  padding-bottom: 2rem;
`;

const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export default function IncidentRecordsPage({
  triggerFolderDelete,
  onFolderDeleteTriggered,
  refreshTrigger,
  onFolderDeleteSuccess,
}) {
  const [incidentData, setIncidentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteSelectionMode, setIsDeleteSelectionMode] = useState(false);
  const [selectedFolders, setSelectedFolders] = useState([]);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");

  // PDF 다운로드 핸들러
  const handlePdfDownload = async (drawerId) => {
    try {
      const blob = await apiHelpers.downloadPdf(drawerId);

      // blob이 유효한지 확인
      if (!blob || !(blob instanceof Blob)) {
        throw new Error("유효하지 않은 PDF 데이터입니다.");
      }

      const filename = "timeline.pdf";
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF 다운로드 실패:", error);
      setFailureMessage("다운로드에 실패했습니다");
      setShowFailureModal(true);
    }
  };

  // 실제 API 호출 함수
  const fetchIncidentData = async () => {
    setIsLoading(true);
    try {
      // 실제 API에서 모든 drawers 조회
      const data = await apiHelpers.getDrawersList();

      console.log("API 응답 데이터:", data);

      if (
        data &&
        data.data &&
        data.data.drawers &&
        Array.isArray(data.data.drawers)
      ) {
        // record_count를 record_amt로 매핑하고 create_at을 date로 매핑
        const mappedData = data.data.drawers.map((drawer) => ({
          ...drawer,
          record_amt: drawer.record_count,
          date: drawer.create_at,
        }));
        setIncidentData(mappedData);
      } else {
        setIncidentData([]);
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
              record_count: 0,
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
            {
              drawer_id: 4,
              name: "교실에서 일어난 위협",
              record_count: 2,
              create_at: "2025.08.12",
              update_at: "2025.08.15",
            },
          ],
        },
      };

      // record_count를 record_amt로 매핑하고 create_at을 date로 매핑
      const mappedData = mockData.data.drawers.map((drawer) => ({
        ...drawer,
        record_amt: drawer.record_count,
        date: drawer.create_at,
      }));
      setIncidentData(mappedData);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidentData();
  }, []);

  // DrawerPage에서 폴더 추가 후 데이터 갱신 트리거 감지
  useEffect(() => {
    if (refreshTrigger > 0) {
      fetchIncidentData();
    }
  }, [refreshTrigger]);

  // DrawerPage에서 폴더 삭제 트리거 감지
  useEffect(() => {
    if (triggerFolderDelete) {
      setIsDeleteSelectionMode(true);
      setSelectedFolders([]);
      onFolderDeleteTriggered();
    }
  }, [triggerFolderDelete, onFolderDeleteTriggered]);

  // 폴더 선택 관련 핸들러
  const handleFolderSelect = (folderId) => {
    setSelectedFolders((prev) => {
      if (prev.includes(folderId)) {
        return prev.filter((id) => id !== folderId);
      } else {
        return [...prev, folderId];
      }
    });
  };

  const handleDeleteSelectionCancel = () => {
    setIsDeleteSelectionMode(false);
    setSelectedFolders([]);
  };

  const handleDeleteSelectionConfirm = () => {
    if (selectedFolders.length > 0) {
      setShowDeleteConfirmModal(true);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      // 선택된 폴더들을 한 번의 요청으로 삭제
      const responseData = await apiHelpers.deleteDrawers(selectedFolders);

      if (responseData.isSuccess) {
        // 성공 시 선택된 폴더들을 로컬 상태에서 제거
        setIncidentData((prev) =>
          prev.filter((folder) => !selectedFolders.includes(folder.drawer_id))
        );

        console.log("삭제 성공:", selectedFolders);

        // 성공 모달 표시
        setSuccessMessage(
          `${selectedFolders.length}개의 폴더가 삭제되었습니다.`
        );
        setShowSuccessModal(true);

        // 성공 콜백 호출
        if (onFolderDeleteSuccess) {
          onFolderDeleteSuccess(selectedFolders.length);
        }
      } else {
        throw new Error(responseData.message || "폴더 삭제에 실패했습니다.");
      }
    } catch (error) {
      // 목업 데이터 사용 (추후 제거 예정)
      console.log("API 호출 실패, 목업 데이터 사용:", error);

      // 실패 모달 표시
      setFailureMessage("폴더 삭제에 실패했습니다. 다시 시도해주세요.");
      setShowFailureModal(true);

      // 목업 데이터로 로컬 상태 업데이트 (테스트용)
      setIncidentData((prev) =>
        prev.filter((folder) => !selectedFolders.includes(folder.drawer_id))
      );
    } finally {
      setShowDeleteConfirmModal(false);
      setIsDeleteSelectionMode(false);
      setSelectedFolders([]);
    }
  };

  return (
    <>
      <CardsContainer>
        {isLoading ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            응답 중입니다...
          </div>
        ) : incidentData.length === 0 ? (
          <EmptyMessage>서랍이 없습니다</EmptyMessage>
        ) : (
          <>
            {isDeleteSelectionMode && (
              <FolderDeleteSelectionUI
                selectedCount={selectedFolders.length}
                onCancel={handleDeleteSelectionCancel}
                onDelete={handleDeleteSelectionConfirm}
              />
            )}
            {incidentData.map((incident) => (
              <IncidentCard
                key={incident.drawer_id}
                incident={incident}
                isSelectionMode={isDeleteSelectionMode}
                isSelected={selectedFolders.includes(incident.drawer_id)}
                onSelect={handleFolderSelect}
                onPdfDownload={handlePdfDownload}
              />
            ))}
          </>
        )}
      </CardsContainer>

      <FolderDeleteConfirmModal
        isOpen={showDeleteConfirmModal}
        onClose={() => setShowDeleteConfirmModal(false)}
        onConfirm={handleDeleteConfirm}
        selectedCount={selectedFolders.length}
      />

      <SuccessNotificationModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="폴더 삭제 완료"
        message={successMessage}
      />

      <FailureNotificationModal
        isOpen={showFailureModal}
        onClose={() => setShowFailureModal(false)}
        title="폴더 삭제 실패"
        message={failureMessage}
      />
    </>
  );
}
