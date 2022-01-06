
export default function ThirdP(movie) {
    return (
        <div>
            
           <h1>Title: {movie.Title}</h1>
           <h2>Year: {movie.Year}</h2>
           <img src={movie.Poster} alt={movie.Title} />
        </div>
    )
}
