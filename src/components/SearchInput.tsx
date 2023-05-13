import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';

interface Props {
  onSearch: (input: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (input.current) onSearch(input.current.value);
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
