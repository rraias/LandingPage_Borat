import PropTypes from 'prop-types';
import SectionTitle from './style';

export default function Title({ children }) {
  return (
    <SectionTitle>{children}</SectionTitle>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired
};
