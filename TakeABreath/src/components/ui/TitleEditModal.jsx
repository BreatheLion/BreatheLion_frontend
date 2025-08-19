import styled from "styled-components";
import { useState, useEffect } from "react";
import { SmallButton } from "./Button";

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
  max-width: 34.6875rem;
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

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 34.6875rem;
  padding: 0.625rem 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid #ddd;
  background: #fff;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }

  &::placeholder {
    color: #7a7a7a;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 0.9375rem;
  justify-content: center;
`;

export default function TitleEditModal({
  isOpen,
  onClose,
  onConfirm,
  currentTitle,
  recordData,
}) {
  const [newTitle, setNewTitle] = useState(currentTitle || "");

  useEffect(() => {
    setNewTitle(currentTitle || "");
  }, [currentTitle, isOpen]);

  const handleConfirm = () => {
    if (newTitle.trim() && newTitle.trim() !== currentTitle) {
      console.log(`제목 수정: ${currentTitle} → ${newTitle.trim()}`);
      //console.log(`전체 레코드 데이터:`, recordData);
      onConfirm(newTitle.trim());
      onClose();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const isTitleChanged = newTitle.trim() !== currentTitle;
  const isTitleValid = newTitle.trim().length > 0;

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleCancel} data-modal="open">
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <HeaderSection>
          <Title>제목 수정</Title>
          <Subtitle>새로운 제목을 입력해주세요</Subtitle>
        </HeaderSection>

        <InputSection>
          <TitleInput
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            autoFocus
          />
        </InputSection>

        <ButtonSection>
          <SmallButton variant="secondary" onClick={handleCancel}>
            취소
          </SmallButton>
          <SmallButton
            variant="primary"
            onClick={handleConfirm}
            disabled={!isTitleValid || !isTitleChanged}
          >
            수정
          </SmallButton>
        </ButtonSection>
      </ModalContainer>
    </ModalOverlay>
  );
}
