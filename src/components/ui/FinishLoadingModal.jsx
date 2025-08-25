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
  return (
    <LoadingModal
      mediaSrc={mediaSrc || smile}
      titleText={titleText}
      subText={subText}
      autoCloseMs={autoCloseMs}
      onDone={onDone}
      chatSessionId={chatSessionId}
      showAutoClose={true}
    />
  );
}
