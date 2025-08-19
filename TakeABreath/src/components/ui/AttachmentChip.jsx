import styled from "styled-components";
import iconSymbol from "../../assets/iconSymbol.svg";

const Chip = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: #f2f2f2;
  color: #313131;
  font-size: 0.75rem;
  position: relative;
  box-sizing: border-box;
  width: 12rem;
  height: 7rem;
  flex: 0 0 12rem;

  &:hover .remove-btn {
    opacity: 1;
  }
`;

const Thumb = styled.div`
  width: 100%;
  height: 5rem;
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
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  max-height: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

  // 예시 이미지 URL (실제 이미지가 없을 때 사용)
  const fallbackImageUrl = iconSymbol;

  // 디버깅을 위한 로그
  console.log("AttachmentChip props:", {
    type,
    displayName,
    previewUrl,
    fallbackImageUrl,
    finalImageUrl: previewUrl || fallbackImageUrl,
  });

  const isImage =
    type.startsWith("image/") || type === "image" || type === "photo";
  const isVideo = type.startsWith("video/") || type === "video";
  const isAudio = type.startsWith("audio/") || type === "audio";

  return (
    <Chip>
      {isImage && (
        <Thumb>
          <img
            src={previewUrl || fallbackImageUrl}
            alt={displayName}
            onLoad={() =>
              console.log(
                "Image loaded successfully:",
                previewUrl || fallbackImageUrl
              )
            }
            onError={(e) => {
              console.error("Image failed to load:", e.target.src);
              console.error("Error details:", e);
            }}
          />
        </Thumb>
      )}
      {isVideo && (
        <Thumb>
          <video src={previewUrl || fallbackImageUrl} />
        </Thumb>
      )}
      {isAudio && (
        <Thumb>
          <span style={{ fontSize: "1.5rem", color: "#4a4a4a" }}>🎵</span>
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
