import styled from 'styled-components';
import DefaultButton from '../../../Button/style';

export default styled(DefaultButton)`
  width: ${({ size }) => (size === 'default' ? '250px' : '350px')};
  font-size: ${({ size }) => (size === 'default' ? '20px' : '30px')};;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ bgColor }) => (bgColor === '#e8be39' ? '#000000' : '#e8be39')};

`;
