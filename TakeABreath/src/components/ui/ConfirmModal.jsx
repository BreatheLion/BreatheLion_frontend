import styled from "styled-components";
import { SmallButton } from "./Button";
import iconConfigureStore from "../../assets/iconConfigureStore.svg";

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
  width: 21.125rem;
  padding: 3.75rem 0 3.125rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
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
  color: #313131;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #acacac;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`;

const IconContainer = styled.div`
  width: 9.375rem;
  height: 10.8125rem;
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

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "정말로 저장하시겠습니까?",
  subtitle = "저장된 내용은 수정할 수 없습니다.",
}) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextContainer>
        <IconContainer>
          <IconImage src={iconConfigureStore} alt="문서 아이콘" />
        </IconContainer>
        <ButtonContainer>
          <SmallButton variant="secondary" onClick={onClose}>
            취소
          </SmallButton>
          <SmallButton variant="primary" onClick={onConfirm}>
            저장
          </SmallButton>
        </ButtonContainer>
      </ModalCard>
    </ModalOverlay>
  );
}
