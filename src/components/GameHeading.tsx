import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenre';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const selectedGenre = genres?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
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
