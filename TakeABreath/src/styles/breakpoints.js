// 반응형 브레이크포인트 정의
export const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1280px",
  ultraWide: "1440px",
};

// 미디어 쿼리 유틸리티 함수
export const media = {
  mobile: `@media (max-width: ${breakpoints.tablet})`,
  tablet: `@media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
  desktop: `@media (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.wide})`,
  wide: `@media (min-width: ${breakpoints.wide})`,
  ultraWide: `@media (min-width: ${breakpoints.ultraWide})`,
};

// 피그마 기준 크기 (1280px)를 기준으로 한 스케일링 함수
export const scaleFromFigma = (figmaValue, baseWidth = 1280) => {
  return `calc(${figmaValue}px * (100vw / ${baseWidth}))`;
};

// 최소/최대 크기 제한이 있는 스케일링 함수
export const scaleWithClamp = (
  figmaValue,
  minScale = 0.8,
  maxScale = 1.2,
  baseWidth = 1280
) => {
  const minValue = figmaValue * minScale;
  const maxValue = figmaValue * maxScale;
  return `clamp(${minValue}px, ${figmaValue}px * (100vw / ${baseWidth}), ${maxValue}px)`;
};
