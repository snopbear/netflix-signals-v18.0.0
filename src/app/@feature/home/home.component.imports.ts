import { BannerComponent } from "src/app/@shared/components/banner/banner.component";
import { SliderComponent } from "../../@shared/components/slider/slider.component";
import { NgIf } from "@angular/common";

const common = [NgIf];

const components = [SliderComponent, BannerComponent];

const homeComponentImports=[...common, ...components];

export default homeComponentImports;