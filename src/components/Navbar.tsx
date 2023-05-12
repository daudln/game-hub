import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import { Genre } from '../hooks/useGenre';


const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
