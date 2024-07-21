import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { constants } from '../../../../constants';
import { HttpCallsService } from '@services-common/index';
import { IActor, IImage, IMovie, IMovieDTO, IVideo } from '@models/interfaces';
import { MovieType } from '@models/types';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  _httpCalls = inject(HttpCallsService);

  getMovies(type: MovieType, count = 20): Observable<IMovie[]> {
    return this._httpCalls
      .consumingAPI<IMovieDTO[]>(
        `${constants.apiUrl}/movie/${type}?api_key=${constants.apiKey}`,
        'GET'
      )
      .pipe(
        map((res: IMovieDTO | any) => {
          return res.results.slice(0, count) as IMovie[];
        })
      );
  }

  getMovieById(id: number): Observable<IMovie> {
    return this._httpCalls
      .consumingAPI<IMovie>(
        `${constants.apiUrl}/movie/${id}?api_key=${constants.apiKey}&language=en-US`,
        'GET'
      )
      .pipe(
        map((res: IMovie | any) => {
          return res;
        })
      );
  }

  getMovieVideos(id: string): Observable<IVideo[]> {
    return this._httpCalls
      .consumingAPI<IVideo>(
        `${constants.apiUrl}/movie/${id}/videos?api_key=${constants.apiKey}&language=en-US`,
        'GET'
      )
      .pipe(
        map((res: IVideo[] | any) => {
          return res.results as IVideo[];
        })
      );
  }

  getMovieImages(id: string): Observable<IImage[]> {
    return this._httpCalls
      .consumingAPI<IImage>(
        `${constants.apiUrl}/movie/${id}/images?api_key=${constants.apiKey}`,
        'GET'
      )
      .pipe(
        map((res: IImage[] | any) => {
          return res.backdrops as IImage[];
        })
      );
  }
  getMovieCast(id: string): Observable<IActor[]> {
    return this._httpCalls
      .consumingAPI<IActor[]>(
        `${constants.apiUrl}/movie/${id}/credits?api_key=${constants.apiKey}`,
        'GET'
      )
      .pipe(
        map((res: IActor[] | any) => {
          return res.cast as IActor[];
        })
      );
  }
}
