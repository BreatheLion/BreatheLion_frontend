import { useState, useEffect } from "react";
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
  max-width: 400px;
  height: 50px;
  margin: 1rem 0;
  display: block;
`;

const AudioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border-radius: 0.5rem;
  padding: 2rem;
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
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);

  // 모달이 열릴 때마다 상태 초기화
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
      console.log("FileShowModal opened with:", { file, fileUrl });

      // 5초 후 자동으로 로딩 상태 해제 (fallback)
      const timer = setTimeout(() => {
        console.log("Auto-loading timeout reached");
        setIsLoading(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, file, fileUrl]);

  // Blob 변환(fetch)을 사용하지 않고, 태그에서 직접 URL을 로드해 CORS 이슈를 회피
  useEffect(() => {
    if (!isOpen || !fileUrl) return;

    const getFileType = () => {
      const apiType = file?.type || "";
      const filename = file?.filename || "";
      const extension = filename.split(".").pop()?.toLowerCase();
      const videoExtensions = ["mp4", "avi", "mov", "wmv", "flv", "webm"];
      const audioExtensions = ["mp3", "wav", "m4a", "aac", "ogg"];

      if (apiType === "VIDEO" || videoExtensions.includes(extension))
        return "VIDEO";
      if (apiType === "AUDIO" || audioExtensions.includes(extension))
        return "AUDIO";
      return "IMAGE"; // 기본은 이미지로 가정
    };

    const fileType = getFileType();

    // 기존 Blob URL 정리
    if (mediaBlobUrl && mediaBlobUrl.startsWith("blob:")) {
      window.URL.revokeObjectURL(mediaBlobUrl);
    }
    setMediaBlobUrl(null);

    // 이미지: 즉시 로딩 종료, 비디오/오디오: 태그 이벤트에서 로딩 종료
    if (fileType === "IMAGE") {
      setIsLoading(false);
    }

    return () => {
      if (mediaBlobUrl && mediaBlobUrl.startsWith("blob:")) {
        console.log("Blob URL 정리:", mediaBlobUrl);
        window.URL.revokeObjectURL(mediaBlobUrl);
      }
    };
  }, [isOpen, fileUrl, file, mediaBlobUrl]);

  if (!isOpen) return null;

  const handleLoad = () => {
    console.log("handleLoad called - file loaded successfully");
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = (error) => {
    console.error("handleError called - file failed to load:", error);
    console.error("File details:", {
      file,
      fileUrl,
      mediaBlobUrl,
      error: error.target?.error || error,
    });

    // 네트워크 요청 상태 확인
    if (error.target) {
      console.error("Media element error details:", {
        networkState: error.target.networkState,
        readyState: error.target.readyState,
        error: error.target.error,
      });
    }

    // Blob URL 에러인 경우 원본 URL로 fallback
    if (mediaBlobUrl && mediaBlobUrl.startsWith("blob:")) {
      console.log("Blob URL 에러 발생, 원본 URL로 fallback");
      setMediaBlobUrl(null);
      setIsLoading(false);
      setHasError(false);
      return;
    }

    setIsLoading(false);
    setHasError(true);
  };

  const handleDownload = async () => {
    // 사전서명 URL 우선 사용, 없으면 원본 URL 사용
    const downloadUrl = file?.presigned_url || fileUrl;

    if (downloadUrl) {
      try {
        console.log("다운로드 시작:", downloadUrl);

        // CORS 문제를 피하기 위해 먼저 새 탭에서 열기 시도
        const newWindow = window.open(downloadUrl, "_blank");

        // 새 탭이 차단된 경우를 대비한 fallback
        if (
          !newWindow ||
          newWindow.closed ||
          typeof newWindow.closed === "undefined"
        ) {
          console.log("팝업이 차단됨, 직접 다운로드 시도");

          const response = await fetch(downloadUrl, {
            mode: "cors",
            credentials: "omit",
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const blob = await response.blob();
          console.log("Blob 생성됨:", blob.size, "bytes");

          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = file?.filename || "download";
          link.style.display = "none";

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);

          console.log("다운로드 완료");
        } else {
          console.log("새 탭에서 파일 열기 성공");
        }
      } catch (error) {
        console.error("다운로드 중 오류:", error);
        // 최종 fallback: 새 탭에서 열기
        window.open(downloadUrl, "_blank");
      }
    }
  };

  const renderContent = () => {
    console.log("renderContent called with:", {
      file,
      fileUrl,
      isLoading,
      hasError,
    });

    if (isLoading) {
      return <LoadingSpinner>로딩 중...</LoadingSpinner>;
    }

    if (hasError) {
      return <ErrorMessage>파일을 불러올 수 없습니다.</ErrorMessage>;
    }

    // 파일 타입 결정 로직 개선
    const getFileType = () => {
      const apiType = file?.type || "";
      const mimeType = file?.mimeType || "";
      const filename = file?.filename || "";

      // API 타입을 정규화 (대문자로 변환)
      const normalizeApiType = (type) => {
        if (!type) return null;
        const normalized = type.toUpperCase();
        if (["IMAGE", "VIDEO", "AUDIO"].includes(normalized)) {
          return normalized;
        }
        return null;
      };

      // MIME 타입을 기반으로 한 타입 감지
      const getFileTypeFromMimeType = (mimeType) => {
        if (mimeType.startsWith("image/")) return "IMAGE";
        if (mimeType.startsWith("video/")) return "VIDEO";
        if (mimeType.startsWith("audio/")) return "AUDIO";
        return null;
      };

      // 파일 확장자를 기반으로 한 타입 감지
      const getFileTypeFromExtension = (filename) => {
        const extension = filename.split(".").pop()?.toLowerCase();
        const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
        const videoExtensions = ["mp4", "avi", "mov", "wmv", "flv", "webm"];
        const audioExtensions = ["mp3", "wav", "m4a", "aac", "ogg"];

        if (imageExtensions.includes(extension)) return "IMAGE";
        if (videoExtensions.includes(extension)) return "VIDEO";
        if (audioExtensions.includes(extension)) return "AUDIO";
        return null;
      };

      // 우선순위: apiType > mimeType > extension
      const normalizedApiType = normalizeApiType(apiType);
      const mimeTypeResult = getFileTypeFromMimeType(mimeType);
      const extensionType = getFileTypeFromExtension(filename);
      const finalType = normalizedApiType || mimeTypeResult || extensionType;

      console.log("File type detection:", {
        apiType,
        normalizedApiType,
        mimeType,
        mimeTypeResult,
        extensionType,
        finalType,
        filename,
      });

      return finalType;
    };

    const fileType = getFileType();
    console.log("Final file type:", fileType);
    console.log("File object for debugging:", {
      file,
      fileUrl,
      mediaBlobUrl,
      mediaUrl: file?.presigned_url || mediaBlobUrl || fileUrl,
    });

    // URL 우선순위: presigned_url > mediaBlobUrl > fileUrl
    const mediaUrl =
      file?.presigned_url ||
      (mediaBlobUrl && mediaBlobUrl.startsWith("blob:")
        ? mediaBlobUrl
        : null) ||
      fileUrl;

    if (fileType === "IMAGE" || fileType === "PHOTO") {
      console.log("Rendering image with URL:", mediaUrl);
      return (
        <ImageContent
          src={mediaUrl}
          alt={file?.filename || "이미지"}
          onLoad={handleLoad}
          onError={handleError}
        />
      );
    }

    if (fileType === "VIDEO") {
      console.log("Rendering video with URL:", mediaUrl);
      return (
        <VideoContent
          src={mediaUrl}
          controls
          onLoadedData={handleLoad}
          onError={handleError}
          onLoadStart={() => {
            console.log("Video load started");
            // 로딩 시작 시에는 로딩 상태를 true로 설정하지 않음 (이미 true)
          }}
          onCanPlay={() => {
            console.log("Video can play");
            setIsLoading(false);
          }}
          onCanPlayThrough={() => {
            console.log("Video can play through");
            setIsLoading(false);
          }}
          onLoadedMetadata={() => {
            console.log("Video metadata loaded");
            setIsLoading(false);
          }}
        />
      );
    }

    if (fileType === "AUDIO") {
      console.log("Rendering audio with URL:", mediaUrl);
      console.log("Audio rendering details:", {
        file,
        fileUrl,
        mediaBlobUrl,
        mediaUrl,
        isLoading,
        hasError,
      });
      return (
        <AudioContainer>
          <AudioContent
            src={mediaUrl}
            controls
            preload="metadata"
            onLoadedData={handleLoad}
            onError={handleError}
            onLoadStart={() => {
              console.log("Audio load started");
              // 로딩 시작 시에는 로딩 상태를 true로 설정하지 않음 (이미 true)
            }}
            onCanPlay={() => {
              console.log("Audio can play");
              setIsLoading(false);
            }}
            onCanPlayThrough={() => {
              console.log("Audio can play through");
              setIsLoading(false);
            }}
            onLoadedMetadata={() => {
              console.log("Audio metadata loaded");
              setIsLoading(false);
            }}
            onLoad={() => {
              console.log("Audio load event");
              setIsLoading(false);
            }}
            onProgress={() => {
              console.log("Audio progress event");
            }}
          />
        </AudioContainer>
      );
    }

    // 파일 타입이 감지되지 않은 경우 fallback 처리
    console.warn("파일 타입을 감지할 수 없음, fallback으로 이미지로 처리:", {
      file,
      fileType,
    });

    return (
      <ImageContent
        src={mediaUrl}
        alt={file?.filename || "파일"}
        onLoad={handleLoad}
        onError={handleError}
      />
    );
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
