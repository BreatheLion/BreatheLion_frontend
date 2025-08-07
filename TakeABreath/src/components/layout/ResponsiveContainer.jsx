import styled from "styled-components";
import { media } from "../../styles/breakpoints";

// 피그마 기준 크기 (1280px)를 최대 너비로 하는 반응형 컨테이너
const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  // 모바일에서는 패딩 줄이기
  ${media.mobile} {
    padding: 0 16px;
  }

  // 태블릿에서는 패딩 조정
  ${media.tablet} {
    padding: 0 24px;
  }

  // 데스크톱 이상에서는 패딩 증가
  ${media.desktop} {
    padding: 0 32px;
  }
`;

// 피그마 비율을 유지하는 컨테이너 (16:10 비율)
const FigmaAspectContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  aspect-ratio: 1280 / 832; // 피그마 비율
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  // 모바일에서는 비율 조정
  ${media.mobile} {
    aspect-ratio: 1 / 1.3; // 모바일에 적합한 비율
  }
`;

// 피그마 좌표를 기반으로 한 절대 위치 컨테이너
const FigmaPositionedContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`;

export { ResponsiveContainer, FigmaAspectContainer, FigmaPositionedContainer };
