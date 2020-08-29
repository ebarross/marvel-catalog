import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import { ButtonControl, Container, InputControl } from './styles';

const SearchForm: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <InputControl>
        <Input
          type="text"
          placeholder="Search for comics. Ex: The Incredible Hulk 2009"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputControl>
      <ButtonControl>
        <Button>Search</Button>
      </ButtonControl>
    </Container>
  );
};

export default SearchForm;
