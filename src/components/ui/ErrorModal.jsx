import styled from "styled-components";
import sadCloudIcon from "../../assets/sadCloudIcon.svg";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
`;

const ModalCard = styled.div`
  display: flex;
  width: 21.125rem;
  padding: 3.75rem 0 1.875rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  border-radius: 1.875rem;
  background: #fff;
`;

const Title = styled.div`
  color: var(--80, #313131);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`;

const Sub = styled.div`
  color: var(--30, #acacac);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

const MediaBox = styled.div`
  width: 11.0625rem;
  height: 11.0625rem;
  aspect-ratio: 1 / 1;
  border-radius: 0.75rem;
  overflow: hidden;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MediaImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border: none;
`;

export default function ErrorModal({ onClose }) {
  return (
    <ModalOverlay data-modal="open" onClick={onClose}>
      <ModalCard onClick={onClose}>
        <Title>아이쿠, 문제가 생겼어요</Title>
        <Sub>구름을 클릭해서 메인화면으로 돌아가요</Sub>
        <MediaBox>
          <MediaImg src={sadCloudIcon} alt="" />
        </MediaBox>
      </ModalCard>
    </ModalOverlay>
  );
}
