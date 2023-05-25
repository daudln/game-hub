import { Box, Card, CardBody, Flex, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Game from '../entinties/Game';
import getCroppedImageUrl from '../services/image-url';
import CredicScore from './CredicScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIcons';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box>
      <Card>
        <Image
          objectFit={'cover'}
          height="100%"
          minH={250}
          src={getCroppedImageUrl(game.background_image)}
        />

        <CardBody>
          <Flex justifyContent={'space-between'} mb={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CredicScore score={game.metacritic} />
          </Flex>
          <Heading fontSize={'2xl'}>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Box>
  );
};

export default GameCard;
