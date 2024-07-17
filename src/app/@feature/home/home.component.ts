import { Component, inject } from '@angular/core';
import homeComponentImports from './home.component.imports';
import { MoviesService, TvSeriesService } from '@services-specific/index';
import { map, Observable } from 'rxjs';
import { IMovie, ITvShow, mapTopMovies } from '@models/interfaces';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [homeComponentImports],
})
export class HomeComponent {
  _moviesService = inject(MoviesService);
  _TvSeriesService = inject(TvSeriesService);

  private moviesUpcoming$: Observable<IMovie[]> =
    this._moviesService.getUpcomingMovies();
  movieUpcomingSignal = toSignal(this.moviesUpcoming$, { initialValue: [] });

  private moviesPopular$: Observable<IMovie[]> =
    this._moviesService.getPopularMovies();
  moviePopularSignal = toSignal(this.moviesPopular$, { initialValue: [] });

  private tvSeriesPopular$: Observable<IMovie[]> = this._TvSeriesService
    .getPopularTvSeries()
    .pipe(map(mapTopMovies));
  tvSeriesPopularSignal = toSignal(this.tvSeriesPopular$, { initialValue: [] });

  /*** for single use ***/
  // private tvSeriesPopular$: Observable<ITvShow[]> = this._TvSeriesService
  //   .getPopularTvSeries()
  //   .pipe(
  //     map((tvShow) => {
  //       return tvShow.map((tvSeries: ITvShow) => {
  //         return {
  //           ...tvSeries,
  //           original_title: tvSeries.name,
  //           original_name: tvSeries.original_name,
  //         };
  //       });
  //     })
  //   );
  // tvSeriesPopularSignal = toSignal(this.tvSeriesPopular$, { initialValue: [] });
}
