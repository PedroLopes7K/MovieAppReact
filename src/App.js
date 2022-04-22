import { useEffect, useState } from 'react'
import './App.css'
import SearchIncon from './search.svg'
import MovieCard from './MovieCard'
import Footer from './Footer'
// import NotFound from './NotFound'

const API_URL = 'http://www.omdbapi.com/?apikey=e56775ff'
// curso: https://www.youtube.com/watch?v=b9eMGE7QtTk&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=3
function App() {
  const [filmes, setFilmes] = useState([])
  const [pesquisa, setPesquisa] = useState('')

  // e56775ff key
  // http://www.omdbapi.com/?apikey=[yourkey]&
  const pesquisaFilmes = async title => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    // console.log(data.Search)
    setFilmes(data.Search)
  }

  useEffect(() => {
    pesquisaFilmes('batman')
  }, [])
  return (
    <div className="app">
      <h1>BuscaFlix</h1>
      <div className="search">
        <input
          placeholder="Pesquise por filmes"
          value={pesquisa}
          onChange={e => setPesquisa(e.target.value)}
        />
        <img
          src={SearchIncon}
          alt="search"
          onClick={() => pesquisaFilmes(pesquisa)}
        />
      </div>
      {/* usando optional chaining */}
      {filmes?.length > 0 ? (
        <div className="container">
          {filmes.map(movie => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Filme não encontrado</h2>
        </div>
        // <NotFound />
      )}
      <Footer />
    </div>
  )
}

export default App
