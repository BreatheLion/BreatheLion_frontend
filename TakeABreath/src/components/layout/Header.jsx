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
  justify-content: flex-start;
  padding: 0 12.5rem;
  z-index: 10;
  border-bottom: 1px solid #f2f2f2;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3.12rem;
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-direction: row;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 2.5rem;
  min-width: 5rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  &.record {
    color: #313131;

    &:hover {
      background-color: rgba(49, 49, 49, 0.1);
    }
  }

  &.drawer {
    color: #acacac;

    &:hover {
      background-color: rgba(172, 172, 172, 0.1);
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
        <NavButton className="record">기록하기</NavButton>
        <NavButton className="drawer">서랍</NavButton>
      </NavButtons>
    </HeaderContainer>
  );
}
