import { Heading } from '@chakra-ui/react';
import { useSelectedGenre } from '../hooks/useGenres';
import { useSelectedPlatform } from '../hooks/usePlatforms';
import useGameQueryStore from '../store/gameQuery';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useSelectedGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = useSelectedPlatform(platformId);

  const heading = `${selectedGenre?.name || ''} ${selectedPlatform?.name || ''} Games`;
  return (
    <Heading my={3} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
