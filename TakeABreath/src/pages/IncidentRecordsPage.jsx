import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { TitleDrawerButton } from "../components/ui/Button";
import IncidentCard from "../components/ui/IncidentCard";
import FolderAddModal from "../components/ui/FolderAddModal";
import FolderDeleteSelectionUI from "../components/ui/FolderDeleteSelectionUI";
import FolderDeleteConfirmModal from "../components/ui/DeleteConfirmModal";
import settingButton from "../assets/settingButton.svg";
import folderAddIcon from "../assets/folderAddIcon.svg";
import deleteIcon from "../assets/deleteIcon.svg";

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

export default function IncidentRecordsPage({
  onNavigateToMain,
  triggerFolderDelete,
  onFolderDeleteTriggered,
}) {
  const [incidentData, setIncidentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFolderAddModal, setShowFolderAddModal] = useState(false);
  const [isDeleteSelectionMode, setIsDeleteSelectionMode] = useState(false);
  const [selectedFolders, setSelectedFolders] = useState([]);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const modalRef = useRef(null);

  // 사건별 기록 데이터를 state로 관리
  const [incidentDataDummy, setIncidentDataDummy] = useState([
    {
      drawer_id: 1,
      name: "상도동 커피 폭언",
      record_amt: 3,
      date: "2025.08.16",
    },
    {
      drawer_id: 2,
      name: "회기동 함박",
      record_amt: 3,
      date: "2025.08.16",
    },
    {
      drawer_id: 3,
      name: "사장님",
      record_amt: 2,
      date: "2025.08.15",
    },
  ]);

  // API 호출 함수 (추후 실제 엔드포인트로 변경)
  const fetchIncidentData = async () => {
    setIsLoading(true);
    try {
      // const response = await axios.get("/api/drawers/");
      // setIncidentData(response.data.drawers);

      // 현재는 더미 데이터 사용
      setIncidentData(incidentDataDummy);
    } catch (error) {
      console.error("사건별 기록 조회 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidentData();
  }, []);

  // DrawerPage에서 폴더 삭제 트리거 감지
  useEffect(() => {
    if (triggerFolderDelete) {
      setIsDeleteSelectionMode(true);
      setSelectedFolders([]);
      onFolderDeleteTriggered();
    }
  }, [triggerFolderDelete, onFolderDeleteTriggered]);

  // 설정 버튼 관련 핸들러
  const handleSettingClick = () => {
    setShowModal(!showModal);
  };

  const handleModalItemClick = (action) => {
    console.log(`설정 모달 액션: ${action}`);
    setShowModal(false);

    switch (action) {
      case "폴더 추가":
        setShowFolderAddModal(true);
        break;
      case "폴더 삭제":
        setIsDeleteSelectionMode(true);
        setSelectedFolders([]);
        break;
    }
  };

  // 폴더 추가 핸들러
  const handleFolderAdd = async (folderName) => {
    try {
      // API 호출 (추후 실제 엔드포인트로 변경)
      console.log("폴더 추가 API 호출:", folderName);
      // const response = await axios.post("/api/drawers/", { name: folderName });

      // 성공 시 상태 업데이트
      const newFolder = {
        drawer_id: Date.now(),
        name: folderName,
        record_amt: 0,
        date: new Date().toISOString().split("T")[0],
      };

      setIncidentData((prev) => [...prev, newFolder]);
    } catch (error) {
      console.error("폴더 추가 실패:", error);
    }
  };

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

  const handleDeleteConfirm = () => {
    // 선택된 폴더들 삭제
    setIncidentData((prev) =>
      prev.filter((folder) => !selectedFolders.includes(folder.drawer_id))
    );
    console.log("선택된 폴더들 삭제:", selectedFolders);
    setShowDeleteConfirmModal(false);
    setIsDeleteSelectionMode(false);
    setSelectedFolders([]);
  };

  // 모달 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      <CardsContainer>
        {isLoading ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            응답 중입니다...
          </div>
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
              />
            ))}
          </>
        )}
      </CardsContainer>

      <FolderAddModal
        isOpen={showFolderAddModal}
        onClose={() => setShowFolderAddModal(false)}
        onConfirm={handleFolderAdd}
      />

      <FolderDeleteConfirmModal
        isOpen={showDeleteConfirmModal}
        onClose={() => setShowDeleteConfirmModal(false)}
        onConfirm={handleDeleteConfirm}
        selectedCount={selectedFolders.length}
      />
    </>
  );
}
