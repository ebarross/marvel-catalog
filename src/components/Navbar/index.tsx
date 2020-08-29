import React from 'react';
import Logo from '../Logo';
import { Container, Link, Links } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Links>
        <Link to="/">Home</Link>
      </Links>
    </Container>
  );
};

export default Navbar;
