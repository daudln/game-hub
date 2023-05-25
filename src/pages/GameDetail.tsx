import { Box, Heading, Spinner } from '@chakra-ui/react';
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
    <>
      <Heading as="h3">{game.name}</Heading>
      <ExpendableText>{game.description_raw}</ExpendableText>
      <GameAttribute game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshoots gameId={ game.id} />
    </>
  );
};

export default GameDetail;
