import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
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
    <Box>
      <Heading as="h3">{game.name} </Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetail;
