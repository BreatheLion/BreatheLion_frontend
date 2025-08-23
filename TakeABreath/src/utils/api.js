import { getApiBaseUrl, getApiType } from "../config/api";

// API 설정
const API_BASE_URL = getApiBaseUrl();
const API_TYPE = getApiType();

// 기본 API URL 설정
export const getApiBase = () => {
  return API_BASE_URL;
};

// FINAL_API_DOCUMENTATION 기반 API 엔드포인트 매핑
export const API_ENDPOINTS = {
  // MainPage - 첫 메시지 전송
  CHATS_START: () => `${getApiBase()}/api/chats/start/`,

  // ChatPage - 메시지 전송
  CHATS_ATTACH: () => `${getApiBase()}/api/chats/attach/`,

  // ChatPage - 기록 마치기
  CHATS_END: () => `${getApiBase()}/api/chats/end/`,

  // ChatViewPage - 채팅 목록 조회
  CHATS_LIST: (recordId) => `${getApiBase()}/api/chats/${recordId}/list/`,

  // RecordDetailPage - 기록 상세 조회
  RECORDS_DETAIL: (recordId) => `${getApiBase()}/api/records/${recordId}/`,

  // RecordDetailPage - 기록 제목 수정
  RECORDS_TITLE: (recordId) => `${getApiBase()}/api/records/${recordId}/title/`,

  // RecordDetailPage - 기록 삭제
  RECORDS_DELETE: (recordId) =>
    `${getApiBase()}/api/records/${recordId}/delete/`,

  // RecordDetailPage - 기록 폴더 변경
  RECORDS_DRAWER: (recordId) =>
    `${getApiBase()}/api/records/${recordId}/drawer/`,

  // RecentRecordsPage - 최근 기록 목록 조회
  RECORDS_RECENT: () => `${getApiBase()}/api/records/recent/`,

  // DetailModifyModal - 기록 저장
  RECORDS_SAVE: () => `${getApiBase()}/api/records/save/`,

  // IncidentRecordsPage - 폴더 목록 조회
  DRAWERS_LIST: () => `${getApiBase()}/api/drawers/list/`,

  // DrawerPage - 폴더 생성
  DRAWERS_CREATE: () => `${getApiBase()}/api/drawers/create/`,

  // IncidentRecordsPage - 폴더 삭제
  DRAWERS_DELETE: () => `${getApiBase()}/api/drawers/delete/`,

  // AiHelperPage, SummaryPage - AI 도움말 조회
  DRAWERS_HELPAI: (drawerId) =>
    `${getApiBase()}/api/drawers/${drawerId}/helpai/`,

  // SummaryPage - 타임라인 조회
  DRAWERS_TIMELINE: (drawerId) =>
    `${getApiBase()}/api/drawers/${drawerId}/timeline/`,

  // AiHelperPage, SummaryPage - PDF 다운로드
  DRAWERS_PDF: (drawerId) => `${getApiBase()}/api/drawers/${drawerId}/pdf`,

  // GetContentProvePage - 내용증명 생성
  CONTENT_PROVE: () => `${getApiBase()}/content-prove`,
};

// API 호출 헬퍼 함수
export const apiCall = async (endpoint, options = {}) => {
  const url = typeof endpoint === "function" ? endpoint() : endpoint;

  console.log("🔍 API 호출 URL:", url);
  console.log("🔍 API 호출 옵션:", options);

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API 호출 중 오류:", error);
    throw error;
  }
};

