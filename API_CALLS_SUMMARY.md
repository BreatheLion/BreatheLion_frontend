# API 호출 현황 정리

## 📋 개요

이 문서는 TakeABreath 프로젝트의 모든 API 호출 현황을 정리한 것입니다.

---

## 🔍 현재 API 호출 현황

### 1. MainPage.jsx

#### 1.1 첫 메시지 전송

```javascript
// 파일: src/pages/MainPage.jsx
// 함수: handleSubmit()
// 엔드포인트: POST /api/records/start/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const response = await axios.post("/api/records/start/", {
  message: trimmed,
  role: "user",
});

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 fallback 응답 사용
```

### 2. ChatPage.jsx

#### 2.1 채팅 메시지 전송

```javascript
// 파일: src/pages/ChatPage.jsx
// 함수: handleSend()
// 엔드포인트: POST /api/chats/attach/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const form = new FormData();
form.append("chat_session_id", String(chatSessionId));
form.append("text", trimmed);
attachments.forEach((att) =>
  form.append("evidences[]", att.file, att.file.name)
);

const response = await axios.post("/api/chats/attach/", form, {
  signal: controller.signal,
});

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 USE_FAKE_API = true로 설정되어 더미 데이터 사용
```

#### 2.2 기록 저장

```javascript
// 파일: src/pages/ChatPage.jsx
// 함수: handleDetailSubmit()
// 엔드포인트: POST /api/records/save/
// 상태: ❌ 주석 처리됨 (현재 미사용)

// await axios.post("/api/records/save/", form);
```

### 3. RecordDetailPage.jsx

#### 3.1 기록 상세 조회

```javascript
// 파일: src/pages/RecordDetailPage.jsx
// 함수: fetchRecordData()
// 엔드포인트: GET /api/records/{record_id}/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const response = await fetch(`/api/records/${record_id}/`);
const data = await response.json();
setRecordData(data);

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 더미 데이터 사용
```

#### 3.2 제목 수정

```javascript
// 파일: src/pages/RecordDetailPage.jsx
// 함수: handleTitleEditConfirm()
// 엔드포인트: PUT /api/records/{record_id}/title
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const response = await fetch(`/api/records/${record_id}/title`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: newTitle }),
});

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 콘솔 로그만 출력
```

#### 3.3 기록 삭제

```javascript
// 파일: src/pages/RecordDetailPage.jsx
// 함수: handleDeleteConfirm()
// 엔드포인트: DELETE /api/records/{record_id}/delete/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const response = await fetch(`/api/records/${record_id}/delete/`, {
  method: "DELETE",
});

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 콘솔 로그만 출력
```

#### 3.4 폴더 변경

```javascript
// 파일: src/pages/RecordDetailPage.jsx
// 함수: handleFolderChangeConfirm()
// 엔드포인트: PATCH /api/records/{record_id}/update/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const response = await fetch(`/api/records/${record_id}/update/`, {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ drawer_id: newFolderName }),
});

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 콘솔 로그만 출력
```

### 4. ChatViewPage.jsx

#### 4.1 채팅 히스토리 조회

```javascript
// 파일: src/pages/ChatViewPage.jsx
// 함수: fetchChatData()
// 엔드포인트: GET /api/records/{record_id}/chat/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const response = await fetch(`/api/records/${record_id}/chat/`);
const data = await response.json();
setChatData(data);

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 더미 데이터 사용
```

### 5. SummaryPage.jsx

#### 5.1 요약 데이터 조회

```javascript
// 파일: src/pages/SummaryPage.jsx
// 함수: fetchSummaryData()
// 엔드포인트: GET /api/drawers/{drawer_id}/helpai/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const response = await fetch(`/api/drawers/${folderId}/helpai/`);
const data = await response.json();
setSummaryData(data);

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 더미 데이터 사용
```

#### 5.2 타임라인 데이터 조회

```javascript
// 파일: src/pages/SummaryPage.jsx
// 함수: fetchTimelineData()
// 엔드포인트: POST /api/drawers/{drawer_id}/timeline/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const response = await fetch(`/api/drawers/${folderId}/timeline/`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ keyword: keyword }),
});

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 더미 데이터에서 필터링
```

### 6. FolderChangeModal.jsx

#### 6.1 폴더 목록 조회

