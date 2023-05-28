import { Anime, AnimeResponse } from './interfaces';

export const fetchAllCards = async () => {

	const url = 'https://animes5.p.rapidapi.com/?fields=%20id%2C%20title%2C%20main_picture%2C%20mal_id%2C%20year%2C%20mean%2C%20rank%2C%20studios%2C%20synopsis';
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

export const fetchCardDetailsById = async (mal_id: number) => {

	const url = `https://animes5.p.rapidapi.com/anime/${mal_id}?fields=%20id%2C%20title%2C%20main_picture%2C%20mal_id%2C%20year%2C%20mean%2C%20rank%2C%20studios%2C%20synopsis'`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '07f27b6f8bmsh5ffd3390bbe6b27p114c21jsn70f95d227326',
			'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
		},
	};
	
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

