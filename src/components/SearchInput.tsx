import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<SearchIcon />} />
      <Input placeholder="Search game..." borderRadius={10} variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
