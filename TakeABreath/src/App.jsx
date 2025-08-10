import { useState } from "react";
import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const [currentPage, setCurrentPage] = useState("main"); // "main" | "chat"
  const [initialChatData, setInitialChatData] = useState(null);

  const navigateToChat = (chatData) => {
    setInitialChatData(chatData);
    setCurrentPage("chat");
  };

  const navigateToMain = () => {
    setCurrentPage("main");
    setInitialChatData(null);
  };

  return (
    <>
      {currentPage === "main" && <MainPage onNavigateToChat={navigateToChat} />}
      {currentPage === "chat" && (
        <ChatPage
          onNavigateToMain={navigateToMain}
          initialChatData={initialChatData}
        />
      )}
    </>
  );
}

export default App;
