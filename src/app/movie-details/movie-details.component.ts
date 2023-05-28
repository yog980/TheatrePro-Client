import { Component, OnInit } from '@angular/core';
import { MovieResponse } from '../movie/model/MovieResponse';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieResponse = {} as MovieResponse;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.movieService.selectedMovie.subscribe((data) => {
      this.movie = data;
    })
  }

}