// 특정 API 호출을 위한 전용 함수들
export const apiHelpers = {
  // MainPage - 첫 메시지 전송
  startChat: async (message) => {
    return await apiCall(API_ENDPOINTS.CHATS_START(), {
      method: "POST",
      body: JSON.stringify({ message }),
    });
  },

  // ChatPage - 메시지 전송
  sendMessage: async (chatSessionId, text, evidences = null) => {
    console.log("apiHelpers.sendMessage 호출:", {
      chatSessionId,
      text,
      evidences,
    });

    const requestData = {
      chat_session_id: chatSessionId,
      text,
      evidences,
    };

    console.log("apiHelpers.sendMessage 요청 데이터:", requestData);
    console.log(
      "apiHelpers.sendMessage 엔드포인트:",
      API_ENDPOINTS.CHATS_ATTACH()
    );

    const response = await apiCall(API_ENDPOINTS.CHATS_ATTACH(), {
      method: "POST",
      body: JSON.stringify(requestData),
    });

    console.log("apiHelpers.sendMessage 응답:", response);
    return response;
  },

  // ChatPage - 기록 마치기
  endChat: async (chatSessionId, recordId) => {
    return await apiCall(API_ENDPOINTS.CHATS_END(), {
      method: "GET",
      body: JSON.stringify({
        chat_session_id: chatSessionId,
        record_id: recordId,
      }),
    });
  },

  // ChatViewPage - 채팅 목록 조회
  getChatList: async (recordId) => {
    return await apiCall(API_ENDPOINTS.CHATS_LIST(recordId), {
      method: "GET",
    });
  },

  // RecordDetailPage - 기록 상세 조회
  getRecordDetail: async (recordId) => {
    return await apiCall(API_ENDPOINTS.RECORDS_DETAIL(recordId), {
      method: "GET",
    });
  },

  // RecordDetailPage - 기록 제목 수정
  updateRecordTitle: async (recordId, title) => {
    return await apiCall(API_ENDPOINTS.RECORDS_TITLE(recordId), {
      method: "PATCH",
      body: JSON.stringify({ title }),
    });
  },

  // RecordDetailPage - 기록 삭제
  deleteRecord: async (recordId) => {
    return await apiCall(API_ENDPOINTS.RECORDS_DELETE(recordId), {
      method: "DELETE",
    });
  },

  // RecordDetailPage - 기록 폴더 변경
  updateRecordDrawer: async (recordId, drawerId) => {
    return await apiCall(API_ENDPOINTS.RECORDS_DRAWER(recordId), {
      method: "PATCH",
      body: JSON.stringify({ drawer_id: drawerId }),
    });
  },

  // RecentRecordsPage - 최근 기록 목록 조회
  getRecentRecords: async () => {
    return await apiCall(API_ENDPOINTS.RECORDS_RECENT(), {
      method: "GET",
    });
  },

  // DetailModifyModal - 기록 저장
  saveRecord: async (recordData) => {
    return await apiCall(API_ENDPOINTS.RECORDS_SAVE(), {
      method: "POST",
      body: JSON.stringify(recordData),
    });
  },

  // IncidentRecordsPage - 폴더 목록 조회
  getDrawersList: async () => {
    return await apiCall(API_ENDPOINTS.DRAWERS_LIST(), {
      method: "GET",
    });
  },

  // DrawerPage - 폴더 생성
  createDrawer: async (drawerName) => {
    return await apiCall(API_ENDPOINTS.DRAWERS_CREATE(), {
      method: "POST",
      body: JSON.stringify({ drawer_name: drawerName }),
    });
  },

  // IncidentRecordsPage - 폴더 삭제
  deleteDrawers: async (drawerIds) => {
    return await apiCall(API_ENDPOINTS.DRAWERS_DELETE(), {
      method: "DELETE",
      body: JSON.stringify({ drawer_id: drawerIds }),
    });
  },

  // AiHelperPage, SummaryPage - AI 도움말 조회
  getHelpai: async (drawerId) => {
    return await apiCall(API_ENDPOINTS.DRAWERS_HELPAI(drawerId), {
      method: "GET",
    });
  },

  // SummaryPage - 타임라인 조회 (키워드 검색 포함)
  getTimeline: async (drawerId, keyword = "") => {
    const url = API_ENDPOINTS.DRAWERS_TIMELINE(drawerId);
    const params = new URLSearchParams();
    if (keyword && keyword.trim()) {
      params.append("keyword", keyword.trim());
    } else {
      params.append("keyword", "null");
    }

    return await apiCall(`${url}?${params.toString()}`, {
      method: "GET",
    });
  },

  // AiHelperPage, SummaryPage - PDF 다운로드
  downloadPdf: async (drawerId) => {
    return await apiCall(API_ENDPOINTS.DRAWERS_PDF(drawerId), {
      method: "GET",
    });
  },

  // GetContentProvePage - 내용증명 생성
  createContentProve: async (contentProveData) => {
    return await apiCall(API_ENDPOINTS.CONTENT_PROVE(), {
      method: "POST",
      body: JSON.stringify(contentProveData),
    });
  },
};

// JSON Server 전용 헬퍼 함수들 (기존 호환성 유지)
export const jsonServerHelpers = {
  // 특정 record_id로 기록 데이터 조회
  getRecordByRecordId: async (recordId) => {
    const response = await fetch(
      `${API_BASE_URL}/record_details?record_id=${recordId}`
    );
    const data = await response.json();
    return data[0] || null;
  },

  // 특정 record_id로 채팅 데이터 조회
  getChatByRecordId: async (recordId) => {
    const response = await fetch(`${API_BASE_URL}/chats?record_id=${recordId}`);
    const data = await response.json();
    return data[0] || null;
  },

  // 특정 drawer_id로 helpai 데이터 조회
  getHelpaiByDrawerId: async (drawerId) => {
    const response = await fetch(
      `${API_BASE_URL}/helpai?drawer_id=${drawerId}`
    );
    const data = await response.json();
    return data[0] || null;
  },

  // 특정 drawer_id로 timeline 데이터 조회
  getTimelineByDrawerId: async (drawerId) => {
    const response = await fetch(
      `${API_BASE_URL}/timeline?drawer_id=${drawerId}`
    );
    return await response.json();
  },
};

// 실제 API 전용 헬퍼 함수들 (JSON Server와 실제 API 간 전환 시 사용)
export const realApiHelpers = {
  // 특정 drawer_id로 timeline 데이터 조회 (키워드 검색 포함)
  getTimelineByDrawerId: async (drawerId, keyword = "") => {
    const url = `${getApiBase()}/api/drawers/${drawerId}/timeline/`;

    const params = new URLSearchParams();
    if (keyword && keyword.trim()) {
      params.append("keyword", keyword.trim());
    } else {
      params.append("keyword", "null");
    }

    const response = await fetch(`${url}?${params.toString()}`);
    const data = await response.json();

    return data.data || data;
  },
};
