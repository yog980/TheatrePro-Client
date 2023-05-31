import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { MovieResponse } from 'src/app/movie/model/MovieResponse';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  trendingMovies: MovieResponse[] = [];

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getAllTreadingMovies();
  }

	images = [
  `../../assets/banner1.jpg`,
  `../../assets/banner2.jpg`,
  `../../assets/banner3.jpg`,
  `../../assets/banner4.jpg`,
];

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

  // using movie service
  getAllTreadingMovies() {
    this.movieService.getAllTrendingMovies().subscribe((data) => {
      this.trendingMovies = data;
    },error1 => {
      console.log(error1);
    })
  }
}
