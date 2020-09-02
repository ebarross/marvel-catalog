import React from 'react';
import { Link } from 'react-router-dom';
import { Comic as TComic } from '../../interfaces/comic';
import { Card, Container, Description, Details, Image, Title } from './styles';

type Props = {
  data: TComic;
};

const Comic: React.FC<Props> = ({ data }) => {
  const { id, title, image, creators } = data;

  const formatCreators = (): string => {
    return creators
      .filter((a, i) => i < 3)
      .map((a) => {
        const fullNameArr: string[] = a.name.split(' ');
        return fullNameArr[fullNameArr.length - 1];
      })
      .join(', ');
  };

  return (
    <Container>
      <Link to={`/comics/${id}`}>
        <Card>
          <Image>
            <img src={image} alt="Comic" />
          </Image>
          <Details>
            <Title>{title}</Title>
            {creators?.length > 0 && (
              <Description>Creators: {formatCreators()}</Description>
            )}
          </Details>
        </Card>
      </Link>
    </Container>
  );
};

export default Comic;
