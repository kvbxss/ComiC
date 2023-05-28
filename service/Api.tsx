
export const fetchCardDetailsById = async (mal_id: number) => {

	const url = `https://animes5.p.rapidapi.com/anime/${mal_id}?fields=id,title,main_picture,mal_id,year,mean,rank,studios,synopsis`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '07f27b6f8bmsh5ffd3390bbe6b27p114c21jsn70f95d227326',
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

