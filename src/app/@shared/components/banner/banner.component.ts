import { Component, inject, input, Input, signal } from '@angular/core';
import bannerComponentImports from './banner.component.imports';
import { MoviesService } from '@services-specific/index';
import { IMovie } from '@models/interfaces';

@Component({
  selector: 'netflix-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [bannerComponentImports],
})
export class BannerComponent {
  _moviesService = inject(MoviesService);
  // shows =signal(input.required<IMovie[]>) ;

  @Input() title = 'Popular Movies';
}
