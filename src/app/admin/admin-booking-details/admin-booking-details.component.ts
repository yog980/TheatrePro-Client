import { BookingDetails } from './../admin-user/modal/booking-details.modal';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../admin-user/user-service.service';

@Component({
  selector: 'app-admin-booking-details',
  templateUrl: './admin-booking-details.component.html',
  styleUrls: ['./admin-booking-details.component.css']
})
export class AdminBookingDetailsComponent implements OnInit {
  bookingDetails: BookingDetails[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getAllBookingDetails();
  }

  getAllBookingDetails() {
    this.userService.fetchAllBookings().subscribe((data) => {
      this.bookingDetails = data;
    },
    error1 => console.log(error1))
  }

}
