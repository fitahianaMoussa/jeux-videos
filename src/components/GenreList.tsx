import { Spinner ,HStack, Image, List, ListItem, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";

interface Props {
  onSelectedGenre : (genre: Genre) => void
}
const GenreList = ({onSelectedGenre}: Props) => {
  const { data ,isLoading, error} = useGenres();
  if (isLoading) {
    return <Spinner/>
  }
  if (error) {
    return null 
  }
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px' >
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Button fontSize="lg" variant="link" onClick={()=> onSelectedGenre(genre)} > {genre.name} </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
