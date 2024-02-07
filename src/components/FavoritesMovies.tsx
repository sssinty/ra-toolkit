import { useDispatch, useSelector } from "react-redux"
import { favoritFilms, requestMovieID } from "../interface"
import { removeСhosenFilm } from "../redux/stateData";
import { useNavigate } from "react-router-dom";


const FavoritesMovies = () => {
	const data = useSelector((state: {state: {favorit: favoritFilms}}) => state.state.favorit);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function hendlerClickRemove(id : string) {
		dispatch(removeСhosenFilm(id))
		console.log(data)
	}
	return (
		<div className="favorit">
			<button className="btn-exite" onClick={() => navigate('/')}>На главную</button>
			<ul className="favorit-movies">
				{data.map((movie : requestMovieID) => {
					return <li className="item-movie" key={movie.imdbID}>
							<img src={movie.Poster} alt="постер к фильму" />
							<div className="info-movie">
								<h4 className="title">{movie.Title}, {movie.Year}</h4>
							</div>
							<button className="btn-delite" onClick={() => hendlerClickRemove(movie.imdbID)}>Удалить</button>
					</li>
				})}
			</ul>
		</div>
	)
}

export default FavoritesMovies;