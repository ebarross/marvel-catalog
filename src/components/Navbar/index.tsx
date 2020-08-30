import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      {/* <Links>
        <Link to="/">Home</Link>
      </Links> */}
    </Container>
  );
};

export default Navbar;
