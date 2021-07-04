import { useRef, useEffect, useState } from "react";
import searchIcon from "../searchIcon.svg";
import {
  SearchWrapper,
  SearchBox,
  Icon,
  SearchInput,
} from "../styled-components/searchBar";

export default function SearchBar({ searchQuery }) {
  const Input = useRef();
  const BoxInput = useRef();
  const [isFocus, setIsFocus] = useState(false);

  const setInput = () => {
    Input.current.focus();
    setIsFocus(true);
  };
  useEffect(() => {
    const handleClick = (e) => {
      if (BoxInput.current && !BoxInput.current.contains(e.target)) {
        setIsFocus(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
  });

  return (
    <SearchWrapper>
      <SearchBox onClick={setInput} state={isFocus} ref={BoxInput}>
        <Icon src={searchIcon} />
        <SearchInput
          type="search"
          placeholder="검색어를 입력하세요"
          ref={Input}
          onChange={searchQuery}
        />
      </SearchBox>
    </SearchWrapper>
  );
}
