import { NgIf, NgFor, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowItemComponent } from '@components/index';
import { PaginatorModule } from 'primeng/paginator';

const components = [ShowItemComponent];
const common = [NgIf, NgFor];
const pipes = [DatePipe];
const modules = [FormsModule, PaginatorModule];

const movieDetailsComponentImports = [
  ...components,
  ...common,
  ...pipes,
  ...modules,
];

export default movieDetailsComponentImports;
