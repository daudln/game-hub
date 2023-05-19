import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenresList from '../components/GenresList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <>
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

export default HomePage;
