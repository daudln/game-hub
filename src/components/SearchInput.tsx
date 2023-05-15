import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import useGameQueryStore from '../store/gameQuery';

const SearchInput = () => {
  const setSearchInput = useGameQueryStore((s) => s.setSearchInput);
  const input = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (input.current) setSearchInput(input.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input
          placeholder="Search game..."
          borderRadius={10}
          variant="filled"
          ref={input}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
