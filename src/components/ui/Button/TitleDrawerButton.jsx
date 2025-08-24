import styled from "styled-components";

/*
  서랍장에서 최근 기록 / 사건별 기록을 전환할 수 있는 버튼 컴포넌트
*/

const StyledTitleDrawerButton = styled.button`
  display: flex;
  width: 12.5rem;
  height: 2.625rem;
  padding: 0.5625rem 1rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  /* 텍스트 스타일 */
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 120% */
  white-space: nowrap;

  /* 상태에 따른 스타일 */
  ${({ selected }) =>
    selected
      ? `
        background: var(--70, #4A4A4A);
        color: #fff;
      `
      : `
        background: transparent;
        color: var(--30, #ACACAC);
      `}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function TitleDrawerButton({
  children,
  selected = false,
  onClick,
  disabled = false,
  ...props
}) {
  return (
    <StyledTitleDrawerButton
      selected={selected}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledTitleDrawerButton>
  );
}
