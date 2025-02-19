import "../css/Favorites.css";
import { useMovieContex } from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favorite() {
    const {favorites} = useMovieContex();


    if (favorites){
        <div className="favorites"> 
            <h2>Your Favorites:</h2>
        return <div className="movie-grid">
            {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        </div>
    }
    return <div className="favorites-empty"> 
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites adn they will appear here.</p>
    </div>
    
}

export default Favorite