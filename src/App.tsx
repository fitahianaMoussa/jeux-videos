import { Box, Grid, GridItem, Spacer } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";


export interface GameQuery{
  genre: Genre | null;
  platform : Platform | null
}

function App() {
  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <Box>
      <NavBar />
      <Grid templateColumns="repeat(12, 1fr)" gap={4} p={4}>
        <GridItem colSpan={1}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({...gameQuery,genre})}
          />
        </GridItem>
        <Spacer />
        <GridItem colSpan={10}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})} />
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
