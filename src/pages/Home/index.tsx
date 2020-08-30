import React, { useEffect, useState } from 'react';
import ComicList from '../../components/ComicList';
import Loader from '../../components/Loader';
import SearchForm from '../../components/SearchForm';
import { Comic } from '../../data/models/comic';
import ComicService from '../../services/comic';
import { Container } from './styles';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);

    ComicService.loadAll({ name: searchQuery, page })
      .then((response) => {
        setComics(response);
      })
      .catch((error) => {
        // To do: create hook to handling errors
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, searchQuery]);

  const handleSearchSubmit = (search: string): void => {
    setPage(0);
    setSearchQuery(search);
  };

  return (
    <Container>
      <div className="container">
        <SearchForm onSubmit={handleSearchSubmit} />
        {!loading && comics ? <ComicList comics={comics} /> : <Loader />}
      </div>
    </Container>
  );
};

export default Home;
