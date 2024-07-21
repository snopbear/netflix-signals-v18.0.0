import { Component, input, Input, signal } from '@angular/core';
import bannerComponentImports from './banner.component.imports';
import { IMovie, ITvShow } from '@models/interfaces';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'netflix-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [bannerComponentImports, NgIf, NgFor],
})
export class BannerComponent { 
  // @Input({ required: true }) shows!: IMovie[];
  // @Input() title = 'Popular Movies';
  title = input.required<string>();
  shows = input.required<IMovie[]>();


}
