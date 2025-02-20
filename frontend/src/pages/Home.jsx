import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        if (!popularMovies || popularMovies.length === 0) {
          setError("No movies found. Please try again later.");
        } else {
          setMovies(popularMovies);
        }
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to load movies. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };
    
    loadPopularMovies();
  }, []);


  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading)return
    setLoading(true)
    try{
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    }catch{
        console.log(err)
        setError("Failed to search movies...")
    }
    finally{
        setLoading(false)
    }

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

    {error && (
      <div className="error-message">
        {error}
        <button onClick={() => window.location.reload()} style={{marginLeft: '10px'}}>
          Retry
        </button>
      </div>
    )}


      {loading ? (
        <div className="loading">
          Loading...
          <div style={{marginTop: '10px'}}>Please wait while we fetch the movies</div>
        </div>
      ) : movies.length > 0 ? (

        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="no-movies">
          No movies available at the moment.
        </div>
      )}

    </div>
  );
}

export default Home;
