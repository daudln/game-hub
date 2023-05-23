import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game } from '../entinties/Game';
import CredicScore from './CredicScore';
import DefitionItem from './DefitionItem';

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefitionItem>
      <DefitionItem term="Metascore">
        <CredicScore score={game.metacritic} />
      </DefitionItem>
      <DefitionItem term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefitionItem>
      <DefitionItem term="Publisher">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefitionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
