import { Box } from '@chakra-ui/react';
import useGameTrailer from '../hooks/useTrailer';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useGameTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const first = trailers?.results[0];
  return first ? (
    <Box mb={2}>
      <video controls poster={first.preview}>
        <source src={first.data[480]} type="video/mp4" />
      </video>
    </Box>
  ) : null;
};

export default GameTrailer;
