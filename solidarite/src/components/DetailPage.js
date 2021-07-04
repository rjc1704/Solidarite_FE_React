import {
  PageWrapper,
  ContentBox,
  Title,
  Content,
  BtnWrapper,
  BackBtn,
} from "../styled-components/detailPage";
import { useHistory, useLocation } from "react-router";

export default function DetailPage() {
  const history = useHistory();
  const location = useLocation();
  const title = location.state.title;
  const content = location.state.content;

  return (
    <PageWrapper>
      <ContentBox>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </ContentBox>
      <BtnWrapper>
        <BackBtn onClick={() => history.go(-1)}>뒤로가기</BackBtn>
      </BtnWrapper>
    </PageWrapper>
  );
}
