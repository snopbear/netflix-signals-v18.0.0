import { Component, inject, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MoviesService } from '@services-specific/index';
import { constants } from '../../../constants';
import sliderComponentImports from './slider.component.imports';
import { Observable } from 'rxjs';
import { IMovie } from '@models/interfaces';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'netflix-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [sliderComponentImports],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  //#region injectable properties
  _moviesService = inject(MoviesService);

  private moviesPopular$: Observable<IMovie[]> =
    this._moviesService.getPopularMovies();
  moviePopularSignal = toSignal(this.moviesPopular$, { initialValue: [] });

  //#endregion

  //#region local variables
  imagesBaseUrl = constants.imagesBaseUrl;
  slideIndex = 0;
  //#endregion

  //#region private methods
  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 10) {
        this.slideIndex = 0;
      }
    }, 5000);
  }

  //#endregion

  //#region lifecycle hock
  ngOnInit() {
    this.changeSlide();
  }
  //#endregion

  //
}
