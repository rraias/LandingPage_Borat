import SectionCard from '../SectionComponents/SectionCard';
import { DefaultContainer } from '../SectionComponents/Containers';
import SectionText from '../SectionComponents/SectionText';

export default function SectionTwo() {
  return (
    <>
      <DefaultContainer>
        <SectionText
          title={(
            <>
              Ao final do curso, você
              <span> será capaz de:</span>
            </>
)}
        />
      </DefaultContainer>
      <SectionCard />
    </>
  );
}
