import { Box, GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpendableText from '../components/ExpendableText';
import GameAttribute from '../components/GameAttribute';
import GameScreenshoots from '../components/GameScreenshoots';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading)
    return (
      <Box justifyContent={'center'}>
        <Spinner />
      </Box>
    );
  console.log('Error', error);
  if (error || !game) throw new Error();

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading as="h3">{game.name}</Heading>
        <ExpendableText>{game.description_raw}</ExpendableText>
        <GameAttribute game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshoots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetail;
