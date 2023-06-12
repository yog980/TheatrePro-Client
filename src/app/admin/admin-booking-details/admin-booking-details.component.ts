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
  message: string = '';
  alertType: string = '';
  hasAlert: boolean = false;

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

  deleteBookingDetails(bookingId: number) {
    if(confirm("Are you sure to delete booking Details ?")) {
      this.userService.deleteBooking(bookingId).subscribe((data) => {
        this.alertType = 'success';
        this.getAllBookingDetails();
       this.updateAlert();
        this.message = 'Booking Details deleted successfully !!!'
      },error1 => {
        console.error(error1);
      });
    }
  }


  updateAlert() {
    this.hasAlert = true;
    setTimeout(() => {
      this.hasAlert = false
    },5000)
  }

}
