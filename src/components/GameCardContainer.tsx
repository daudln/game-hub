import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="300px" margin={2} overflow="hidden" borderRadius={10}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
