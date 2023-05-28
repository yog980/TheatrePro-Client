import { Component, OnInit } from '@angular/core';
import { MovieShowServiceService } from '../movie-show/service/movie-show-service.service';
import { MovieShowResponse } from '../movie-show/model/movie-show-response.model';

@Component({
  selector: 'app-movie-theatre',
  templateUrl: './movie-theatre.component.html',
  styleUrls: ['./movie-theatre.component.css']
})
export class MovieTheatreComponent implements OnInit {

  disabled: number[] = [0,10,22,217,218,219,240,241,242,255,257,259,261,262,263,264,264,265,266,267,268,271,272,275];
  alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
  seats: number[] = [...new Array(276)]; ;

  movieTheatre: MovieShowResponse = {} as MovieShowResponse;

  constructor(private movieShowService: MovieShowServiceService) { }

  ngOnInit(): void {
    this.getSelectedMovieShow();
  }

  getSelectedMovieShow() {
    this.movieShowService.choosenShow.subscribe((data) => {
      this.movieTheatre = data;
    });
  }




}
