import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import { ButtonControl, Container, InputControl } from './styles';

type Props = {
  onSubmit: (search: string) => void;
};

const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <InputControl>
          <Input
            type="text"
            placeholder="Search for comics. Ex: The Incredible Hulk 2009"
            required
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </InputControl>
        <ButtonControl>
          <Button type="submit">Search</Button>
        </ButtonControl>
      </Container>
    </form>
  );
};

export default SearchForm;
