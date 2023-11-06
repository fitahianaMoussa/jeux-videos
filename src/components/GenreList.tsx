import useGenres from "../hooks/useGenre"


const GenreList = () => {
    const {genres} = useGenres()
  return (
    <div>{genres.map((genre)=> <p key={genre.id}>{genre.name}</p>)}</div> 
  )
}

export default GenreList