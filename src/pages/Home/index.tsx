import React from 'react';
import ComicList from '../../components/ComicList';
import SearchForm from '../../components/SearchForm';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <SearchForm />
        <ComicList />
      </div>
    </Container>
  );
};

export default Home;
