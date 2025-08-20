import LoadingModal from "./LoadingModal";
import smile from "../../videos/smile.mp4";

export default function FinishLoadingModal({
  mediaSrc,
  titleText = "대화 내용을 정리하고 있어요",
  subText = "잠시 한숨 돌리고 계세요!",
  autoCloseMs = 3000,
  onDone,
  chatSessionId,
}) {
  // TODO: 백엔드 연동 후 실제 API 응답으로 대체 필요
  // 현재는 하드코딩된 테스트 데이터 사용 (임시 로직)
  const fallbackData = {
    record_id: 3,
    title: "동방에서 일어난 무시무시한 사건",
    categories: ["괴롭힘"],
    content: "오늘 해승이가 해원이를 괴롭혔다",
    severity: 1,
    location: "동방",
    district: "DONGJAK",
    created_at: "2025-08-05T10:00:00",
    occurred_at: "2025-08-01T14:30:00",
    assailant: [],
    witness: [],
    drawers: ["00 커피 폭언", "기차역 살인사건"],
    evidences: [
      {
        filename: "해원이 욕설 파일",
        type: "audio",
        url: "url~~",
      },
      {
        filename: "폭행 당시 사진",
        type: "image",
        url: "url2~~",
      },
    ],
  };

  return (
    <LoadingModal
      mediaSrc={mediaSrc || smile}
      titleText={titleText}
      subText={subText}
      autoCloseMs={autoCloseMs}
      onDone={onDone}
      chatSessionId={chatSessionId}
      apiEndpoint="/api/records/start/"
      apiData={{ chat_session_id: chatSessionId }}
      fallbackData={fallbackData}
      showAutoClose={true}
      // TODO: 백엔드 연동 후 실제 API 응답을 기다리도록 수정 필요
      // 현재는 3초 후 자동으로 완료 처리 (임시 로직)
    />
  );
}
