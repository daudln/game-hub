import { List, ListIcon, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
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
        <List>
          {game.genres?.map((genre) => (
            <ListItem key={genre.id}>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {genre.name}
            </ListItem>
          ))}
        </List>
      </DefitionItem>
      <DefitionItem term="Publisher">
        <List>
          {game.publishers?.map((publisher) => (
            <ListItem key={publisher.id}>
              <ListIcon as={SettingsIcon} color="green.500" />
              {publisher.name}
            </ListItem>
          ))}
        </List>
      </DefitionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
