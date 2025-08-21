# TakeABreath API Documentation

## 개요

TakeABreath 프로젝트의 프론트엔드-백엔드 통신을 위한 API 명세서입니다.

## API 엔드포인트

### 0. 파일 관리(사전서명) API

업로드/미리보기/삭제를 위한 사전서명 기반 API입니다. Base URL은 백엔드에서 제공하는 실제 API 주소를 사용합니다.

- 업로드용 URL 발급: `POST /api/evidence/presigned-url`
  - Body: `{ "prefix": "records/{record_id}/evidence", "contentType": "image/jpeg", "contentLength": 123456 }`
  - Response: `{ "url": "https://...", "s3Key": "records/3/evidence/uuid.png" }`
- 읽기용 URL 발급: `GET /api/evidence/presigned-url/read?s3Key={s3Key}&minutes=10`
  - Response: `{ "url": "https://..." }`
- 객체 삭제: `POST /api/evidence/delete-by-key?s3Key={s3Key}`

설명:

- 업로드는 발급받은 presigned URL에 `PUT`으로 파일을 전송합니다. 헤더의 `Content-Type`에는 실제 MIME 타입을 사용합니다(예: `image/jpeg`).
- 프론트엔드는 파일을 "선택 즉시 업로드"하며, 최종 저장 시에는 해당 파일들의 `s3Key`만 JSON으로 전송합니다.

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

### 3. 기록 상세 조회

**엔드포인트**: `GET /api/records/{record_id}/`

**응답 (Response)**:

```json
{
  "record_id": 1,
  "title": "00커피 사장님 막말",
  "category": ["언어폭력"],
  "content": "오늘 00커피에서 사장님이 막말을 하셨다",
  "severity": 2,
  "location": "상도동 00 커피",
  "created_at": "2025-08-05T10:00:00",
  "occurred_at": "2025-08-01T14:30:00",
  "assailant": ["사장님"],
  "witness": ["알바생"],
  "drawer_name": "상도동",
  "evidences": [
    {
      "id": 1,
      "record_id": 1,
      "type": "audio",
      "filename": "사장님 막말.mp3",
      "S3url": "https://example.com/audio.mp3",
      "uploaded_at": "2025-08-05T10:00:00"
    }
  ]
}
```

**설명**:

- RecordDetailPage에서 기록의 상세 정보를 조회할 때 사용
- 증거 자료 목록도 함께 반환

---

### 3.5 기록 저장

**엔드포인트**: `POST /api/records/save/`

**요청 (Request)**:

```json
{
  "record_id": 3,
  "title": "동방에서 일어난 무시무시한 사건",
  "categories": ["괴롭힘"],
  "content": "오늘 해승이가 해원이를 괴롭혔다",
  "severity": 1,
  "location": "동방",
  "created_at": "2025-08-05T10:00:00",
  "occurred_at": "2025-08-01T14:30:00",
  "assailant": ["서해승", "이예림"],
  "witness": ["오영록"],
  "drawer": "폴더 이름",
  "evidences": [
    {
      "type": "IMAGE",
      "filename": "IMG_0101.png",
      "s3Key": "records/3/evidence/...png"
    },
    {
      "type": "AUDIO",
      "filename": "memo.m4a",
      "s3Key": "records/3/evidence/...m4a"
    }
  ]
}
```

설명:

- `categories`는 1개 이상 필수입니다.
- `evidences[].type`은 `AUDIO/IMAGE/VIDEO`만 사용합니다.
- 첨부는 presigned 업로드 완료 후 받은 `s3Key`를 전송합니다.

---

### 4. 제목 수정

**엔드포인트**: `PUT /api/records/{record_id}/title`

**요청 (Request)**:

```json
{
  "title": "새로운 제목"
}
```

**응답 (Response)**:

```json
{
  "success": true,
  "message": "제목이 수정되었습니다"
}
```

**설명**:

- RecordDetailPage에서 기록 제목을 수정할 때 사용

---

### 5. 기록 삭제

**엔드포인트**: `DELETE /api/records/{record_id}/delete/`

**응답 (Response)**:

```json
{
  "success": true,
  "message": "기록이 삭제되었습니다"
}
```

**설명**:

- RecordDetailPage에서 기록을 삭제할 때 사용

---

### 6. 폴더 변경

**엔드포인트**: `PATCH /api/records/{record_id}/update/`

**요청 (Request)**:

```json
{
  "drawer_id": 1
}
```

**응답 (Response)**:

