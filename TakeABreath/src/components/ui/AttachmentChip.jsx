import styled from "styled-components";

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.5rem;
  border-radius: 1rem;
  background: #f2f2f2;
  color: #313131;
  font-size: 0.75rem;
  position: relative;
  box-sizing: border-box;
  width: calc(100% / 3 - 1rem); /* 동일한 시각적 너비 */
  flex: 0 0 calc(100% / 3 - 1rem); /* 같은 라인에 3개씩 배치 */

  &:hover .remove-btn {
    opacity: 1;
  }
`;

const Thumb = styled.div`
  width: 3rem;
  height: 2rem;
  border-radius: 0.25rem;
  overflow: hidden;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RemoveBtn = styled.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  border: none;
  background: #4a4a4a;
  color: #fff;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.2s;

  &:hover {
    background: #333333;
  }
`;

const Name = styled.span`
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function AttachmentChip({
  file,
  previewUrl,
  onRemove,
  name,
  kind,
}) {
  const rawType = file?.type || kind || "";
  const type = typeof rawType === "string" ? rawType : "";
  const displayName = name || file?.name;
  return (
    <Chip>
      {(type.startsWith("image/") || type === "image") && (
        <Thumb>
          <img src={previewUrl} alt={displayName} />
        </Thumb>
      )}
      {(type.startsWith("video/") || type === "video") && (
        <Thumb>
          <video src={previewUrl} />
        </Thumb>
      )}
      {(type.startsWith("audio/") || type === "audio") && (
        <Thumb>
          <span style={{ fontSize: "0.625rem", color: "#4a4a4a" }}>오디오</span>
        </Thumb>
      )}
      <Name title={displayName}>{displayName}</Name>
      {onRemove && (
        <RemoveBtn
          className="remove-btn"
          onClick={onRemove}
          aria-label="remove"
        >
          ×
        </RemoveBtn>
      )}
    </Chip>
  );
}
