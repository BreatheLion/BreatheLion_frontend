# 간단한 피그마 → 웹 변환 가이드

## 핵심 아이디어

**전체 화면을 1280×832로 가정하고 작업하기**

피그마에서 요소의 위치와 크기를 그대로 사용할 수 있습니다!

## 사용 방법

### 1. 기본 구조

```jsx
import {
  FigmaViewport,
  FigmaText,
  FigmaButton,
} from "../components/layout/FigmaViewport";

function MyPage() {
  return <FigmaViewport>{/* 피그마 요소들을 여기에 배치 */}</FigmaViewport>;
}
```

### 2. 텍스트 요소

```jsx
// 피그마에서: 위치 (100, 200), 폰트 크기 24px
<FigmaText x={100} y={200} fontSize={24} color="#333333" fontWeight="bold">
  안녕하세요!
</FigmaText>
```

### 3. 버튼 요소

```jsx
// 피그마에서: 위치 (200, 300), 크기 (150, 40)
<FigmaButton
  x={200}
  y={300}
  width={150}
  height={40}
  fontSize={16}
  background="#007AFF"
  borderRadius={8}
>
  클릭하세요
</FigmaButton>
```

### 4. 일반 요소

```jsx
// 피그마에서: 위치 (50, 100), 크기 (200, 150)
<FigmaElement
  x={50}
  y={100}
  width={200}
  height={150}
  style={{ backgroundColor: "#f0f0f0" }}
/>
```

## 장점

✅ **피그마 값 그대로 사용** - 변환 계산 불필요  
✅ **직관적** - 피그마 좌표 그대로 입력  
✅ **자동 반응형** - 모바일에서 자동 조정  
✅ **간단함** - 복잡한 계산 없음

## 주의사항

- 피그마 좌표는 (0, 0)이 왼쪽 상단
- x는 0~1280, y는 0~832 범위
- 모바일에서는 자동으로 레이아웃 조정됨

## 실제 사용 예시

```jsx
// 피그마 디자인을 보고 그대로 구현
<FigmaViewport>
  {/* 헤더 */}
  <FigmaText x={640} y={50} fontSize={32} fontWeight="bold">
    제목
  </FigmaText>

  {/* 메인 콘텐츠 */}
  <FigmaText x={640} y={150} fontSize={18}>
    설명 텍스트
  </FigmaText>

  {/* 버튼 */}
  <FigmaButton x={640} y={250} width={200} height={50}>
    버튼
  </FigmaButton>
</FigmaViewport>
```

이제 피그마에서 보는 그대로 웹에서 구현할 수 있습니다! 🎉