```json
{
  "success": true,
  "message": "폴더가 변경되었습니다"
}
```

**설명**:

- RecordDetailPage에서 기록의 저장 폴더를 변경할 때 사용

---

### 7. 채팅 히스토리 조회

**엔드포인트**: `GET /api/records/{record_id}/chat/`

**응답 (Response)**:

```json
{
  "data": {
    "messages": [
      {
        "role": "user",
        "content": "오늘 너무 힘들었어",
        "message_time": "21:19",
        "message_date": "2025-08-08"
      },
      {
        "role": "assistant",
        "content": "어 왜 힘들었어?",
        "message_time": "21:20",
        "message_date": "2025-08-08"
      }
    ]
  }
}
```

**설명**:

- ChatViewPage에서 특정 기록의 채팅 히스토리를 조회할 때 사용

---

### 8. 요약 데이터 조회

**엔드포인트**: `GET /api/drawers/{drawer_id}/helpai/`

**응답 (Response)**:

```json
{
  "drawer_id": 3,
  "drawer_name": "직장 내 갈등 사례 모음",
  "categories": ["직장 내 관계", "직장 내 괴롭힘"],
  "assailant": ["김OO 팀장"],
  "record_count": 10,
  "summary": "회의 중 새로운 제안을 발표했는데 무시당하고, 5분 뒤 상사가 같은 내용을 말함. 지난 회의에서도 비슷한 일이 있었음.",
  "actions": [
    "아이디어를 제출할 때 익명 혹은 사전에 메일로 정리해 공개적으로 문서화하는 방법 사용",
    "회의 후 1:1 멘토나 동료에게 피드백을 요청하여 존재감을 회복"
  ],
  "related_laws": [],
  "organizations": [
    {
      "name": "고용노동부",
      "description": "직장 내 괴롭힘 익명신고센터",
      "url": "https://www.moel.go.kr"
    },
    {
      "name": "노무사",
      "description": "노동 관련 법률 상담 가능",
      "url": "https://www.nomos.or.kr"
    }
  ]
}
```

**설명**:

- SummaryPage에서 특정 폴더의 요약 정보를 조회할 때 사용

---

### 9. 타임라인 조회

**엔드포인트**: `POST /api/drawers/{drawer_id}/timeline/`

**요청 (Request)**:

```json
{
  "keyword": "사내"
}
```

**응답 (Response)**:

```json
[
  {
    "record_id": 1,
    "title": "공부",
    "location": "팀회의실",
    "category": "언어폭력",
    "summary": "내가 낸 아이디어를 무시하고~",
    "occurred_at": "2025-06-13"
  },
  {
    "record_id": 3,
    "title": "사내사내",
    "location": "사내 메신저",
    "category": "언어폭력",
    "summary": "메세지에 인사 없이 지시만~",
    "occurred_at": "2025-06-26"
  }
]
```

**설명**:

- SummaryPage에서 특정 폴더의 타임라인을 조회할 때 사용
- `keyword` 파라미터로 검색 가능

---

### 10. 폴더 목록 조회

**엔드포인트**: `GET /api/drawers/list/`

**응답 (Response)**:

```json
[
  {
    "drawer_id": 1,
    "name": "상도동"
  },
  {
    "drawer_id": 2,
    "name": "회기동 함박"
  },
  {
    "drawer_id": 3,
    "name": "사장님"
  }
]
```

**설명**:

- FolderChangeModal에서 폴더 목록을 조회할 때 사용

---

## 🔄 현재 하드코딩된 더미 데이터 (API 연동 필요)

### 1. RecentRecordsPage - 기록 목록

**현재 하드코딩된 데이터**:

```jsx
// src/pages/RecentRecordsPage.jsx
// 주석 처리된 API 호출
// const response = await axios.get("/api/records/");

// 현재는 하드코딩된 더미 데이터 사용
```

**필요한 API**:

- `GET /api/records/` - 기록 목록 조회

---

### 2. IncidentRecordsPage - 폴더 목록

**현재 하드코딩된 데이터**:

```jsx
// src/pages/IncidentRecordsPage.jsx
// 주석 처리된 API 호출
// const response = await axios.get("/api/drawers/");
// const response = await axios.post("/api/drawers/", { name: folderName });

// 현재는 하드코딩된 더미 데이터 사용
```

**필요한 API**:

- `GET /api/drawers/` - 폴더 목록 조회
- `POST /api/drawers/` - 새 폴더 생성

---

### 3. TableRow - 개별 기능들

**현재 하드코딩된 기능들**:

