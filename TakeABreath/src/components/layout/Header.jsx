import styled from "styled-components";
import Logo from "../common/Logo";

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  z-index: 10;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.625rem 2.6875rem;
  border-radius: 0.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &.login {
    color: #93cf79;

    &:hover {
      background-color: rgba(147, 207, 121, 0.1);
    }
  }

  &.signup {
    color: #6c6c6c;

    &:hover {
      background-color: rgba(108, 108, 108, 0.1);
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavButtons>
        <NavButton className="login">로그인</NavButton>
        <NavButton className="signup">회원가입</NavButton>
      </NavButtons>
    </HeaderContainer>
  );
}
