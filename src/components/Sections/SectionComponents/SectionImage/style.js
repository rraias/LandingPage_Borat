import styled from 'styled-components';

export default styled.img`
  width: ${({ width }) => width};
  filter: ${({ highlighted }) => (highlighted ? 'drop-shadow(0 0 0.75rem #FFFFFF)' : '')};
  border-radius: 30px;

  @media (max-width: 1120px) {
    max-width: 90%
  }
`;
