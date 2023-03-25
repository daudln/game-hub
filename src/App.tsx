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
  Input,
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
    >
      <GridItem pl="2" area={'nav'}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={'aside'}>
          <Input placeholder="Basic usage" m="2" w={'50%'} />
        </GridItem>
      </Show>

      <GridItem pl="2" area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  </>
);

export default App;
