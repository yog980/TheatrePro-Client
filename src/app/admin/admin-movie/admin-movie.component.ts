import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieResponse } from 'src/app/movie/model/MovieResponse';
import { MovieService } from 'src/app/movie/movie.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.css']
})
export class AdminMovieComponent implements OnInit {
  movieAddForm: FormGroup = {} as FormGroup;
  message: string = '';
  alertType: string = '';
  hasAlert: boolean = false;

  movies: MovieResponse[] = [];
  constructor(
    private movieService: MovieService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
    ) { }


  ngOnInit(): void {
    this.getAllMovies();
    this.movieAddForm = this.formBuilder.group({
      title: [''],
      image:[''],
      description:[''],
      releaseDate:[''],
      duration:['']
    });
  }

  updateAlert() {
    this.hasAlert = true;
    setTimeout(() => {
      this.hasAlert = false
    },5000)
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    this.movieAddForm.get('image')?.setValue(file);
  }

  submitAddForm() {
    var formData: any = new FormData();
    formData.append('title',this.movieAddForm.get('title')?.value);
    formData.append('image',this.movieAddForm.get('image')?.value);
    formData.append('description',this.movieAddForm.get('description')?.value);
    formData.append('releaseDate',this.movieAddForm.get('releaseDate')?.value);
    formData.append('duration',this.movieAddForm.get('duration')?.value);
    this.movieService.addNewMovie(formData).subscribe((data) => {
      this.alertType = 'success';
      this.message = 'Movie added successfully';
      this.updateAlert();
      this.getAllMovies();
      this.modalService.dismissAll();
      this.ngOnInit();
    },error => {
      console.log(error);
      this.alertType = 'danger';
      this.message = error;
      this.updateAlert();
    });
  }

  getAllMovies() {
    this.movieService.getAllMovies().subscribe((data) => {
      this.movies = data;
    },error1 => {
      console.log(error1);
    })
  }

  openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true ,size:'xl'});
	}

  openNextModel(content:any) {
    this.modalService.dismissAll();
    this.openVerticallyCentered(content);
  }

}
