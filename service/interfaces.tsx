export interface Anime {
    id: string;
    title: string;
    title_english: string;
    mal_id: number;
    main_picture: {
      large: string;
      medium: string;
    };
  }
  
  export interface AnimeResponse {
    animes: Anime[];
    nextPage: string;
  }