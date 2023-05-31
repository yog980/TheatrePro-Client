import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeatResponse } from './model/seat-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatreServiceService {

  constructor(private http:HttpClient) { }

  getSeatsByShowId(showId: number): Observable<SeatResponse[]> {
    return this.http.get<SeatResponse[]>(`${environment.apiUrl}/api/movie/movie-show/${showId}/seats`)
  }
}
