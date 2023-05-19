import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenresList from '../components/GenresList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Box>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <Show above="lg">
          <GridItem area={'aside'}>
            <GenresList />
          </GridItem>
        </Show>

        <GridItem area={'main'} as="main" ml={2}>
          <Box>
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
    </Box>
  );
};

export default HomePage;
