import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  width: 1000px;
  margin: auto;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border: 1px solid #eeeeee;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 31.5px;
  line-height: 2.5rem;
  padding: 0;
  margin-top: 0;
`;

export const Content = styled.div`
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const BackBtn = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  color: #ffffff;
  background-color: #448aff;
  cursor: pointer;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  &:hover {
    background-color: #83b9ff;
  }
`;
