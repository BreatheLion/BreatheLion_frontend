# API 호출 현황 정리

## 📋 개요

이 문서는 TakeABreath 프로젝트의 모든 API 호출 현황을 정리한 것입니다.

---

## 🔍 현재 API 호출 현황

### 1. ChatPage.jsx

#### 1.1 채팅 메시지 전송

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

#### 1.2 첫 메시지 전송 (FinishLoadingModal)

```javascript
// 파일: src/components/ui/FinishLoadingModal.jsx
// 엔드포인트: POST /api/records/start/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const form = new FormData();
form.append("chat_session_id", String(chatSessionId));

const response = await axios.post("/api/records/start/", form);

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// 현재는 autoCloseMs = 3000으로 설정되어 더미 데이터 사용
```

### 2. DetailModifyPage.jsx

#### 2.1 상세 정보 저장

```javascript
// 파일: src/pages/DetailModifyPage.jsx
// 함수: handleDetailSubmit()
// 엔드포인트: POST /api/records/save/
// 상태: ✅ 구현됨 (현재는 더미 데이터 사용)

const form = new FormData();
form.append("record_id", String(payload.record_id || ""));
form.append("title", payload.title || "");
form.append("content", payload.content || "");
form.append("severity", String(payload.severity ?? ""));
form.append("location", payload.location || "");
form.append("occurred_at", payload.occurred_at || "");
form.append("drawer", payload.drawer || "");

(payload.category || []).forEach((v) => form.append("category[]", v));
(payload.assailant || []).forEach((v) => form.append("assailant[]", v));
(payload.witness || []).forEach((v) => form.append("witness[]", v));

// 기존 유지할 서버 파일들
(payload.existing_evidences || []).forEach((ev) => {
  if (ev?.filename) form.append("evidences_keep[]", ev.filename);
});

// 새로 추가된 파일 업로드
(payload.new_files || []).forEach((file) => {
  if (file) form.append("evidences[]", file, file.name);
});

// TODO: 백엔드 연동 후 실제 API 호출로 변경
// await axios.post("/api/records/save/", form);
```

### 3. FolderChangeModal.jsx

#### 3.1 폴더 목록 조회

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

---

## 🚧 미구현 API 호출

### 1. TableRow 관련 기능들

#### 1.1 폴더 변경

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

#### 1.2 제목 수정

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

#### 1.3 파일 다운로드

```javascript
// 파일: src/components/ui/TableRow.jsx
// 함수: handleModalItemClick("다운로드")
// 엔드포인트: 미정
// 상태: ❌ 미구현

// TODO: 파일 다운로드 API 호출
```

### 2. DrawerPage 관련

#### 2.1 기록 목록 조회

```javascript
// 파일: src/pages/DrawerPage.jsx
// 엔드포인트: 미정
// 상태: ❌ 미구현 (현재는 하드코딩된 더미 데이터)

// TODO: 실제 기록 목록 조회 API 호출
```

---

## 📊 API 엔드포인트 요약

| 기능             | 엔드포인트            | 메서드 | 상태             | 파일                   |
| ---------------- | --------------------- | ------ | ---------------- | ---------------------- |
| 채팅 메시지 전송 | `/api/chats/attach/`  | POST   | ✅ 구현됨 (더미) | ChatPage.jsx           |
| 첫 메시지 전송   | `/api/records/start/` | POST   | ✅ 구현됨 (더미) | FinishLoadingModal.jsx |
| 상세 정보 저장   | `/api/records/save/`  | POST   | ✅ 구현됨 (더미) | DetailModifyPage.jsx   |
| 폴더 목록 조회   | `/api/drawers/list/`  | GET    | ✅ 구현됨 (더미) | FolderChangeModal.jsx  |
| 폴더 변경        | 미정                  | 미정   | ❌ 미구현        | TableRow.jsx           |
| 제목 수정        | 미정                  | 미정   | ❌ 미구현        | TableRow.jsx           |
| 파일 다운로드    | 미정                  | 미정   | ❌ 미구현        | TableRow.jsx           |
| 기록 목록 조회   | 미정                  | 미정   | ❌ 미구현        | DrawerPage.jsx         |

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

- [ ] 폴더 변경 API 구현
- [ ] 제목 수정 API 구현
- [ ] 파일 다운로드 API 구현
- [ ] 기록 목록 조회 API 구현

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

---

## 📞 문의사항

백엔드 API 엔드포인트나 요청/응답 형식에 대한 문의가 있으시면 백엔드 개발팀과 협의 후 이 문서를 업데이트해주세요.
