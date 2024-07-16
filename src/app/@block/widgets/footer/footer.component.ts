
import { Component } from '@angular/core';
import {   DatePipe, LowerCasePipe } from '@angular/common';  // Ensure this is correct
@Component({
  selector: 'netflix-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [ DatePipe],
  providers: [],
})
export class FooterComponent {
  formattedDate=new Date();

  constructor() {
  }
}
