import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ComicDetails from '../../components/ComicDetails';
import Loader from '../../components/Loader';
import { Comic as TComic } from '../../interfaces/comic';
import ComicService from '../../services/comic';
import { Container } from './styles';

type Props = RouteComponentProps<{ id: string }>;

const Comic: React.FC<Props> = ({ match }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  const [comic, setComic] = useState<TComic | null>(null);

  useEffect(() => {
    setLoading(true);

    ComicService.getById(id)
      .then((response) => {
        console.log(response);
        setComic(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <Container>
      <div className="container">
        {!loading && comic ? <ComicDetails data={comic} /> : <Loader />}
      </div>
    </Container>
  );
};

export default Comic;
