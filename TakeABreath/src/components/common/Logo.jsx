import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.125rem;
`;

const LogoIcon = styled.svg`
  width: 1.8rem;
  height: 1.35981rem;
`;

const LogoText = styled.span`
  color: #abdd95;
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
      <LogoIcon
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="48"
        viewBox="0 0 29 23"
        fill="none"
      >
        <g filter="url(#filter0_ii_4_55)">
          <path
            d="M19.7061 0.600098C24.7285 0.600314 28.7998 4.39938 28.7998 9.08545C28.7998 10.1716 28.5783 11.209 28.1797 12.1636C28.579 13.0263 28.8008 13.9698 28.8008 14.9595C28.8008 19.0447 25.0507 22.3567 20.4248 22.3569C17.5879 22.3569 15.0817 21.1101 13.5664 19.2046C12.7527 19.8152 11.7277 20.1811 10.6123 20.1812C7.96896 20.1812 5.82544 18.1359 5.8252 15.6128C5.8252 14.8793 6.00725 14.1861 6.3291 13.5718C3.26465 12.1673 1.51803 10.195 0 8.78564C2.39783 9.73325 4.16686 10.0685 5.60449 9.86084C5.43712 9.3386 5.34572 8.78669 5.3457 8.21533C5.3457 4.97111 8.239 2.34141 11.8076 2.34131C12.5053 2.34131 13.1771 2.44242 13.8066 2.62842C15.3948 1.3642 17.4548 0.600098 19.7061 0.600098Z"
            fill="url(#paint0_linear_4_55)"
          />
        </g>
        <defs>
          <filter
            id="filter0_ii_4_55"
            x="-0.84"
            y="-0.239902"
            width="30.4808"
            height="23.4368"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.84" dy="0.84" />
            <feGaussianBlur stdDeviation="6.6" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_4_55"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-0.84" dy="-0.84" />
            <feGaussianBlur stdDeviation="2.4" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_4_55"
              result="effect2_innerShadow_4_55"
            />
          </filter>
          <linearGradient
            id="paint0_linear_4_55"
            x1="0"
            y1="11.4785"
            x2="47.435"
            y2="14.0574"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.287236" stop-color="#ABDD95" />
            <stop offset="1" stop-color="#FEFEFF" />
          </linearGradient>
        </defs>
      </LogoIcon>
      <LogoText>숨쉬어</LogoText>
    </LogoContainer>
  );
}
