import styled from "styled-components";
import { useState, useEffect } from "react";
import { SmallButton } from "./Button";
import axios from "axios";

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
  max-width: 31.25rem;
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
  padding: 0.5625rem 0.5rem;
  border-radius: 0.625rem;
  min-height: 3rem;
  justify-content: center;
  align-items: center;
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
  const [availableFolders, setAvailableFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      const response = await axios.get("/api/drawers/list/");
      // API 응답이 배열인지 확인하고 설정
      const folders = Array.isArray(response.data) ? response.data : [];
      console.log("API 응답 폴더:", folders);

      // TODO: 백엔드 연동 후 실제 API 응답 사용
      // 현재는 API 응답이 비어있거나 더미 데이터가 필요할 때 더미 데이터 사용 (임시 로직)
      if (folders.length === 0) {
        const dummyFolders = [
          { drawer_id: 1, name: "상도동" },
          { drawer_id: 2, name: "회기동 함박" },
          { drawer_id: 3, name: "사장님" },
          { drawer_id: 4, name: "폴더2" },
          { drawer_id: 5, name: "상도동ㄴㅇㄹㄴㅇㄹ" },
          { drawer_id: 6, name: "상도동ㄴㅇㄹ" },
        ];
        console.log("더미 데이터 설정 (빈 응답):", dummyFolders);
        setAvailableFolders(dummyFolders);
      } else {
        setAvailableFolders(folders);
      }
    } catch (error) {
      console.error("폴더 목록 가져오기 실패:", error);
      // TODO: 백엔드 연동 후 실제 API 호출로 변경
      // 현재는 더미 데이터 사용 (임시 로직)
      const dummyFolders = [
        { drawer_id: 1, name: "상도동 커피 폭언" },
        { drawer_id: 2, name: "회기동 함박" },
        { drawer_id: 3, name: "사장님" },
        { drawer_id: 4, name: "폴더2" },
      ];
      console.log("더미 데이터 설정 (에러):", dummyFolders);
      setAvailableFolders(dummyFolders);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFolderSelect = (folder) => {
    setSelectedFolder(folder);
  };

  const handleConfirm = () => {
    if (selectedFolder && selectedFolder !== currentFolder) {
      console.log(
        `레코드 ID ${recordId}의 폴더를 ${currentFolder}에서 ${selectedFolder}로 변경`
      );
      console.log(`전체 레코드 데이터:`, recordData);
      onConfirm(selectedFolder);
      onClose();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleCancel}>
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
                onClick={() => handleFolderSelect(folder.name)}
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
    </ModalOverlay>
  );
}
