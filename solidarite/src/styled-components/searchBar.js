import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 3em;
`;

export const SearchBox = styled.div`
  border: ${(props) => {
    if (props.state === false) {
      return "1px solid #d7d7d7";
    } else {
      return "1px solid blue";
    }
  }};

  display: flex;
  border-width: 1px;
  padding: 1rem;
  /* border: 1px solid #d7d7d7; */
  border-radius: 0.25rem;
  width: 36%;
  max-height: 51px;
  &:active,
  &:hover {
    border-color: blue;
  }
`;

export const Icon = styled.img`
  margin-right: 7px;
`;

export const SearchInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  outline: transparent solid 2px;
  border-width: 0;
  outline-offset: 2px;
  appearance: none;
  &::-webkit-input-placeholder {
    font: 400 1rem Arial;
    padding-top: 3px;
  }
`;
