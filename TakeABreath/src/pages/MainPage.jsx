import styled from "styled-components";
import Logo from "../components/common/Logo";

const MainContainer = styled.div`
  background: radial-gradient(
    128.88% 112.29% at 52.3% 53.31%,
    #fffaf8 0%,
    #fffbf9 15.23%,
    #ecffe4 45.24%,
    #abdd95 100%
  );
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 20px;
  margin: 1rem 1rem;
`;

export default function MainPage() {
  return (
    <MainContainer>
      <ContentWrapper>
        <Logo />
      </ContentWrapper>
    </MainContainer>
  );
}
