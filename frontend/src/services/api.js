const API_KEY = "1f7bf14508b0ebdeb74b218eb36d776a";
const BASE_URL = "https://api.themoviedb.org/3";

//Sending a request to an API
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json();
    return data.results
};