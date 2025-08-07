// 피그마 뷰포트 시뮬레이션 유틸리티
const FIGMA_WIDTH = 1280;
const FIGMA_HEIGHT = 832;

/**
 * 피그마 좌표를 실제 화면 좌표로 변환
 * @param {number} x - 피그마 X 좌표 (0-1280)
 * @param {number} y - 피그마 Y 좌표 (0-832)
 * @returns {object} 실제 화면에서의 위치 (vw, vh)
 */
export const figmaToViewport = (x, y) => {
  return {
    left: `${(x / FIGMA_WIDTH) * 100}vw`,
    top: `${(y / FIGMA_HEIGHT) * 100}vh`,
  };
};

/**
 * 피그마 크기를 실제 화면 크기로 변환
 * @param {number} width - 피그마 너비
 * @param {number} height - 피그마 높이
 * @returns {object} 실제 화면에서의 크기 (vw, vh)
 */
export const figmaSizeToViewport = (width, height) => {
  return {
    width: `${(width / FIGMA_WIDTH) * 100}vw`,
    height: `${(height / FIGMA_HEIGHT) * 100}vh`,
  };
};

/**
 * 피그마 값을 vw로 변환 (너비 기준)
 * @param {number} value - 피그마 값
 * @returns {string} vw 값
 */
export const figmaToVw = (value) => {
  return `${(value / FIGMA_WIDTH) * 100}vw`;
};

/**
 * 피그마 값을 vh로 변환 (높이 기준)
 * @param {number} value - 피그마 값
 * @returns {string} vh 값
 */
export const figmaToVh = (value) => {
  return `${(value / FIGMA_HEIGHT) * 100}vh`;
};

/**
 * 피그마 뷰포트 컨테이너 스타일
 */
export const figmaViewportStyle = `
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #ffffff;
`;

/**
 * 피그마 요소를 절대 위치로 배치하는 헬퍼
 * @param {number} x - 피그마 X 좌표
 * @param {number} y - 피그마 Y 좌표
 * @param {number} width - 피그마 너비
 * @param {number} height - 피그마 높이
 * @returns {object} styled-components용 스타일 객체
 */
export const figmaElementStyle = (x, y, width, height) => ({
  position: "absolute",
  left: `${(x / FIGMA_WIDTH) * 100}vw`,
  top: `${(y / FIGMA_HEIGHT) * 100}vh`,
  width: `${(width / FIGMA_WIDTH) * 100}vw`,
  height: `${(height / FIGMA_HEIGHT) * 100}vh`,
});
