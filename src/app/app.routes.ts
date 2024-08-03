import { Routes } from '@angular/router';
import { NotFoundComponent } from './@feature/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./@feature/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./@feature/movies/show-list/show-list.component').then(
        (x) => x.ShowListComponent
      ),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./@feature/movies/movie-details/movie-details.component').then(
        (x) => x.MovieDetailsComponent
      ),
  },
  {
    path: 'show-list',
    loadComponent: () =>
      import('./@feature/movies/show-list/show-list.component').then(
        (x) => x.ShowListComponent
      ),
  },
  {
    path: 'genres',
    loadComponent: () =>
      import('./@feature/movies/genres/genres.component').then(
        (x) => x.GenresComponent
      ),
  },
  {
    path: 'genres/:genreId',
    loadComponent: () =>
      import('./@feature/movies/genres/genres.component').then(
        (x) => x.GenresComponent
      ),
  },

  { path: '**', component: NotFoundComponent },
];
