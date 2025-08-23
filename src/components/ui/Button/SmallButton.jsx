import styled from "styled-components";

const StyledSmallButton = styled.button`
  display: flex;
  width: 8.75rem;
  height: 2.75rem;
  padding: 0.625rem 2.6875rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  /* Primary variant (기본값) */
  ${({ $variant }) =>
    $variant === "primary" &&
    `
    border: 1px solid #4fb2ef;
    background: var(
      --BP-Gradation,
      radial-gradient(
        480.82% 193.78% at 131.5% -43.24%,
        #8c68e0 0%,
        #688ae0 31.38%,
        var(--Color, #68b8ea) 87.56%
      )
    );
    color: white;

    &:hover {
      opacity: 0.9;
    }
  `}

  /* Secondary variant */
  ${({ $variant }) =>
    $variant === "secondary" &&
    `
    border: 1px solid var(--10, #ddd);
    background: #fff;
    color: #313131;

    &:hover {
      border-color: #4a4a4a;
    }
  `}

  &:disabled {
    border-radius: 0.5rem;
    border: 1px solid var(--10, #ddd);
    background: var(--5, #e9e9e9);
    color: var(--30, #acacac);
    cursor: not-allowed;
  }
`;

export default function SmallButton({
  children,
  onClick,
  disabled,
  variant = "primary", // 기본값은 primary
  ...props
}) {
  return (
    <StyledSmallButton
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      {...props}
    >
      {children}
    </StyledSmallButton>
  );
}
