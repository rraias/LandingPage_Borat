import styled from 'styled-components';

export default styled.h1`
  color: #FFFFFF;
  width: 600px;
  font-size: 40px;
  line-height: 3rem;
  letter-spacing: 2.5px;

@media (max-width: 1120px) {
  line-height: 2.5rem;
  letter-spacing: 2px;
}

@media (max-width: 600px) {
  display: grid;
  align-items: center;
  justify-content: center;
  width: 400px;
  font-size: 32px;
}

@media (max-width: 400px) {
  width: 300px;
  font-size: 26px;
}

`;
