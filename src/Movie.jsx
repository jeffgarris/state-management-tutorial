import React from 'react';
import './App.css';

function Movie({ movies }) {
    return (
        <div className="Movie">
            {movies.map(movie => (
                <div>
                    <p key={movie.id}>{movie.name} - {movie.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Movie;
