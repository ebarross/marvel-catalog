import React from 'react';
import Logo from '../Logo';
import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo />
      {/* <Links>
        <Link to="/">Home</Link>
      </Links> */}
    </Container>
  );
};

export default Navbar;
