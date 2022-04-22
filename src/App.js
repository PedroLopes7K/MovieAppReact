import { useEffect, useState } from 'react'
import './App.css'
import SearchIncon from './search.svg'
import MovieCard from './MovieCard'
// import NotFound from './NotFound'

const API_URL = 'http://www.omdbapi.com/?apikey=e56775ff'
// curso: https://www.youtube.com/watch?v=b9eMGE7QtTk&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=3
function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  // e56775ff key
  // http://www.omdbapi.com/?apikey=[yourkey]&
  const searchMovies = async title => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    // console.log(data.Search)
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('batman')
  }, [])
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <img
          src={SearchIncon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map(moviee => (
            <MovieCard movie={moviee} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Filme não encontrado</h2>
        </div>
        // <NotFound />
      )}
    </div>
  )
}

export default App
