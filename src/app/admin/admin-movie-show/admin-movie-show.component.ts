import { MovieShowResponse } from 'src/app/movie-show/model/movie-show-response.model';
import { MovieShowServiceService } from './../../movie-show/service/movie-show-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-movie-show',
  templateUrl: './admin-movie-show.component.html',
  styleUrls: ['./admin-movie-show.component.css']
})
export class AdminMovieShowComponent implements OnInit {

  shows: MovieShowResponse[] = [];
  id: number = 0;

  constructor(
    private showService: MovieShowServiceService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.getAllMovieShowsById(this.id);
  }

  getAllMovieShowsById(movieId: number) {
    this.showService.getMovieShowsByMovieId(movieId).subscribe((data) => {
      this.shows = data;
    },error1 => {
      console.log(error1);
    })
  }





}
