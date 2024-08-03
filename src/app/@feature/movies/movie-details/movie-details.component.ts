import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IActor, IImage, IMovie, IVideo } from '@models/interfaces';
import { MoviesService } from '@services-specific/index';
import { IMAGES_SIZES } from '@constants/index';
import movieDetailsComponentImports from './movie-details.component.imports';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  standalone: true,
  imports: [movieDetailsComponentImports],
})
export class MovieDetailsComponent {

  private _activeRoute = inject(ActivatedRoute);
  private _moviesService = inject(MoviesService);
 

  param = this._activeRoute.snapshot.params['id'];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  imagesSizes = IMAGES_SIZES;


  private moviesDetails$: Observable<IMovie[]> = this._moviesService
    .getMovieById(this.param)
    .pipe(map((movie) => [movie]));

  moviesDetailsSignal = toSignal(this.moviesDetails$, { initialValue: [] });



  private videoDetails$: Observable<IVideo[]> =
    this._moviesService.getMovieVideos(this.param);

  videoDetailsSignal = toSignal(this.videoDetails$, { initialValue: [] });



  private imagesDetails$: Observable<IImage[]> =
    this._moviesService.getMovieImages(this.param);

  imagesDetailsSignal = toSignal(this.imagesDetails$, { initialValue: [] });


  private castDetails$: Observable<IActor[]> = this._moviesService.getMovieCast(
    this.param
  );
  castDetailsSignal = toSignal(this.castDetails$, { initialValue: [] });


}
