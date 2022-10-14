import NavContainer from './style';
import Image from './Image';
import logoImage from '../../../images/logo.png';
import Button from '../../Button';

function Navbar() {
  return (
    <NavContainer>
      <Image image={logoImage} />
      <Button>Entrar na lista de espera</Button>
    </NavContainer>
  );
}

export default Navbar;
