import { NgIf, NgFor, DatePipe, CurrencyPipe } from "@angular/common";
import { SliderComponent } from "src/app/@shared/components/slider/slider.component";
import { VideoEmbedComponent } from "src/app/@shared/components/video-embed/video-embed.component";
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';

const components = [SliderComponent, VideoEmbedComponent];
const common = [NgIf, NgFor];
const pipes = [DatePipe, CurrencyPipe];
const modules = [CarouselModule, ImageModule];

const movieDetailsComponentImports = [
  ...components,
  ...common,
  ...pipes,
  ...modules,
];

export default movieDetailsComponentImports;
