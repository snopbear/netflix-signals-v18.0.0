import { inject, Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { constants } from '../../../../constants';
import { HttpCallsService } from '@services-common/index';
import { IMovie } from '@models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  _httpCalls = inject(HttpCallsService);

  Urls = {
    popular: `${constants.apiUrl}/movie/popular?api_key=${constants.apiKey}&language=en-US&page=1`,
    upcoming: `${constants.apiUrl}/movie/upcoming?api_key=${constants.apiKey}&language=en-US&page=1`  };

  getPopularMovies(): Observable<IMovie[]> {
    return this._httpCalls
      .consumingAPI<IMovie[]>(this.Urls.popular, 'GET')
      .pipe(
        map((res: IMovie | any) => {
          return res.results.slice(0,18)as IMovie[];
        })
      );
  }

  getUpcomingMovies(): Observable<IMovie[]> {
    return this._httpCalls
      .consumingAPI<IMovie[]>(this.Urls.upcoming, 'GET')
      .pipe(
        map((res: IMovie | any) => {
          return res.results.slice(0,12) as IMovie[];
        }),
      );
  }


}
