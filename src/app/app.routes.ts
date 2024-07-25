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
  //   {
  //     path: 'associate/:id',
  //     loadComponent: () =>
  //       import(
  //         './@feature/associate/associate-listing/associate-listing.component'
  //       ).then((x) => x.AssociateListingComponent),
  //   },
  { path: '**', component: NotFoundComponent },
];
