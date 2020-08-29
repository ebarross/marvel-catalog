import React from 'react';
import { Card, Container, Description, Details, Image, Title } from './styles';

interface Props {
  image: string;
  title: string;
  authors: string;
}

const Comic: React.FC<Props> = ({ image, title, authors }) => {
  return (
    <Container>
      <Card>
        <Image>
          <img src={image} alt="Comic" />
        </Image>
        <Details>
          <Title>{title}</Title>
          <Description>Authors: {authors}</Description>
        </Details>
      </Card>
    </Container>
  );
};

export default Comic;
