# 피그마 → 반응형 웹 변환 가이드

## 문제 상황

- 피그마: 1280×832 고정 크기
- 웹: 다양한 화면 크기 (320px ~ 1920px+)

## 해결 방법

### 1. 반응형 변환 함수 사용

```javascript
import {
  pxToClamp,
  pxToResponsiveRem,
  pxToCalc,
} from "../utils/figmaConverter";

// 피그마 48px → 반응형 크기 (최소 0.8배, 최대 1.2배)
const fontSize = pxToResponsiveRem(48, 0.8, 1.2);

// 피그마 24px → clamp로 제한된 반응형 크기
const spacing = pxToClamp(24);

// 피그마 600px → calc로 스케일링
const width = pxToCalc(600);
```

### 2. 브레이크포인트 활용

```javascript
import { media } from "../styles/breakpoints";

const ResponsiveComponent = styled.div`
  font-size: 16px;

  ${media.mobile} {
    font-size: 14px;
  }

  ${media.tablet} {
    font-size: 16px;
  }

  ${media.desktop} {
    font-size: 18px;
  }
`;
```

### 3. 컨테이너 선택

#### ResponsiveContainer

- 피그마 최대 너비(1280px)를 기준으로 반응형
- 모든 화면 크기에서 적절한 패딩 제공

#### FigmaAspectContainer

- 피그마 비율(1280:832) 유지
- 모바일에서는 다른 비율 적용

#### FigmaPositionedContainer

- 피그마 좌표 기반 절대 위치 요소에 사용

### 4. 실제 사용 예시

```javascript
// 피그마에서 가져온 값들
const figmaValues = {
  titleSize: 48, // 48px
  bodySize: 18, // 18px
  spacing: 24, // 24px
  buttonPadding: 16, // 16px
  borderRadius: 12, // 12px
};

// 반응형으로 변환
const styles = {
  title: pxToResponsiveRem(figmaValues.titleSize),
  body: pxToResponsiveRem(figmaValues.bodySize),
  margin: pxToClamp(figmaValues.spacing),
  padding: pxToClamp(figmaValues.buttonPadding),
  radius: pxToClamp(figmaValues.borderRadius),
};
```

### 5. 권장사항

1. **폰트 크기**: `pxToResponsiveRem()` 사용
2. **간격/패딩**: `pxToClamp()` 사용
3. **너비/높이**: `pxToCalc()` 또는 `pxToClamp()` 사용
4. **위치**: `figmaPositionToRelative()` 사용
5. **컨테이너**: `ResponsiveContainer` 사용

### 6. 주의사항

- 너무 작은 화면에서는 최소 크기 제한
- 너무 큰 화면에서는 최대 크기 제한
- 모바일에서는 터치 친화적인 크기 유지
- 접근성을 고려한 최소 폰트 크기 보장
