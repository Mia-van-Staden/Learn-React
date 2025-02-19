import { createContext, useState, useContext, useEffect } from "react";

const MovieContex = createContext();

export const useMovieContex = () => useContext(MovieContex)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        //Only runs if the favorites gets changed
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    //Makes it able to give the different states wrote directly to the context provider
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
                                //Giving value to the movie state
    return <MovieContex.Provider value={value}>
        {children}
    </MovieContex.Provider>
}