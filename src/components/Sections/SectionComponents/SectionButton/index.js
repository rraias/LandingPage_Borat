import Proptypes from 'prop-types';
import SectionButton from './style';

export default function Button({
  children, bgColor, size
}) {
  return (
    <SectionButton
      type="button"
      bgColor={bgColor}
      size={size}
    >
      {children}

    </SectionButton>
  );
}

Button.propTypes = {
  children: Proptypes.string.isRequired,
  bgColor: Proptypes.string.isRequired,
  size: Proptypes.string.isRequired,
};
