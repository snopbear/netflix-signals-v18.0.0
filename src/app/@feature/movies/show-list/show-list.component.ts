import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  WritableSignal,
  signal,
  effect,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  IMovieDTO } from '@models/interfaces';
import { MoviesService } from '@services-specific/index';
import { ShowItemComponent } from 'src/app/@shared/components/show-item/show-item.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    AsyncPipe,
    ShowItemComponent,
    JsonPipe,
    PaginatorModule,
  ],
})
export class ShowListComponent implements OnInit {
  private _moviesService = inject(MoviesService);

  // Define signals
  showsList: WritableSignal<IMovieDTO | null> = signal(null);
  searchValue: WritableSignal<string> = signal('');
  currentPage: WritableSignal<number> = signal(1);

  constructor() {
    // Set up an effect to fetch data whenever the page or search value changes
    effect(() => {
      this.getPagedShows(this.currentPage(), this.searchValue());
    });
  }

  ngOnInit(): void {
    // Fetch initial data
    this.getPagedShows(1);
  }

  getPagedShows(page: number, searchKeyword?: string) {
    this._moviesService.searchMovies(page, searchKeyword).subscribe((data) => {
      this.showsList.set(data);
    });
  }

  searchChanged() {
    this.currentPage.set(1); // Reset to first page on search change
    
    
      if (event && event.target && event.target instanceof HTMLInputElement) {
        this.searchValue.set(event.target.value);
      }
    }

  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.currentPage.set(pageNumber);
  }
}
