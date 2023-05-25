import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import Platform from '../entinties/Platform';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: BsGlobe,
    windows: FaWindows,
    xbox: FaXbox,
  };
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={iconsMap[platform.slug]}
          color="gray.500"
          marginY={1}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
