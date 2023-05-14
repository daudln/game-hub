import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import { useSelectedGenre } from '../hooks/useGenres';
import { useSelectedPlatform } from '../hooks/usePlatforms';
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useSelectedGenre(gameQuery.genreId);
  const selectedPlatform = useSelectedPlatform(gameQuery.platformId);
  const heading = `${selectedGenre?.name || ''} ${
    selectedPlatform?.name || ''
  } Games`;
  return (
    <Heading my={3} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
