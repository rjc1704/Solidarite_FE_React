import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 2.5rem;
  width: 1000px;
  background-color: #ffffff;
`;

export const Header = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  margin-bottom: 2em;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
