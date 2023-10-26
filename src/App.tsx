import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={`"header header" "nav main"`}>
      <GridItem pl="2"  area={"header"}>
        <NavBar/>
      </GridItem>
      <GridItem pl="2" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2"  area={"main"}>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
