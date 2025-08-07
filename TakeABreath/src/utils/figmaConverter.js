/**
 * 피그마 디자인을 웹으로 변환하는 유틸리티 함수들
 * 기준: 1280×832px 피그마 레이아웃
 */

// 기준 크기 설정
const FIGMA_WIDTH = 1280;
const FIGMA_HEIGHT = 832;
const BASE_FONT_SIZE = 16;

/**
 * 피그마 px를 rem으로 변환
 * @param {number} px - 피그마의 픽셀 값
 * @returns {string} rem 값
 */
export const pxToRem = (px) => {
  return `${px / BASE_FONT_SIZE}rem`;
};

/**
 * 피그마 px를 vw로 변환
 * @param {number} px - 피그마의 픽셀 값
 * @returns {string} vw 값
 */
export const pxToVw = (px) => {
  return `${(px / FIGMA_WIDTH) * 100}vw`;
};

/**
 * 피그마 px를 vh로 변환
 * @param {number} px - 피그마의 픽셀 값
 * @returns {string} vh 값
 */
export const pxToVh = (px) => {
  return `${(px / FIGMA_HEIGHT) * 100}vh`;
};

/**
 * 자주 사용되는 크기들
 */
export const commonSizes = {
  // 폰트 크기
  fontSize: {
    xs: pxToRem(12),
    sm: pxToRem(14),
    base: pxToRem(16),
    lg: pxToRem(18),
    xl: pxToRem(20),
    "2xl": pxToRem(24),
    "3xl": pxToRem(30),
    "4xl": pxToRem(36),
  },

  // 간격
  spacing: {
    xs: pxToRem(4),
    sm: pxToRem(8),
    md: pxToRem(16),
    lg: pxToRem(24),
    xl: pxToRem(32),
    "2xl": pxToRem(48),
    "3xl": pxToRem(64),
  },

  // 레이아웃
  container: {
    sm: pxToVw(640),
    md: pxToVw(768),
    lg: pxToVw(1024),
    xl: pxToVw(1280),
  },
};

/**
 * 피그마 좌표를 웹 좌표로 변환
 * @param {number} x - 피그마 X 좌표
 * @param {number} y - 피그마 Y 좌표
 * @returns {object} 변환된 좌표
 */
export const figmaToWebPosition = (x, y) => {
  return {
    left: pxToVw(x),
    top: pxToVh(y),
  };
};

/**
 * 피그마 크기를 웹 크기로 변환
 * @param {number} width - 피그마 너비
 * @param {number} height - 피그마 높이
 * @returns {object} 변환된 크기
 */
export const figmaToWebSize = (width, height) => {
  return {
    width: pxToVw(width),
    height: pxToVh(height),
  };
};
