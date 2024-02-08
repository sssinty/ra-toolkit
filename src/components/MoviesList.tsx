import { Link, useNavigate } from "react-router-dom";
import { cardMovie} from "../interface";

interface IMoviesList {
data : cardMovie[]
}

const MoviesList = ({data} : IMoviesList) => {
	const navigate = useNavigate();
	console.log(data)
	return (
		<div className="block-movies">
		<button className="btn-exite" onClick={() => navigate('/')}>Назад</button>
		<ul className="list-movies">
			{data.map((movie : cardMovie) => {
				return <li className="item-movie" key={movie.imdbID}>
					<Link to={`/movies/${movie.imdbID}`}>
						<img src={movie.Poster} alt="постер к фильму" />
						<div className="info-movie">
							<h4 className="title">{movie.Title}, {movie.Year}</h4>
						</div>
					</Link>
				</li>
			})}
		</ul>
	</div>
	)
}

export default MoviesList;