```javascript
// 파일: src/components/ui/FolderChangeModal.jsx
// 함수: fetchFolders()
// 엔드포인트: GET /api/drawers/list/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const response = await axios.get("/api/drawers/list/");
const folders = Array.isArray(response.data) ? response.data : [];

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 API 응답이 비어있을 때 더미 데이터 사용
const dummyFolders = [
  { drawer_id: 1, name: "상도동" },
  { drawer_id: 2, name: "회기동 함박" },
  { drawer_id: 3, name: "사장님" },
  { drawer_id: 4, name: "폴더2" },
  { drawer_id: 5, name: "상도동ㄴㅇㄹㄴㅇㄹ" },
];
```

### 7. FinishLoadingModal.jsx

#### 7.1 기록 완료

```javascript
// 파일: src/components/ui/FinishLoadingModal.jsx
// 엔드포인트: POST /api/records/start/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

apiEndpoint = "/api/records/start/";

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 autoCloseMs = 3000으로 설정되어 더미 데이터 사용
```

---

## 🚧 미구현 API 호출

### 1. RecentRecordsPage.jsx

#### 1.1 기록 목록 조회

```javascript
// 파일: src/pages/RecentRecordsPage.jsx
// 엔드포인트: GET /api/records/
// 상태: ❌ 주석 처리됨

// const response = await axios.get("/api/records/");
// TODO: 실제 기록 목록 조회 API 호출
```

### 2. IncidentRecordsPage.jsx

#### 2.1 폴더 목록 조회

```javascript
// 파일: src/pages/IncidentRecordsPage.jsx
// 엔드포인트: GET /api/drawers/
// 상태: ❌ 주석 처리됨

// const response = await axios.get("/api/drawers/");
// TODO: 실제 폴더 목록 조회 API 호출
```

#### 2.2 폴더 생성

```javascript
// 파일: src/pages/IncidentRecordsPage.jsx
// 엔드포인트: POST /api/drawers/
// 상태: ❌ 주석 처리됨

// const response = await axios.post("/api/drawers/", { name: folderName });
// TODO: 실제 폴더 생성 API 호출
```

### 3. TableRow.jsx

#### 3.1 폴더 변경

```javascript
// 파일: src/components/ui/TableRow.jsx
// 함수: handleFolderChange()
// 엔드포인트: 미정
// 상태: ❌ 미구현

const handleFolderChange = (newFolder) => {
  console.log(`폴더 변경: ${folder} → ${newFolder}`);
  console.log(`변경할 레코드 ID: ${id}`);
  // TODO: 실제 폴더 변경 API 호출
};
```

#### 3.2 제목 수정

```javascript
// 파일: src/components/ui/TableRow.jsx
// 함수: handleTitleChange()
// 엔드포인트: 미정
// 상태: ❌ 미구현

const handleTitleChange = (newTitle) => {
  console.log(`제목 변경: ${title} → ${newTitle}`);
  console.log(`변경할 레코드 ID: ${id}`);
  // TODO: 실제 제목 변경 API 호출
};
```

#### 3.3 파일 다운로드

```javascript
// 파일: src/components/ui/TableRow.jsx
// 함수: handleModalItemClick("다운로드")
// 엔드포인트: 미정
// 상태: ❌ 미구현

// TODO: 파일 다운로드 API 호출
```

---

## 📊 API 엔드포인트 요약

