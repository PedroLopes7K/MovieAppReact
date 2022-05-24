import React from 'react'
import {
  Movie,
  MovieDiv1,
  MovieDiv2,
  MovieDiv3
} from '../Style/StyledComponents.js'

export default function MovieCard({ movie }) {
  return (
    <Movie className="movie">
      <MovieDiv1 className="Div1">
        <p>{movie.Year}</p>
      </MovieDiv1>

      <MovieDiv2 className="Div2">
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/400'
          }
          alt={movie.Title}
        />
      </MovieDiv2>

      <MovieDiv3 className="Div3">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </MovieDiv3>
    </Movie>
  )
}
