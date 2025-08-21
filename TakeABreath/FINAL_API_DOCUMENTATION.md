# FINAL_API_DOCUMENTATION

## 개요

TakeABreath 프로젝트의 최종 API 명세서입니다. 각 컴포넌트별로 API 요청 방식, HTTP 메서드, 요청/응답 데이터, props 전달 값을 정리합니다.

---

## MainPage

### API 요청 방식

- **HTTP Method**: `POST`
- **Endpoint**: `/api/chats/start/`
- **Content-Type**: `application/json`

### Request

```json
{
  "message": "사용자가 입력한 메시지 내용"
}
```

### Response

```json
{
  "isSuccess": true,
  "code": "200",
  "message": "채팅성공",
  "data": {
    "session_id": 1,
    "answer": "안녕하세요. 오늘 있으셨던 사건에 대해 이야기해 주셔서 감사합니다. 어떤 일이 있었는지 조금 더 자세히 말씀해 주실 수 있을까요? 어떤 감정을 느끼셨는지도 함께 이야기해 주시면 도움이 될 것 같아요.",
    "message_time": "02:34",
    "message_date": "2025-08-11"
  }
}
```

### Props로 전달하는 값

```javascript
onNavigateToChat({
  userMessage: "사용자 입력 메시지",
  serverResponse: {
    chat_session_id: 1,
    answer: "AI 응답",
    time: "02:34",
    date: "2025-08-11",
  },
  isLoading: false,
});
```

### 주요 로직

- 사용자 입력 메시지를 받아 첫 번째 채팅 세션 시작
- 응답으로 받은 `session_id`를 `chat_session_id`로 매핑
- AI 응답, 시간, 날짜 정보를 ChatPage로 전달
- 에러 시 "채팅 시작에 실패했습니다." 메시지 표시
- localStorage의 기존 채팅 세션 정리

### 콘솔 로깅

- 요청 데이터: `console.log("API 요청 데이터:", requestData)`
- 엔드포인트: `console.log("API 엔드포인트: /api/chats/start/")`
- 응답 데이터: `console.log("API 응답 데이터:", responseData)`

---

## ChatPage

### API 요청 방식

- **HTTP Method**: `POST`
- **Endpoint**: `/api/chats/attach/`
- **Content-Type**: `application/json`

### Request

```json
{
  "chat_session_id": 1,
  "text": "사용자가 입력한 메시지",
  "evidences": [
    {
      "type": "IMAGE",
      "filename": "IMG_0101.png",
      "s3Key": "records/3/evidence/2c3c1c5f-...-a2.png"
    },
    {
      "type": "AUDIO",
      "filename": "memo.m4a",
      "s3Key": "records/3/evidence/9b7d8c...-b0.m4a"
    }
  ]
}
```

### Response

```json
{
  "isSuccess": true,
  "code": "200",
  "message": "채팅성공",
  "data": {
    "answer": "어 고생했어",
    "time": "21:19",
    "date": "2025-08-08"
  }
}
```

### Props로 전달하는 값

```javascript
// MainPage에서 전달받는 props
{
  userMessage: "사용자 입력 메시지",
  serverResponse: {
    chat_session_id: 1,
    answer: "AI 응답",
    time: "02:34",
    date: "2025-08-11"
  },
  isLoading: false
}
```

### 주요 로직

- 사용자 메시지와 첨부 파일 정보를 JSON 형태로 전송
- 첨부 파일은 사전에 S3에 업로드된 후 s3Key만 전송
- `chat_session_id`가 없으면 에러 처리
- 첨부 파일이 없을 때는 `evidences: []` 전송 (추후 확인 필요)
- 에러 시 목업 데이터 사용 (추후 제거 예정)

### 콘솔 로깅

- 요청 데이터: `console.log("API 요청 데이터:", requestData)`
- 엔드포인트: `console.log("API 엔드포인트: /api/chats/attach/")`
- 응답 데이터: `console.log("API 응답 데이터:", serverResponse)`
- 에러 시: `console.log("API 호출 실패, 목업 데이터 사용:", error)`
- 목업 응답: `console.log("목업 응답 데이터:", mockResponse)`

---

## 추가 컴포넌트들

_다른 컴포넌트들의 API 명세는 추후 추가 예정_

---

## 참고사항

- 모든 API 호출은 전역 로깅 시스템을 통해 메서드, URL, 요청 바디가 자동으로 콘솔에 출력됩니다.
- 에러 발생 시 `window.handleApiError`를 통해 일관된 에러 처리가 이루어집니다.
- 로딩 상태는 각 컴포넌트에서 개별적으로 관리됩니다.
