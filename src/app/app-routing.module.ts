import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGenreComponent } from './genres/add-genre/add-genre.component';
import { GenreListComponent } from './genres/genre-list/genre-list.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MovieComponent},
  {path: 'genres', component: GenreListComponent},
  {path: 'genres/add', component: AddGenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
