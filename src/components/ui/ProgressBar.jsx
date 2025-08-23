import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
`;

const Bar = styled.div`
  height: 0.375rem;
  width: 100%;
  background: #e9e9e9;
  border-radius: 9999px;
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  width: ${(p) => Math.max(0, Math.min(100, p.$percent || 0))}%;
  background: #68b8ea;
  transition: width 0.15s ease;
`;

export default function ProgressBar({ percent = 0, className }) {
  return (
    <Wrap className={className}>
      <Bar>
        <Fill $percent={percent} />
      </Bar>
    </Wrap>
  );
}
