import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMovie } from '@models/interfaces';
import { constants } from 'src/app/constants';

@Component({
  selector: 'netflix-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class ShowItemComponent {
  showItem = input.required<IMovie | null>();
  imageBaseUrl = constants.imagesBaseUrl;
}
