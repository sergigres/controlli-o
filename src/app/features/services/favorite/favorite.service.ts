import { Injectable } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';

@Injectable({ providedIn: 'root' })
export class FavoriteService {

  constructor() {}

  public favorites: Movie[] = [];

  add(movie: Movie) {
    const found = this.favorites.find(m => m.imdbID === movie.imdbID);
    if (!found) {
      this.favorites.push(movie);
    }
  }

  remove(movie: Movie) {
    this.favorites = this.favorites.filter(m => m.imdbID !== movie.imdbID);
  }

  findSaved(movies: Movie[]): Movie[] {
    for(const f of this.favorites) {
      for (const m of movies) {
        if (f.imdbID === m.imdbID) {
          m.saved = true;
        }
      }
    }

    return movies;
  }

}