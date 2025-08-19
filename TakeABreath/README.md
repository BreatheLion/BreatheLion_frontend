# TakeABreath Frontend

React + Vite 기반의 TakeABreath 프론트엔드 프로젝트입니다.

## 🚀 시작하기

### 1. 의존성 설치

```bash
yarn install
```

### 2. 환경변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
# API Base URL (실제 서버 URL)
VITE_API_BASE_URL=https://api.takeabreath.com

# JSON Server URL (개발용)
VITE_JSON_SERVER_URL=http://localhost:3001

# 현재 사용할 API 타입 (json-server | real-api)
VITE_API_TYPE=json-server
```

### 3. 개발 서버 실행

```bash
# JSON Server 실행 (포트 3001)
yarn server

# 개발 서버 실행 (포트 3000)
yarn dev
```

## 🔧 API 설정

### 개발 환경

- **JSON Server**: `http://localhost:3001`
- **API 타입**: `json-server`

### 프로덕션 환경

- **실제 API**: 환경변수 `VITE_API_BASE_URL`에서 설정
- **API 타입**: `real-api`

### API 전환 방법

`src/config/api.js` 파일에서 `API_TYPE`을 변경하여 JSON Server와 실제 API 간 전환이 가능합니다.

## 📁 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── pages/         # 페이지 컴포넌트
├── config/        # 설정 파일
├── utils/         # 유틸리티 함수
└── assets/        # 정적 파일
```

## 🔐 보안

- API Base URL은 환경변수로 관리됩니다
- `.env` 파일은 `.gitignore`에 포함되어 Git에 커밋되지 않습니다
- 프로덕션 배포 시 환경변수를 통해 실제 API URL을 설정하세요
