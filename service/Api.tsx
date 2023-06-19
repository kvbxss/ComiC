
export const fetchCardDetailsById = async (mal_id: number) => {

	const url = `https://animes5.p.rapidapi.com/anime/${mal_id}?fields=id,title,main_picture,mal_id,year,mean,rank,studios,synopsis`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
		},
	};
	
	try {
		const response = await fetch(url, options);
		const { anime } = await response.json();
		console.log(anime);
		return anime;
		
	} catch (error) {
		console.error(error);
	}
};

