import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ prop }) => {
    return (
        <div className="container">
            {prop.map((movies) =>
                <MovieCard key={movies.imdbID} movie={movies} />
            )}
        </div>
    )
}

export default MovieList