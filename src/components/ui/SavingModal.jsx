import LoadingModal from "./LoadingModal";
import savingDocumentAnimation from "../../videos/savingDocumentAnimation.mp4";

export default function SavingModal({ isOpen, onDone }) {
  if (!isOpen) return null;

  return (
    <LoadingModal
      mediaSrc={savingDocumentAnimation}
      titleText="기록을 서랍에 저장하고 있어요"
      subText="잠시 후 메인 화면으로 돌아가요"
      autoCloseMs={3000}
      onDone={onDone}
      showAutoClose={true}
      // 현재는 3초 후 자동으로 완료 처리 (임시 로직)
    />
  );
}
