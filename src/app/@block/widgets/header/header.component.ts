import { Component } from '@angular/core';
import headerComponentsImports from './header.component.imports';

@Component({
  selector: 'netflix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [headerComponentsImports],
})
export class HeaderComponent {}
