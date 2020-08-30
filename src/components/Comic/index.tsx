import React from 'react';
import { Comic as ComicType } from '../../data/models/comic';
import { Card, Container, Description, Details, Image, Title } from './styles';

type Props = {
  data: ComicType;
};

const Comic: React.FC<Props> = ({ data }) => {
  const { title, image, authors } = data;

  const formatAuthors = (): string => {
    return (
      authors
        // .filter((a) => a.role === 'writer')
        .filter((a, i) => i < 3)
        .map((a) => {
          const fullNameArr: string[] = a.name.split(' ');
          return fullNameArr[fullNameArr.length - 1];
        })
        .join(', ')
    );
  };

  return (
    <Container>
      <Card>
        <Image>
          <img src={image} alt="Comic" />
        </Image>
        <Details>
          <Title>{title}</Title>
          {authors.length > 0 && (
            <Description>Authors: {formatAuthors()}</Description>
          )}
        </Details>
      </Card>
    </Container>
  );
};

export default Comic;
