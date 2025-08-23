import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import ContentProveIcon from "../assets/ContentProveIcon.svg";
import ConsultantIcon from "../assets/ConsultantIcon.svg";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 55rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 18.5625rem;
  height: 23.125rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid var(--main-stroke, #bec8e3);
  background: var(--Main-bk, #f8faff);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.15);
  }
`;

const CardImageIcon = styled.img`
  width: 7.9375rem;
  height: 7.9375rem;
  margin-top: 3.69rem;
  margin-bottom: 2.81rem;
`;

const CardTitle = styled.div`
  color: var(--80, #313131);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.62rem;
`;

const CardDescription = styled.div`
  color: var(--70, #4a4a4a);
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  white-space: pre-line;
  margin-bottom: 3.56rem;
`;

export default function ConsultantPage() {
  const navigate = useNavigate();

  const handleCardClick = (cardType) => {
    if (cardType === "변호사 매칭") {
      navigate("/lawyer");
    } else {
      navigate("/consultant-connect");
    }
  };

  return (
    <PageContainer>
      <Header currentPage="consultant" />
      <ContentContainer>
        <CardsContainer>
          <Card onClick={() => handleCardClick("변호사 매칭")}>
            <CardImageIcon src={ContentProveIcon} alt="변호사 매칭" />
            <CardTitle>변호사 매칭</CardTitle>
            <CardDescription>
              내 권리를 지키고,{"\n"}필요한 법적 도움을 받을 수 있어요
            </CardDescription>
          </Card>
          <Card onClick={() => handleCardClick("상담사 매칭")}>
            <CardImageIcon src={ConsultantIcon} alt="상담사 매칭" />
            <CardTitle>상담사 매칭</CardTitle>
            <CardDescription>
              심리적·신체적 회복을 돕는{"\n"}상담과 의료 지원을 받을 수 있어요
            </CardDescription>
          </Card>
        </CardsContainer>
      </ContentContainer>
    </PageContainer>
  );
}
