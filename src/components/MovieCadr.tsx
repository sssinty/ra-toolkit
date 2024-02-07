import { useDispatch, useSelector } from "react-redux"
import {requestMovieID } from "../interface"
import { useNavigate, useParams } from "react-router-dom";
import { addСhosenFilm, fetchMoviesByID } from "../redux/stateData";
import { useEffect} from "react";


const MovieCard = () => {
	const card = useSelector((state: {state: {film: requestMovieID}}) => state.state.film);
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function hendlerClick() {
		dispatch(addСhosenFilm(card));
		navigate('/movies')
	}

	useEffect(() => {
		void dispatch(fetchMoviesByID(params.id));
	},[params])

	return(
		<div className="movie-card" key={card.imdbID}>
			<button className="btn-exite" onClick={() => navigate('/movies')}>Назад</button>
			<img src={card.Poster} alt="Постер" />
			<div className="movie-info">
				<h2 className="title">{card.Title}</h2>
				<div className="block-btn">
					<button className="btn-add" onClick={hendlerClick}>Избранное</button>
				</div>
				<h3 className="info">О фильме</h3>
				<p>Год выпуска: <b>{card.Year}</b></p>
				<p>Жанр: <b>{card.Genre}</b></p>
				<p>Продолжительность: <b>{card.Runtime}</b></p>
				<p>Режисер: <b>{card.Director}</b></p>
				<p>Актёры: <b>{card.Actors}</b></p>
				<p>Рейтинг: <b>{card.imdbRating}</b></p>
			</div>
			</div>
	)
}

export default MovieCard;