import {
  Grid,
  GridItem,
  Show,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';

const App = () => (
  <>
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={
        {
          // base: `100%`,
        }
      }
      w="100%"
      gap="0"
    >
      <GridItem pl="2" area={'nav'}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={'aside'}>
          Aside
        </GridItem>
      </Show>

      <GridItem pl="2" area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
    {/* <Grid templateAreas={`"nav nav" "aside main"`}></Grid> */}
  </>
);

export default App;
