import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { IMovie, IMovieDTO } from '@models/interfaces';
import { MoviesService } from '@services-specific/index';
import { map, Observable } from 'rxjs';
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

  showsList$: Observable<IMovieDTO> | null = null;

  searchValue = '';

  ngOnInit(): void {
    this.getPagedShows(1);
  }

  getPagedShows(page: number, searchKeyword?: string) {
    this.showsList$ = this._moviesService.searchMovies(page, searchKeyword);
  }

  searchChanged() {
    this.getPagedShows(1, this.searchValue);
  }

  pageChanged(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.getPagedShows(pageNumber, this.searchValue);
  }
}
