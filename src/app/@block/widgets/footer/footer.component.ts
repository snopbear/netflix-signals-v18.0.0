
import { Component } from '@angular/core';
import footerComponentsImports from './footer.component.imports';
@Component({
  selector: 'netflix-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [footerComponentsImports],
  providers: [],
})
export class FooterComponent {
  formattedDate = new Date();
}
