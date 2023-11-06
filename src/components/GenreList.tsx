import useGenres from "../hooks/useGenre"



const GenreList = () => {
    const {data} = useGenres()
  return (
    <div>{data.map((genre)=> <p key={genre.id}>{genre.name}</p>)}</div> 
  )
}

export default GenreList