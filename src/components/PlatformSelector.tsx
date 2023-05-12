import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
            value={selectPlatform?.name}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
