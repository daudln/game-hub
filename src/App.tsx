import { Grid, GridItem, Show } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import useGenres, { Genre } from './hooks/useGenre';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const { data: genres, isLoading, error } = useGenres();
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
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem px="2" area={'aside'} paddingY={3}>
            <GenresList
              genres={genres}
              selectedGenre={gameQuery.genre}
              onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem px="2" area={'main'}>
          <PlatformSelector
            selectPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
