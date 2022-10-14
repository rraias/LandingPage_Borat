import PropTypes from 'prop-types';
import SectionSubtitle from './style';

export default function Subtitle({ children }) {
  return (
    <SectionSubtitle>{children}</SectionSubtitle>
  );
}

Subtitle.propTypes = {
  children: PropTypes.string
};

Subtitle.defaultProps = {
  children: ''
};
