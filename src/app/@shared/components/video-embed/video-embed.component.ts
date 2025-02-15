import { Component, input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import videoComponentImports from './video-embed.component.imports';

@Component({
  selector: 'netflix-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css'],
  standalone: true,
  imports: [videoComponentImports],
})
export class VideoEmbedComponent implements OnInit {
  key = input.required<string | null>();

  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.key
    );
  }
}
