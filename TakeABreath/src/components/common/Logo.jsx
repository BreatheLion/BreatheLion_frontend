import styled from "styled-components";
import iconSymbol from "../../assets/iconSymbol.svg";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.125rem;
`;

const LogoIcon = styled.img`
  width: 1.8125rem;
  height: 1.8125rem;
`;

const LogoText = styled.span`
  color: var(--seconday, #688ae0);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06rem;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <LogoIcon src={iconSymbol} alt="로고 아이콘" />
      <LogoText>숨쉬어</LogoText>
    </LogoContainer>
  );
}
