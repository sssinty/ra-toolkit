import { EntityId } from "@reduxjs/toolkit"

export interface cardMovie {
	Title: string,
	Year: number,
	imdbID: string,
	Type: string,
	Poster: string,
}
export interface favoritFilms {
	ids: requestMovieID
}
export interface sercMovies {
	Search: cardMovie[],
	totalResults: number,
	Response: boolean
}

interface ratings {
	Source: string,
	Value: string
}

export interface requestMovieID {
	Title: string,
	Year: number,
	Rated: string,
	Released: string,
	Runtime: string,
	Genre: string,
	Director: string,
	Writer: string,
	Actors: string,
	Plot: string,
	Language: string,
	Country: string,
	Awards: string,
	Poster: string,
	Ratings: ratings[],
	Metascore: number,
	imdbRating: number,
	imdbVotes: number,
	imdbID: string,
	Type: string,
	DVD: string,
	BoxOffice: string,
	Production: string,
	Website: string,
	Response: string,
}

export interface errorMassage {
	Response?: string,
	Error: string
}

export interface entitiesTypes {
	entities: errorMassage | sercMovies
}

export interface IState {
	loadingStatus: 'idle' | 'failed' | 'loading',
	error: null | errorMassage,
	ids: EntityId[],
	entities: object | sercMovies,
	film: object | requestMovieID
}