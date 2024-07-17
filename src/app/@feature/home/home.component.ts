import { Component } from '@angular/core';
import homeComponentImports from './home.component.imports';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [homeComponentImports],
})
export class HomeComponent {

}
