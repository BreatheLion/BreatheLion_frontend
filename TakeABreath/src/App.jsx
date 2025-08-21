import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";
import DrawerPage from "./pages/DrawerPage";
import RecordDetailPage from "./pages/RecordDetailPage";
import ChatViewPage from "./pages/ChatViewPage";
import SummaryPage from "./pages/SummaryPage";
import ExtractPdfPage from "./pages/ExtractPdfPage";
import GetContentProvePage from "./pages/GetContentProvePage";
import LawyerPage from "./pages/LawyerPage";
import ConsultantPage from "./pages/ConsultantPage";
import ConsultantConnectPage from "./pages/ConsultantConnectPage";
import LawyerDetailsPage from "./pages/LawyerDetailsPage";
import ConsultantConnectDetailPage from "./pages/ConsultantConnectDetailPage";
import AiHelperPage from "./pages/AiHelperPage";

// 전역 네비게이션 함수들을 위한 객체
window.navigation = {};

// 전역 에러 처리 함수 (중복 실행 방지)
let isErrorHandling = false;
window.handleApiError = (
  error,
  errorMessage = "API 호출 중 오류가 발생했습니다."
) => {
  // 이미 에러 처리 중이면 중복 실행 방지
  if (isErrorHandling) {
    console.error("이미 에러 처리 중입니다:", errorMessage, error);
    return;
  }

  isErrorHandling = true;
  console.error(errorMessage, error);

  // 1초 후에 에러 처리 상태 초기화 (다음 에러 처리를 위해)
  setTimeout(() => {
    isErrorHandling = false;
  }, 1000);

  alert(`${errorMessage}\n\n메인 페이지로 이동합니다.`);
  if (window.navigation.navigateToMain) {
    window.navigation.navigateToMain();
  }
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // 전역 네비게이션(기존 컴포넌트 호환)
  useEffect(() => {
    window.navigation.navigateToMain = () => navigate("/");
    window.navigation.navigateToChat = () => navigate("/chat");
    window.navigation.navigateToDrawer = () => navigate("/drawer");
    window.navigation.navigateToLawyer = () => navigate("/lawyer");
    window.navigation.navigateToConsultant = () => navigate("/consultant");
    window.navigation.navigateToRecordDetail = (previousPage, recordId) =>
      navigate(`/record/${recordId}`, { state: { previousPage } });
    window.navigation.navigateToChatView = (recordId, pageTitle, created_at) =>
      navigate(`/chat-view/${recordId}`, { state: { pageTitle, created_at } });
    window.navigation.navigateToSummary = (folderId, folderName) =>
      navigate(`/summary/${folderId}`, { state: { folderName } });
    window.navigation.navigateToExtractPdf = (recordId, recordName) =>
      navigate(`/extract-pdf/${recordId}`, { state: { recordName } });
  }, [navigate]);

  // 모달 오픈 시 뒤로가기를 무시
  useEffect(() => {
    const onPop = () => {
      const hasOpenModal = document.querySelector('[data-modal="open"]');
      if (hasOpenModal) {
        window.history.go(1);
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [location.pathname, navigate]);

  // 라우트 요소들에서 location.state를 안전하게 읽어 전달
  const ChatRoute = () => {
    const state = location.state || {};
    return (
      <ChatPage
        onNavigateToMain={() => navigate("/")}
        initialChatData={state.initialChatData || null}
      />
    );
  };

  const DrawerRoute = () => (
    <DrawerPage
      onNavigateToMain={() => navigate("/")}
      onNavigateToRecordDetail={(previousPage, recordId) =>
        window.navigation.navigateToRecordDetail(previousPage, recordId)
      }
    />
  );

  const RecordDetailRoute = () => {
    const state = location.state || {};
    const recordId = location.pathname.split("/").pop();
    return (
      <RecordDetailPage
        previousPage={state.previousPage || "main"}
        record_id={Number(recordId)}
      />
    );
  };

  const ChatViewRoute = () => {
    const state = location.state || {};
    const recordId = location.pathname.split("/").pop();
    return (
      <ChatViewPage
        record_id={Number(recordId)}
        pageTitle={state.pageTitle}
        created_at={state.created_at}
      />
    );
  };

  const SummaryRoute = () => {
    const state = location.state || {};
    const folderId = location.pathname.split("/").pop();
    return (
      <SummaryPage folderId={Number(folderId)} folderName={state.folderName} />
    );
  };

  const ExtractPdfRoute = () => {
    const { recordId } = useParams();
    const state = location.state || {};
    return <ExtractPdfPage recordId={recordId} recordName={state.recordName} />;
  };

  const GetContentProveRoute = () => {
    const { recordId } = useParams();
    const state = location.state || {};
    return (
      <GetContentProvePage recordId={recordId} recordName={state.recordName} />
    );
  };

  const AiHelperRoute = () => {
    const { drawerId } = useParams();
    const state = location.state || {};
    return <AiHelperPage drawerId={drawerId} drawerName={state.drawerName} />;
  };

  return (
    <Routes>
      {/* 초기 진입은 MainPage */}
      <Route
        path="/"
        element={
          <MainPage
            onNavigateToChat={(chatData) =>
              navigate("/chat", { state: { initialChatData: chatData } })
            }
          />
        }
      />
      <Route path="/chat" element={<ChatRoute />} />
      <Route path="/drawer" element={<DrawerRoute />} />
      <Route path="/record/:recordId" element={<RecordDetailRoute />} />
      <Route path="/chat-view/:recordId" element={<ChatViewRoute />} />
      <Route path="/summary/:folderId" element={<SummaryRoute />} />
      <Route path="/extract-pdf/:recordId" element={<ExtractPdfRoute />} />
      <Route
        path="/get-content-prove/:recordId"
        element={<GetContentProveRoute />}
      />
      <Route path="/ai-helper/:drawerId" element={<AiHelperRoute />} />
      <Route path="/lawyer" element={<LawyerPage />} />
      <Route path="/consultant" element={<ConsultantPage />} />
      <Route path="/consultant-connect" element={<ConsultantConnectPage />} />
      <Route path="/lawyer-details" element={<LawyerDetailsPage />} />
      <Route
        path="/consultant-details"
        element={<ConsultantConnectDetailPage />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
