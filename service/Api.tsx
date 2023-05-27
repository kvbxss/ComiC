import { AnimeResponse } from './interfaces';

export const fetchAllCards = async () => {

	const url = 'https://animes5.p.rapidapi.com/';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '07f27b6f8bmsh5ffd3390bbe6b27p114c21jsn70f95d227326',
			'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
		},
	};
	
	try {
		const response = await fetch(url, options);
		const data: AnimeResponse = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};