import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { TitleDrawerButton } from "../components/ui/Button";
import TableRow from "../components/ui/TableRow";
import TableHeader from "../components/ui/TableHeader";
import IncidentCard from "../components/ui/IncidentCard";
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
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 12.5rem;
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

export default function DrawerPage({ onNavigateToMain }) {
  const [activeTab, setActiveTab] = useState("recent"); // "recent" | "incident"
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSettingClick = () => {
    setShowModal(!showModal);
  };

  const handleModalItemClick = (action) => {
    console.log(`설정 모달 액션: ${action}`);
    setShowModal(false);
    // 추후 구현
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
      <Header
        onRecordClick={onNavigateToMain}
        onDrawerClick={() => {}}
        currentPage="drawer"
      />
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

        {activeTab === "recent" ? (
          <div style={{ flex: 1, overflowY: "auto" }}>
            <TableHeader />
            <TableRow
              id="1"
              order="1"
              title="00커피 사장님 막말"
              date="2025. 8. 3."
              location="상도동 00 커피"
              folder="상도동"
            />
            <TableRow
              id="2"
              order="2"
              title="00 커피 사장님 무안 줌"
              date="2025. 7. 12."
              location="상도동 00 커피"
              folder="상도동"
            />
          </div>
        ) : (
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              paddingBottom: "2rem",
            }}
          >
            <IncidentCard
              incident={{
                drawer_id: 1,
                name: "상도동 커피 폭언",
                record_amt: 3,
                date: "2025.08.16",
              }}
            />
            <IncidentCard
              incident={{
                drawer_id: 2,
                name: "회기동 함박",
                record_amt: 3,
                date: "2025.08.16",
              }}
            />
            <IncidentCard
              incident={{
                drawer_id: 3,
                name: "사장님",
                record_amt: 2,
                date: "2025.08.15",
              }}
            />
          </div>
        )}
      </ContentContainer>
    </PageContainer>
  );
}
