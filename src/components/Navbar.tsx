import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <HStack padding="10px" as="nav">
      <Link to="/">
        <Image src={logo} boxSize="50px" objectFit="cover" mx={2} />
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
