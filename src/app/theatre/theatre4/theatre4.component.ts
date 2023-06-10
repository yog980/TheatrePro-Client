import { MovieShowServiceService } from './../../movie-show/service/movie-show-service.service';
import { Component, OnInit,SimpleChanges,Input } from '@angular/core';
import { UserServiceService } from 'src/app/admin/admin-user/user-service.service';
import { MovieShowResponse } from 'src/app/movie-show/model/movie-show-response.model';
import { SeatResponse } from 'src/app/movie-theatre/model/seat-response';

@Component({
  selector: 'app-theatre4',
  templateUrl: './theatre4.component.html',
  styleUrls: ['./theatre4.component.css']
})
export class Theatre4Component implements OnInit {
  disabled: number[] = [0,10,11,33,55,65,66,67,68,77,78,79,80,81];
  alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
  smallMargins: number[] = [];
  @Input() seats: SeatResponse[] = [...new Array(88)];
  @Input() showDetails: MovieShowResponse = {} as MovieShowResponse;
  rows: number[] = [...new Array(8)];
  seatArray: SeatResponse[][] = [[],[],[],[],[],[],[],[]];
  leftSeats: number[] = [1,12,22,34,44,56,70,82];
  rightSeats: number[] = [9,21,32,43,54,65,76,87];
  selectedSeat: SeatResponse[] = [];
  reservedSeats: number = 1;
  selectedIndex: number[] = [];
  hasSeatsSelected: boolean = false;
  backupReservedSeats: number = 1;
  bookingArr: number[] = [];

  alertType: string = '';
  message: string = '';
  hasAlert: boolean = false;

  constructor(
    private showService: MovieShowServiceService,
    private userService: UserServiceService
    ) { }

  ngOnInit(): void {
    this.showService.getReservedSeats.subscribe(data => {
      this.reservedSeats = data;
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let i = 0; i < this.seats.length;i++) {
      if (Math.floor(i/11)%2 != 0) {
        this.smallMargins.push(i);
      }
    }
    this.seatArray = [[],[],[],[],[],[],[],[]];
    for (let r = 0; r < this.rows.length; r++) {
      for(let  i = 0; i < this.seats.length; i++) {
        if (i < (r+1)*11  && i >= r*11)
        this.seatArray[r].push(this.seats[i]);
      }
    }
    this.showService.getReservedSeats.subscribe(data => {
      this.reservedSeats = data;
    })
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

  updateAlert() {
    this.hasAlert = true;
    setTimeout(() => {
      this.hasAlert = false
    },5000)
  }
}
