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
    "session_id": 7,
    "record_id": 3,
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
    chat_session_id: 7,
    record_id: 3,
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
- 응답으로 받은 `record_id`를 ChatPage로 전달하여 S3 업로드 경로에 활용
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
// 첨부 파일이 있는 경우
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

// 첨부 파일이 없는 경우
{
  "chat_session_id": 1,
  "text": "사용자가 입력한 메시지",
  "evidences": null
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
    chat_session_id: 7,
    record_id: 3,
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
- `record_id`를 사용하여 S3 업로드 경로를 `records/{record_id}/evidence`로 설정
- 첨부 파일이 없을 때는 `evidences: null` 전송
- 에러 시 목업 데이터 사용 (추후 제거 예정)

### record_id 처리

```javascript
// ChatPage에서 record_id 추출 및 사용
const recordId = initialChatData?.serverResponse?.record_id || null;

// S3 업로드 경로 설정
const basePrefix = `records/${finishResponse?.record_id || recordId}`;
const prefix = `${basePrefix}/evidence`;
```

### 콘솔 로깅

- 요청 데이터: `console.log("API 요청 데이터:", requestData)`
- 엔드포인트: `console.log("API 엔드포인트: /api/chats/attach/")`
- 응답 데이터: `console.log("API 응답 데이터:", serverResponse)`
- 에러 시: `console.log("API 호출 실패, 목업 데이터 사용:", error)`
- 목업 응답: `console.log("목업 응답 데이터:", mockResponse)`

---

---

## ChatPage - "기록 마치기" 기능

### API 요청 방식

- **HTTP Method**: `GET`
- **Endpoint**: `/api/chats/end/`
- **Content-Type**: `application/json`

### Request

```json
{
  "chat_session_id": 1,
  "record_id": 3
}
```

### Response

```json
{
  "isSuccess": true,
  "code": "200",
  "message": "채팅 끝",
  "data": {
    "record_id": 3,
    "drawers": ["동방에서 일어난 거", "커피집 진상"],
    "record_detail": {
      "title": "동방에서 일어난 무시무시한 사건",
      "categories": ["괴롭힘", "폭력"],
      "content": "오늘 해승이가 해원이를 괴롭혔다",
      "severity": 1,
      "location": "동방",
      "occurred_at": "2025.08.01 (14:30)",
      "assailant": ["서해승, 이예림"],
      "witness": ["오영록"]
    },
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
}
```

### Props로 전달하는 값

```javascript
// DetailModifyModal로 전달되는 데이터
{
  record_id: 3,
  drawers: ["동방에서 일어난 거", "커피집 진상"],
  record_detail: {
    title: "동방에서 일어난 무시무시한 사건",
    categories: ["괴롭힘", "폭력"],
    content: "오늘 해승이가 해원이를 괴롭혔다",
    severity: 1,
    location: "동방",
    occurred_at: "2025.08.01 (14:30)",
    assailant: ["서해승, 이예림"],
    witness: ["오영록"]
  },
  evidences: [...]
}
```

### 주요 로직

- "기록 마치기" 버튼 클릭 시 GET 요청 (body에 JSON 포함)
- 응답의 `data` 객체를 DetailModifyModal에 전달
- `record_detail` 안에 상세 정보가 중첩된 구조
- `drawers`는 폴더 선택 옵션으로 사용
- `evidences`는 첨부 파일 미리보기로 표시
- 에러 시 목업 데이터 사용 (추후 제거 예정)
- `FinishLoadingModal`로 로딩 상태 표시

---

## TableRow - 제목 수정 기능

### API 요청 방식

- **HTTP Method**: `PATCH`
- **Endpoint**: `/api/records/{record_id}/title/`
- **Content-Type**: `application/json`

### Request

```json
{
  "title": "변경된 제목"
}
```

### Response

```json
{
  "isSuccess": true,
  "code": "200",
  "message": "제목 수정 완료",
  "data": {}
}
```

### Props로 전달하는 값

```javascript
// TitleEditModal로 전달되는 props
{
  isOpen: boolean,
  onClose: function,
  onConfirm: function,
  currentTitle: string,
  recordData: object
}

// RecentRecordsPage로 전달되는 props
{
  onTitleUpdate: function // 제목 업데이트 콜백
}
```

### 주요 로직

- TableRow의 설정 버튼 → "제목 수정" 클릭 → TitleEditModal 표시
- 제목 입력 후 "수정" 버튼 클릭 → API 호출
- 성공 시 `SuccessNotificationModal` 표시 및 RecentRecordsPage 데이터 갱신
- 실패 시 목업 데이터 사용 (추후 제거 예정)
- 로컬 상태에서 해당 record의 title만 업데이트하여 효율적 처리

---

## TableRow - 폴더 변경 기능

### API 요청 방식

#### 1. 폴더 목록 조회

- **HTTP Method**: `GET`
- **Endpoint**: `/api/drawers/list/`
- **Content-Type**: `application/json`

#### 2. 폴더 변경

- **HTTP Method**: `PATCH`
- **Endpoint**: `/api/records/{record_id}/drawer/`
- **Content-Type**: `application/json`

### Request

#### 1. 폴더 목록 조회

```json
// 요청 바디 없음
```

#### 2. 폴더 변경

```json
{
  "drawer_id": 1
}
```

### Response

#### 1. 폴더 목록 조회

```json
{
  "isSuccess": true,
  "code": "200",
  "message": "서랍 목록 조회 성공",
  "data": {
    "drawers": [
      {
        "drawer_id": 1,
        "name": "상도동 커피 폭언",
        "record_count": 3,
        "create_at": "2025.08.16",
        "update_at": "2025.08.20"
      }
    ]
  }
}
```

#### 2. 폴더 변경

```json
{
  "isSuccess": true,
  "code": "200",
  "message": "폴더 이동 완료",
  "data": {}
}
```

### Props로 전달하는 값

```javascript
// FolderChangeModal로 전달되는 props
{
  isOpen: boolean,
  onClose: function,
  onConfirm: function,
  currentFolder: string,
  recordId: number,
  recordData: object
}

// RecentRecordsPage로 전달되는 props
{
  onFolderUpdate: function // 폴더 업데이트 콜백
}
```

### 주요 로직

- TableRow의 설정 버튼 → "폴더 변경" 클릭 → FolderChangeModal 표시
- 모달 열릴 때 폴더 목록 API 호출하여 사용 가능한 폴더들 표시
- 폴더 선택 후 "변경" 버튼 클릭 → 폴더 변경 API 호출
- 성공 시 `SuccessNotificationModal` 표시 및 RecentRecordsPage 데이터 갱신
- 실패 시 목업 데이터 사용 (추후 제거 예정)
- 로컬 상태에서 해당 record의 drawer만 업데이트하여 효율적 처리

---

## DrawerPage

### API 요청 방식

- **HTTP Method**: `POST`
- **Endpoint**: `/api/drawers/create/`
- **Content-Type**: `application/json`

### Request

```json
{
  "drawer_name": "새로운 서랍 이름"
}
```

### Response

```json
{
  "isSuccess": true,
  "code": "200",
  "message": "서랍 생성 성공",
  "data": {
    "drawer_id": 1,
    "name": "새로운 서랍",
    "created_at": "2025-08-20 14:30"
  }
}
```

### Props로 전달하는 값

```javascript
// IncidentRecordsPage로 전달되는 props
{
  refreshTrigger: number, // 폴더 생성 후 데이터 갱신 트리거
  onNavigateToMain: function,
  triggerFolderDelete: boolean,
  onFolderDeleteTriggered: function
}
```

### 주요 로직

- 폴더 추가 버튼 클릭 시 `FolderAddModal` 표시
- 폴더명 입력 후 API 호출
- 성공 시 `SuccessNotificationModal` 2초간 표시
- `refreshTrigger` 증가로 `IncidentRecordsPage` 데이터 갱신
- 에러 시 `window.handleApiError` 사용
- API 응답 후 `FolderAddModal` 자동 닫기

### 폴더 삭제 API

- **HTTP Method**: `DELETE`
- **Endpoint**: `/api/drawers/delete/`
- **Content-Type**: `application/json`

### Request

```json
{
  "drawer_id": [1, 2, 3]
}
```

### Response

```json
{
  "isSuccess": true,
  "code": "200",
  "message": "서랍 삭제 성공",
  "data": {}
}
```

### 주요 로직

- 선택된 모든 폴더를 한 번의 요청으로 삭제
- 성공 시 선택된 폴더들을 로컬 상태에서 제거
- 삭제 성공 시 `SuccessNotificationModal` 표시
- 에러 시 목업 데이터 사용 (추후 제거 예정)

---

## RecentRecordsPage

### API 요청 방식

- **HTTP Method**: `GET`
- **Endpoint**: `/api/records/recent/`
- **Content-Type**: `application/json`

### Request

```json
// 요청 바디 없음
```

### Response

```json
{
  "records": [
    {
      "record_id": 1,
      "drawer_id": 5,
      "title": "동",
      "location": "동방",
      "drawer": "동방에서 벌어진 일",
      "assailant": ["조해원", "오영록"],
      "created_at": "2025-08-05T10:00:00"
    },
    {
      "record_id": 2,
      "drawer_id": 7,
      "title": "물건을 던지는 신체적 위협",
      "location": "교실",
      "drawer": "교실에서 일어난 위협",
      "assailant": ["김민재"],
      "created_at": "2025-08-03T13:15:00"
    }
  ]
}
```

### Props로 전달하는 값

```javascript
{
  onNavigateToRecordDetail: function // 기록 상세 페이지로 이동
}
```

### 주요 로직

- 페이지 로드 시 최근 기록 목록 자동 조회
- 테이블 형태로 기록 목록 표시
- 각 행 클릭 시 `onNavigateToRecordDetail` 호출
- 로딩 상태: "응답 중입니다..." 표시
- 에러 시 `window.handleApiError` 사용

---

## IncidentRecordsPage

### API 요청 방식

- **HTTP Method**: `GET`
- **Endpoint**: `/api/drawers/list/`
- **Content-Type**: `application/json`

### Request

```json
// 요청 바디 없음
```

### Response

```json
{
  "isSuccess": true,
  "code": "200",
  "message": "서랍 목록 조회 성공",
  "data": {
    "drawers": [
      {
        "drawer_id": 1,
        "name": "상도동 커피 폭언",
        "record_count": 3,
        "create_at": "2025.08.16",
        "update_at": "2025.08.20"
      },
      {
        "drawer_id": 2,
        "name": "회기동 함박",
        "record_count": 8,
        "create_at": "2025.08.06",
        "update_at": "2025.08.19"
      }
    ]
  }
}
```

### Props로 전달하는 값

```javascript
{
  triggerFolderDelete: boolean, // 폴더 삭제 모드 활성화 트리거
  onFolderDeleteTriggered: function, // 폴더 삭제 트리거 완료 콜백
  refreshTrigger: number // 폴더 생성 후 데이터 갱신 트리거
}
```

### 주요 로직

- 페이지 로드 시 폴더 목록 자동 조회
- `data.data.drawers` 배열에서 데이터 추출
- `record_count`를 `record_amt`로 매핑
- `refreshTrigger` 변경 시 데이터 갱신
- `triggerFolderDelete` 변경 시 삭제 모드 활성화
- 로딩 상태: "응답 중입니다..." 표시
- 에러 시 `window.handleApiError` 사용

---

## GetContentProvePage

### API 요청 방식

- **HTTP Method**: `POST`
- **Endpoint**: `/content-prove`
- **Content-Type**: `application/json`

### Request

**상대방 주소를 아는 경우:**

```json
{
  "reciever_name": "오영록",
  "sender_name": "서해승",
  "reciever_address": "서울 동작구 사당로 46 [07027] 숭실대학교",
  "sender_address": "서울 동작구 사당로 46 [07027] 숭실대학교",
  "reciever_phone": null,
  "sender_phone": null
}
```

**상대방 주소를 모르는 경우:**

```json
{
  "reciever_name": "오영록",
  "sender_name": "서해승",
  "reciever_address": null,
  "sender_address": null,
  "reciever_phone": "010-1234-5678",
  "sender_phone": "010-2222-2222"
}
```

### Response

```json
{
  "isSuccess": true,
  "code": "200",
  "message": "내용증명 생성 성공",
  "data": {
    "content_prove_id": 1,
    "download_url": "https://example.com/content-prove/1/download"
  }
}
```

### Props로 전달하는 값

```javascript
{
  recordName: string; // 기록명 (브레드크럼 표시용)
}
```

### 주요 로직

- 사용자가 "상대방의 주소를 알아요" 또는 "상대방의 주소를 몰라요" 카드 선택
- 선택된 카드에 따라 입력 필드 동적 변경
- 모든 필수 정보 입력 완료 시 "내용 증명 받기" 버튼 활성화
- 확인 모달에서 최종 확인 후 API 호출
- 주소 검색은 다음 주소 API 연동
- 전화번호는 010으로 시작하는 11자리 유효성 검사
- 성공 시 성공 메시지 표시, 실패 시 에러 메시지 표시

### 콘솔 로깅

- 요청 데이터: `console.log("API 요청 데이터:", requestData)`
- 엔드포인트: `console.log("API 엔드포인트:", API_ENDPOINTS.CONTENT_PROVE())`
- 응답 데이터: `console.log("API 응답 데이터:", response)`

---

## 추가 컴포넌트들

_다른 컴포넌트들의 API 명세는 추후 추가 예정_

---

## 참고사항

- 모든 API 호출은 전역 로깅 시스템을 통해 메서드, URL, 요청 바디가 자동으로 콘솔에 출력됩니다.
- 에러 발생 시 `window.handleApiError`를 통해 일관된 에러 처리가 이루어집니다.
- 로딩 상태는 각 컴포넌트에서 개별적으로 관리됩니다.
