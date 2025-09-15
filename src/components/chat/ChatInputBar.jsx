import styled from "styled-components";
import AttachmentChip from "../ui/AttachmentChip";
import ChatPagePlusButton from "../../assets/ChatPagePlusButton.svg";
import ChatPageSendButton from "../../assets/ChatPageSendButton.svg";

const BottomPanel = styled.div`
  padding: 0 0 0 0;
  height: 16rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;
  overflow: hidden;
`;

const AttachmentsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 12.5rem 0 12.5rem;
`;

const InputArea = styled.div`
  padding: 0 12.5rem 2rem 12.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 60rem;
  padding: 0.9375rem 1.25rem 0 1.25rem;
  flex-direction: column;
  align-items: stretch;
  border-radius: 1.25rem;
  border: 2px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(
        267deg,
        var(--Color, #68b8ea) -67.73%,
        #688ae0 48.44%,
        #8c68e0 122.38%
      )
      border-box;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
`;

const ChatInput = styled.textarea`
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  color: #313131;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  height: 1.25rem;
  min-height: 1.25rem;
  outline: none;
  resize: none;
  max-height: calc(1.25rem * 4);
  overflow-y: auto;

  &::placeholder {
    color: #acacac;
  }
`;

const InputActions = styled.div`
  display: flex;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
`;

const SendButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const PlusIcon = styled.div`
  width: 0.875rem;
  height: 0.875rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 0.875rem;
    height: 0.875rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const FileInput = styled.input`
  display: none;
`;

export default function ChatInputBar({
  attachments,
  inputValue,
  isLoading,
  onChange,
  onKeyDown,
  onSend,
  onFileSelect,
  onFilesChosen,
  onRemoveAttachment,
  fileInputRef,
}) {
  return (
    <BottomPanel>
      {attachments.length > 0 && (
        <AttachmentsBar>
          {attachments.map((att) => (
            <AttachmentChip
              key={att.id}
              file={att.file}
              previewUrl={att.previewUrl}
              mimeType={att.mimeType}
              name={att.filename}
              onRemove={() => onRemoveAttachment(att.id)}
            />
          ))}
        </AttachmentsBar>
      )}

      <InputArea>
        <InputContainer>
          <ChatInput
            placeholder=""
            value={inputValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
            disabled={isLoading}
            rows={1}
          />
          <InputActions>
            <PlusIcon onClick={onFileSelect}>
              <img src={ChatPagePlusButton} alt="파일 첨부" />
            </PlusIcon>
            <SendButton onClick={onSend} disabled={isLoading}>
              <img src={ChatPageSendButton} alt="전송" />
            </SendButton>
          </InputActions>
          <FileInput
            ref={fileInputRef}
            type="file"
            accept="image/*,audio/*,video/*"
            multiple
            onChange={onFilesChosen}
          />
        </InputContainer>
      </InputArea>
    </BottomPanel>
  );
}

