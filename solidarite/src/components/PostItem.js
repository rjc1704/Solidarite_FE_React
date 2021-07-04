import React from "react";
import {
  ItemWrapper,
  IdAndTitle,
  Contents,
  IdNumber,
} from "../styled-components/postItem";

export default function PostItem({ id, title, content, type, goToDetailPage }) {
  return (
    <ItemWrapper onClick={() => goToDetailPage(id, type)}>
      <IdAndTitle>
        <IdNumber>{id}.</IdNumber>
        <div> {title}</div>
      </IdAndTitle>
      <Contents>{content}</Contents>
    </ItemWrapper>
  );
}
