import { useEffect, useState } from 'react'
import './App.css'
import SearchIncon from './search.svg'
import MovieCard from './MovieCard'
import Footer from './Footer'
import { H1, H2, Empty, Search, Container } from './StyledComponents'

const API_URL = 'http://www.omdbapi.com/?apikey=e56775ff'

// curso: https://www.youtube.com/watch?v=b9eMGE7QtTk&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=3
function App() {
  const [filmes, setFilmes] = useState([])
  const [pesquisa, setPesquisa] = useState('')
  const [msg, setMsg] = useState(false)
  const [loading, setLoading] = useState(false)

  // e56775ff key
  // http://www.omdbapi.com/?apikey=[yourkey]&
  const pesquisaFilmes = async title => {
    setMsg(false)
    setLoading(true)
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    // console.log(data.Search)
    setFilmes(data.Search)
    setLoading(false)
  }

  useEffect(() => {
    // pesquisaFilmes('')
    setMsg(true)
  }, [])
  return (
    <div className="app">
      <H1>BuscaFlix</H1>
      <Search className="search">
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
      </Search>
      {/* usando optional chaining */}
      {filmes?.length > 0 ? (
        <Container>
          {filmes.map(movie =>
            movie.Poster !== 'N/A' ? <MovieCard movie={movie} /> : null
          )}
        </Container>
      ) : msg === true ? (
        <Empty>
          <H2>Pesquise por algum filme.</H2>
        </Empty>
      ) : loading === true ? (
        <Empty className="empty">
          <H2>Carregando...</H2>
        </Empty>
      ) : (
        <Empty className="empty">
          <H2>Filme não encontrado.</H2>
        </Empty>
      )}

      <Footer />
    </div>
  )
}

export default App
