import React, { useEffect, useState } from 'react';
import ComicList from '../../components/ComicList';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import SearchForm from '../../components/SearchForm';
import { usePagination } from '../../hooks/pagination';
import { Comic } from '../../interfaces/comic';
import ComicService from '../../services/comic';
import { Container } from './styles';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(false);
  const { page, pages, next, previous, jump, onTotalChange } = usePagination();

  useEffect(() => {
    setLoading(true);

    ComicService.getAll({ name: searchQuery, page })
      .then((response) => {
        onTotalChange(response.total);
        setComics(response.comics);
      })
      .catch((error) => {
        // To do: create hook to handle errors
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, searchQuery]);

  const handleSearchSubmit = (search: string): void => {
    jump(1);
    setSearchQuery(search);
  };

  return (
    <Container>
      <div className="container">
        <SearchForm onSubmit={handleSearchSubmit} />
        {!loading && comics ? <ComicList comics={comics} /> : <Loader />}
        {!loading && (
          <Pagination
            page={page}
            pages={pages}
            previous={previous}
            next={next}
            jump={jump}
          />
        )}
      </div>
    </Container>
  );
};

export default Home;
