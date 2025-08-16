import { useState } from "react";
import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";
import DrawerPage from "./pages/DrawerPage";

function App() {
  const [currentPage, setCurrentPage] = useState("main"); // "main" | "chat" | "drawer"
  const [initialChatData, setInitialChatData] = useState(null);

  const navigateToChat = (chatData) => {
    setInitialChatData(chatData);
    setCurrentPage("chat");
  };

  const navigateToMain = () => {
    setCurrentPage("main");
    setInitialChatData(null);
  };

  const navigateToDrawer = () => {
    setCurrentPage("drawer");
    setInitialChatData(null);
  };

  return (
    <>
      {currentPage === "main" && (
        <MainPage
          onNavigateToChat={navigateToChat}
          onNavigateToDrawer={navigateToDrawer}
        />
      )}
      {currentPage === "chat" && (
        <ChatPage
          onNavigateToMain={navigateToMain}
          onNavigateToDrawer={navigateToDrawer}
          initialChatData={initialChatData}
        />
      )}
      {currentPage === "drawer" && (
        <DrawerPage onNavigateToMain={navigateToMain} />
      )}
    </>
  );
}

export default App;
