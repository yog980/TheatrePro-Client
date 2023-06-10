import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { UserServiceService } from 'src/app/admin/admin-user/user-service.service';
import { MovieShowResponse } from 'src/app/movie-show/model/movie-show-response.model';
import { MovieShowServiceService } from 'src/app/movie-show/service/movie-show-service.service';
import { SeatResponse } from 'src/app/movie-theatre/model/seat-response';

@Component({
  selector: 'app-theatre1',
  templateUrl: './theatre1.component.html',
  styleUrls: ['./theatre1.component.css']
})
export class Theatre1Component implements OnInit {

  disabled: number[] = [0,10,22,240,241,263,264,279,281,283,285,286,287,288,289,290,293,297];
  alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
  // seats: number[] = [...new Array(276)];
  leftSeats: number[] = [1];
  rightSeats: number[] = [21];

  showId: number = 0;

  checkImage: string = '../assets/check.png';

  @Input() seats: SeatResponse[] = [...new Array()];
  @Input() showDetails: MovieShowResponse = {} as MovieShowResponse;
  rows: number[] = [...new Array(11)];


  alertType: string = '';
  message: string = '';
  hasAlert: boolean = false;


  selectedSeat: SeatResponse[] = [];
  reservedSeats: number = 1;
  selectedIndex: number[] = [];
  hasSeatsSelected: boolean = false;
  backupReservedSeats: number = 1;
  bookingArr: number[] = [];

  seatResponse: SeatResponse[] = [];

  constructor
  (
    private showService: MovieShowServiceService,
    private userService: UserServiceService

    ) { }

  ngOnInit(): void {
    this.getLeftNumbering();
    this.getRightNumbering();
    this.showService.getReservedSeats.subscribe(data => {
      this.reservedSeats = data;
    })
  }

  getLeftNumbering(): void {
    for(let i = 1;i<13;i++) {
      this.leftSeats.push(23*i);
    }
  }

  getRightNumbering(): void {
    for(let i = 1;i<13;i++) {
      this.rightSeats.push(45+(23*(i-1)));
    }
  }

  updateAlert() {
    this.hasAlert = true;
    setTimeout(() => {
      this.hasAlert = false
    },5000)
  }


  selectSeat(seat:SeatResponse) {
    this.selectedSeat.push(seat);
    let index = this.seats.indexOf(seat);
    var prevSeat = this.seats[index-1];
    var nextPrevSeat = this.seats[index-2];
    for(let i = 0; i < this.reservedSeats;i++) {
      this.bookingArr.push(this.seats[index+i].seatId);
      this.selectedIndex.push(index+i);
    }
    this.backupReservedSeats = this.reservedSeats;
    this.setReservedSeats(0);
    this.hasSeatsSelected = true;
  }

  setReservedSeats(seats: number) {
    this.showService.setReservedSeat(seats);
  }

  reverseSelectedSeats() {
    this.reservedSeats = 1;
    this.selectedIndex = [];
  }

  confirmBooking() {
    var data = {
      seatIds: this.bookingArr,
      showId: this.showDetails.id
    };
    this.userService.bookSeats(data).subscribe(response => {
      this.alertType = 'success';
      this.message = 'Seats Booked successfully';
      this.updateAlert();
      window.location.reload();
    })

  }

}
