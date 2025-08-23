import styled from "styled-components";
import { useState } from "react";
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

// 테스트용 스타일 컴포넌트들
const TestContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
  border: 1px solid #e9ecef;
`;

const TestInput = styled.input`
  width: 80px;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: "Pretendard", sans-serif;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const TestButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

const TestLabel = styled.span`
  font-size: 0.75rem;
  font-family: "Pretendard", sans-serif;
  color: #6c757d;
  font-weight: 500;
`;

export default function Header({ currentPage }) {
  const [testRecordId, setTestRecordId] = useState("");

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
    if (window.navigation.navigateToConsultant) {
      window.navigation.navigateToConsultant();
    }
  };

  const handleTestRecordDetail = () => {
    if (testRecordId.trim()) {
      const recordId = parseInt(testRecordId);
      if (!isNaN(recordId) && recordId > 0) {
        if (window.navigation.navigateToRecordDetail) {
          window.navigation.navigateToRecordDetail("test", recordId);
        }
      } else {
        alert("유효한 record_id를 입력해주세요 (양의 정수)");
      }
    } else {
      alert("record_id를 입력해주세요");
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
          $active={currentPage === "consultant"}
          onClick={handleLawyerConsultClick}
        >
          상담
        </NavButton>
      </NavButtons>

      {/* 테스트용 UI */}
      <TestContainer>
        <TestLabel>테스트:</TestLabel>
        <TestInput
          type="number"
          placeholder="record_id"
          value={testRecordId}
          onChange={(e) => setTestRecordId(e.target.value)}
          min="1"
        />
        <TestButton
          onClick={handleTestRecordDetail}
          disabled={!testRecordId.trim()}
        >
          상세보기
        </TestButton>
      </TestContainer>
    </HeaderContainer>
  );
}
