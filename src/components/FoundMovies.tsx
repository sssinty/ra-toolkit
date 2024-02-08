import {IState} from "../interface"
import { useSelector } from "react-redux"
import MoviesList from "./MoviesList";
import NotFoundMovies from "./NotFoundMovies";

function Preloader() {
  return <h2>Loading...</h2>
}
const FoundMovies = () => {
	const data = useSelector((state: {state: {ids: []}}) => state.state.ids);
	const state = useSelector((state : {state : IState }) => state.state);

	if(state.loadingStatus != 'idle') {
		return <Preloader />
	}	else if(state.entities?.Response === "False") {
		return <NotFoundMovies entities={state.entities}/> 
	} else {
		return <MoviesList data={data}/>
	}
}

export default FoundMovies