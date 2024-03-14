import axios from "axios";

export const moviesApi = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: import.meta.env.PUBLIC_API_KEY,
	},
});
