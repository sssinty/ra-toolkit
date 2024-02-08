import {cardMovie, entitiesTypes, sercMovies} from "../interface"
import { useSelector } from "react-redux"
import MoviesList from "./MoviesList";
import NotFoundMovies from "./NotFoundMovies";
// import preloader from './../assets/preloader.svg'

const FoundMovies = () => {
	const {entities} = useSelector((state: {state : {entities : entitiesTypes}}) => state.state.entities);
	const data = useSelector((state: {state: {ids: sercMovies}}) => state.state.ids);
	const state = useSelector((state : {state }) => state.state)

	if(entities?.Response === "False") {
		return <NotFoundMovies entities={entities}/> 
	} else {
		return <MoviesList data={data}/>
	}
}

export default FoundMovies