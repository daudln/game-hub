import { Grid, GridItem, Show } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import useGenres, { Genre } from './hooks/useGenre';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';

const App = () => {
  const { data: genres, isLoading, error } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
          <Navbar genres={genres} />
        </GridItem>
        <Show above="lg">
          <GridItem px="2" area={'aside'} paddingY={3}>
            <GenresList
              genres={genres}
              selectedGenre={selectedGenre}
              onSelect={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>

        <GridItem px="2" area={'main'}>
          <PlatformSelector
            selectPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
