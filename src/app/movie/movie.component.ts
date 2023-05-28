import { Component, OnInit,Input } from '@angular/core';
import { MovieResponse } from './model/MovieResponse';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: MovieResponse[] = [];

  choosenMovie: MovieResponse = {} as MovieResponse;


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchAllMovies();
  }

  fetchAllMovies() {
    this.movieService.getAllMovies().subscribe((data) => {
      this.movies = data;
    })
  }

  movieDetails(movie: MovieResponse) {
    this.movieService.movieDetails(movie);
  }

}
