import { useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";
import smile from "../../videos/smile.mp4";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
`;

const ModalCard = styled.div`
  display: flex;
  width: 21.125rem;
  padding: 3.75rem 0 1.875rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  border-radius: 1.875rem;
  background: #fff;
`;

const Title = styled.div`
  color: var(--80, #313131);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`;

const Sub = styled.div`
  color: var(--30, #acacac);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

const MediaBox = styled.div`
  width: 11.0625rem;
  height: 11.0625rem;
  aspect-ratio: 1 / 1;
  border-radius: 0.75rem;
  overflow: hidden;
  background: #e9f6ff;
`;

const MediaVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MediaImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export default function LoadingModal({
  mediaSrc,
  titleText,
  subText,
  autoCloseMs,
  onDone,
  chatSessionId,
  apiEndpoint,
  apiData,
  fallbackData,
  showAutoClose = true,
}) {
  useEffect(() => {
    if (!showAutoClose) return;

    let mounted = true;

    const fetchData = async () => {
      try {
        if (apiEndpoint && apiData) {
          // TODO: 백엔드 연동 후 실제 API 호출로 변경
          // 현재는 fallback 데이터 사용 (임시 로직)
          console.log("API 호출 시뮬레이션:", apiEndpoint, apiData);
          if (mounted && fallbackData) {
            onDone?.(fallbackData);
          }
        } else if (onDone) {
          // 단순히 시간만 기다리는 경우
          onDone();
        }
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        if (mounted && fallbackData) {
          onDone?.(fallbackData);
        }
      }
    };

    // TODO: 백엔드 연동 후 실제 API 응답을 기다리도록 수정 필요
    // 현재는 지정된 시간(autoCloseMs 또는 5초) 후 자동으로 완료 처리 (임시 로직)
    const timer = setTimeout(() => {
      if (!mounted) return;
      fetchData();
    }, autoCloseMs || 5000);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [
    autoCloseMs,
    onDone,
    chatSessionId,
    apiEndpoint,
    apiData,
    fallbackData,
    showAutoClose,
  ]);

  const src = mediaSrc || smile;
  const isVideo = /\.(mp4|webm)(\?.*)?$/i.test(src);

  return (
    <ModalOverlay data-modal="open">
      <ModalCard>
        <Title>{titleText}</Title>
        <Sub>{subText}</Sub>
        <MediaBox>
          {isVideo ? (
            <MediaVideo
              src={src}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          ) : (
            <MediaImg src={src} alt="loading" />
          )}
        </MediaBox>
      </ModalCard>
    </ModalOverlay>
  );
}
