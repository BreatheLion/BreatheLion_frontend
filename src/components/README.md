# Components 디렉토리

이 디렉토리는 재사용 가능한 컴포넌트들을 체계적으로 관리합니다.

## 디렉토리 구조

### `/common`

- **로고, 버튼, 아이콘** 등 여러 페이지에서 공통으로 사용되는 컴포넌트
- 예: `Logo.jsx`, `Button.jsx`

### `/layout`

- **헤더, 푸터, 사이드바** 등 레이아웃 관련 컴포넌트
- 예: `Header.jsx`, `Footer.jsx`

### `/ui`

- **카드, 모달, 알림** 등 UI 요소들
- 예: `Card.jsx`, `Modal.jsx`

## 사용법

```jsx
// 다른 컴포넌트에서 import하여 사용
import Logo from "../components/common/Logo";
import Button from "../components/common/Button";
import Header from "../components/layout/Header";
```

## 컴포넌트 작성 규칙

1. **함수형 컴포넌트** 사용
2. **styled-components** 사용
3. **props**를 통한 재사용성 확보
4. **한국어 주석** 사용
