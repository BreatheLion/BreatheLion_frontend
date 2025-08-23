// API 설정 관리
// TODO: 실제 배포 시 환경변수로 변경 필요

// 개발 환경 설정
const DEV_CONFIG = {
  // JSON Server URL (개발용)
  JSON_SERVER_BASE: "http://localhost:3001",

  // 실제 API Base URL (환경변수에서 가져옴)
  REAL_API_BASE:
    import.meta.env.VITE_API_BASE_URL || "https://api.takeabreath.com",

  // 현재 사용할 API 타입 (환경변수로 제어 가능)
  API_TYPE:
    import.meta.env.VITE_USE_REAL_API === "true" ? "real-api" : "json-server",
};

// 프로덕션 환경 설정
const PROD_CONFIG = {
  // 실제 API Base URL (환경변수에서 가져옴)
  REAL_API_BASE:
    import.meta.env.VITE_API_BASE_URL || "https://api.takeabreath.com",

  // 프로덕션에서는 항상 실제 API 사용
  API_TYPE: "real-api",
};

// 현재 환경에 따른 설정 선택
const isDevelopment = import.meta.env.DEV;
const config = isDevelopment ? DEV_CONFIG : PROD_CONFIG;

// API Base URL 결정
export const getApiBaseUrl = () => {
  if (config.API_TYPE === "json-server") {
    return config.JSON_SERVER_BASE;
  }
  return config.REAL_API_BASE;
};

// 현재 API 타입 확인
export const getApiType = () => config.API_TYPE;

// API 타입이 실제 API인지 확인하는 헬퍼 함수
export const isRealApi = () => config.API_TYPE === "real-api";

// 설정 객체 내보내기
export const API_CONFIG = config;
