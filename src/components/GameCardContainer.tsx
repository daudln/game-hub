import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  const styles = {
    transition: 'transform 0.15s ease-in-out',
    ':hover': {
      transform: 'scale(1.05)',
    },
  };

  return (
    <Box overflow="hidden" borderRadius={10} sx={styles}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
