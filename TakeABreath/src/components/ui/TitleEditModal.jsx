import styled from "styled-components";
import { useState, useEffect } from "react";
import { SmallButton } from "./Button";
import SuccessNotificationModal from "./SuccessNotificationModal";
import FailureNotificationModal from "./FailureNotificationModal";

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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");

  useEffect(() => {
    setNewTitle(currentTitle || "");
  }, [currentTitle, isOpen]);

  const handleConfirm = async () => {
    if (newTitle.trim() && newTitle.trim() !== currentTitle) {
      try {
        const response = await fetch(
          `/api/records/${recordData.record_id}/title/`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: newTitle.trim(),
            }),
          }
        );

        const responseData = await response.json();

        if (responseData.isSuccess) {
          setSuccessMessage(`"${newTitle.trim()}"로 제목이 수정되었습니다.`);
          setShowSuccessModal(true);
          onConfirm(newTitle.trim());
          onClose();
        } else {
          throw new Error(responseData.message || "제목 수정에 실패했습니다.");
        }
      } catch (error) {
        console.error("제목 수정 중 오류:", error);

        // 에러 타입에 따른 메시지 설정
        if (error.name === "TypeError" && error.message.includes("fetch")) {
          setFailureMessage("네트워크 연결을 확인해주세요.");
        } else if (error.message.includes("제목 수정에 실패했습니다")) {
          setFailureMessage(error.message);
        } else {
          setFailureMessage(
            "제목 수정 중 오류가 발생했습니다. 다시 시도해주세요."
          );
        }

        setShowFailureModal(true);
      }
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

      <SuccessNotificationModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="제목 수정 완료"
        message={successMessage}
      />

      <FailureNotificationModal
        isOpen={showFailureModal}
        onClose={() => setShowFailureModal(false)}
        title="제목 수정 실패"
        message={failureMessage}
      />
    </ModalOverlay>
  );
}
