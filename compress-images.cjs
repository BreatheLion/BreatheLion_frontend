const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// SVG 압축 함수
function compressSVG(inputPath, outputPath) {
  try {
    execSync(`npx svgo --multipass --precision=2 "${inputPath}" -o "${outputPath}"`);
    console.log(`✅ SVG 압축 완료: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ SVG 압축 실패: ${path.basename(inputPath)}`, error.message);
  }
}

// PNG 압축 함수
function compressPNG(inputPath, outputPath) {
  try {
    execSync(`npx imagemin "${inputPath}" --plugin=pngquant --quality=65-80 --out-dir="${path.dirname(outputPath)}" --output="${path.basename(outputPath)}"`);
    console.log(`✅ PNG 압축 완료: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ PNG 압축 실패: ${path.basename(inputPath)}`, error.message);
  }
}

// 파일 크기 비교 함수
function compareFileSizes(originalPath, compressedPath) {
  const originalSize = fs.statSync(originalPath).size;
  const compressedSize = fs.statSync(compressedPath).size;
  const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
  
  console.log(`📊 ${path.basename(originalPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(compressedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% 감소)`);
  
  return { originalSize, compressedSize, reduction };
}

// 메인 압축 함수
function compressImages() {
  console.log('🚀 이미지 압축 작업 시작...\n');
  
  // 백업 폴더 생성
  const backupDir = 'src/assets/backup';
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  // Consultants SVG 압축
  console.log('📁 Consultants SVG 압축 중...');
  const consultantsDir = 'src/assets/consultants';
  const consultantFiles = fs.readdirSync(consultantsDir).filter(file => file.endsWith('.svg'));
  
  consultantFiles.forEach(file => {
    const inputPath = path.join(consultantsDir, file);
    const backupPath = path.join(backupDir, `consultant-${file}`);
    const outputPath = path.join(consultantsDir, file);
    
    // 백업
    fs.copyFileSync(inputPath, backupPath);
    
    // 압축
    compressSVG(inputPath, outputPath);
  });
  
  console.log('\n📁 Lawyers PNG 압축 중...');
  const lawyersDir = 'src/assets/lawyers';
  const lawyerFiles = fs.readdirSync(lawyersDir).filter(file => file.endsWith('.png'));
  
  lawyerFiles.forEach(file => {
    const inputPath = path.join(lawyersDir, file);
    const backupPath = path.join(backupDir, `lawyer-${file}`);
    const outputPath = path.join(lawyersDir, file);
    
    // 백업
    fs.copyFileSync(inputPath, backupPath);
    
    // 압축
    compressPNG(inputPath, outputPath);
  });
  
  console.log('\n📊 압축 결과 비교...');
  
  // Consultants 결과 비교
  consultantFiles.forEach(file => {
    const originalPath = path.join(backupDir, `consultant-${file}`);
    const compressedPath = path.join(consultantsDir, file);
    compareFileSizes(originalPath, compressedPath);
  });
  
  // Lawyers 결과 비교
  lawyerFiles.forEach(file => {
    const originalPath = path.join(backupDir, `lawyer-${file}`);
    const compressedPath = path.join(lawyersDir, file);
    compareFileSizes(originalPath, compressedPath);
  });
  
  console.log('\n✅ 압축 작업 완료!');
  console.log(`💾 백업 파일 위치: ${backupDir}`);
}

// 스크립트 실행
compressImages();
