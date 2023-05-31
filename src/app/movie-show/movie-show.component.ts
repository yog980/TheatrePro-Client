import { MovieShowResponse } from './model/movie-show-response.model';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieShowServiceService } from './service/movie-show-service.service';
import { ModalDismissReasons, NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.css']
})
export class MovieShowComponent implements OnInit {

  id : number = 0;
  showResponse: MovieShowResponse[] = [];
  @Input() choosenShow: MovieShowResponse = {} as MovieShowResponse;
  closeResult = '';
  modalRef: NgbModalRef = {} as NgbModalRef;
  seatSelection: number[] = [1,2,3,4,5,6,7,8];
  reservedSeats: number = 1;

  constructor(
    private route: ActivatedRoute,
    private showService:MovieShowServiceService,
    private modalService: NgbModal,
    ) { }

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
    this.modalRef.close();
    this.showService.activateShow(show);
  }

  setChoosenShow(show: MovieShowResponse) {
    this.choosenShow = show;
  }


	open(content: any,data: any) {
    this.choosenShow = data;
		this.modalRef = this.modalService.open(content,{size:'xl'});
    this.modalRef.componentInstance.choosenShow = this.choosenShow;
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  setReservedSeats(seats: number) {
    this.reservedSeats = seats;
    console.log(this.reservedSeats);
  }


}
