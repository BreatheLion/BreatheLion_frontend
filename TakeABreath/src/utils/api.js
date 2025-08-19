import { getApiBaseUrl, getApiType } from "../config/api";

// API 설정
const API_BASE_URL = getApiBaseUrl();
const API_TYPE = getApiType();

// 기본 API URL 설정
export const getApiBase = () => {
  return API_BASE_URL;
};

// API 엔드포인트 매핑
export const API_ENDPOINTS = {
  // Records
  RECORDS_START: () => `${getApiBase()}/records/start`,
  RECORDS_DETAIL: (recordId) => `${getApiBase()}/records/${recordId}`,
  RECORDS_TITLE: (recordId) => `${getApiBase()}/records/${recordId}/title`,
  RECORDS_DELETE: (recordId) => `${getApiBase()}/records/${recordId}/delete`,
  RECORDS_UPDATE: (recordId) => `${getApiBase()}/records/${recordId}/update`,

  // Chats
  CHATS_ATTACH: () => `${getApiBase()}/chats/attach`,
  CHATS_HISTORY: (recordId) => `${getApiBase()}/chats?record_id=${recordId}`,

  // Drawers
  DRAWERS_LIST: () => `${getApiBase()}/drawers_list`,
  DRAWERS_HELPAI: (drawerId) => `${getApiBase()}/helpai?drawer_id=${drawerId}`,
  DRAWERS_TIMELINE: (drawerId) =>
    `${getApiBase()}/timeline?drawer_id=${drawerId}`,

  // Records List (for RecentRecordsPage)
  RECORDS_LIST: () => `${getApiBase()}/records`,

  // Drawers (for IncidentRecordsPage)
  DRAWERS: () => `${getApiBase()}/drawers`,
};

// TODO: 실제 API로 전환 시 주석 해제
// 실제 API 엔드포인트 (백엔드에서 제공받을 예정)
/*
export const REAL_API_ENDPOINTS = {
  // Records
  RECORDS_START: () => `${getApiBase()}/api/records/start/`,
  RECORDS_DETAIL: (recordId) => `${getApiBase()}/api/records/${recordId}/`,
  RECORDS_TITLE: (recordId) => `${getApiBase()}/api/records/${recordId}/title`,
  RECORDS_DELETE: (recordId) => `${getApiBase()}/api/records/${recordId}/delete/`,
  RECORDS_UPDATE: (recordId) => `${getApiBase()}/api/records/${recordId}/update/`,

  // Chats
  CHATS_ATTACH: () => `${getApiBase()}/api/chats/attach/`,
  CHATS_HISTORY: (recordId) => `${getApiBase()}/api/records/${recordId}/chat/`,

  // Drawers
  DRAWERS_LIST: () => `${getApiBase()}/api/drawers/list/`,
  DRAWERS_HELPAI: (drawerId) => `${getApiBase()}/api/drawers/${drawerId}/helpai/`,
  DRAWERS_TIMELINE: (drawerId) => `${getApiBase()}/api/drawers/${drawerId}/timeline/`,

  // Records List (for RecentRecordsPage)
  RECORDS_LIST: () => `${getApiBase()}/api/records/`,

  // Drawers (for IncidentRecordsPage)
  DRAWERS: () => `${getApiBase()}/api/drawers/`,
};
*/

// API 호출 헬퍼 함수
export const apiCall = async (endpoint, options = {}) => {
  const url = typeof endpoint === "function" ? endpoint() : endpoint;

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

// JSON Server 전용 헬퍼 함수들
export const jsonServerHelpers = {
  // 특정 record_id로 기록 데이터 조회
  getRecordByRecordId: async (recordId) => {
    const response = await fetch(
      `${API_BASE_URL}/record_details?record_id=${recordId}`
    );
    const data = await response.json();
    return data[0] || null; // 첫 번째 매칭 결과 반환
  },

  // 특정 record_id로 채팅 데이터 조회
  getChatByRecordId: async (recordId) => {
    const response = await fetch(`${API_BASE_URL}/chats?record_id=${recordId}`);
    const data = await response.json();
    return data[0] || null; // 첫 번째 매칭 결과 반환
  },

  // 특정 drawer_id로 helpai 데이터 조회
  getHelpaiByDrawerId: async (drawerId) => {
    const response = await fetch(
      `${API_BASE_URL}/helpai?drawer_id=${drawerId}`
    );
    const data = await response.json();
    return data[0] || null; // 첫 번째 매칭 결과 반환
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

    if (keyword && keyword.trim()) {
      // 키워드가 있으면 POST 요청으로 검색
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keyword: keyword.trim(),
        }),
      });
      return await response.json();
    } else {
      // 키워드가 없으면 GET 요청으로 전체 데이터
      const response = await fetch(url);
      return await response.json();
    }
  },
};
