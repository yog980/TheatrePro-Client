import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  closeResult: string = '';


  constructor(private modalService: NgbModal) {}

	openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true ,size:'xl'});
	}

  openNextModel(content:any) {
    this.modalService.dismissAll();
    this.openVerticallyCentered(content);
  }

  ngOnInit(): void {
  }



}
