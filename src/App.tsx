import { Route, Routes } from 'react-router-dom'
import './App.css'
import FormSerch from './components/FormSerch'
// import FoundMovies from './components/FoundMovies'
import MovieCard from './components/MovieCadr'
import FavoritesMovies from './components/FavoritesMovies'
import { Suspense, lazy } from 'react'
import preloader from './assets/preloader.svg'

function Preloader() {
  return <h2>Loader...</h2>
}

const LeeFoundMovies = lazy(() => import('./components/FoundMovies'))
 
function App() {
  return (
    <Suspense fallback={<Preloader/>}>
      <Routes>
        <Route path='/' element={<FormSerch />} />
        <Route path='/favorites' element={<FavoritesMovies />} />
        <Route path='/movies' element={<LeeFoundMovies/>} />
        <Route path='/movies/:id' element={<MovieCard />} />
      </Routes>
    </Suspense>
  )
}

export default App
