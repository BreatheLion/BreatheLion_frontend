const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// PNG 압축 함수 (pngquant 직접 사용)
function compressPNG(inputPath, outputPath) {
  try {
    // pngquant를 직접 사용하여 압축
    execSync(
      `npx pngquant --quality=65-80 --force --output "${outputPath}" "${inputPath}"`
    );
    console.log(`✅ PNG 압축 완료: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(
      `❌ PNG 압축 실패: ${path.basename(inputPath)}`,
      error.message
    );
  }
}

// 파일 크기 비교 함수
function compareFileSizes(originalPath, compressedPath) {
  const originalSize = fs.statSync(originalPath).size;
  const compressedSize = fs.statSync(compressedPath).size;
  const reduction = (
    ((originalSize - compressedSize) / originalSize) *
    100
  ).toFixed(1);

  console.log(
    `📊 ${path.basename(originalPath)}: ${(originalSize / 1024 / 1024).toFixed(
      2
    )}MB → ${(compressedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% 감소)`
  );

  return { originalSize, compressedSize, reduction };
}

// 메인 압축 함수
function compressPNGFiles() {
  console.log("🚀 PNG 압축 작업 시작...\n");

  // 백업 폴더 생성
  const backupDir = "src/assets/backup";
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  console.log("📁 Lawyers PNG 압축 중...");
  const lawyersDir = "src/assets/lawyers";
  const lawyerFiles = fs
    .readdirSync(lawyersDir)
    .filter((file) => file.endsWith(".png"));

  lawyerFiles.forEach((file) => {
    const inputPath = path.join(lawyersDir, file);
    const backupPath = path.join(backupDir, `lawyer-${file}`);
    const tempOutputPath = path.join(lawyersDir, `${file}.compressed`);

    // 백업
    fs.copyFileSync(inputPath, backupPath);

    // 압축
    compressPNG(inputPath, tempOutputPath);

    // 압축된 파일로 교체
    if (fs.existsSync(tempOutputPath)) {
      fs.renameSync(tempOutputPath, inputPath);
    }
  });

  console.log("\n📊 압축 결과 비교...");

  // Lawyers 결과 비교
  lawyerFiles.forEach((file) => {
    const originalPath = path.join(backupDir, `lawyer-${file}`);
    const compressedPath = path.join(lawyersDir, file);
    compareFileSizes(originalPath, compressedPath);
  });

  console.log("\n✅ PNG 압축 작업 완료!");
  console.log(`💾 백업 파일 위치: ${backupDir}`);
}

// 스크립트 실행
compressPNGFiles();
