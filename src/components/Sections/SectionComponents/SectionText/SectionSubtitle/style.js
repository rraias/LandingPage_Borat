import styled from 'styled-components';

export default styled.p`
  color: #FFFFFF;
  width: 400px;
  font-size: 26px;

  @media (max-width: 1200px){
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap
  }

  @media (max-width:600px) {
    font-size: 18px;
  }
`;
