import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 55rem;
  align-items: center;
  background: linear-gradient(
    270deg,
    var(--Color, #68b8ea) -39.67%,
    #688ae0 74.83%,
    #8c68e0 128.22%
  );
  margin: 0 auto;
  margin-bottom: 1.13rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const Spacer = styled.div`
  width: ${(props) => props.$width || "1.25rem"};
  flex-shrink: 0;
  box-sizing: border-box;
`;

const OrderCell = styled.div`
  display: flex;
  width: 2.1875rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  box-sizing: border-box;
`;

const TitleCell = styled.div`
  display: flex;
  width: 14.375rem;
  height: 2.5rem;
  padding: 0 1.25rem 0 0;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  flex-shrink: 0;
  box-sizing: border-box;
`;

const DateCell = styled.div`
  display: flex;
  width: 7.5rem;
  height: 2.5rem;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  flex-shrink: 0;
  box-sizing: border-box;
`;

const LocationCell = styled.div`
  display: flex;
  width: 11.25rem;
  height: 2.5rem;
  padding: 0 1.25rem 0 0;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  flex-shrink: 0;
  box-sizing: border-box;
`;

const FolderCell = styled.div`
  display: flex;
  width: 7.5rem;
  height: 2.5rem;
  padding: 0 1.25rem 0 0;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  flex-shrink: 0;
  box-sizing: border-box;
`;

const ActionCell = styled.div`
  display: flex;
  width: 1.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
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
      <ActionCell />
      <Spacer $width="1.25rem" />
    </HeaderContainer>
  );
}
