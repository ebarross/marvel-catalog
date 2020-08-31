import React from 'react';
import { Comic as TComic } from '../../interfaces/comic';
import Comic from '../Comic';
import { Container } from './styles';

type Props = {
  comics: TComic[];
};

const ComicList: React.FC<Props> = ({ comics }) => {
  return (
    <Container>
      {comics.map((c: TComic) => {
        return <Comic key={c.id} data={c} />;
      })}
    </Container>
  );
};

export default ComicList;
