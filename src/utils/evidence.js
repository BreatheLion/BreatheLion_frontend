// Evidence upload/read/delete utility using presigned S3 URLs
// - Upload flow: POST get-upload-url -> PUT to S3 -> return { s3Key }
// - Read URL: GET presigned read url -> return { url }
// - Delete: POST delete-by-key

import { getApiBaseUrl } from "../config/api";

const API_BASE = getApiBaseUrl();

// 100 MB
export const MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024;

export const isSupportedMedia = (file) => {
  if (!file) return false;
  const type = file.type || "";
  const okPrefix =
    type.startsWith("image/") ||
    type.startsWith("video/") ||
    type.startsWith("audio/");
  const okSize =
    typeof file.size === "number" ? file.size <= MAX_FILE_SIZE_BYTES : true;
  return okPrefix && okSize;
};

export const toEvidenceType = (file) => {
  const type = (file?.type || "").toLowerCase();
  if (type.startsWith("image/")) return "IMAGE";
  if (type.startsWith("video/")) return "VIDEO";
  if (type.startsWith("audio/")) return "AUDIO";
  return "OTHER";
};

const getUploadUrl = async ({ prefix, contentType, contentLength }) => {
  const res = await fetch(`${API_BASE}/api/evidence/presigned-url`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prefix, contentType, contentLength }),
  });
  if (!res.ok) throw new Error(`presigned-url 발급 실패: ${res.status}`);
  return res.json(); // { url, s3Key }
};

const putToS3 = async ({ url, file, contentType }) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": contentType },
    body: file,
  });
  if (!res.ok) throw new Error(`S3 업로드 실패: ${res.status}`);
};

const getReadUrl = async (s3Key, minutes = 10) => {
  const res = await fetch(
    `${API_BASE}/api/evidence/presigned-url/read?s3Key=${encodeURIComponent(
      s3Key
    )}&minutes=${minutes}`
  );
  if (!res.ok) throw new Error(`read-url 발급 실패: ${res.status}`);
  return res.json(); // { url }
};

const deleteByKey = async (s3Key) => {
  const res = await fetch(
    `${API_BASE}/api/evidence/delete-by-key?s3Key=${encodeURIComponent(s3Key)}`,
    { method: "POST" }
  );
  if (!res.ok) throw new Error(`S3 객체 삭제 실패: ${res.status}`);
  return res.json();
};

export const evidenceClient = {
  // 1) 파일을 업로드하고 s3Key와 보기용 URL을 돌려준다
  uploadAndGetPreview: async ({ prefix, file, readMinutes = 10 }) => {
    if (!isSupportedMedia(file)) {
      throw new Error("지원하지 않는 파일 형식이거나 용량 초과입니다.");
    }

    const { url, s3Key } = await getUploadUrl({
      prefix,
      contentType: file.type,
      contentLength: file.size,
    });

    await putToS3({ url, file, contentType: file.type });

    const read = await getReadUrl(s3Key, readMinutes);

    return {
      s3Key,
      previewUrl: read?.url || "",
      filename: file.name,
      mimeType: file.type,
      type: toEvidenceType(file), // "IMAGE" | "VIDEO" | "AUDIO"
      size: file.size,
    };
  },

  getReadUrl,
  deleteByKey,
};
