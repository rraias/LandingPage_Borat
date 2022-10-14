import { DefaultContainer } from '../SectionComponents/Containers';
import Image from '../SectionComponents/SectionImage';
import SectionText from '../SectionComponents/SectionText';
import BoratLike from '../../../images/boratLike.png';

export default function SectionFive() {
  return (
    <>
      <DefaultContainer>
        <SectionText
          title={(
            <>
              Faça parte da turma que
              <span> mais cresce no mundo!</span>
            </>
)}
        />
      </DefaultContainer>
      <DefaultContainer>
        <Image src={BoratLike} highlighted />
      </DefaultContainer>
    </>
  );
}
