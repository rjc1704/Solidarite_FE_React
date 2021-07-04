import { useState } from "react";
import SearchBar from "./SearchBar";
import Posts from "./Posts";
import { PageWrapper, Header, Main } from "../styled-components/mainPage";

export default function MainPage() {
  const [query, setQuery] = useState("");
  function debounce(func, timeout = 150) {
    let timer;
    const debounced = (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
    return debounced;
  }

  const searchQuery = (e) => {
    let debounce150 = debounce(() => setQuery(e.target.value), 150);
    debounce150();
  };
  return (
    <PageWrapper>
      <Header>게시물을 검색해보세요</Header>
      <Main>
        <SearchBar searchQuery={searchQuery} />
        <Posts query={query} />
      </Main>
    </PageWrapper>
  );
}
