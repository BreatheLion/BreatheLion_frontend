import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import settingButton from "../../assets/settingButton.svg";
import downloadIcon from "../../assets/downloadIcon.svg";
import editIcon from "../../assets/editIcon.svg";
import folderIcon from "../../assets/folderIcon.svg";
import FolderChangeModal from "./FolderChangeModal";
import TitleEditModal from "./TitleEditModal";

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 55rem;
  align-items: center;
  border-radius: 0.625rem;
  border: 1px solid var(--main-stroke, #bec8e3);
  background: var(--Main-bk, #f8faff);
  margin: 0 auto;
  margin-bottom: 0.5rem;
  height: 3.75rem;
  position: relative;
  overflow: visible;
`;

const Spacer = styled.div`
  width: ${(props) => props.$width || "1.25rem"};
`;

const OrderCell = styled.div`
  display: flex;
  width: 2.1875rem;
  padding: 0.625rem 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #707070;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

const TitleCell = styled.div`
  display: flex;
  width: 14.375rem;
  height: 3.75rem;
  padding: 0.625rem 1.25rem 0.625rem 0;
  align-items: center;
  gap: 0.625rem;
  color: #313131;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  word-break: break-word;
`;

const DateCell = styled.div`
  display: flex;
  width: 7.5rem;
  padding: 0.625rem 0;
  align-items: center;
  gap: 0.625rem;
  color: #313131;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

const LocationCell = styled.div`
  display: flex;
  width: 11.25rem;
  height: 3.75rem;
  padding: 0.625rem 1.25rem 0.625rem 0;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;
  color: #313131;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  word-break: break-word;
`;

const FolderCell = styled.div`
  display: flex;
  width: 7.5rem;
  height: 3.75rem;
  padding: 0.625rem 1.25rem 0.625rem 0;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;
  color: #313131;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  word-break: break-word;
`;

// 줄수 제한을 위한 공용 텍스트 래퍼
const ClampedText = styled.div`
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const SettingButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

export default function TableRow({
  id,
  order,
  title,
  date,
  location,
  folder,
  recordData,
  onRowClick,
  onTitleUpdate,
  onFolderUpdate,
}) {
  const truncateByChars = (text, maxChars) => {
    const safe = typeof text === "string" ? text : "";
    return safe.length > maxChars ? safe.slice(0, maxChars) + "..." : safe;
  };
  const [showModal, setShowModal] = useState(false);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [showTitleModal, setShowTitleModal] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
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

  const handleSettingClick = () => {
    setShowModal(!showModal);
  };

  const handleModalItemClick = (action) => {
    console.log(`${action} 클릭`);
    setShowModal(false);

    if (action === "다운로드") {
      // ExtractPdfPage로 이동
      if (window.navigation && window.navigation.navigateToExtractPdf) {
        window.navigation.navigateToExtractPdf(id, title);
      }
    } else if (action === "폴더 변경") {
      setShowFolderModal(true);
    } else if (action === "제목 수정") {
      setShowTitleModal(true);
    }
  };

  // 폴더 변경 모달이 열릴 때 기존 모달 닫기
  useEffect(() => {
    if (showFolderModal || showTitleModal) {
      setShowModal(false);
    }
  }, [showFolderModal, showTitleModal]);

  const handleFolderChange = (newFolder) => {
    console.log(`폴더 변경: ${folder} → ${newFolder}`);
    console.log(`변경할 레코드 ID: ${id}`);

    // RecentRecordsPage의 데이터 업데이트
    if (onFolderUpdate) {
      onFolderUpdate(id, newFolder);
    }
  };

  const handleTitleChange = (newTitle) => {
    console.log(`제목 변경: ${title} → ${newTitle}`);
    console.log(`변경할 레코드 ID: ${id}`);

    // RecentRecordsPage의 데이터 업데이트
    if (onTitleUpdate) {
      onTitleUpdate(id, newTitle);
    }
  };

  const handleRowClick = (e) => {
    // 설정 버튼 클릭 시에는 행 클릭 이벤트를 발생시키지 않음
    if (e.target.closest("button") || e.target.closest('[role="button"]')) {
      return;
    }
    if (onRowClick) {
      onRowClick();
    }
  };

  return (
    <RowContainer onClick={handleRowClick} style={{ cursor: "pointer" }}>
      <Spacer $width="1.25rem" />
      <OrderCell>{order}</OrderCell>
      <Spacer $width="3.12rem" />
      <TitleCell>
        <ClampedText>{truncateByChars(title, 30)}</ClampedText>
      </TitleCell>
      <Spacer $width="0.62rem" />
      <DateCell>{date}</DateCell>
      <Spacer $width="0.62rem" />
      <LocationCell>
        <ClampedText>{truncateByChars(location, 30)}</ClampedText>
      </LocationCell>
      <Spacer $width="0.62rem" />
      <FolderCell>
        <ClampedText>{truncateByChars(folder, 30)}</ClampedText>
      </FolderCell>
      <Spacer $width="3.12rem" />
      <SettingButton ref={buttonRef} onClick={handleSettingClick}>
        <img
          src={settingButton}
          alt="설정"
          style={{ width: "1.5rem", height: "1.5rem" }}
        />
        {showModal && (
          <Modal ref={modalRef}>
            <ModalItem onClick={() => handleModalItemClick("다운로드")}>
              <ModalIcon src={downloadIcon} alt="다운로드" />
              <ModalText>다운로드</ModalText>
            </ModalItem>
            <ModalItem onClick={() => handleModalItemClick("제목 수정")}>
              <ModalIcon src={editIcon} alt="제목 수정" />
              <ModalText>제목 수정</ModalText>
            </ModalItem>
            <ModalItem onClick={() => handleModalItemClick("폴더 변경")}>
              <ModalIcon src={folderIcon} alt="폴더 변경" />
              <ModalText>폴더 변경</ModalText>
            </ModalItem>
          </Modal>
        )}
      </SettingButton>
      <Spacer $width="1.25rem" />

      <FolderChangeModal
        isOpen={showFolderModal}
        onClose={() => setShowFolderModal(false)}
        onConfirm={handleFolderChange}
        currentFolder={folder}
        recordId={id}
        recordData={recordData}
      />

      <TitleEditModal
        isOpen={showTitleModal}
        onClose={() => setShowTitleModal(false)}
        onConfirm={handleTitleChange}
        currentTitle={title}
        recordData={recordData}
      />
    </RowContainer>
  );
}
