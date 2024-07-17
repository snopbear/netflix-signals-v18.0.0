import { computed, inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { constants } from '../../../../constants';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpCallsService } from '@services-common/index';
import { IMovie } from '@models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  //#region Injectable
  _httpCalls = inject(HttpCallsService);
  //#endregion Injectable

  //#region variables
  Urls = {
    popular: `${constants.apiUrl}/movie/popular?api_key=${constants.apiKey}&language=en-US&page=1`,
    upcoming: `${constants.apiUrl}/movie/upcoming?api_key=${constants.apiKey}&language=en-US&page=1`,
    topRated: `${constants.apiUrl}/movie/top_rated?api_key=${constants.apiKey}&language=en-US&page=1`,
    byType: `${constants.apiUrl}/movie/by_type?api_key=${constants.apiKey}&language=en-US&page=1`,
  };
  //#endregion variables

  //#region Popural
  private moviesPopular$: Observable<IMovie[]> = this.getPopularMovies();
  moviePopular = toSignal(this.moviesPopular$, { initialValue: [] });

  moviePopuralSignal = computed(() => {
    try {
      return this.moviePopular();
    } catch (error: any) {
      console.log(error['message']);
      return console.log(error['message']);
    }
  });

  getPopularMovies(): Observable<IMovie[]> {
    return this._httpCalls
      .consumingAPI<IMovie[]>(this.Urls.popular, 'GET')
      .pipe(
        map((res: IMovie | any) => {
          return res.results as IMovie[];
        })
      );
  }
  //#endregion Popural

  //#region Upcoming
  private moviesUpcoming$: Observable<IMovie[]> = this.getUpcomingMovies();
  movieUpcoming = toSignal(this.moviesUpcoming$, { initialValue: [] });

  movieUpcomingSignal = computed(() => {
    try {
      return this.movieUpcoming();
    } catch (error: any) {
      console.log(error['message']);
      return console.log(error['message']);
    }
  });
  getUpcomingMovies(): Observable<IMovie[]> {
    return this._httpCalls
      .consumingAPI<IMovie[]>(this.Urls.upcoming, 'GET')
      .pipe(
        map((res: IMovie | any) => {
          return res.results;
        })
      );
  }
  //#endregion Upcoming

  //#region Upcoming
  private moviesTopRated$: Observable<IMovie[]> = this.getTopRateMovies();
  movieTopRate = toSignal(this.moviesTopRated$, { initialValue: [] });

  movieTopRateSignal = computed(() => {
    try {
      return this.movieUpcoming();
    } catch (error: any) {
      console.log(error['message']);
      return console.log(error['message']);
    }
  });
  getTopRateMovies(): Observable<IMovie[]> {
    return this._httpCalls
      .consumingAPI<IMovie[]>(this.Urls.upcoming, 'GET')
      .pipe(
        map((res: IMovie | any) => {
          return res.results as IMovie[];
        })
      );
  }
  //#endregion Upcoming
}
