import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import {  IGenre, IMovie } from '@models/interfaces';
import { MoviesService } from '@services-specific/index';
import genresComponentImports from './genres.component.imports';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
  standalone: true,
  imports: [genresComponentImports],
})
export class GenresComponent implements OnInit {

  private _activeRoute = inject(ActivatedRoute);
  private _moviesService = inject(MoviesService);


  private genres$: Observable<IGenre[]> = this._moviesService.getMoviesGenres();
  genresSignal = toSignal(this.genres$, { initialValue: [] });

  showSignal: WritableSignal<IMovie[] | null> = signal(null);


  ngOnInit() {
    this._activeRoute.params.subscribe((params: any) => {
      this._moviesService
        .getMoviesByGenre(params['genreId'])
        .subscribe((movies: IMovie[]) => {
          this.showSignal.set(movies);
        });
    });
  }
}
