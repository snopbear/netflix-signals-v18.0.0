import { NgIf, NgFor } from '@angular/common';
import { ShowItemComponent } from "../show-item/show-item.component";

const components = [ShowItemComponent];
const common = [NgIf, NgFor];

const bannerComponentImports = [...common,...components];

export default bannerComponentImports;