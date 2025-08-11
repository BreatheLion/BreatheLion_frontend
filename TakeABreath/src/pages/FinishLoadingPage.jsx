import { useEffect } from "react";
import styled from "styled-components";
import smile from "../images/smile.mp4";

const Page = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
`;

const Card = styled.div`
  display: flex;
  width: 21.125rem;
  padding: 3.75rem 0 1.875rem 0;
  flex-direction: column;
  justify-content: flex-start; /* 상단 정렬 */
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
  line-height: 1.5rem; /* 120% */
`;

const Sub = styled.div`
  color: var(--30, #acacac);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 142.857% */
`;

const MediaBox = styled.div`
  width: 11.0625rem;
  height: 11.0625rem;
  aspect-ratio: 1 / 1;
  border-radius: 0.75rem;
  overflow: hidden;
  background: #e9f6ff; /* placeholder 배경 */
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

export default function FinishLoadingPage({
  mediaSrc,
  titleText = "기록을 서랍에 저장하고 있어요",
  subText = "2초 후 메인 화면으로 돌아가요",
  autoCloseMs = 5000,
  onDone,
}) {
  useEffect(() => {
    let mounted = true;
    const timer = setTimeout(() => {
      if (!mounted) return;
      const fallback = {
        record_id: 3,
        title: "동방에서 일어난 무시무시한 사건",
        category: ["괴롭힘"],
        content: "오늘 해승이가 해원이를 괴롭혔다",
        severity: 1,
        location: "동방",
        created_at: new Date().toISOString(),
        occurred_at: new Date().toISOString(),
        assailant: ["서해승", "이예림"],
        witness: ["오영록"],
        drawers: ["00 커피 폭언", "기차역 살인사건"],
        evidences: [],
      };
      onDone?.(fallback);
    }, autoCloseMs);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [autoCloseMs, onDone]);

  const src = mediaSrc || smile;
  const isVideo = /\.(mp4|webm)(\?.*)?$/i.test(src);

  return (
    <Page>
      <Card>
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
      </Card>
    </Page>
  );
}
