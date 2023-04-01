import { Card, CardBody, Heading, HStack, Image, Link } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import CredicScore from './CredicScore';
import PlatformIconList from './PlatformIcons';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden" width={'300px'}>
        <Link href={game.background_image} target="_blank">
          <Image src={getCroppedImageUrl(game.background_image)} />
        </Link>
        <CardBody>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
          <HStack display={'flex'} justifyContent={'space-between'}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CredicScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
