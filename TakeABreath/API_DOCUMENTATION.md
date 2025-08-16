# TakeABreath API Documentation

## 개요

TakeABreath 프로젝트의 프론트엔드-백엔드 통신을 위한 API 명세서입니다.

## API 엔드포인트

### 1. 첫 메시지 전송

**엔드포인트**: `POST /api/records/start/`

**요청 (Request)**:

```json
{
  "message": "오늘 너무 힘들었어",
  "role": "user"
}
```

**응답 (Response)**:

```json
{
  "chat_session_id": 1,
  "answer": "어 왜",
  "time": "21:19",
  "date": "2025-08-08"
}
```

**설명**:

- MainPage에서 첫 메시지를 전송할 때 사용
- `role`은 항상 "user"로 고정
- 응답으로 채팅 세션 ID와 AI 응답을 받음

---

### 2. 채팅 메시지 전송

**엔드포인트**: `POST /api/chats/attach/`

**요청 (Request)**:

```json
{
  "chat_session_id": 1,
  "evidence": null,
  "text": "사용자가 입력한 메시지"
}
```

**응답 (Response)**:

```json
{
  "answer": "어 고생했어",
  "time": "21:19",
  "date": "2025-08-08"
}
```

**설명**:

- ChatPage에서 채팅 메시지를 전송할 때 사용
- `evidence`: 파일 첨부 (현재는 null)
- `text`: 사용자가 입력한 메시지 내용

---

### 3. 기록 완료

**엔드포인트**: `POST /api/chats/end/`

**요청 (Request)**:

```json
{
  "chat_session_id": 1
}
```

**응답 (Response)**:

```json
{
  "record_id": 3,
  "title": "동방에서 일어난 무시무시한 사건",
  "category": ["괴롭힘"],
  "content": "오늘 해승이가 해원이를 괴롭혔다",
  "severity": 1,
  "location": "동방",
  "created_at": "2025-08-05T10:00:00",
  "occurred_at": "2025-08-01T14:30:00",
  "assailant": ["서해승", "이예림"],
  "witness": ["오영록"],
  "drawers": ["00 커피 폭언", "기차역 살인사건"],
  "evidences": [
    {
      "filename": "해원이 욕설 파일",
      "type": "audio",
      "url": "url~~"
    },
    {
      "filename": "폭행 당시 사진",
      "type": "image",
      "url": "url2~~"
    }
  ]
}
```

**설명**:

- ChatPage에서 "기록 마치기" 버튼 클릭 시 사용
- 채팅 세션을 종료하고 기록을 완료
- 상세한 사건 정보와 증거 자료를 포함한 응답

---

## 🔄 현재 하드코딩된 더미 데이터 (API 연동 필요)

### 1. DrawerPage - 기록 목록

**현재 하드코딩된 데이터**:

```jsx
<TableRow
  id="1"
  order="1"
  title="00커피 사장님 막말"
  date="2025. 8. 3."
  location="상도동 00 커피"
  folder="상도동"
/>
<TableRow
  id="2"
  order="2"
  title="00 커피 사장님 무안 줌"
  date="2025. 7. 12."
  location="상도동 00 커피"
  folder="상도동"
/>
```

**필요한 API**:

- `GET /api/records/` - 기록 목록 조회
- `GET /api/records/{id}/` - 기록 상세 조회
- `DELETE /api/records/{id}/` - 기록 삭제

---

### 2. FolderChangeModal - 폴더 목록

**현재 하드코딩된 데이터**:

```javascript
const dummyFolders = [
  { drawer_id: 1, name: "상도동" },
  { drawer_id: 2, name: "회기동 함박" },
  { drawer_id: 3, name: "사장님" },
  { drawer_id: 4, name: "폴더2" },
  { drawer_id: 5, name: "상도동ㄴㅇㄹㄴㅇㄹ" },
  { drawer_id: 6, name: "상도동ㄴㅇㄹ" },
];
```

**필요한 API**:

- `GET /api/drawers/list/` - 폴더 목록 조회
- `POST /api/drawers/` - 새 폴더 생성
- `PUT /api/records/{id}/folder/` - 기록 폴더 변경

---

### 3. ChatPage - 가짜 API 응답

**현재 하드코딩된 설정**:

```javascript
const USE_FAKE_API = true; // 테스트가 끝나면 false로 변경하세요
const SIMULATE_LATENCY_MS = 3000;

// 가짜 응답 데이터
const mockResponse = {
  answer: "어 고생했어",
  time: "21:19",
  date: "2025-08-08",
};
```

**필요한 작업**:

- `USE_FAKE_API`를 `false`로 변경
- 실제 API 호출로 교체

---

