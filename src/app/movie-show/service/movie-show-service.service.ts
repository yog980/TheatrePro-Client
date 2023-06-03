import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieShowResponse } from '../model/movie-show-response.model';

@Injectable({
  providedIn: 'root'
})
export class MovieShowServiceService {

  constructor(private http: HttpClient) { }

  private _show: BehaviorSubject<MovieShowResponse> = new BehaviorSubject({} as MovieShowResponse);
  choosenShow: Observable<MovieShowResponse> = this._show.asObservable();

  activateShow(selectedShow: MovieShowResponse) {
    this._show.next(selectedShow);
  }

  getMovieShowsByMovieId(movieId: number): Observable<MovieShowResponse[]> {
    return this.http.get<MovieShowResponse[]>(`${environment.apiUrl}/api/movie/${movieId}/movie-show`);
  }

  getMovieShowById(id: number): Observable<MovieShowResponse> {
    return this.http.get<MovieShowResponse>(`${environment.apiUrl}/api/movie/${id}/show`);
  }
}
