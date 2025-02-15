import { Component, input } from '@angular/core';
import { IMovie } from '@models/interfaces';
import { mainConstants } from '@constants/index';
import showItemsComponentImports from './show-item.component.imports';

@Component({
  selector: 'netflix-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
  standalone: true,
  imports: [showItemsComponentImports],
})
export class ShowItemComponent {
  showItem = input.required<IMovie | null>();
  imageBaseUrl = mainConstants.imagesBaseUrl;
}
