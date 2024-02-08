import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IState } from "../interface";

const dataAdapter = createEntityAdapter()
const initialState : IState = dataAdapter.getInitialState({loadingStatus: 'idle', error: null, film: {}})

export const fetchMoviesByName = createAsyncThunk(
	'fetch/moviesByName',
	async (movieName) => {
		const ressponse = await axios.get(`https://www.omdbapi.com/?apikey=36bb67f&s=${movieName}`);
		console.log(ressponse.data)
		return ressponse.data
	}
)
export const fetchMoviesByID = createAsyncThunk(
	'fetch/moviesByID',
	async (movieID) => {
		const ressponse = await axios.get(`https://www.omdbapi.com/?i=${movieID}&apikey=36bb67f`);
		console.log(ressponse.data)
		return ressponse.data
	}
)

const stateReducer = createSlice({
	name: 'data',
	initialState,
	reducers: {
		addСhosenFilm(state, action) {
			state.ids.push(action.payload)
		},

		removeСhosenFilm(state, action) {
			state.ids = state.ids.filter((elem) => {elem.imdbID != action.payload.id, console.log(elem.imdbID != action.payload.id)})
		}

	}, extraReducers: (builder) => {
		builder 
			.addCase(fetchMoviesByName.pending, (state) => {
				state.loadingStatus = 'loading',
				state.error = null
			})

			.addCase(fetchMoviesByName.fulfilled, (state, action) => {
				console.log(action.payload)
				if(action.payload.Response === 'False') {
					state.entities = action.payload
				} else {
					state.ids = action.payload.Search
				}
				state.loadingStatus = 'idle',
				state.error = null
			})

			.addCase(fetchMoviesByName.rejected, (state, action) => {
				state.loadingStatus = 'failed',
				state.error = action.error
			})

			// fetch movies ID

			.addCase(fetchMoviesByID.pending, (state) => {
				state.loadingStatus = 'loading',
				state.error = null
			})

			.addCase(fetchMoviesByID.fulfilled, (state, action) => {
				state.film = action.payload,
				state.loadingStatus = 'idle',
				state.error = null
			})

			.addCase(fetchMoviesByID.rejected, (state, action) => {
				state.loadingStatus = 'failed',
				state.error = action.error
			})
	}
})

export const {addСhosenFilm, removeСhosenFilm} = stateReducer.actions
export default  stateReducer.reducer