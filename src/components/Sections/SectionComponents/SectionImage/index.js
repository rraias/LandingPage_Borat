import PropTypes from 'prop-types';
import SectionImage from './style';

export default function Image({
  src, alt, width, highlighted
}) {
  return (
    <SectionImage
      src={src}
      alt={alt}
      width={width}
      highlighted={highlighted}
    />
  );
}

Image.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string,
  highlighted: PropTypes.bool
};

Image.defaultProps = {
  alt: 'image',
  width: '600px',
  highlighted: false
};
