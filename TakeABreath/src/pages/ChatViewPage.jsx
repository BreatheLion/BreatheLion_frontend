import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import { jsonServerHelpers } from "../utils/api";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 55rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 4.5rem;
`;

const Subtitle = styled.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: pre;
`;

const Title = styled.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fbfbfb;
  border-radius: 1.875rem;
  padding: 2rem;
  overflow-y: auto;
  margin-top: 2rem;
  gap: 0.62rem;
`;

const ChatMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.935rem 0;
`;

const MessageDate = styled.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
`;

const SpeakerName = styled.div`
  color: ${({ isAssistant }) =>
    isAssistant ? "var(--seconday, #688AE0)" : "var(--80, #313131)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  min-width: 4rem;
  flex-shrink: 0;
`;

const MessageContent = styled.div`
  color: ${({ isAssistant }) =>
    isAssistant ? "var(--seconday, #688AE0)" : "var(--80, #313131)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  align-self: stretch;
  white-space: pre-wrap;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MessageTime = styled.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  margin-top: 0.31rem;
  font-weight: 400;
`;

const LoadingText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
`;

export default function ChatViewPage({ record_id, pageTitle, created_at }) {
  const [isLoading, setIsLoading] = useState(true);
  const [chatData, setChatData] = useState(null);

  const formatTitleDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일 작성했어요`;
  };

  const getSpeakerName = (role) => {
    switch (role) {
      case "user":
        return "사용자";
      case "assistant":
        return "숨쉬어";
      default:
        return "알 수 없음";
    }
  };

  const fetchChatData = async () => {
    try {
      setIsLoading(true);

      // JSON Server API 호출
      const chatData = await jsonServerHelpers.getChatByRecordId(record_id);

      if (chatData) {
        setChatData({
          isSuccess: true,
          code: "200",
          message: "채팅 조회 성공!",
          data: chatData,
        });
      } else {
        throw new Error("채팅 데이터를 찾을 수 없습니다.");
      }
    } catch (error) {
      window.handleApiError(error, "채팅 데이터 로딩에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChatData();
  }, [record_id]);

  if (isLoading) {
    return (
      <PageContainer>
        <Header currentPage="chat-view" />
        <ContentContainer>
          <LoadingText>채팅 내역을 불러오는 중...</LoadingText>
        </ContentContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header currentPage="chat-view" />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>
            {pageTitle} {">"} 채팅 보기
          </Subtitle>
          <Title>{formatTitleDate(created_at)}</Title>
        </TitleContainer>

        <ChatContainer>
          {chatData?.data?.messages?.map((message, index) => {
            const showDate =
              index === 0 ||
              (index > 0 &&
                message.message_date !==
                  chatData.data.messages[index - 1].message_date);

            return (
              <div key={index}>
                {showDate && <MessageDate>{message.message_date}</MessageDate>}
                <ChatMessage>
                  <SpeakerName isAssistant={message.role === "assistant"}>
                    {getSpeakerName(message.role)}
                  </SpeakerName>
                  <MessageContent isAssistant={message.role === "assistant"}>
                    <div>{message.content}</div>
                    {message.role === "user" && (
                      <MessageTime>{message.message_time}</MessageTime>
                    )}
                  </MessageContent>
                </ChatMessage>
              </div>
            );
          })}
        </ChatContainer>
      </ContentContainer>
    </PageContainer>
  );
}
