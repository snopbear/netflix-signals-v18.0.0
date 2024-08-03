import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { mainConstants } from '@constants/index';
import { HttpCallsService } from '@services-common/index';
import {
  IActor,
  IGenre,
  IImage,
  IMovie,
  IMovieDTO,
  IVideo,
} from '@models/interfaces';
import { MovieType } from '@models/types';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  _httpCalls = inject(HttpCallsService);

  getMovies(type: MovieType, count = 20): Observable<IMovie[]> {
    return this._httpCalls
      .consumingAPI<IMovie[]>(
        `${mainConstants.apiUrl}/movie/${type}?api_key=${mainConstants.apiKey}`,
        'GET'
      )
      .pipe(
        map((res: any) => {
          return res.results.slice(0, count) as IMovie[];
        })
      );
  }

  getMovieById(id: number): Observable<IMovie> {
    return this._httpCalls
      .consumingAPI<IMovie>(
        `${mainConstants.apiUrl}/movie/${id}?api_key=${mainConstants.apiKey}&language=en-US`,
        'GET'
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getMovieVideos(id: string): Observable<IVideo[]> {
    return this._httpCalls
      .consumingAPI<IVideo>(
        `${mainConstants.apiUrl}/movie/${id}/videos?api_key=${mainConstants.apiKey}&language=en-US`,
        'GET'
      )
      .pipe(
        map((res: any) => {
          return res.results as IVideo[];
        })
      );
  }

  getMovieImages(id: string): Observable<IImage[]> {
    return this._httpCalls
      .consumingAPI<IImage>(
        `${mainConstants.apiUrl}/movie/${id}/images?api_key=${mainConstants.apiKey}`,
        'GET'
      )
      .pipe(
        map((res: any) => {
          return res.backdrops as IImage[];
        })
      );
  }
  getMovieCast(id: string): Observable<IActor[]> {
    return this._httpCalls
      .consumingAPI<IActor[]>(
        `${mainConstants.apiUrl}/movie/${id}/credits?api_key=${mainConstants.apiKey}`,
        'GET'
      )
      .pipe(
        map((res: any) => {
          return res.cast as IActor[];
        })
      );
  }

  searchMovies(page: number, searchValue?: string): Observable<IMovieDTO> {
    const uri = searchValue ? 'search/movie' : 'movie/popular';
    return this._httpCalls
      .consumingAPI<IMovieDTO>(
        `${mainConstants.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${mainConstants.apiKey}`,
        'GET'
      )
      .pipe(
        map((res: any) => {
          return res as IMovieDTO;
        })
      );
  }

  getMoviesGenres() {
    return this._httpCalls
      .consumingAPI<IGenre[]>(
        `${mainConstants.apiUrl}/genre/movie/list?api_key=${mainConstants.apiKey}`,
        'GET'
      )
      .pipe(
        map((res: any) => {
          return res.genres as IGenre[];
        })
      );
  }

  getMoviesByGenre(genreId: string, pageNumber = 1) {
    return this._httpCalls
      .consumingAPI<IMovie[]>(
        `${mainConstants.apiUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${mainConstants.apiKey}`,
        'GET'
      )
      .pipe(
        map((res: any) => {
          return res.results as IMovie[];
        })
      );
  }
}
