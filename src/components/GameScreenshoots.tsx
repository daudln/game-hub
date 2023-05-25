import { Image, SimpleGrid } from '@chakra-ui/react';
import useGameScreenshoots from '../hooks/useGameScreenshots';

interface Props {
  gameId: number;
}

const GameScreenshoots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenshoots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  console.log(data);
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshoot) => (
        <Image key={screenshoot.id} src={screenshoot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshoots;
