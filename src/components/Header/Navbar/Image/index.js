import PropTypes from 'prop-types';
import Img from './style';

export default function Image({ image }) {
  return (
    <Img src={image} alt="logoImage" />
  );
}

Image.propTypes = {
  image: PropTypes.node.isRequired,
};
