import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import { Genre } from './hooks/useGenre';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import genres from './data/genres';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchInput: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem px="2" area={'nav'}>
          <Navbar
            onSearch={(searchInput) =>
              setGameQuery({ ...gameQuery, searchInput })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem px="2" area={'aside'} paddingY={3}>
            <GenresList
              selectedGenreId={gameQuery?.genreId}
              onSelect={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>

        <GridItem px="2" area={'main'}>
          <Box pl={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex mb={3}>
              <Box mr={3}>
                <PlatformSelector
                  selectPlatformId={gameQuery.platformId}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platformId: platform.id })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
