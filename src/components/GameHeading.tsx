import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading my={3} as="h1">
      {gameQuery.genre?.name} {gameQuery.platform?.name} Games
    </Heading>
  );
};

export default GameHeading;
