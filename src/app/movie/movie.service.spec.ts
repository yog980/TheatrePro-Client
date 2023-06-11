import { MovieResponse } from 'src/app/movie/model/MovieResponse';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from "./movie.service"
import { TestBed } from '@angular/core/testing';

describe('MoviesService',() => {
  let service : MovieService;
  let httpController : HttpTestingController;
  let movies: MovieResponse[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MovieService);
    httpController = TestBed.inject(HttpTestingController);
  })

  it('should call getAllMovies and return list of movies',() => {
    service.getAllMovies().subscribe((res) => {
      expect(res).toEqual(movies);
    })
  })
})
