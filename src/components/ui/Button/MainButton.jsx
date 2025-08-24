import styled from "styled-components";

/*
  웹사이트에서 기본적으로 사용하는 버튼 규격, mainButton
*/

const StyledMainButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "variant",
})`
  display: flex;
  width: 11.25rem;
  height: 2.75rem;
  padding: 0.625rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  /* Primary variant (기본값) */
  ${({ variant }) =>
    variant === "primary" &&
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
  ${({ variant }) =>
    variant === "secondary" &&
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
    text-align: center;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    cursor: not-allowed;
  }
`;

export default function MainButton({
  children,
  onClick,
  disabled,
  variant = "primary", // 기본값은 primary
  ...props
}) {
  return (
    <StyledMainButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      {...props}
    >
      {children}
    </StyledMainButton>
  );
}
