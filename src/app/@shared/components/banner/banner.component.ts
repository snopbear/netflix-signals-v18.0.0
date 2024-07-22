import { Component, input } from '@angular/core';
import bannerComponentImports from './banner.component.imports';
import { IMovie } from '@models/interfaces';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'netflix-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [bannerComponentImports, NgIf, NgFor],
  // new features to simplify component interaction and improve developer experience. 
  // inputs: ['title'],
  
})
export class BannerComponent {
  // @Input({ required: true,alias:'show' }) shows!: IMovie[];
  // @Input() title = 'Popular Movies';
  title = input.required<string>();
  shows = input.required<IMovie[]>();
}
