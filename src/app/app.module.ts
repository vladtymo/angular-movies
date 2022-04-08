import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GenreListComponent } from './genres/genre-list/genre-list.component';
import { AddGenreComponent } from './genres/add-genre/add-genre.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { GenreFormComponent } from './genres/genre-form/genre-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './account/login/login.component';
import { AuthViewComponent } from './account/auth-view/auth-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    HomeComponent,
    GenreListComponent,
    AddGenreComponent,
    EditGenreComponent,
    GenreFormComponent,
    LoginComponent,
    AuthViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
