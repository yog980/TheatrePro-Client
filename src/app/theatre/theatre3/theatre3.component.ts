import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import { UserServiceService } from 'src/app/admin/admin-user/user-service.service';
import { MovieShowResponse } from 'src/app/movie-show/model/movie-show-response.model';
import { MovieShowServiceService } from 'src/app/movie-show/service/movie-show-service.service';
import { SeatResponse } from 'src/app/movie-theatre/model/seat-response';

@Component({
  selector: 'app-theatre3',
  templateUrl: './theatre3.component.html',
  styleUrls: ['./theatre3.component.css']
})
export class Theatre3Component implements OnInit {
  rows: number[] = [1,2,3,4,5,6,7,8];
  disabled: number[] = [0,1,2,20,21,22,23,24,44,45,46,47,67,68,69,91,92,114];
  alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
  @Input() seats: SeatResponse[] = [...new Array(184)];
  @Input() showDetails: MovieShowResponse = {} as MovieShowResponse;
  seatArrays: SeatResponse[][] = [[],[],[],[],[],[],[],[]];
  leftSeats: number[] = [3,25,48,70,93,115,138,161];
  rightSeats: number[] = [19,43,66,90,113,137,160,183];

  seatArray: SeatResponse[][] = [[],[],[],[],[],[],[],[]];
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
    for (let r = 0; r < this.rows.length; r++) {
      for(let  i = 0; i < this.seats.length; i++) {
        if (i < (r+1)*23  && i >= r*23)
        this.seatArrays[r].push(this.seats[i]);
      }
    }
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
