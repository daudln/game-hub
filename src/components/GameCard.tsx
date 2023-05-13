import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Link,
  HStack,
} from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import CredicScore from './CredicScore';
import PlatformIconList from './PlatformIcons';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box>
      <Card>
        <Link href={game.background_image} target="_blank">
          <Image
            objectFit={'cover'}
            height="100%"
            minH={250}
            src={getCroppedImageUrl(game.background_image)}
          />
        </Link>
        <CardBody>
          <Flex justifyContent={'space-between'} mb={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CredicScore score={game.metacritic} />
          </Flex>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
      </Card>
    </Box>
  );
};

export default GameCard;
