import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/layout/Header";
import FileShowModal from "../components/ui/FileShowModal";
import BackButton from "../components/ui/BackButton";
import { apiHelpers } from "../utils/api";

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

const FileIcon = styled.div`
  font-size: 2rem;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default function ChatViewPage({
  record_id,
  pageTitle,
  created_at,
  drawerName,
}) {
  const navigate = useNavigate();
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

  // 24시간 형식을 12시간 형식으로 변환하는 함수
  const formatTimeTo12Hour = (timeString) => {
    if (!timeString) return "";

    try {
      // "HH:MM" 형식을 Date 객체로 변환
      const [hours, minutes] = timeString.split(":");
      const date = new Date();
      date.setHours(parseInt(hours, 10));
      date.setMinutes(parseInt(minutes, 10));

      // 12시간 형식으로 변환
      return date.toLocaleTimeString("ko-KR", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } catch (error) {
      console.error("시간 형식 변환 오류:", error);
      return timeString; // 변환 실패 시 원본 반환
    }
  };

  const handleFileClick = (evidence) => {
    setSelectedFile({
      filename: evidence.filename,
      type: evidence.type,
      url: evidence.url,
    });
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
      const responseData = await apiHelpers.getChatList(record_id);

      console.log("API 응답 데이터:", responseData);

      if (responseData && responseData.data) {
        setChatData(responseData);
      } else {
        throw new Error("채팅 데이터를 찾을 수 없습니다.");
      }
    } catch (error) {
      window.handleApiError(
        error,
        "오류가 발생했습니다. 메인 페이지로 이동합니다."
      );
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
      <BackButton onClick={() => navigate(-1)} />
      <ContentContainer>
        <TitleContainer>
          <Subtitle>
            {drawerName
              ? `모아보기   >   ${drawerName}   >   ${pageTitle}   >   채팅 보기`
              : `${pageTitle}   >   채팅 보기`}
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
                          // 파일 확장자를 기반으로 한 타입 감지 추가
                          const getFileTypeFromExtension = (filename) => {
                            const extension = filename
                              .split(".")
                              .pop()
                              ?.toLowerCase();
                            const imageExtensions = [
                              "jpg",
                              "jpeg",
                              "png",
                              "gif",
                              "bmp",
                              "webp",
                            ];
                            const videoExtensions = [
                              "mp4",
                              "avi",
                              "mov",
                              "wmv",
                              "flv",
                              "webm",
                            ];
                            const audioExtensions = [
                              "mp3",
                              "wav",
                              "m4a",
                              "aac",
                              "ogg",
                            ];

                            if (imageExtensions.includes(extension))
                              return "IMAGE";
                            if (videoExtensions.includes(extension))
                              return "VIDEO";
                            if (audioExtensions.includes(extension))
                              return "AUDIO";
                            return "FILE";
                          };

                          // API에서 받은 타입과 파일 확장자를 모두 고려
                          const apiType = evidence.type;
                          const contentType = evidence.contentType;
                          const extensionType = getFileTypeFromExtension(
                            evidence.filename
                          );

                          // contentType 기반 타입 감지
                          const contentTypeType = contentType?.startsWith(
                            "image/"
                          )
                            ? "IMAGE"
                            : contentType?.startsWith("video/")
                            ? "VIDEO"
                            : contentType?.startsWith("audio/")
                            ? "AUDIO"
                            : "FILE";

                          const finalType =
                            apiType || contentTypeType || extensionType;

                          const isImage =
                            finalType === "PHOTO" || finalType === "IMAGE";
                          const isVideo = finalType === "VIDEO";
                          const isAudio = finalType === "AUDIO";
                          const isFile = finalType === "FILE";

                          console.log(`Evidence ${index}:`, {
                            apiType,
                            contentType,
                            extensionType,
                            finalType,
                            filename: evidence.filename,
                            url: evidence.url,
                            isImage,
                            isVideo,
                            isAudio,
                            isFile,
                          });

                          return (
                            <AttachmentPreview
                              key={index}
                              onClick={() => handleFileClick(evidence)}
                            >
                              {isImage && (
                                <PreviewImage
                                  src={evidence.url}
                                  alt={evidence.filename}
                                  onError={(e) => {
                                    console.error(
                                      "Image failed to load:",
                                      e.target.src
                                    );
                                    e.target.style.display = "none";
                                  }}
                                  onLoad={() => {
                                    console.log(
                                      "Image loaded successfully:",
                                      evidence.url
                                    );
                                  }}
                                />
                              )}
                              {isVideo && (
                                <video
                                  src={evidence.url}
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
                                  onLoad={() => {
                                    console.log(
                                      "Video loaded successfully:",
                                      evidence.url
                                    );
                                  }}
                                />
                              )}
                              {isAudio && <AudioIcon>🎵</AudioIcon>}
                              {isFile && <FileIcon>📄</FileIcon>}
                            </AttachmentPreview>
                          );
                        })}
                      </NewAttachmentsContainer>
                    )}
                    <div>{message.content}</div>
                    {message.role === "user" && (
                      <MessageTime>
                        {formatTimeTo12Hour(message.message_time)}
                      </MessageTime>
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
        fileUrl={selectedFile?.url}
      />
    </PageContainer>
  );
}
