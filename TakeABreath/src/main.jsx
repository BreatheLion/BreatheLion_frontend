import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { setRuntimeApiBaseUrl } from "./config/api.js";

// 전역 API 설정 함수 (외부에서 호출 가능)
window.setApiBaseUrl = (baseUrl) => {
  setRuntimeApiBaseUrl(baseUrl);
};

// 전역 API 설정 확인 함수
window.getCurrentApiBaseUrl = () => {
  return import.meta.env.VITE_API_BASE_URL || "기본값";
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
