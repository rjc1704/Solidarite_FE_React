import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  &:hover {
    background-color: #eeeeee;
  }
  cursor: pointer;
`;

export const IdAndTitle = styled.h3`
  display: flex;
  margin: 0;
`;

export const Contents = styled.p`
  display: -webkit-box;
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.5rem;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 4.5rem;
`;

export const IdNumber = styled.span`
  color: #1976d2;
  margin-right: 5px;
`;
