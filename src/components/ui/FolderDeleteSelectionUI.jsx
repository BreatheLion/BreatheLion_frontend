import styled from "styled-components";
import { SmallButton } from "./Button";

const SelectionUIContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 53.8rem;
  padding: 0.62rem 2.5rem 0.62rem 2.5rem;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const SelectionCount = styled.div`
  color: var(--seconday, #688ae0);
  margin-left: 1.75rem;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const SelectionText = styled.span`
  color: var(--50, #7a7a7a);
  text-align: right;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 0.9375rem;
`;

export default function FolderDeleteSelectionUI({
  selectedCount,
  onCancel,
  onDelete,
}) {
  return (
    <SelectionUIContainer>
      <LeftSection>
        <Title>삭제할 폴더를 선택하세요</Title>
        <SelectionCount>{selectedCount}</SelectionCount>
        <SelectionText>개 선택됨</SelectionText>
      </LeftSection>
      <ButtonSection>
        <SmallButton variant="secondary" onClick={onCancel}>
          취소
        </SmallButton>
        <SmallButton
          variant="primary"
          onClick={onDelete}
          disabled={selectedCount === 0}
        >
          삭제
        </SmallButton>
      </ButtonSection>
    </SelectionUIContainer>
  );
}
