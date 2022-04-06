import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Genre } from './genre';
import { genreList } from './genre-list';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  apiUrl: string;
  genresUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.genresUrl = this.apiUrl + "genre/";
   }

  getAll(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
  }

  create(genre: Genre) {
    return this.http.post(this.genresUrl, genre);
  }
}
