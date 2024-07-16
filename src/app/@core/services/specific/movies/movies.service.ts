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

  //#endregion

  //#region variables
  Urls = {
    popular: `${constants.apiUrl}/movie/popular?api_key=${constants.apiKey}&language=en-US&page=1`,
  };

  //#endregion

  //#region Signals
  private movies$: Observable<IMovie[]> = this.getMovies();
  movie = toSignal(this.movies$, { initialValue: [] });

  movieSignal = computed(() => {
    try {
      return this.movie();
    } catch (error: any) {
      console.log(error['message']);
      return console.log(error['message']);
    }
  });
  //#endregion

  //#region
  getMovies(): Observable<IMovie[]> {
    return this._httpCalls
      .consumingAPI<IMovie[]>(this.Urls.popular, 'GET')
      .pipe(
        map((res: IMovie | any) => {
          return res.results as IMovie[];
        })
      );
  }
  //#endregion
}
