import { JsonPipe, NgFor, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ShowItemComponent } from "src/app/@shared/components/show-item/show-item.component";

const common = [JsonPipe, NgFor, NgIf, RouterLink];
const router = [RouterLink];
const components = [ShowItemComponent];

const genresComponentImports = [...common, ...router, ...components];

export default genresComponentImports;
