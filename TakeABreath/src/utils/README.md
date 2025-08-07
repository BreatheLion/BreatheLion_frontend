# 피그마 변환 시스템

1280×832 피그마 레이아웃을 웹에 자동 변환하는 시스템입니다.

## 사용법

### 1. 기본 변환 함수

```jsx
import { pxToRem, pxToVw, pxToVh } from "../utils/figmaConverter";

// px → rem 변환
const fontSize = pxToRem(24); // "1.5rem"

// px → vw 변환 (너비 기준)
const width = pxToVw(200); // "15.625vw"

// px → vh 변환 (높이 기준)
const height = pxToVh(100); // "12.019vh"
```

### 2. styled-components에서 사용

```jsx
import styled from "styled-components";
import { rem, fontSize, colors } from "../utils/styledHelpers";

const StyledComponent = styled.div`
  font-size: ${fontSize(24)}; // 24px → 1.5rem
  padding: ${rem(16)}; // 16px → 1rem
  color: ${colors.primary}; // CSS 변수 사용
  width: ${vw(200)}; // 200px → 15.625vw
`;
```

### 3. 피그마 스타일 객체 변환

```jsx
import { figmaStyles } from "../utils/styledHelpers";

const figmaStyleObject = {
  fontSize: 24,
  width: 200,
  height: 100,
  padding: 16,
  letterSpacing: 0.96,
};

const StyledComponent = styled.div`
  ${figmaStyles(figmaStyleObject)}
`;
```

## 변환 기준

- **기준 크기**: 1280×832px
- **기본 폰트 크기**: 16px
- **변환 공식**:
  - rem = px ÷ 16
  - vw = (px ÷ 1280) × 100
  - vh = (px ÷ 832) × 100

## 권장 사용법

1. **폰트 크기**: `fontSize()` 함수 사용
2. **간격**: `rem()` 함수 사용
3. **레이아웃 크기**: `vw()`, `vh()` 함수 사용
4. **색상**: `colors` 객체 사용
