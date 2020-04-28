import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule, Route } from '@angular/router';

const moviesRoutes: Route[] = [
  { 
    path: 'movies', 
    component: MoviesListComponent,
    children: [
      {
        path: ':id',
        component: MovieDetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [MovieItemComponent, MovieDetailComponent, MoviesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [ RouterModule ]
})
export class MovieModule { }
