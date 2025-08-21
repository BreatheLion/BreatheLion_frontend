import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MainButton } from "./Button";
import aiHelperIcon from "../../assets/aiHelperIcon.svg";
import unableAiHelperIcon from "../../assets/UnableAiHelperIcon.svg";
import gatheringIcon from "../../assets/gatheringIcon.svg";
import downloadIcon from "../../assets/downloadIcon.svg";

const IncidentCardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 50rem;
  padding: 3.125rem 2.5rem 2.5rem 2.5rem;
  align-items: center;
  gap: 2.5rem;
  border-radius: 1.25rem;
  border: 2px solid
    ${(props) =>
      props.$isSelectionMode
        ? props.$isSelected
          ? "var(--seconday, #688ae0)"
          : "var(--5, #E9E9E9)"
        : "var(--seconday, #688ae0)"};
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  cursor: ${(props) => (props.$isSelectionMode ? "pointer" : "default")};
  transition: all 0.2s ease;

  &:hover {
    ${(props) =>
      props.$isSelectionMode &&
      !props.$isSelected &&
      `
      border-color: var(--seconday, #688ae0);
    `}
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FirstLine = styled.div`
  color: ${(props) =>
    props.$isSelectionMode && !props.$isSelected
      ? "var(--30, #ACACAC)"
      : "var(--80, #313131)"};
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 1.25rem;
`;

const SecondLine = styled.div`
  color: ${(props) =>
    props.$isSelectionMode && !props.$isSelected
      ? "var(--30, #ACACAC)"
      : "var(--50, #7a7a7a)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 0.3rem;
`;

const DateText = styled.span`
  color: ${(props) =>
    props.$isSelectionMode && !props.$isSelected
      ? "var(--30, #ACACAC)"
      : "var(--80, #313131)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

const ThirdLine = styled.div`
  color: ${(props) =>
    props.$isSelectionMode && !props.$isSelected
      ? "var(--30, #ACACAC)"
      : "var(--50, #7a7a7a)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonText = styled.span`
  color: ${(props) => (props.$isPrimary ? "#fff" : "var(--50, #7a7a7a)")};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

export default function IncidentCard({
  incident,
  isSelectionMode = false,
  isSelected = false,
  onSelect,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isSelectionMode && onSelect) {
      onSelect(incident.drawer_id);
    }
  };

  const handleGatheringClick = () => {
    if (window.navigation.navigateToSummary) {
      window.navigation.navigateToSummary(incident.drawer_id, incident.name);
    }
  };

  const handlePdfExtractClick = () => {
    // 추후 다른 기능으로 변경 예정
    console.log("PDF 추출 기능은 추후 구현 예정입니다.");
  };

  const handleAiHelperClick = () => {
    // AiHelperPage로 이동
    navigate(`/ai-helper/${incident.drawer_id}`, {
      state: { drawerName: incident.name },
    });
  };

  return (
    <IncidentCardContainer
      $isSelectionMode={isSelectionMode}
      $isSelected={isSelected}
      onClick={handleClick}
    >
      <TextSection>
        <FirstLine $isSelectionMode={isSelectionMode} $isSelected={isSelected}>
          {incident.name}
        </FirstLine>
        <SecondLine $isSelectionMode={isSelectionMode} $isSelected={isSelected}>
          생성 날짜{" "}
          <DateText $isSelectionMode={isSelectionMode} $isSelected={isSelected}>
            {incident.date}
          </DateText>
        </SecondLine>
        <SecondLine $isSelectionMode={isSelectionMode} $isSelected={isSelected}>
          기록 갯수{" "}
          <DateText $isSelectionMode={isSelectionMode} $isSelected={isSelected}>
            {incident.record_amt}
          </DateText>
        </SecondLine>
      </TextSection>

      {!isSelectionMode && (
        <ButtonSection>
          <MainButton
            disabled={incident.record_amt === 0}
            onClick={handleAiHelperClick}
          >
            <ButtonContent>
              <img
                src={
                  incident.record_amt === 0 ? unableAiHelperIcon : aiHelperIcon
                }
                alt="AI Helper"
              />
              <ButtonText $isPrimary={incident.record_amt !== 0}>
                AI 도우미
              </ButtonText>
            </ButtonContent>
          </MainButton>
          <MainButton
            variant="secondary"
            onClick={handleGatheringClick}
            disabled={incident.record_amt === 0}
          >
            <ButtonContent>
              <img src={gatheringIcon} alt="Gathering" />
              <ButtonText $isPrimary={false}>모아보기</ButtonText>
            </ButtonContent>
          </MainButton>
          <MainButton
            variant="secondary"
            disabled={incident.record_amt === 0}
            onClick={handlePdfExtractClick}
          >
            <ButtonContent>
              <img src={downloadIcon} alt="Download" />
              <ButtonText $isPrimary={false}>PDF 추출</ButtonText>
            </ButtonContent>
          </MainButton>
        </ButtonSection>
      )}
    </IncidentCardContainer>
  );
}
