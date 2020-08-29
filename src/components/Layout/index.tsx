import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Routes from '../Routes';
import { Container, Content } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />

        <Content>
          <Routes />
        </Content>
      </BrowserRouter>
    </Container>
  );
};

export default Layout;
