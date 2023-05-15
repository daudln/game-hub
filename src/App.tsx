import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenresList from './components/GenresList';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

const App = () => {
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
            <GenresList />
          </GridItem>
        </Show>

        <GridItem px="2" area={'main'}>
          <Box pl={2}>
            <GameHeading />
            <Flex mb={3}>
              <Box mr={3}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
