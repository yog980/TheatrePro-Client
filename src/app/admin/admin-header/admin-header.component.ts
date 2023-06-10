import { MovieResponse } from './../../movie/model/MovieResponse';
import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { MovieService } from 'src/app/movie/movie.service';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  @Output() authenticationEvent = new EventEmitter<boolean>();

  displaySidebar: Boolean = true;

  constructor(private movieService: MovieService) { }

  active = 1;

  ngOnInit() {
  }


  setDisplayBar() {
    this.displaySidebar = !this.displaySidebar;
  }


  logout() {
    console.log("Inside logout");
    this.authenticationEvent.emit(false);
  }




}
