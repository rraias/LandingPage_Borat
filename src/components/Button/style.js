import styled from 'styled-components';

export default styled.button`
  width: 250px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  background-color: transparent;
  color: #e8be39;
  border-color: #e8be39;
  cursor: pointer;
  transition: 0.3s;
  padding: 10px;

  &:hover{
    scale: 1.1;
    background-color: #e8be39;
    color: white;
  }

  @media (max-width: 600px) {
    width: 150px;
  font-size: 16px;
  }
`;
