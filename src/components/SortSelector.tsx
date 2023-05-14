import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: 'name', label: 'Name' },
    { value: '-added', label: 'Date Added' },
    { value: '-released', label: 'Released Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average ratings' },
  ];

  const currentSortOrder = sortOrder
    ? sortOrders.find((s) => s.value === sortOrder)
    : { value: '', label: 'Relevance' };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: {currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort, index) => (
          <MenuItem key={index} onClick={() => onSelectSortOrder(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
