import { MovieShowResponse } from './model/movie-show-response.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieShowServiceService } from './service/movie-show-service.service';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.css']
})
export class MovieShowComponent implements OnInit {

  id : number = 0;
  showResponse: MovieShowResponse[] = [];
  constructor(private route: ActivatedRoute,private showService:MovieShowServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.findAllMovieShowByMovieId(this.id);
  }

  findAllMovieShowByMovieId(id: number) {
    this.showService.getMovieShowsByMovieId(id).subscribe((data) => {
      this.showResponse = data;
    },error1 => console.log(error1));
  }

  activateShow(show: MovieShowResponse) {
    this.showService.activateShow(show);
  }

}
