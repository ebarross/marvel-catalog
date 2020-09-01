import React, { useEffect, useState } from 'react';
import ComicList from '../../components/ComicList';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import SearchForm from '../../components/SearchForm';
import { useErrorHandler } from '../../hooks/errorHandler';
import { usePagination } from '../../hooks/pagination';
import { Comic } from '../../interfaces/comic';
import ComicService from '../../services/comic';
import { Container } from './styles';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(false);
  const { page, pages, next, previous, jump, onTotalChange } = usePagination();
  const handleError = useErrorHandler();

  useEffect(() => {
    setLoading(true);

    ComicService.getAll({ name: searchQuery, page })
      .then((response) => {
        onTotalChange(response.total);
        setComics(response.comics);
      })
      .catch(handleError)
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
        {!loading && comics ? (
          <>
            <ComicList comics={comics} />
            <Pagination
              page={page}
              pages={pages}
              previous={previous}
              next={next}
              jump={jump}
            />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </Container>
  );
};

export default Home;
