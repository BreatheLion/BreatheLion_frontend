import { useEffect } from "react";

// 프리로딩할 미디어 파일들의 경로
const MEDIA_FILES = {
  // MP4 비디오 파일들
  savingDocumentAnimation: "/src/videos/savingDocumentAnimation.mp4",
  smile: "/src/videos/smile.mp4",

  // SVG 아이콘들
  sadCloudIcon: "/src/assets/sadCloudIcon.svg",
  ConsultantIcon: "/src/assets/ConsultantIcon.svg",
  ContentProveIcon: "/src/assets/ContentProveIcon.svg",
};

/**
 * 미디어 파일들을 사전에 프리로딩하는 커스텀 훅 (백그라운드에서 조용히 실행)
 */
export const usePreloadMedia = () => {
  useEffect(() => {
    const preloadMedia = async () => {
      const mediaFiles = Object.values(MEDIA_FILES);
      const totalFiles = mediaFiles.length;
      let loadedFiles = 0;

      console.log("🎬 백그라운드 미디어 프리로딩 시작:", mediaFiles);

      // 각 미디어 파일을 순차적으로 프리로딩
      for (const filePath of mediaFiles) {
        try {
          await preloadSingleMedia(filePath);
          loadedFiles++;
          const progress = Math.round((loadedFiles / totalFiles) * 100);
          console.log(
            `✅ 백그라운드 프리로딩 완료 (${loadedFiles}/${totalFiles}):`,
            filePath
          );
        } catch (error) {
          console.warn(`⚠️ 백그라운드 프리로딩 실패:`, filePath, error);
        }
      }

      console.log("🎉 모든 미디어 백그라운드 프리로딩 완료!");
    };

    preloadMedia();
  }, []);
};

/**
 * 단일 미디어 파일을 프리로딩하는 함수
 * @param {string} filePath - 프리로딩할 파일 경로
 * @returns {Promise} 프리로딩 완료 Promise
 */
const preloadSingleMedia = (filePath) => {
  return new Promise((resolve, reject) => {
    const isVideo = /\.(mp4|webm|avi|mov)$/i.test(filePath);
    const isImage = /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(filePath);

    if (isVideo) {
      preloadVideo(filePath, resolve, reject);
    } else if (isImage) {
      preloadImage(filePath, resolve, reject);
    } else {
      // 기타 파일 타입은 fetch로 처리
      preloadWithFetch(filePath, resolve, reject);
    }
  });
};

/**
 * 비디오 파일 프리로딩
 */
const preloadVideo = (filePath, resolve, reject) => {
  const video = document.createElement("video");

  video.addEventListener("loadeddata", () => {
    console.log(`📹 백그라운드 비디오 프리로딩 완료:`, filePath);
    resolve();
  });

  video.addEventListener("error", (e) => {
    console.warn(`📹 백그라운드 비디오 프리로딩 실패:`, filePath, e);
    reject(new Error(`비디오 로딩 실패: ${filePath}`));
  });

  // 비디오 프리로딩 설정
  video.preload = "metadata"; // 메타데이터만 프리로딩 (용량 절약)
  video.muted = true; // 자동재생 방지
  video.src = filePath;
};

/**
 * 이미지 파일 프리로딩
 */
const preloadImage = (filePath, resolve, reject) => {
  const img = new Image();

  img.addEventListener("load", () => {
    console.log(`🖼️ 백그라운드 이미지 프리로딩 완료:`, filePath);
    resolve();
  });

  img.addEventListener("error", (e) => {
    console.warn(`🖼️ 백그라운드 이미지 프리로딩 실패:`, filePath, e);
    reject(new Error(`이미지 로딩 실패: ${filePath}`));
  });

  img.src = filePath;
};

/**
 * fetch를 사용한 일반 파일 프리로딩
 */
const preloadWithFetch = (filePath, resolve, reject) => {
  fetch(filePath, { method: "HEAD" })
    .then((response) => {
      if (response.ok) {
        console.log(`📄 백그라운드 파일 프리로딩 완료:`, filePath);
        resolve();
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    })
    .catch((error) => {
      console.warn(`📄 백그라운드 파일 프리로딩 실패:`, filePath, error);
      reject(error);
    });
};

export default usePreloadMedia;
