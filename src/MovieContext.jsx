import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Amadeus',
            price: '$10',
            id: 12345
        },
        {
            name: 'The Shawshank Redemption',
            price: '$11',
            id: 12346
        },
        {
            name: 'Nothing to Lose',
            price: '$12',
            id: 12347
        }
    ]);

    return (
        <MovieContext.Provider value={movies}>
            {props.children}}
        </MovieContext.Provider>
    );
}