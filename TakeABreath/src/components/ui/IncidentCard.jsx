import styled from "styled-components";
import { MainButton } from "./Button";
import aiHelperIcon from "../../assets/aiHelperIcon.svg";
import gatheringIcon from "../../assets/gatheringIcon.svg";
import downloadIcon from "../../assets/downloadIcon.svg";

const IncidentCardContainer = styled.div`
  display: flex;
  width: 48.1875rem;
  padding: 3.125rem 2.5rem 2.5rem 2.5rem;
  align-items: center;
  gap: 2.5rem;
  border-radius: 1.25rem;
  border: 2px solid var(--seconday, #688ae0);
  background: #fff;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FirstLine = styled.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 1.25rem;
`;

const SecondLine = styled.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 0.3rem;
`;

const DateText = styled.span`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

const ThirdLine = styled.div`
  color: var(--50, #7a7a7a);
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
  margin-right: 2.5rem;
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

export default function IncidentCard({ incident }) {
  return (
    <IncidentCardContainer>
      <TextSection>
        <FirstLine>{incident.name}</FirstLine>
        <SecondLine>
          생성 날짜 <DateText>{incident.date}</DateText>
        </SecondLine>
        <SecondLine>
          기록 갯수 <DateText>{incident.record_amt}</DateText>
        </SecondLine>
      </TextSection>

      <ButtonSection>
        <MainButton>
          <ButtonContent>
            <img src={aiHelperIcon} alt="AI Helper" />
            <ButtonText $isPrimary={true}>AI 도우미</ButtonText>
          </ButtonContent>
        </MainButton>
        <MainButton variant="secondary">
          <ButtonContent>
            <img src={gatheringIcon} alt="Gathering" />
            <ButtonText $isPrimary={false}>모아보기</ButtonText>
          </ButtonContent>
        </MainButton>
        <MainButton variant="secondary">
          <ButtonContent>
            <img src={downloadIcon} alt="Download" />
            <ButtonText $isPrimary={false}>PDF 추출</ButtonText>
          </ButtonContent>
        </MainButton>
      </ButtonSection>
    </IncidentCardContainer>
  );
}
