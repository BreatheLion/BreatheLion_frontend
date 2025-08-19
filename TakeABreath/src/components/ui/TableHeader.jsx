import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 55rem;
  align-items: center;
  /*
  background: var(
    --BP-Gradation,
    var(
      --BP-Gradation,
      radial-gradient(
        180% 300% at 140% 0%,
        var(--Color, #68b8ea) 12.44%,
        #688ae0 48.58%,
        #8c68e0 100%
      )
    )
  );
  */
  border-radius: 0.625rem;
background: linear-gradient(270deg, var(--Color, #68B8EA) -39.67%, #688AE0 74.83%, #8C68E0 128.22%);
  margin: 0 auto;
  margin-bottom: 1.13rem;
  height: 2.5rem;
  border-radius: 0.3125rem;
`;

/*
border-radius: 0.3125rem;
background: var(--BP-Gradation, radial-gradient(584.29% 214.57% at 131.5% -43.24%, var(--Color, #68B8EA) 12.44%, #688AE0 48.58%, #8C68E0 100%));
*/

const Spacer = styled.div`
  width: ${(props) => props.$width || "1.25rem"};
`;

const OrderCell = styled.div`
  display: flex;
  width: 2.1875rem;
  padding: 0.625rem 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const TitleCell = styled.div`
  display: flex;
  width: 14.375rem;
  height: 2.375rem;
  padding: 0.625rem 1.25rem 0.625rem 0;
  align-items: center;
  gap: 0.625rem;
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const DateCell = styled.div`
  display: flex;
  width: 7.5rem;
  padding: 0.625rem 0;
  align-items: center;
  gap: 0.625rem;
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const LocationCell = styled.div`
  display: flex;
  width: 11.25rem;
  padding: 0.625rem 1.25rem 0.625rem 0;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const FolderCell = styled.div`
  display: flex;
  width: 7.5rem;
  padding: 0.625rem 1.25rem 0.625rem 0;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

export default function TableHeader() {
  return (
    <HeaderContainer>
      <Spacer $width="1.25rem" />
      <OrderCell>순</OrderCell>
      <Spacer $width="3.12rem" />
      <TitleCell>사건 제목</TitleCell>
      <Spacer $width="0.62rem" />
      <DateCell>사건 날짜</DateCell>
      <Spacer $width="0.62rem" />
      <LocationCell>장소</LocationCell>
      <Spacer $width="0.62rem" />
      <FolderCell>폴더명</FolderCell>
      <Spacer $width="3.12rem" />
      <Spacer $width="1.5rem" />
      <Spacer $width="1.25rem" />
    </HeaderContainer>
  );
}
