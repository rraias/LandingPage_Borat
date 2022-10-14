import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  p{
    color: white;
    font-size: 20px;
  }
`;

export const Card = styled.figure`
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.5s;

  &:hover{
    scale: 1.04
  }
  `;
