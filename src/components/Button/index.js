import Proptypes from 'prop-types';
import DefaultButton from './style';

export default function Button({ children }) {
  return (
    <DefaultButton type="button">{children}</DefaultButton>
  );
}

Button.propTypes = {
  children: Proptypes.string.isRequired
};
