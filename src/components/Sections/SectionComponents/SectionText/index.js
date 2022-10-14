import PropTypes from 'prop-types';
import Title from './SectionTitle';
import Subtitle from './SectionSubtitle';
import TextContainer from './style';
import SectionButton from '../SectionButton';

export default function SectionText({ title, subtitle, CTA }) {
  return (
    <TextContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {CTA ? (
        <SectionButton
          bgColor="#e8be39"
          size="big"
        >
          {CTA}
        </SectionButton>
      ) : ''}
    </TextContainer>
  );
}

SectionText.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  CTA: PropTypes.string,
};

SectionText.defaultProps = {
  CTA: '',
  subtitle: ''

};
