import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import axios from "axios";

// 전역 API 로깅 설정 (fetch, axios)
(() => {
  if (typeof window === "undefined") return;

  // FormData/JSON 등의 바디를 안전하게 로깅
  const extractBodyLog = (body) => {
    try {
      if (!body) return undefined;
      if (body instanceof FormData) {
        const formEntries = {};
        body.forEach((value, key) => {
          if (value instanceof File) {
            formEntries[key] = {
              filename: value.name,
              size: value.size,
              type: value.type,
            };
          } else {
            formEntries[key] = value;
          }
        });
        return { formData: formEntries };
      }
      if (typeof body === "string") {
        try {
          return JSON.parse(body);
        } catch {
          return body;
        }
      }
      // URLSearchParams, 객체 등은 그대로 출력
      if (typeof body === "object") return body;
      return body;
    } catch {
      return "[body 로깅 실패]";
    }
  };

  // fetch 로깅
  if (!window.__FETCH_LOGGED__) {
    const originalFetch = window.fetch.bind(window);
    window.fetch = (input, init = {}) => {
      try {
        let method = "GET";
        let url = "";
        let bodyLog;

        if (typeof input === "string") {
          url = input;
          method = (init && init.method) || "GET";
          bodyLog = extractBodyLog(init && init.body);
        } else if (input && typeof input === "object" && "url" in input) {
          // Request 객체인 경우: 바디는 소모될 수 있어 안전하게 생략
          url = input.url;
          method = input.method || "GET";
          bodyLog = "[Request body omitted]";
        }

        // 공통 로깅
        console.log("[API 요청(fetch)]", {
          method: method.toUpperCase(),
          url,
          body: bodyLog,
        });
      } catch (e) {
        console.warn("[API 로깅(fetch) 실패]", e);
      }
      return originalFetch(input, init);
    };
    window.__FETCH_LOGGED__ = true;
  }

  // axios 로깅
  if (!window.__AXIOS_LOGGED__) {
    axios.interceptors.request.use(
      (config) => {
        try {
          const method = (config.method || "GET").toUpperCase();
          const url = config.baseURL
            ? `${config.baseURL.replace(/\/$/, "")}${config.url}`
            : config.url;
          let bodyLog = extractBodyLog(config.data);
          console.log("[API 요청(axios)]", {
            method,
            url,
            body: bodyLog,
          });
        } catch (e) {
          console.warn("[API 로깅(axios) 실패]", e);
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    window.__AXIOS_LOGGED__ = true;
  }
})();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
