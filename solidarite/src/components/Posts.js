import { useState } from "react";
import PostItemList from "./PostItemList";
import { PostsWrapper, Options, Option } from "../styled-components/posts";

export default function Posts({ query }) {
  const [tabMenu, setTabMenu] = useState(0);
  const showAPosts = () => {
    setTabMenu(0);
  };
  const showBPosts = () => {
    setTabMenu(1);
  };
  return (
    <PostsWrapper>
      <Options>
        <Option onClick={showAPosts} idx={0} tabValue={tabMenu}>
          A Posts
        </Option>
        <Option onClick={showBPosts} idx={1} tabValue={tabMenu}>
          B Posts
        </Option>
      </Options>
      <PostItemList query={query} tabMenu={tabMenu} />
    </PostsWrapper>
  );
}
