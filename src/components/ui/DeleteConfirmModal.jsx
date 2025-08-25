import styled from "styled-components";
import { SmallButton } from "./Button";
import deleteCheckIcon from "../../assets/deleteCheckIcon.svg";

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
  z-index: 2000;
`;

const ModalCard = styled.div`
  display: flex;
  width: 23.75rem;
  padding: 3.75rem 0 3.125rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: #fff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h2`
  color: var(--80, #313131);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
`;

const Subtitle = styled.p`
  color: var(--30, #acacac);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
  white-space: pre-line;
`;

const IconContainer = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  justify-content: center;
`;

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "이 항목을 삭제할까요?",
  subtitle = "삭제된 항목은 복구할 수 없습니다",
}) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose} data-modal="open">
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>
            {subtitle.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < subtitle.split("\n").length - 1 && <br />}
              </span>
            ))}
          </Subtitle>
        </TextContainer>
        <IconContainer>
          <IconImage src={deleteCheckIcon} alt="삭제 확인 아이콘" />
        </IconContainer>
        <ButtonContainer>
          <SmallButton variant="secondary" onClick={onClose}>
            취소
          </SmallButton>
          <SmallButton variant="primary" onClick={onConfirm}>
            삭제
          </SmallButton>
        </ButtonContainer>
      </ModalCard>
    </ModalOverlay>
  );
}
