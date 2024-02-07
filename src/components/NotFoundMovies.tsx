import { useNavigate } from "react-router-dom";
import { errorMassage} from "../interface";

interface INotFoundMovies {
	entities : errorMassage
}
const NotFoundMovies = ({entities} : INotFoundMovies) => {
	const navigator = useNavigate()
	console.log(entities)
	return (
		<div className="not-found-movies">
			<h2>{entities.Error}</h2>
			<button className="btn-back" onClick={() => navigator('/')}>На главную</button>
		</div>
	)
}

export default NotFoundMovies;