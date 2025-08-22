import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import warningIcon from "../../assets/warningIcon.svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: calc(4rem + 1.25rem);
`;

const ModalContainer = styled.div`
  display: flex;
  width: 26.875rem;
  padding: 1.25rem 1.875rem;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid #f57474;
  background: #fff;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.08);
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;

const WarningIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

const ContentText = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;

export default function FailureNotificationModal({
  isOpen,
  onClose,
  message = "작업에 실패했습니다.",
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onClose();
        }, 300); // fadeOut 애니메이션 완료 후 모달 닫기
      }, 3000); // 3초 후 자동 닫기 (실패는 성공보다 조금 더 오래 표시)

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer isVisible={isVisible}>
        <WarningIcon src={warningIcon} alt="경고" />
        <ContentText>{message}</ContentText>
      </ModalContainer>
    </ModalOverlay>
  );
}
