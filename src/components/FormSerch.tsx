import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchMoviesByName } from "../redux/stateData";
import { useNavigate } from "react-router-dom";
import { entitiesTypes } from "../interface";

const FormSerch = () => {
	const state = useSelector((state : {state }) => state.state)
  const [text, setText] = useState<string>('')
	// const [send, setSend] = useState<boolean>(false)
	const dispatch = useDispatch();
	const navigate = useNavigate();

  function handleSubmit (event: React.FormEvent) {
		event.preventDefault();
		dispatch(fetchMoviesByName(text));
		navigate('/movies');
  }
	console.log(state)
  function handleChange(event: React.FormEvent) {
		const target = event.target as HTMLInputElement;
		setText(target.value);
		console.log(target.value)
  }

	// useEffect(() => {
	// 	if(text != '') {
			
	// 	}
	// }, [text])



	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="serch" onChange={handleChange} value={text}/>
			<button type="submit">Поиск</button>
			<button type="button" onClick={() => navigate('/favorites')}>Избранное</button>
		</form>
	)
}

export default FormSerch;