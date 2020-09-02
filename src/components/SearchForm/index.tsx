import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import Input from '../Input';
import { ButtonControl, Container, InputControl, StyledButton } from './styles';

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
            placeholder="Ex: Black Panther"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </InputControl>
        <ButtonControl>
          <StyledButton type="submit">
            Search <BiSearch />
          </StyledButton>
        </ButtonControl>
      </Container>
    </form>
  );
};

export default SearchForm;
