import { useDispatch, useSelector } from "react-redux"
import {requestMovieID } from "../interface"
import { removeСhosenFilm } from "../redux/stateData";
import { useNavigate } from "react-router-dom";
import React from "react";


const FavoritesMovies = () => {
	const data = useSelector((state: {state: {favoritFilms: requestMovieID[]}}) => state.state.favoritFilms);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	function hendlerClickRemove(event : React.MouseEvent) {
		const target = event.target as HTMLElement;
		dispatch(removeСhosenFilm({id: (target.parentNode as HTMLFormElement).id}));
	}
	return (
		<div className="favorit">
			<button className="btn-exite" onClick={() => navigate('/')}>На главную</button>
			<ul className="favorit-movies">
				{data.map((movie) => {
					return <li className="item-movie" key={movie.imdbID} id={movie.imdbID}>
							<img src={movie.Poster} alt="постер к фильму" />
							<div className="info-movie">
								<h4 className="title">{movie.Title}, {movie.Year}</h4>
							</div>
							<button className="btn-delite" onClick={hendlerClickRemove}>Удалить</button>
					</li>
				})}
			</ul>
		</div>
	)
}

export default FavoritesMovies;