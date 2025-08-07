import { pxToRem, pxToVw, pxToVh, commonSizes } from "./figmaConverter";

/**
 * 피그마 px를 rem으로 변환하는 styled-components 헬퍼
 */
export const rem = (px) => pxToRem(px);

/**
 * 피그마 px를 vw로 변환하는 styled-components 헬퍼
 */
export const vw = (px) => pxToVw(px);

/**
 * 피그마 px를 vh로 변환하는 styled-components 헬퍼
 */
export const vh = (px) => pxToVh(px);

/**
 * 피그마 폰트 크기를 rem으로 변환
 */
export const fontSize = (px) => pxToRem(px);

/**
 * 피그마 간격을 rem으로 변환
 */
export const spacing = (px) => pxToRem(px);

/**
 * 자주 사용되는 크기들
 */
export const sizes = commonSizes;

/**
 * 피그마 색상값을 CSS 변수로 매핑
 */
export const colors = {
  primary: "var(--primary-color)",
  secondary: "var(--secondary-color)",
  // 필요에 따라 추가 색상 정의
};

/**
 * 피그마 스타일을 한번에 적용하는 헬퍼
 * @param {object} figmaStyles - 피그마에서 가져온 스타일 객체
 */
export const figmaStyles = (figmaStyles) => {
  const styles = {};

  if (figmaStyles.fontSize) {
    styles.fontSize = pxToRem(figmaStyles.fontSize);
  }

  if (figmaStyles.width) {
    styles.width = pxToVw(figmaStyles.width);
  }

  if (figmaStyles.height) {
    styles.height = pxToVh(figmaStyles.height);
  }

  if (figmaStyles.padding) {
    styles.padding = pxToRem(figmaStyles.padding);
  }

  if (figmaStyles.margin) {
    styles.margin = pxToRem(figmaStyles.margin);
  }

  if (figmaStyles.letterSpacing) {
    styles.letterSpacing = pxToRem(figmaStyles.letterSpacing);
  }

  return styles;
};
