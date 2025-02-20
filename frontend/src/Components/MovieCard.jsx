import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";


//The object is just getting information about the movie
function MovieCard({movie}) {
    {/*This is the function that will hold all the logic for the like button*/}
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()


    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e){
        e.preventDefault()

        if(favorite) removeFromFavorites(movie.id)
            else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div>
        <div className="movie-poster">
            {/*Making it dybanic by giving it objects and not actual values*/}
            {/*Adding 5the posters to the card */}
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie.title" />
            <div className="movie-overlay">
                {/*The function will be called anytime the button is pressed*/}
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}> 🤍 </button>
            </div>
        </div>
        <div className="movie-info">
            {/*Using the braces because were using part of the prop  declared in the main function*/}
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
        </div>
    </div>
}

{/*Have to have this in tomake the function usevbale the anme is just the name of the main function*/}
export default MovieCard
