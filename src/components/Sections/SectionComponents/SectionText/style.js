import styled from 'styled-components';

export default styled.article`
  display: flex;
  flex-direction: column;

  span{
    color: ${({ theme }) => theme.main}
  }

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap
  }
`;
