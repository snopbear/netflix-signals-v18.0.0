import { Component, input, Input, OnInit, signal } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { constants } from '../../../constants';
import sliderComponentImports from './slider.component.imports';
import { IMovie } from '@models/interfaces';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'netflix-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [sliderComponentImports, JsonPipe],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  slides = input.required<IMovie[]>();

  
  private _isHeader = signal<boolean>(false);
  @Input()
  set isHeader(value: boolean) {
    this._isHeader.set(value);
  }
  get isHeader(): boolean {
    return this._isHeader();
  }

  imagesBaseUrl = constants.imagesBaseUrl;
  slideIndex = 0;

  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 10) {
        this.slideIndex = 0;
      }
    }, 5000);
  }

  ngOnInit() {
    if (this.isHeader) {
      this.changeSlide();
    }
  }
}
