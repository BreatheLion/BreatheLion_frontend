import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/layout/Header";
import FileShowModal from "../components/ui/FileShowModal";

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

const NewAttachmentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  width: 34.6875rem;
  margin-bottom: 0.5rem;
`;

const AttachmentPreview = styled.div`
  width: 16rem;
  height: 12rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AudioIcon = styled.div`
  font-size: 3rem;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default function ChatViewPage({ record_id, pageTitle, created_at }) {
  const [isLoading, setIsLoading] = useState(true);
  const [chatData, setChatData] = useState(null);
  const [showFileModal, setShowFileModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleFileClick = (evidence) => {
    setSelectedFile(evidence);
    setShowFileModal(true);
  };

  const handleFileModalClose = () => {
    setShowFileModal(false);
    setSelectedFile(null);
  };

  const fetchChatData = async () => {
    try {
      setIsLoading(true);

      // 실제 API 호출
      const response = await fetch(`/api/chats/${record_id}/list/`);
      const responseData = await response.json();

      console.log("API 응답 데이터:", responseData);

      if (responseData && responseData.data) {
        setChatData(responseData);
      } else {
        throw new Error("채팅 데이터를 찾을 수 없습니다.");
      }
    } catch (error) {
      // 목업 데이터 사용 (추후 제거 예정)
      console.log("API 호출 실패, 목업 데이터 사용:", error);

      const mockData = {
        isSuccess: true,
        code: "200",
        message: "채팅 조회 성공!",
        data: {
          session_id: 5,
          messages: [
            {
              content:
                "그런 마음이 드는 게 정말 힘들겠어요. 따돌림을 당하는 것 같은 느낌도 참 고통스럽고요.",
              role: "assistant",
              message_time: "13:39",
              message_date: "2025 - 08 - 11",
              evidences: [
                {
                  fileName: "photo.jpg",
                  contentType: "image/jpeg",
                  viewUrl: "https://bucket.s3.amazonaws.com/presigned-url-123",
                },
                {
                  fileName: "screenshot.png",
                  contentType: "image/png",
                  viewUrl: "https://bucket.s3.amazonaws.com/presigned-url-125",
                },
              ],
            },
            {
              content: "네, 지난주에 친구들이 점심시간에 저를 빼놓고 모였어요.",
              role: "user",
              message_time: "13:40",
              message_date: "2025 - 08 - 11",
              evidences: null,
            },
            {
              content:
                "그때 어떤 기분이 들었는지, 그리고 이후에 어떤 일이 있었는지 이야기해 주실 수 있나요?",
              role: "assistant",
              message_time: "13:41",
              message_date: "2025 - 08 - 11",
              evidences: null,
            },
          ],
        },
      };

      setChatData(mockData);
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
                    {message.evidences && message.evidences.length > 0 && (
                      <NewAttachmentsContainer>
                        {message.evidences.map((evidence, index) => {
                          const isImage =
                            evidence.contentType?.startsWith("image/");
                          const isVideo =
                            evidence.contentType?.startsWith("video/");
                          const isAudio =
                            evidence.contentType?.startsWith("audio/");
                          const isFile = !isImage && !isVideo && !isAudio;

                          return (
                            <AttachmentPreview
                              key={index}
                              onClick={() => handleFileClick(evidence)}
                            >
                              {isImage && (
                                <PreviewImage
                                  src={evidence.viewUrl}
                                  alt={evidence.fileName}
                                  onError={(e) => {
                                    console.error(
                                      "Image failed to load:",
                                      e.target.src
                                    );
                                    e.target.style.display = "none";
                                  }}
                                />
                              )}
                              {isVideo && (
                                <video
                                  src={evidence.viewUrl}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                  onError={(e) => {
                                    console.error(
                                      "Video failed to load:",
                                      e.target.src
                                    );
                                    e.target.style.display = "none";
                                  }}
                                />
                              )}
                              {isAudio && <AudioIcon>🎵</AudioIcon>}
                              {isFile && <AudioIcon>📄</AudioIcon>}
                            </AttachmentPreview>
                          );
                        })}
                      </NewAttachmentsContainer>
                    )}
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

      <FileShowModal
        isOpen={showFileModal}
        onClose={handleFileModalClose}
        file={selectedFile}
        fileUrl={selectedFile?.viewUrl}
      />
    </PageContainer>
  );
}
