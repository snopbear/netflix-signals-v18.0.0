import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import appComponentsImports from './app.component.imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [appComponentsImports,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NG Flex';

}
