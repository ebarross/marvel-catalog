import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ComicDetails from '../../components/ComicDetails';
import Loader from '../../components/Loader';
import { useErrorHandler } from '../../hooks/errorHandler';
import { Comic as TComic } from '../../interfaces/comic';
import ComicService from '../../services/comic';
import { Container, Error } from './styles';

type Props = RouteComponentProps<{ id: string }>;

const Comic: React.FC<Props> = ({ match }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  const [comic, setComic] = useState<TComic | null>(null);
  const [notFoundError, setNotFoundError] = useState('');
  const handleError = useErrorHandler(() => {
    setNotFoundError('Comic was not found.');
  });

  useEffect(() => {
    setLoading(true);

    ComicService.getById(id)
      .then((response) => setComic(response))
      .catch(handleError)
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <Container>
      <div className="container">
        {loading && <Loader />}
        {notFoundError && <Error>{notFoundError}</Error>}
        {!loading && comic && <ComicDetails data={comic} />}
      </div>
    </Container>
  );
};

export default Comic;
