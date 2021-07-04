import React from "react";
import {
  ItemWrapper,
  IdAndTitle,
  Contents,
  IdNumber,
} from "../styled-components/postItem";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function PostItem({ id, title, content, type }) {
  const url = "https://recruit-api.yonple.com/recruit/958292";
  const history = useHistory();
  const goToDetailPage = () => {
    axios
      .get(`${url}/${type}-posts/${id}`)
      .then((res) => {
        return res.data;
      })
      .then((resData) => {
        history.push({
          pathname: "/detail",
          state: {
            title: resData.title,
            content: resData.content,
          },
        });
      });
  };
  return (
    <ItemWrapper onClick={goToDetailPage}>
      <IdAndTitle>
        <IdNumber>{id}.</IdNumber>
        <div> {title}</div>
      </IdAndTitle>
      <Contents>{content}</Contents>
    </ItemWrapper>
  );
}
