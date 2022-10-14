import PropTypes from 'prop-types';
import Image from './style';

export default function CardImage({ src, alt }) {
  return (
    <Image src={src} alt={alt} />
  );
}

CardImage.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.string
};

CardImage.defaultProps = {
  alt: 'image'
};
