// 피그마 1280×832 기준 변환 유틸리티

// 피그마 기준 크기
const FIGMA_WIDTH = 1280;
const FIGMA_HEIGHT = 832;

// 브라우저 기본 폰트 크기
const BASE_FONT_SIZE = 16;

/**
 * 피그마 px를 rem으로 변환
 * @param {number} px - 피그마의 px 값
 * @returns {string} rem 값
 */
export const pxToRem = (px) => {
  return `${px / BASE_FONT_SIZE}rem`;
};

/**
 * 피그마 px를 vw로 변환 (너비 기준)
 * @param {number} px - 피그마의 px 값
 * @returns {string} vw 값
 */
export const pxToVw = (px) => {
  return `${(px / FIGMA_WIDTH) * 100}vw`;
};

/**
 * 피그마 px를 vh로 변환 (높이 기준)
 * @param {number} px - 피그마의 px 값
 * @returns {string} vh 값
 */
export const pxToVh = (px) => {
  return `${(px / FIGMA_HEIGHT) * 100}vh`;
};

/**
 * 피그마 좌표를 상대 위치로 변환
 * @param {number} x - 피그마 X 좌표
 * @param {number} y - 피그마 Y 좌표
 * @returns {object} { left, top } vw/vh 값
 */
export const figmaPositionToRelative = (x, y) => {
  return {
    left: `${(x / FIGMA_WIDTH) * 100}vw`,
    top: `${(y / FIGMA_HEIGHT) * 100}vh`,
  };
};

/**
 * 피그마 크기를 상대 크기로 변환
 * @param {number} width - 피그마 너비
 * @param {number} height - 피그마 높이
 * @returns {object} { width, height } vw/vh 값
 */
export const figmaSizeToRelative = (width, height) => {
  return {
    width: `${(width / FIGMA_WIDTH) * 100}vw`,
    height: `${(height / FIGMA_HEIGHT) * 100}vh`,
  };
};

/**
 * 피그마 값을 반응형으로 스케일링 (clamp 사용)
 * @param {number} figmaValue - 피그마의 px 값
 * @param {number} minScale - 최소 스케일 (기본값: 0.8)
 * @param {number} maxScale - 최대 스케일 (기본값: 1.2)
 * @returns {string} clamp 값
 */
export const pxToClamp = (figmaValue, minScale = 0.8, maxScale = 1.2) => {
  const minValue = figmaValue * minScale;
  const maxValue = figmaValue * maxScale;
  return `clamp(${minValue}px, ${figmaValue}px * (100vw / ${FIGMA_WIDTH}), ${maxValue}px)`;
};

/**
 * 피그마 값을 calc로 스케일링
 * @param {number} figmaValue - 피그마의 px 값
 * @returns {string} calc 값
 */
export const pxToCalc = (figmaValue) => {
  return `calc(${figmaValue}px * (100vw / ${FIGMA_WIDTH}))`;
};

/**
 * 피그마 값을 반응형 rem으로 변환
 * @param {number} figmaValue - 피그마의 px 값
 * @param {number} minScale - 최소 스케일 (기본값: 0.8)
 * @param {number} maxScale - 최대 스케일 (기본값: 1.2)
 * @returns {string} clamp rem 값
 */
export const pxToResponsiveRem = (
  figmaValue,
  minScale = 0.8,
  maxScale = 1.2
) => {
  const minRem = (figmaValue * minScale) / BASE_FONT_SIZE;
  const maxRem = (figmaValue * maxScale) / BASE_FONT_SIZE;
  const baseRem = figmaValue / BASE_FONT_SIZE;
  return `clamp(${minRem}rem, ${baseRem}rem * (100vw / ${FIGMA_WIDTH}), ${maxRem}rem)`;
};

// 자주 사용되는 변환값들
export const commonSizes = {
  // 간격
  spacing: {
    xs: pxToRem(4), // 4px
    sm: pxToRem(8), // 8px
    md: pxToRem(16), // 16px
    lg: pxToRem(24), // 24px
    xl: pxToRem(32), // 32px
    xxl: pxToRem(48), // 48px
  },

  // 폰트 크기
  fontSize: {
    xs: pxToRem(12), // 12px
    sm: pxToRem(14), // 14px
    base: pxToRem(16), // 16px
    lg: pxToRem(18), // 18px
    xl: pxToRem(20), // 20px
    "2xl": pxToRem(24), // 24px
    "3xl": pxToRem(30), // 30px
    "4xl": pxToRem(36), // 36px
  },

  // 자간
  letterSpacing: {
    tight: "0.025em", // 0.4px
    normal: "0.06em", // 0.96px
    wide: "0.1em", // 1.6px
  },
};

// 반응형 변환값들
export const responsiveSizes = {
  // 반응형 간격
  spacing: {
    xs: pxToClamp(4), // 4px
    sm: pxToClamp(8), // 8px
    md: pxToClamp(16), // 16px
    lg: pxToClamp(24), // 24px
    xl: pxToClamp(32), // 32px
    xxl: pxToClamp(48), // 48px
  },

  // 반응형 폰트 크기
  fontSize: {
    xs: pxToResponsiveRem(12), // 12px
    sm: pxToResponsiveRem(14), // 14px
    base: pxToResponsiveRem(16), // 16px
    lg: pxToResponsiveRem(18), // 18px
    xl: pxToResponsiveRem(20), // 20px
    "2xl": pxToResponsiveRem(24), // 24px
    "3xl": pxToResponsiveRem(30), // 30px
    "4xl": pxToResponsiveRem(36), // 36px
  },
};
