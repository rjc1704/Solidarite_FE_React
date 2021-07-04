import styled from "styled-components";

export const PostsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Options = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #d7d7d7;
`;

export const Option = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 0.25rem;
  &:hover {
    color: #80deea;
    background-color: #eeeeee;
  }
  color: ${(props) => {
    if (props.tabValue !== props.idx) return "black";
    else return "#1976d2";
  }};
`;
