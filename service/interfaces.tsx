export interface Anime {
    id: string;
    title: string;
    title_english: string;
    mal_id: number;
    main_picture: {
      large: string;
      medium: string;
    };
    year: number;
    mean: number;
    rank: number;
    studios: {
      nodes: {
        name: string;
      }[];
    };
    synopsis: string;
  }
  
  export interface AnimeResponse {
    animes: Anime[];
    nextPage: string;
  }