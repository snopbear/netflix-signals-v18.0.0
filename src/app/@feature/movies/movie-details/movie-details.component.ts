import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { IActor, IImage, IMovie, IVideo } from '@models/interfaces';
import { MoviesService } from '@services-specific/index';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { map, Observable } from 'rxjs';
import { SliderComponent } from 'src/app/@shared/components/slider/slider.component';
import { VideoEmbedComponent } from 'src/app/@shared/components/video-embed/video-embed.component';
import { IMAGES_SIZES } from 'src/app/images-sizes';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  standalone: true,
  imports: [
    SliderComponent,
    VideoEmbedComponent,
    JsonPipe,
    AsyncPipe,
    NgIf,
    DatePipe,
    CurrencyPipe,
    NgFor,
    SlickCarouselModule,
  ],
})
export class MovieDetailsComponent implements OnInit {
  private _activeRoute = inject(ActivatedRoute);
  private _moviesService = inject(MoviesService);

  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  param = this._activeRoute.snapshot.params['id'];

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

  imagesSizes = IMAGES_SIZES;
  showId = '';
  showType: 'tv' | 'movie' = 'movie';

  // show$: Observable<IMovie[]> | null = null;
  // showVideos$: Observable<Video[]> | null = null;
  // showImages$: Observable<Image[]> | null = null;
  // showCast$: Observable<Actor[]> | null = null;
  // similarShows$: Observable<IMovie[]> | null = null;

  ngOnInit(): void {
    this.showId = this._activeRoute.snapshot.params['id'];
    this.showType = this._activeRoute.snapshot.params['type'];

    if (this.showType === 'movie') {
      //  this.show$ = this._moviesService.getMovieById(+this.showId);
      //    this.showVideos$ = this.moviesService.getMovieVideos(this.showId);
      //    this.showImages$ = this.moviesService.getMovieImages(this.showId);
      //    this.showCast$ = this.moviesService.getMovieCast(this.showId);
      //    this.similarShows$ = this.moviesService.getMovieSimilar(this.showId);
    }
  }

  addSlide() {
    // this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    // this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log(e,'slick initialized');
  }

  breakpoint(e: any) {
    console.log(e, 'breakpoint');
  }

  afterChange(e: any) {
    console.log(e, 'afterChange');
  }

  beforeChange(e: any) {
    console.log(e, 'beforeChange');
  }
}
