import { inject, Injectable } from '@angular/core';
import { ITvShow } from '@models/interfaces';
import { HttpCallsService } from '@services-common/index';
import { map, Observable } from 'rxjs';
import { mainConstants } from '@constants/index';

@Injectable({
  providedIn: 'root',
})
export class TvSeriesService {
  _httpCalls = inject(HttpCallsService);

  Urls = {
    popular: `${mainConstants.apiUrl}/tv/popular?api_key=${mainConstants.apiKey}&language=en-US&page=1`,
  };

  getPopularTvSeries(): Observable<ITvShow[]> {
    return this._httpCalls
      .consumingAPI<ITvShow[]>(this.Urls.popular, 'GET')
      .pipe(
        map((res: ITvShow | any) => {
          return res.results.slice(0, 18) as ITvShow[];
        })
      );
  }
}
