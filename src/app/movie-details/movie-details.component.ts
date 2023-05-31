import { Component, OnInit } from '@angular/core';
import { MovieResponse } from '../movie/model/MovieResponse';
import { MovieService } from '../movie/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieResponse = {} as MovieResponse;
  id: number = 0;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getMovieDetails();
    this.id = this.route.snapshot.params['id'];
    this.getMovieById(this.id);
  }

  getMovieDetails() {
    this.movieService.selectedMovie.subscribe((data) => {
      this.movie = data;
    })
  }

  getMovieById(id: number) {
    this.movieService.getMovieById(id).subscribe((data) => {
      this.movie = data;
    },error1 => console.log(error1));
  }



}
