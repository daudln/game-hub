import { Alert, Box, SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error)
    return (
      <Alert colorScheme="red" mt={5} borderRadius={4}>
        {error.message}
      </Alert>
    );
  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <Box>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner mx="auto" size="xl" />}
        style={{ maxHeight: '100%', overflow: 'auto' }}
      >
        <Box style={{ padding: '10px' }}>
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
        </Box>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
