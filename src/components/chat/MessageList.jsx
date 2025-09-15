import styled from "styled-components";
import LoadingDots from "../ui/LoadingDots";
import iconSymbol from "../../assets/iconSymbol.svg";

const ChatArea = styled.div`
  flex: 1;
  padding: 0 12.5rem;
  padding-top: 1.44rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scroll-behavior: smooth;
`;

const MessageContainer = styled.div`
  display: flex;
  gap: 0.9375rem;
  position: relative;

  &.user {
    justify-content: flex-end;
  }

  &.ai {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  &.user {
    align-items: flex-end;
  }

  &.ai {
    align-items: flex-start;
  }
`;

const MessageBubble = styled.div`
  max-width: 25rem;
  padding: 1.25rem;
  border-radius: 1.25rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  box-sizing: border-box;

  &.user {
    background: linear-gradient(
      267deg,
      var(--Color, #68b8ea) -99.74%,
      #688ae0 37.78%,
      #8c68e0 177.79%
    );
    color: #fff;
    border-radius: 1.25rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  }

  &.ai {
    background: #fbfbfb;
    color: #313131;
    border: none;
    padding: 1.25rem;
    position: relative;
    border-radius: 1.25rem;
  }
`;

const AIIcon = styled.div`
  width: 1.8125rem;
  height: 1.8125rem;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-right: 1rem;
`;

const TimeStamp = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 0.625rem;
  color: #acacac;
  line-height: 0.8125rem;
  flex-shrink: 0;
  margin-bottom: 0.5rem;
  white-space: nowrap;
`;

const MessageAttachments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const MessageImage = styled.img`
  width: 20rem;
  height: 12rem;
  border-radius: 0.5rem;
  object-fit: cover;
  background: #e9e9e9;
  display: block;
`;

const MessageVideo = styled.video`
  width: 20rem;
  height: 12rem;
  border-radius: 0.5rem;
  background: #000;
  object-fit: cover;
`;

const MessageAudio = styled.audio`
  width: 20rem;
  height: 2rem;
`;

export default function MessageList({ messages, chatAreaRef }) {
  return (
    <ChatArea ref={chatAreaRef}>
      {messages.map((message) => (
        <MessageContainer key={message.id} className={message.type}>
          <MessageWrapper className={message.type}>
            {message.type === "ai" && (
              <AIIcon>
                <img
                  src={iconSymbol}
                  alt="AI 아이콘"
                  style={{ width: "1.8125rem", height: "1.8125rem" }}
                />
              </AIIcon>
            )}
            {message.type === "user" && message.time && (
              <TimeStamp>{message.time}</TimeStamp>
            )}
            <MessageBubble className={message.type}>
              {message.content === "응답 중입니다" ? (
                <LoadingDots />
              ) : (
                message.content
              )}
              {message.type === "user" &&
                message.attachments &&
                message.attachments.length > 0 && (
                  <MessageAttachments>
                    {message.attachments.map((att) => (
                      <div key={att.id}>
                        {att.type && att.type.startsWith("image/") && (
                          <MessageImage src={att.previewUrl} alt={att.name} />
                        )}
                        {att.type && att.type.startsWith("video/") && (
                          <MessageVideo src={att.previewUrl} controls />
                        )}
                        {att.type && att.type.startsWith("audio/") && (
                          <MessageAudio src={att.previewUrl} controls />
                        )}
                      </div>
                    ))}
                  </MessageAttachments>
                )}
            </MessageBubble>
          </MessageWrapper>
        </MessageContainer>
      ))}
    </ChatArea>
  );
}

