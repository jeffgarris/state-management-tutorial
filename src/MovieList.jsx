import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
import Movie from './Movie';
import './App.css';

function MovieList() {
  const value = useContext(MovieContext);

  return (
    <div className="MovieList">
      <Movie movies={value} />
    </div>
  );
}

export default MovieList;
