export interface Movies {
	page: number;
	results: Result[];
	total_pages: number;
	total_results: number;
}

export interface Result {
	adult: boolean;
	backdrop_path: string;
	id: number;
	title: string;
	original_language: OriginalLanguage;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: MediaType;
	genre_ids: number[];
	popularity: number;
	release_date: Date;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface IMovieInfo {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: null;
	budget: number;
	genres: IGenre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: Date;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export enum MediaType {
	Movie = "movie",
}

export enum OriginalLanguage {
	En = "en",
	Fr = "fr",
	Ja = "ja",
}

export interface IGenre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path: null | string;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}
