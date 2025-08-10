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
