import { DefaultContainer } from '../SectionComponents/Containers';
import SectionText from '../SectionComponents/SectionText';
import Image from '../SectionComponents/SectionImage';
import BoratLike2 from '../../../images/BoratLike2.png';

export default function SectionOne() {
  return (
    <DefaultContainer>
      <SectionText
        title={(
          <>
            Faça a melhor decisão da sua carreira:
            desenvolva habilidades de negociação, aprenda a falar em público, e
            principalmente:
            <span> Floresça a diplomacia.</span>
          </>
)}
        subtitle="Entre agora na lista de espera:"
        CTA="Entrar na lista de Espera"
      />
      <Image
        src={BoratLike2}
        highlighted
      />
    </DefaultContainer>

  );
}
