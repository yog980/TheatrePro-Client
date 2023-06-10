import { SeatResponse } from './model/seat-response';
import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { MovieShowServiceService } from '../movie-show/service/movie-show-service.service';
import { MovieShowResponse } from '../movie-show/model/movie-show-response.model';
import { MovieTheatreServiceService } from './movie-theatre-service.service';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-theatre',
  templateUrl: './movie-theatre.component.html',
  styleUrls: ['./movie-theatre.component.css']
})
export class MovieTheatreComponent implements OnInit {

  disabled: number[] = [0,10,22,240,241,263,264,279,281,283,285,286,287,288,289,290,293,297];
  alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
  // seats: number[] = [...new Array(276)];
  seats: SeatResponse[] = [];
  leftSeats: number[] = [1];
  rightSeats: number[] = [21];

  showId: number = 0;

  checkImage: string = '../assets/check.png';


  alertType: string = '';
  message: string = '';
  hasAlert: boolean = false;


  selectedSeat: SeatResponse[] = [];
  reservedSeats: number = 1;
  selectedIndex: number[] = [];
  hasSeatsSelected: boolean = false;
  backupReservedSeats: number = 1;
  bookingArr: number[] = [];
  rows: number[] = [...new Array(11)];


  @Input() showDetails: MovieShowResponse = {} as MovieShowResponse;



  movieTheatre: MovieShowResponse = {} as MovieShowResponse;

  seatResponse: SeatResponse[] = [];

  constructor
  (
    private movieShowService: MovieShowServiceService,
    private movieTheatreService: MovieTheatreServiceService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getSelectedMovieShow();
   
    this.showId = this.route.snapshot.params['showId'];
    this.getAllSeatsByShowId(this.showId);
    this.getMovieShowByShowId(this.showId);
  }



  getSelectedMovieShow() {
    this.movieShowService.choosenShow.subscribe((data) => {
      this.movieTheatre = data;
    });
  }

  getAllSeatsByShowId(showId: number) {
    this.movieTheatreService.getSeatsByShowId(showId).subscribe((data) => {
      this.seatResponse = data;
    },error1 => {
      console.log(error1);
    })
  }

  getMovieShowByShowId(id: number) {
    this.movieShowService.getMovieShowById(id).subscribe((data) => {
      this.movieTheatre = data;
    },error1 => {
      console.log(error1);
    });
  }
}
