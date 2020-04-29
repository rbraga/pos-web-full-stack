import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
private API_KEY = '8074f70153c0fe68ee572b6926d04d69';


  constructor(
    private http: HttpClient
  ) { }

  private withBaseUrl(path: string) {
    return `https://api.themoviedb.org/3/${path}?api_key=${this.API_KEY}`;
  }

  getPopularMovies() {
    return this.http.get(this.withBaseUrl('movie/popular'));
  }
}
