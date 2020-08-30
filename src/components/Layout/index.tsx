import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Router from '../Router';
import { Container, Content } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />

        <Content>
          <Router />
        </Content>
      </BrowserRouter>
    </Container>
  );
};

export default Layout;
