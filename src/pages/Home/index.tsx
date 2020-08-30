import React, { useEffect, useState } from 'react';
import ComicList from '../../components/ComicList';
import Loader from '../../components/Loader';
import SearchForm from '../../components/SearchForm';
import { Comic } from '../../data/models/comic';
import { loadAll } from '../../services/comic';
import { Container } from './styles';

const Home: React.FC = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    loadAll()
      .then((response) => {
        setComics(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <div className="container">
        <SearchForm />
        {!loading && comics ? <ComicList comics={comics} /> : <Loader />}
      </div>
    </Container>
  );
};

export default Home;
