import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { MovieResponse } from './model/MovieResponse';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  private _movie: BehaviorSubject<MovieResponse> = new BehaviorSubject({} as MovieResponse);
  selectedMovie: Observable<MovieResponse> = this._movie.asObservable();

  movieDetails(details: MovieResponse) {
    this._movie.next(details);
  }


  getAllMovies(): Observable<MovieResponse[]> {
    return this.http.get<MovieResponse[]>(`${environment.apiUrl}/api/movie/all`);
  }

  getAllTrendingMovies(): Observable<MovieResponse[]> {
    return this.http.get<MovieResponse[]>(`${environment.apiUrl}/api/movie/movies/trending`);
  }
}
