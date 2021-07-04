import {
  PageWrapper,
  ContentBox,
  Title,
  Content,
  BtnWrapper,
  BackBtn,
} from "../styled-components/detailPage";

export default function DetailPage({ titleAndContent, goToMainPage }) {
  return (
    <PageWrapper>
      <ContentBox>
        <Title>{titleAndContent.title}</Title>
        <Content>{titleAndContent.content}</Content>
      </ContentBox>
      <BtnWrapper>
        <BackBtn onClick={goToMainPage}>뒤로가기</BackBtn>
      </BtnWrapper>
    </PageWrapper>
  );
}
