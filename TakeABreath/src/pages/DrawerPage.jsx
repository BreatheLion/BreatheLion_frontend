import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { TitleDrawerButton } from "../components/ui/Button";
import RecentRecordsPage from "./RecentRecordsPage";
import IncidentRecordsPage from "./IncidentRecordsPage";
import FolderAddModal from "../components/ui/FolderAddModal";
import FolderDeleteConfirmModal from "../components/ui/DeleteConfirmModal";
import settingButton from "../assets/settingButton.svg";
import folderAddIcon from "../assets/folderAddIcon.svg";
import deleteIcon from "../assets/deleteIcon.svg";

const PageContainer = styled.div`
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const ContentContainer = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
`;

const TabSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8.38rem;
  margin-bottom: 2.5rem;
  flex-shrink: 0;
  width: 100%;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0;
  justify-content: center;
  align-items: center;
  position: relative;
`;

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

export default function DrawerPage({
  onNavigateToMain,
  onNavigateToRecordDetail,
}) {
  const [activeTab, setActiveTab] = useState("recent");
  const [showModal, setShowModal] = useState(false);
  const [showFolderAddModal, setShowFolderAddModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [triggerFolderDelete, setTriggerFolderDelete] = useState(false);
  const modalRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSettingClick = () => {
    setShowModal(!showModal);
  };

  const handleModalItemClick = (action) => {
    setShowModal(false);
    if (action === "폴더 추가") {
      setShowFolderAddModal(true);
    } else if (action === "폴더 삭제") {
      setTriggerFolderDelete(true);
    }
  };

  const handleFolderAdd = async (folderName) => {
    // 폴더 추가 API 호출 로직
    console.log("폴더 추가:", folderName);
    setShowFolderAddModal(false);
  };

  const handleDeleteConfirm = () => {
    // 폴더 삭제 확인 로직
    console.log("폴더 삭제 확인");
    setShowDeleteConfirmModal(false);
  };

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
    <PageContainer>
      <Header currentPage="drawer" />
      <ContentContainer>
        <TabSection>
          <TabContainer>
            <TitleDrawerButton
              selected={activeTab === "recent"}
              onClick={() => handleTabClick("recent")}
            >
              최근 기록
            </TitleDrawerButton>
            <TitleDrawerButton
              selected={activeTab === "incident"}
              onClick={() => handleTabClick("incident")}
            >
              사건별 기록
            </TitleDrawerButton>
          </TabContainer>
          {activeTab === "incident" && (
            <SettingButtonContainer ref={modalRef}>
              <SettingButton onClick={handleSettingClick}>
                <img src={settingButton} alt="Settings" />
              </SettingButton>
              {showModal && (
                <Modal>
                  <ModalItem onClick={() => handleModalItemClick("폴더 추가")}>
                    <ModalIcon src={folderAddIcon} alt="폴더 추가" />
                    <ModalText>폴더 추가</ModalText>
                  </ModalItem>
                  <ModalItem onClick={() => handleModalItemClick("폴더 삭제")}>
                    <ModalIcon src={deleteIcon} alt="폴더 삭제" />
                    <ModalText>폴더 삭제</ModalText>
                  </ModalItem>
                </Modal>
              )}
            </SettingButtonContainer>
          )}
        </TabSection>

        {activeTab === "recent" && (
          <RecentRecordsPage
            onNavigateToMain={onNavigateToMain}
            onNavigateToRecordDetail={onNavigateToRecordDetail}
          />
        )}
        {activeTab === "incident" && (
          <IncidentRecordsPage
            onNavigateToMain={onNavigateToMain}
            triggerFolderDelete={triggerFolderDelete}
            onFolderDeleteTriggered={() => setTriggerFolderDelete(false)}
          />
        )}
      </ContentContainer>

      <FolderAddModal
        isOpen={showFolderAddModal}
        onClose={() => setShowFolderAddModal(false)}
        onConfirm={handleFolderAdd}
      />

      <FolderDeleteConfirmModal
        isOpen={showDeleteConfirmModal}
        onClose={() => setShowDeleteConfirmModal(false)}
        onConfirm={handleDeleteConfirm}
        selectedCount={0}
      />
    </PageContainer>
  );
}
