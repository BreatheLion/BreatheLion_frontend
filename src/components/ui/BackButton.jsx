import styled from "styled-components";
import ArrowIcon from "../../assets/ArrowIcon.svg";

const BackButtonContainer = styled.button`
  position: fixed;
  top: 5rem; 
  left: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid var(--main-stroke, #bec8e3);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--5, #f5f5f5);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const BackIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  transform: rotate(180deg); /* x축 회전 (180도) */
`;

export default function BackButton({ onClick }) {
  return (
    <BackButtonContainer onClick={onClick}>
      <BackIcon src={ArrowIcon} alt="뒤로가기" />
    </BackButtonContainer>
  );
}
