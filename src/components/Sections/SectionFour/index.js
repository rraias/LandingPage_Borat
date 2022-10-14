import { DefaultContainer } from '../SectionComponents/Containers';
import SectionText from '../SectionComponents/SectionText';
import Image from '../SectionComponents/SectionImage';
import Warranty from '../../../images/Garantia.png';

export default function SectionFive() {
  return (
    <DefaultContainer>
      <SectionText
        title={(
          <>
            Confio tanto no método de ensino, que lhe dou
            <span> 7 dias de garantia </span>
            para pedir a devolução do seu dinheiro
          </>
)}
      />
      <Image src={Warranty} width="250px" />
    </DefaultContainer>
  );
}
