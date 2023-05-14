import { Alert, Box, Button, SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error)
    return (
      <Alert colorScheme="red" mt={5} borderRadius={4}>
        {error.message}
      </Alert>
    );
  return (
    <Box padding={'10px'}>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 3, '2xl': 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games?.pages?.map((games, index) => (
          <React.Fragment key={index}>
            {games.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          disabled={isFetchingNextPage}
          my={5}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? <Spinner /> : 'Load more'}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
