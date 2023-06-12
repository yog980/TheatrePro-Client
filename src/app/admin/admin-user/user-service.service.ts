import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from './modal/user-response';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BookingDetails } from './modal/booking-details.modal';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  fetchAllUsers():Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${environment.apiUrl}/api/users`);
  }

  addNewUser(data: any):Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/users/create-user`,data);
  }

  fetchAllBookings():Observable<BookingDetails[]> {
    return this.http.get<BookingDetails[]>(`${environment.apiUrl}/api/movie/booking-details/all`);
  }

  bookSeats(data: any):Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/movie/book-seats-multiple`,data);
  }

  deleteBooking(bookingId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/movie/${bookingId}/delete-booking`,null);
  }
}
