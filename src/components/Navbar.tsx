import { HStack, Image, Text } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import GenreFilter from './GenreFilter';
import ColorModeSwitch from './ColorModeSwitch';
import { Genre } from '../hooks/useGenre';

interface Props {
  genres: Genre[];
}

const Navbar = ({ genres }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <GenreFilter genres={genres} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
