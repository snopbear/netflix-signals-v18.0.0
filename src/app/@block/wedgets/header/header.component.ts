import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import headerComponentsImports from './header.component.imports';

@Component({
  selector: 'netflix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class HeaderComponent {}
