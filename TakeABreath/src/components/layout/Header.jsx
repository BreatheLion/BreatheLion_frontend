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
  padding: 0 2.5rem;
  z-index: 10;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
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

  color: ${(props) => (props.$active ? "#313131" : "#acacac")};

  &:hover {
    background-color: ${(props) =>
      props.$active ? "rgba(49, 49, 49, 0.1)" : "rgba(172, 172, 172, 0.1)"};
  }
`;

const LawyerConsultButton = styled.button`
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
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #acacac;

  &:hover {
    background-color: rgba(172, 172, 172, 0.1);
  }
`;

export default function Header({ currentPage }) {
  const handleLogoClick = () => {
    if (window.navigation.navigateToMain) {
      window.navigation.navigateToMain();
    }
  };

  const handleRecordClick = () => {
    if (window.navigation.navigateToMain) {
      window.navigation.navigateToMain();
    }
  };

  const handleDrawerClick = () => {
    if (window.navigation.navigateToDrawer) {
      window.navigation.navigateToDrawer();
    }
  };

  const handleLawyerConsultClick = () => {
    if (window.navigation.navigateToLawyer) {
      window.navigation.navigateToLawyer();
    }
  };

  return (
    <HeaderContainer>
      <LogoWrapper onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <Logo />
      </LogoWrapper>
      <NavButtons>
        <NavButton $active={currentPage === "chat"} onClick={handleRecordClick}>
          기록하기
        </NavButton>
        <NavButton
          $active={currentPage === "drawer"}
          onClick={handleDrawerClick}
        >
          서랍장
        </NavButton>
        <NavButton
          $active={currentPage === "lawyer"}
          onClick={handleLawyerConsultClick}
        >
          변호사 상담
        </NavButton>
      </NavButtons>
    </HeaderContainer>
  );
}
