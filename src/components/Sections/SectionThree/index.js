import { BookContainer } from '../SectionComponents/Containers';
import Image from '../SectionComponents/SectionImage';
import SectionText from '../SectionComponents/SectionText';
import BoratBook from '../../../images/book.svg';

export default function SectionThree() {
  return (
    <BookContainer>
      <Image
        src={BoratBook}
        width="800px"
        highlighted
      />
      <SectionText
        title={(
          <>
            Se inscrevendo agora, você ainda ganha
            <span> gratuitamente </span>
            na sua casa o incrível livro
            que conta a história de Borat no Kazakhstan
          </>
)}
      />
    </BookContainer>
  );
}
