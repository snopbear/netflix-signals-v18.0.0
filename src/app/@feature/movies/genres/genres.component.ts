import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {  IGenre, IMovie, IMovieDTO } from '@models/interfaces';
import { MoviesService } from '@services-specific/index';
import { Observable } from 'rxjs';
import { ShowItemComponent } from 'src/app/@shared/components/show-item/show-item.component';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
  standalone: true,
  imports: [JsonPipe, NgFor, NgIf, RouterLink, ShowItemComponent],
})
export class GenresComponent implements OnInit {
  //#region Injectable
  private _activeRoute = inject(ActivatedRoute);
  private _moviesService = inject(MoviesService);
  //#endregion

  //#region configs
  param!: string;

  //#endregion

  //#region observables and signals

  private genres$: Observable<IGenre[]> = this._moviesService.getMoviesGenres();
  genresSignal = toSignal(this.genres$, { initialValue: [] });

  // private show$: Observable<IMovie[]> = this._moviesService.getMoviesByGenre(
  //   this.param
  // );
  // showSignal = toSignal(this.show$, { initialValue: [] });

  showSignal: WritableSignal<IMovie[] | null> = signal(null);

  //#endregion

  ngOnInit() {
    this._activeRoute.params.subscribe((params: any) => {
      const genreId = params['genreId'];
      this._moviesService
        .getMoviesByGenre(genreId)
        .subscribe((data: IMovie[]) => {
          this.showSignal.set(data);
        });
    });
  }

  // findByGenre(genreId: string) {
  //       this._moviesService
  //         .getMoviesByGenre(genreId)
  //         .subscribe((data: IMovie[]) => {
  //           this.show.set(data);
  //         });
  // }
}