### 4. FinishLoadingModal - 기록 완료 응답

**현재 하드코딩된 데이터**:

```javascript
const fallbackData = {
  record_id: 3,
  title: "동방에서 일어난 무시무시한 사건",
  category: ["괴롭힘"],
  content: "오늘 해승이가 해원이를 괴롭혔다",
  severity: 1,
  location: "동방",
  created_at: "2025-08-05T10:00:00",
  occurred_at: "2025-08-01T14:30:00",
  assailant: ["서해승", "이예림"],
  witness: ["오영록"],
  drawers: ["00 커피 폭언", "기차역 살인사건"],
  evidences: [
    {
      filename: "해원이 욕설 파일",
      type: "audio",
      url: "url~~",
    },
    {
      filename: "폭행 당시 사진",
      type: "image",
      url: "url2~~",
    },
  ],
};
```

**필요한 API**:

- `POST /api/chats/end/` - 기록 완료 (이미 정의됨)

---

### 5. MainPage - Fallback 응답

**현재 하드코딩된 데이터**:

```javascript
const fallbackResponse = {
  chat_session_id: 1,
  answer: "해당 메세지가 전송되지 않았습니다",
  time: "21:19",
  date: "2025-08-08",
};
```

**설명**:

- 서버 오프라인 시 사용되는 fallback 응답
- 실제 API 연동 후에도 에러 처리용으로 유지 필요

---

## 📋 추가로 필요한 API 엔드포인트

### 1. 기록 관리 API

**기록 목록 조회**

- `GET /api/records/`
- `GET /api/records/?folder={folder_id}`
- `GET /api/records/?page={page}&limit={limit}`

**기록 상세 조회**

- `GET /api/records/{id}/`

**기록 삭제**

- `DELETE /api/records/{id}/`

**기록 수정**

- `PUT /api/records/{id}/`

### 2. 폴더 관리 API

**폴더 목록 조회**

- `GET /api/drawers/list/`

**폴더 생성**

- `POST /api/drawers/`
- Body: `{ "name": "폴더명" }`

**폴더 수정**

- `PUT /api/drawers/{id}/`
- Body: `{ "name": "새 폴더명" }`

**폴더 삭제**

- `DELETE /api/drawers/{id}/`

**기록 폴더 변경**

- `PUT /api/records/{id}/folder/`
- Body: `{ "drawer_id": 1 }`

### 3. 파일 관리 API

**파일 업로드**

- `POST /api/evidences/upload/`
- Content-Type: `multipart/form-data`

**파일 다운로드**

- `GET /api/evidences/{id}/download/`

**파일 삭제**

- `DELETE /api/evidences/{id}/`

---

## 에러 처리

### 서버 오프라인 시 Fallback 응답

```json
{
  "chat_session_id": 1,
  "answer": "해당 메세지가 전송되지 않았습니다",
  "time": "21:19",
  "date": "2025-08-08"
}
```

### 네트워크 에러 시

- 콘솔에 에러 로그 출력
- 사용자에게 fallback 메시지 표시
- 앱 흐름은 정상적으로 유지

---

## 프론트엔드 구현 상태

### ✅ 완성된 기능

1. MainPage → ChatPage 전환 (첫 메시지)
2. ChatPage 채팅 기능 (메시지 전송)
3. 기록 완료 기능 (기록 마치기)
4. 로딩 상태 표시 ("응답 중입니다", "기록 완료 중...")
5. 자동 스크롤 (부드러운 애니메이션)
6. 에러 처리 및 fallback 메시지

### 🔄 서버 연동 대기 중

- 실제 서버 응답으로 교체
- 파일 첨부 기능 (현재 비활성화)
- 동적 chat_session_id 관리
- **DrawerPage 기록 목록 API 연동**
- **폴더 관리 API 연동**
- **기록 상세/수정/삭제 API 연동**

### 🚧 하드코딩된 데이터 (수정 필요)

1. **DrawerPage**: 기록 목록 하드코딩
2. **FolderChangeModal**: 폴더 목록 하드코딩
3. **ChatPage**: 가짜 API 응답 사용
4. **FinishLoadingModal**: 기록 완료 응답 하드코딩

---

## 기술 스택

- **프론트엔드**: React + Vite + styled-components
- **HTTP 클라이언트**: axios
- **패키지 매니저**: yarn

---

## 참고사항

- 모든 API 호출은 axios를 사용
- 에러 발생 시 fallback 메시지로 대체
- 로딩 중에는 입력 필드 비활성화
- 파일 첨부 기능은 향후 구현 예정
- **현재 많은 기능이 하드코딩된 더미 데이터로 구현됨**
- **백엔드 API 연동 시 더미 데이터 제거 필요**
