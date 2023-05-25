import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import usePlatforms, { useSelectedPlatform } from '../hooks/usePlatforms';
import useGameQueryStore from '../store/gameQuery';

const PlatformSelector = () => {
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = useSelectedPlatform(platformId);
  if (error) return null;
  return (
    <Box ml={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlatform?.name
            ? 'Platform: ' + selectedPlatform.name
            : 'Platforms'}
        </MenuButton>
        <MenuList>
          {platforms?.results?.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => setSelectedPlatformId(platform.id)}
              value={selectedPlatform?.name}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
