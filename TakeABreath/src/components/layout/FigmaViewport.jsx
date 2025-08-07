import styled from "styled-components";

// 피그마 뷰포트를 시뮬레이션하는 컨테이너
const FigmaViewport = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #ffffff;

  // 피그마 비율 유지 (16:10)
  aspect-ratio: 1280 / 832;

  // 모바일에서는 전체 화면 사용
  @media (max-width: 768px) {
    aspect-ratio: auto;
    height: 100vh;
  }
`;

// 피그마 요소를 절대 위치로 배치하는 컴포넌트
const FigmaElement = styled.div`
  position: absolute;
  left: ${(props) => (props.x / 1280) * 100}vw;
  top: ${(props) => (props.y / 832) * 100}vh;
  width: ${(props) => (props.width / 1280) * 100}vw;
  height: ${(props) => (props.height / 832) * 100}vh;

  // 모바일에서는 크기 조정
  @media (max-width: 768px) {
    width: ${(props) => Math.min((props.width / 1280) * 100, 90)}vw;
    height: auto;
    position: relative;
    left: auto;
    top: auto;
    margin: 10px auto;
  }
`;

// 피그마 텍스트 요소
const FigmaText = styled.div`
  position: absolute;
  left: ${(props) => (props.x / 1280) * 100}vw;
  top: ${(props) => (props.y / 832) * 100}vh;
  font-size: ${(props) => (props.fontSize / 1280) * 100}vw;
  line-height: ${(props) => props.lineHeight || 1.2};
  color: ${(props) => props.color || "#000000"};
  font-weight: ${(props) => props.fontWeight || "normal"};

  // 모바일에서는 최소 폰트 크기 보장
  @media (max-width: 768px) {
    font-size: ${(props) => Math.max((props.fontSize / 1280) * 100, 3)}vw;
    position: relative;
    left: auto;
    top: auto;
    margin: 10px 0;
  }
`;

// 피그마 버튼 요소
const FigmaButton = styled.button`
  position: absolute;
  left: ${(props) => (props.x / 1280) * 100}vw;
  top: ${(props) => (props.y / 832) * 100}vh;
  width: ${(props) => (props.width / 1280) * 100}vw;
  height: ${(props) => (props.height / 832) * 100}vh;
  background: ${(props) => props.background || "#007AFF"};
  border: none;
  border-radius: ${(props) => (props.borderRadius / 1280) * 100}vw;
  color: ${(props) => props.color || "#ffffff"};
  font-size: ${(props) => (props.fontSize / 1280) * 100}vw;
  font-weight: ${(props) => props.fontWeight || "normal"};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  // 모바일에서는 터치 친화적으로
  @media (max-width: 768px) {
    width: ${(props) => Math.min((props.width / 1280) * 100, 80)}vw;
    height: ${(props) => Math.max((props.height / 832) * 100, 6)}vh;
    font-size: ${(props) => Math.max((props.fontSize / 1280) * 100, 4)}vw;
    position: relative;
    left: auto;
    top: auto;
    margin: 10px auto;
    display: block;
  }
`;

export { FigmaViewport, FigmaElement, FigmaText, FigmaButton };
