import { IMovie } from '../movie/movie';

export interface ITvShow {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface ITvShowDTO {
  page: number;
  results: ITvShow[];
  total_pages: number;
  total_results: number;
}

export function mapTopMovies(tvShow: ITvShow[]): IMovie[] {
  return tvShow.map((tvShow: ITvShow) => {
    return {
      ...tvShow,
      original_title: tvShow.name,
      original_name: tvShow.original_name,
      release_date: '', // Set a default value or handle it as needed
      title: tvShow.name,
      video: false, // Set a default value or handle it as needed
    };
  });
}