```jsx
// src/components/ui/TableRow.jsx
// 폴더 변경, 제목 수정, 파일 다운로드 기능이 미구현
// 현재는 콘솔 로그만 출력
```

**필요한 API**:

- `PUT /api/records/{id}/folder/` - 기록 폴더 변경
- `PUT /api/records/{id}/title/` - 기록 제목 수정
- `GET /api/evidences/{id}/download/` - 파일 다운로드

---

### 4. ChatPage - 가짜 API 응답

**현재 하드코딩된 설정**:

```javascript
// src/pages/ChatPage.jsx
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

### 5. MainPage - Fallback 응답

**현재 하드코딩된 데이터**:

```javascript
// src/pages/MainPage.jsx
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

- `GET /api/records/{id}/` ✅ (구현됨)

**기록 삭제**

- `DELETE /api/records/{id}/delete/` ✅ (구현됨)

**기록 수정**

- `PUT /api/records/{id}/title` ✅ (구현됨)

### 2. 폴더 관리 API

**폴더 목록 조회**

- `GET /api/drawers/list/` ✅ (구현됨)
- `GET /api/drawers/` ❌ (미구현)

**폴더 생성**

- `POST /api/drawers/` ❌ (미구현)
- Body: `{ "name": "폴더명" }`

**폴더 수정**

- `PUT /api/drawers/{id}/` ❌ (미구현)
- Body: `{ "name": "새 폴더명" }`

**폴더 삭제**

- `DELETE /api/drawers/{id}/` ❌ (미구현)

**기록 폴더 변경**

- `PATCH /api/records/{id}/update/` ✅ (구현됨)
- Body: `{ "drawer_id": 1 }`

### 3. 파일 관리 API

**파일 업로드**

- `POST /api/evidences/upload/` ❌ (미구현)
- Content-Type: `multipart/form-data`

**파일 다운로드**

- `GET /api/evidences/{id}/download/` ❌ (미구현)

**파일 삭제**

- `DELETE /api/evidences/{id}/` ❌ (미구현)

### 4. AI/요약 관련 API

**요약 데이터 조회**

- `GET /api/drawers/{drawer_id}/helpai/` ✅ (구현됨)

**타임라인 조회**

- `POST /api/drawers/{drawer_id}/timeline/` ✅ (구현됨)

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
3. RecordDetailPage 기록 상세 조회
4. RecordDetailPage 제목 수정/삭제/폴더 변경
5. ChatViewPage 채팅 히스토리 조회
6. SummaryPage 요약 데이터 및 타임라인 조회
7. FolderChangeModal 폴더 목록 조회
8. 로딩 상태 표시 ("응답 중입니다", "기록 완료 중...")
9. 자동 스크롤 (부드러운 애니메이션)
10. 에러 처리 및 fallback 메시지
11. 브라우저 뒤로가기 지원
12. 모달 뒤로가기 제외 처리

### 🔄 서버 연동 대기 중

- 실제 서버 응답으로 교체
- 파일 첨부 기능 (현재 비활성화)
- 동적 chat_session_id 관리
- **RecentRecordsPage 기록 목록 API 연동**
- **IncidentRecordsPage 폴더 관리 API 연동**
- **TableRow 개별 기능 API 연동**

### 🚧 하드코딩된 데이터 (수정 필요)

1. **RecentRecordsPage**: 기록 목록 API 호출 주석 처리됨
2. **IncidentRecordsPage**: 폴더 관리 API 호출 주석 처리됨
3. **ChatPage**: 가짜 API 응답 사용 (`USE_FAKE_API = true`)
4. **MainPage**: fallback 응답 사용
5. **TableRow**: 개별 기능 미구현 (콘솔 로그만)

---

## 기술 스택

- **프론트엔드**: React + Vite + styled-components
- **HTTP 클라이언트**: axios, fetch
- **패키지 매니저**: yarn
- **네비게이션**: window.navigation 객체 + 브라우저 히스토리 API

---

## 참고사항

- 모든 API 호출은 axios 또는 fetch를 사용
- 에러 발생 시 fallback 메시지로 대체
- 로딩 중에는 입력 필드 비활성화
- 파일 첨부 기능은 향후 구현 예정
- **현재 많은 기능이 하드코딩된 더미 데이터로 구현됨**
- **백엔드 API 연동 시 더미 데이터 제거 필요**
- **브라우저 뒤로가기 지원으로 사용자 경험 개선**
- **모달 뒤로가기 제외로 UX 일관성 유지**
