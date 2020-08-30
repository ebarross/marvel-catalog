import React from 'react';
import { Comic as ComicType } from '../../data/models/comic';
import Comic from '../Comic';
import { Container } from './styles';

type Props = {
  comics: ComicType[];
};

const ComicList: React.FC<Props> = ({ comics }) => {
  return (
    <Container>
      {comics.map((c: ComicType) => {
        return <Comic key={c.id} data={c} />;
      })}
    </Container>
  );
};

export default ComicList;
