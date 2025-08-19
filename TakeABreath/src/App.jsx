import { useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";
import DrawerPage from "./pages/DrawerPage";
import RecordDetailPage from "./pages/RecordDetailPage";
import ChatViewPage from "./pages/ChatViewPage";
import SummaryPage from "./pages/SummaryPage";
import LawyerPage from "./pages/LawyerPage";

// 전역 네비게이션 함수들을 위한 객체
window.navigation = {};

function App() {
  const [currentPage, setCurrentPage] = useState("main"); // "main" | "chat" | "drawer" | "record-detail" | "chat-view" | "summary" | "lawyer"
  const [initialChatData, setInitialChatData] = useState(null);
  const [recordDetailData, setRecordDetailData] = useState(null);
  const [chatViewData, setChatViewData] = useState(null);
  const [summaryData, setSummaryData] = useState(null);

  // 페이지 히스토리 스택 추가
  const [pageHistory, setPageHistory] = useState(["main"]);

  const navigateToChat = (chatData) => {
    setInitialChatData(chatData);
    setCurrentPage("chat");
    // 히스토리에 추가
    setPageHistory((prev) => [...prev, "chat"]);
    // 브라우저 히스토리 업데이트
    window.history.pushState({ page: "chat" }, "", "/chat");
  };

  const navigateToMain = () => {
    setCurrentPage("main");
    // 히스토리에 추가
    setPageHistory((prev) => [...prev, "main"]);
    // 브라우저 히스토리 업데이트
    window.history.pushState({ page: "main" }, "", "/");
  };

  const navigateToDrawer = () => {
    setCurrentPage("drawer");
    // 히스토리에 추가
    setPageHistory((prev) => [...prev, "drawer"]);
    // 브라우저 히스토리 업데이트
    window.history.pushState({ page: "drawer" }, "", "/drawer");
  };

  const navigateToRecordDetail = (previousPage, recordId) => {
    setRecordDetailData({ previousPage, recordId });
    setCurrentPage("record-detail");
    // 히스토리에 추가
    setPageHistory((prev) => [...prev, "record-detail"]);
    // 브라우저 히스토리 업데이트
    window.history.pushState(
      { page: "record-detail", recordId },
      "",
      `/record/${recordId}`
    );
  };

  const navigateToChatView = (recordId, pageTitle, created_at) => {
    setChatViewData({ recordId, pageTitle, created_at });
    setCurrentPage("chat-view");
    // 히스토리에 추가
    setPageHistory((prev) => [...prev, "chat-view"]);
    // 브라우저 히스토리 업데이트
    window.history.pushState(
      { page: "chat-view", recordId },
      "",
      `/chat-view/${recordId}`
    );
  };

  const navigateToSummary = (folderId, folderName) => {
    setSummaryData({ folderId, folderName });
    setCurrentPage("summary");
    // 히스토리에 추가
    setPageHistory((prev) => [...prev, "summary"]);
    // 브라우저 히스토리 업데이트
    window.history.pushState(
      { page: "summary", folderId },
      "",
      `/summary/${folderId}`
    );
  };

  const navigateToLawyer = () => {
    setCurrentPage("lawyer");
    // 히스토리에 추가
    setPageHistory((prev) => [...prev, "lawyer"]);
    // 브라우저 히스토리 업데이트
    window.history.pushState({ page: "lawyer" }, "", "/lawyer");
  };

  // 뒤로가기 처리 함수
  const handleBack = () => {
    if (pageHistory.length <= 1) {
      // 히스토리가 1개 이하면 메인 페이지로
      setCurrentPage("main");
      setPageHistory(["main"]);
      window.history.replaceState({ page: "main" }, "", "/");
      return;
    }

    // 현재 페이지를 히스토리에서 제거
    const newHistory = pageHistory.slice(0, -1);
    const previousPage = newHistory[newHistory.length - 1];

    setPageHistory(newHistory);
    setCurrentPage(previousPage);

    // URL 업데이트
    if (previousPage === "main") {
      window.history.replaceState({ page: "main" }, "", "/");
    } else if (previousPage === "chat") {
      window.history.replaceState({ page: "chat" }, "", "/chat");
    } else if (previousPage === "drawer") {
      window.history.replaceState({ page: "drawer" }, "", "/drawer");
    } else if (previousPage === "record-detail") {
      const recordId = recordDetailData?.recordId;
      window.history.replaceState(
        { page: "record-detail", recordId },
        "",
        `/record/${recordId}`
      );
    } else if (previousPage === "chat-view") {
      const recordId = chatViewData?.recordId;
      window.history.replaceState(
        { page: "chat-view", recordId },
        "",
        `/chat-view/${recordId}`
      );
    } else if (previousPage === "summary") {
      const folderId = summaryData?.folderId;
      window.history.replaceState(
        { page: "summary", folderId },
        "",
        `/summary/${folderId}`
      );
    } else if (previousPage === "lawyer") {
      window.history.replaceState({ page: "lawyer" }, "", "/lawyer");
    }

    // 페이지별 데이터 초기화
    if (previousPage === "main") {
      setInitialChatData(null);
      setRecordDetailData(null);
      setChatViewData(null);
      setSummaryData(null);
    } else if (previousPage === "chat") {
      setRecordDetailData(null);
      setChatViewData(null);
      setSummaryData(null);
    } else if (previousPage === "drawer") {
      setInitialChatData(null);
      setRecordDetailData(null);
      setChatViewData(null);
      setSummaryData(null);
    } else if (previousPage === "record-detail") {
      setInitialChatData(null);
      setChatViewData(null);
      setSummaryData(null);
    } else if (previousPage === "chat-view") {
      setInitialChatData(null);
      setSummaryData(null);
    } else if (previousPage === "summary") {
      setInitialChatData(null);
      setChatViewData(null);
    }
  };

  // 초기 페이지 로드 시 URL 설정
  useEffect(() => {
    if (pageHistory.length === 1 && pageHistory[0] === "main") {
      window.history.replaceState({ page: "main" }, "", "/");
    }
  }, []);

  // 브라우저 뒤로가기 이벤트 리스너
  useEffect(() => {
    const handlePopState = () => {
      // 모달이 열려있는지 확인 (모달은 뒤로가기에서 제외)
      const hasOpenModal = document.querySelector('[data-modal="open"]');
      if (hasOpenModal) {
        return;
      }

      handleBack();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pageHistory]);

  // 전역 네비게이션 함수 설정
  window.navigation.navigateToMain = navigateToMain;
  window.navigation.navigateToDrawer = navigateToDrawer;
  window.navigation.navigateToChatView = navigateToChatView;
  window.navigation.navigateToSummary = navigateToSummary;
  window.navigation.navigateToRecordDetail = navigateToRecordDetail;
  window.navigation.navigateToLawyer = navigateToLawyer;

  return (
    <>
      {currentPage === "main" && <MainPage onNavigateToChat={navigateToChat} />}
      {currentPage === "chat" && (
        <ChatPage
          onNavigateToMain={navigateToMain}
          initialChatData={initialChatData}
        />
      )}
      {currentPage === "drawer" && (
        <DrawerPage
          onNavigateToMain={navigateToMain}
          onNavigateToRecordDetail={navigateToRecordDetail}
        />
      )}
      {currentPage === "record-detail" && recordDetailData && (
        <RecordDetailPage
          previousPage={recordDetailData.previousPage}
          record_id={recordDetailData.recordId}
        />
      )}
      {currentPage === "chat-view" && chatViewData && (
        <ChatViewPage
          record_id={chatViewData.recordId}
          pageTitle={chatViewData.pageTitle}
          created_at={chatViewData.created_at}
        />
      )}
      {currentPage === "summary" && summaryData && (
        <SummaryPage
          folderId={summaryData.folderId}
          folderName={summaryData.folderName}
        />
      )}
      {currentPage === "lawyer" && <LawyerPage />}
    </>
  );
}

export default App;
