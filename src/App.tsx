import { Box, Grid, GridItem, Spacer } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null >(null);

  return (
    <Box>
      <NavBar />
      <Grid templateColumns="repeat(12, 1fr)" gap={4} p={4}>
        <GridItem colSpan={1}>
          <GenreList onSelectedGenre={(genre)=> setSelectedGenre(genre)} />
        </GridItem>
        <Spacer />
        <GridItem colSpan={10}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
