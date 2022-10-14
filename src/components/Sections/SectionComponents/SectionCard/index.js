import { CardContainer, Card } from './style';
import SectionImage from './CardImage/index';
import FigureOne from '../../../../images/figure1.jpg';
import FigureTwo from '../../../../images/figure2.jpg';
import FigureThree from '../../../../images/figure3.jpg';

export default function SectionCard() {
  return (
    <CardContainer>
      <Card>
        <SectionImage src={FigureOne} />
        <p>Participar de debates de forma convincente</p>
      </Card>
      <Card>
        <SectionImage src={FigureTwo} />
        <p>Desbloquear o talento de falar em público</p>
      </Card>
      <Card>
        <SectionImage src={FigureThree} />
        <p>Dominar a arte da escrita persuasiva</p>
      </Card>

    </CardContainer>

  );
}
