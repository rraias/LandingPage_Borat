import styled from 'styled-components';

export const DefaultContainer = styled.section`
  max-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;

  @media (max-width: 1460px){
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const BookContainer = styled.section`
  max-height: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 150px;
  margin-bottom: 100px;
  padding: 0px 20px;

  @media (max-width: 1460px){
    justify-content: center
  }
`;
