import { useState } from "react";
import styled from "styled-components";
import { SmallButton } from "./Button";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContainer = styled.div`
  display: inline-flex;
  padding: 2.5rem 2.5rem 1.875rem 1.875rem;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
`;

const ContentArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 15rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  position: relative;
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fff;
`;

const VideoContent = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
`;

const AudioContent = styled.audio`
  width: 100%;
  height: 100%;
`;

const AudioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border-radius: 0.5rem;
`;

const AudioIcon = styled.div`
  font-size: 4rem;
  color: #4a4a4a;
  margin-bottom: 1rem;
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #4a4a4a;
  font-family: Pretendard;
  font-size: 0.875rem;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #e44343;
  font-family: Pretendard;
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.94rem;
  justify-content: center;
`;

export default function FileShowModal({ isOpen, onClose, file, fileUrl }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!isOpen) return null;

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleDownload = () => {
    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = file?.filename || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner>로딩 중...</LoadingSpinner>;
    }

    if (hasError) {
      return <ErrorMessage>파일을 불러올 수 없습니다.</ErrorMessage>;
    }

    const fileType = file?.type?.toLowerCase() || "";

    if (fileType.includes("image") || fileType === "photo") {
      return (
        <ImageContent
          src={fileUrl}
          alt={file?.filename || "이미지"}
          onLoad={handleLoad}
          onError={handleError}
        />
      );
    }

    if (fileType.includes("video")) {
      return (
        <VideoContent
          src={fileUrl}
          controls
          onLoadedData={handleLoad}
          onError={handleError}
        />
      );
    }

    if (fileType.includes("audio")) {
      return (
        <AudioContainer>
          <div style={{ textAlign: "center" }}>
            <AudioIcon>🎵</AudioIcon>
            <AudioContent
              src={fileUrl}
              controls
              onLoadedData={handleLoad}
              onError={handleError}
            />
          </div>
        </AudioContainer>
      );
    }

    return <ErrorMessage>지원하지 않는 파일 형식입니다.</ErrorMessage>;
  };

  return (
    <ModalOverlay onClick={onClose} data-modal="open">
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ContentArea>{renderContent()}</ContentArea>

        <ButtonContainer>
          <SmallButton variant="secondary" onClick={onClose}>
            닫기
          </SmallButton>
          <SmallButton variant="primary" onClick={handleDownload}>
            다운로드
          </SmallButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}
