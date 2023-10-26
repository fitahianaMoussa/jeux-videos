import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={`"header header" "nav main"`}>
      <GridItem pl="2"  area={"header"}>
        <NavBar/>
      </GridItem>
      <GridItem pl="2" bg="pink" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
