import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        onChange={toggleColorMode}
        isChecked={colorMode === 'dark'}
      />
      <Text whiteSpace="nowrap">Dark mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
