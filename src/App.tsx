import { Route, Routes } from 'react-router-dom'
import './App.css'
import FormSerch from './components/FormSerch'
import FoundMovies from './components/FoundMovies'
import MovieCard from './components/MovieCadr'
import FavoritesMovies from './components/FavoritesMovies'

function App() {
  return (
    <Routes>
      <Route path='/' element={<FormSerch />} />
      <Route path='/favorites' element={<FavoritesMovies />} />
      <Route path='/movies' element={<FoundMovies />} />
      <Route path='/movies/:id' element={<MovieCard />} />
    </Routes>
  )
}

export default App;
