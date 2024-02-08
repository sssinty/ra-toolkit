import {useState } from "react";
import { useDispatch} from "react-redux";
import { fetchMoviesByName } from "../redux/stateData";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";

const FormSerch = () => {
  const [text, setText] = useState<string>('');
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

  function handleSubmit (event: React.FormEvent) {
		event.preventDefault();
		dispatch(fetchMoviesByName(text));
		navigate('/movies');
  }

  function handleChange(event: React.FormEvent) {
		const target = event.target as HTMLInputElement;
		setText(target.value);
  }

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="serch" onChange={handleChange} value={text}/>
			<button type="submit">Поиск</button>
			<button type="button" onClick={() => navigate('/favorites')}>Избранное</button>
		</form>
	)A
}

export default FormSerch;