import styled from "styled-components";

const FinishContainer = styled.div`
  position: fixed;
  top: calc(4rem + 1.44rem);
  left: 1.44rem;
  display: flex;
  width: 9.75rem;
  padding: 1.25rem 0;
  flex-direction: column;
  align-items: center;
  gap: 0.8125rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: var(--Main-bk, #f8faff);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.09);
  z-index: 10;
`;

const FinishDateDisplay = styled.div`
  color: var(--seconday, #688ae0);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;

const FinishDateContainer = styled.div`
  display: flex;
  width: 7.5rem;
  height: 2.75rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const FinishButton = styled.button`
  height: 2.75rem;
  width: 7rem;
  border-radius: 0.5rem;
  border: 1px solid var(--seconday, #688ae0);
  background: linear-gradient(
    267deg,
    var(--Color, #68b8ea) -99.74%,
    #688ae0 37.78%,
    #8c68e0 177.79%
  );
  font-family: "Pretendard", sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  line-height: 1.125rem;
`;

export default function FinishPanel({ isFinishing, onFinish }) {
  return (
    <FinishContainer>
      <FinishButton onClick={onFinish} disabled={isFinishing}>
        {isFinishing ? "기록 완료 중..." : "기록 마치기"}
      </FinishButton>
      <FinishDateContainer>
        <FinishDateDisplay>
          {new Date().toLocaleDateString("ko-KR")}
        </FinishDateDisplay>
      </FinishDateContainer>
    </FinishContainer>
  );
}

