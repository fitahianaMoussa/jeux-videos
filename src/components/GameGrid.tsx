import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/usePlatforms";

interface Props{
  selectedGenre: Genre | null;
  selectedPlatform : Platform | null;
}
const GameGrid = ({selectedGenre, selectedPlatform} :Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={3} spacing={3} padding="10px">
        {isLoading && skeleton.map((sk) => <GameCardSkeleton key={sk} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
