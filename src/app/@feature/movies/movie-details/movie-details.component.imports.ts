import { NgIf, NgFor, DatePipe, CurrencyPipe } from "@angular/common";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { SliderComponent } from "src/app/@shared/components/slider/slider.component";
import { VideoEmbedComponent } from "src/app/@shared/components/video-embed/video-embed.component";

const components = [SliderComponent, VideoEmbedComponent];
const directives = [NgIf, NgFor];
const pipes = [DatePipe, CurrencyPipe];
const modules = [SlickCarouselModule];

const movieDetailsComponentImports = [
  ...components,
  ...directives,
  ...pipes,
  ...modules,
];

export default movieDetailsComponentImports;
