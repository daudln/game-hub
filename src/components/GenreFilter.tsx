import {
  AddIcon,
  ChevronDownIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Genre } from '../hooks/useGenre';

interface Props {
  genres: Genre[];
}

const GenreFilter = ({ genres }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Select Genre
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem key={genre.id} minH="48px">
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreFilter;
