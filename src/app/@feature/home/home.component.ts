import { Component } from '@angular/core';
import { SliderComponent } from '../../@shared/components/slider/slider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [SliderComponent],
})
export class HomeComponent {}