| 기능               | 엔드포인트                           | 메서드 | 상태             | 파일                    |
| ------------------ | ------------------------------------ | ------ | ---------------- | ----------------------- |
| 첫 메시지 전송     | `/api/records/start/`                | POST   | ✅ 구현됨 (더미) | MainPage.jsx            |
| 채팅 메시지 전송   | `/api/chats/attach/`                 | POST   | ✅ 구현됨 (더미) | ChatPage.jsx            |
| 기록 상세 조회     | `/api/records/{record_id}/`          | GET    | ✅ 구현됨 (더미) | RecordDetailPage.jsx    |
| 제목 수정          | `/api/records/{record_id}/title`     | PUT    | ✅ 구현됨 (더미) | RecordDetailPage.jsx    |
| 기록 삭제          | `/api/records/{record_id}/delete/`   | DELETE | ✅ 구현됨 (더미) | RecordDetailPage.jsx    |
| 폴더 변경          | `/api/records/{record_id}/update/`   | PATCH  | ✅ 구현됨 (더미) | RecordDetailPage.jsx    |
| 채팅 히스토리 조회 | `/api/records/{record_id}/chat/`     | GET    | ✅ 구현됨 (더미) | ChatViewPage.jsx        |
| 요약 데이터 조회   | `/api/drawers/{drawer_id}/helpai/`   | GET    | ✅ 구현됨 (더미) | SummaryPage.jsx         |
| 타임라인 조회      | `/api/drawers/{drawer_id}/timeline/` | POST   | ✅ 구현됨 (더미) | SummaryPage.jsx         |
| 폴더 목록 조회     | `/api/drawers/list/`                 | GET    | ✅ 구현됨 (더미) | FolderChangeModal.jsx   |
| 기록 완료          | `/api/records/start/`                | POST   | ✅ 구현됨 (더미) | FinishLoadingModal.jsx  |
| 기록 목록 조회     | `/api/records/`                      | GET    | ❌ 주석 처리됨   | RecentRecordsPage.jsx   |
| 폴더 목록 조회     | `/api/drawers/`                      | GET    | ❌ 주석 처리됨   | IncidentRecordsPage.jsx |
| 폴더 생성          | `/api/drawers/`                      | POST   | ❌ 주석 처리됨   | IncidentRecordsPage.jsx |
| 폴더 변경          | 미정                                 | 미정   | ❌ 미구현        | TableRow.jsx            |
| 제목 수정          | 미정                                 | 미정   | ❌ 미구현        | TableRow.jsx            |
| 파일 다운로드      | 미정                                 | 미정   | ❌ 미구현        | TableRow.jsx            |

---

## 🔧 백엔드 연동 시 수정 사항

### 1. 더미 데이터 제거

```javascript
// 모든 파일에서 다음 설정들을 false로 변경
const USE_FAKE_API = false; // ChatPage.jsx
// autoCloseMs 제거 또는 실제 API 응답 대기로 변경
```

### 2. 에러 처리 강화

```javascript
// 모든 API 호출에 적절한 에러 처리 추가
try {
  const response = await axios.post("/api/endpoint/", data);
  // 성공 처리
} catch (error) {
  console.error("API 호출 실패:", error);
  // 사용자에게 에러 메시지 표시
  // fallback 처리
}
```

### 3. 로딩 상태 관리

```javascript
// API 호출 중 로딩 상태 표시
const [isLoading, setIsLoading] = useState(false);

const handleApiCall = async () => {
  setIsLoading(true);
  try {
    await apiCall();
  } finally {
    setIsLoading(false);
  }
};
```

---

## 📝 TODO 리스트

### 높은 우선순위

- [ ] 백엔드 API 엔드포인트 확정
- [ ] 더미 데이터 제거 및 실제 API 연동
- [ ] 에러 처리 강화
- [ ] 로딩 상태 UI 개선

### 중간 우선순위

- [ ] RecentRecordsPage 기록 목록 조회 API 구현
- [ ] IncidentRecordsPage 폴더 관리 API 구현
- [ ] TableRow 관련 API 구현 (폴더 변경, 제목 수정, 파일 다운로드)

### 낮은 우선순위

- [ ] API 응답 캐싱
- [ ] 재시도 로직
- [ ] 네트워크 상태 감지
- [ ] 오프라인 모드 지원

---

## 🔍 참고 사항

### 1. 현재 더미 데이터 사용 이유

- 백엔드 API가 아직 완성되지 않음
- 프론트엔드 개발 진행을 위한 임시 조치
- UI/UX 테스트를 위한 목적

### 2. 파일 업로드 방식

- 현재: FormData를 통한 직접 업로드
- 고려사항: 프리사인드 URL 방식으로 전환 가능

### 3. 메모리 관리

- `URL.createObjectURL()` 사용 시 적절한 `URL.revokeObjectURL()` 호출 필요
- 첨부파일 제거 시 메모리 정리 로직 구현됨

### 4. 네비게이션 연동

- `window.navigation` 객체를 통한 전역 네비게이션 관리
- 브라우저 뒤로가기 지원
- 페이지 히스토리 스택 관리

---

## 📞 문의사항

백엔드 API 엔드포인트나 요청/응답 형식에 대한 문의가 있으시면 백엔드 개발팀과 협의 후 이 문서를 업데이트해주세요.
