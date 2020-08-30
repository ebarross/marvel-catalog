import React from 'react';
import { Container } from './styles';

type Props = {
  color?: string;
};

const Loader: React.FC<Props> = ({ color }) => {
  return (
    <Container color={color}>
      <div />
      <div />
      <div />
      <div />
    </Container>
  );
};

export default Loader;
