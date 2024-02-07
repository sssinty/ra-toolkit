import {cardMovie, entitiesTypes} from "../interface"
import { useSelector } from "react-redux"
import MoviesList from "./MoviesList";
import NotFoundMovies from "./NotFoundMovies";
// import preloader from './../assets/preloader.svg'

const FoundMovies = () => {
	const {entities} = useSelector((state: {state : {entities : entitiesTypes}}) => state.state.entities);
	const data = useSelector((state: {state: {entities: { Search: cardMovie}}}) => state.state.entities.Search);
	console.log(entities, data)

	if(entities?.Response === "False") {
		return <NotFoundMovies entities={entities}/> 
	} else {
		return <MoviesList data={data}/>
	}

}

export default FoundMovies