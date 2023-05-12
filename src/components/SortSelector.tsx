import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, Button, MenuItem } from '@chakra-ui/react';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Name</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Released Date</MenuItem>
        <MenuItem>Average ratings</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
