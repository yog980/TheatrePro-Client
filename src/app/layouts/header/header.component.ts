import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  closeResult: string = '';
  isAuthenticated: boolean = false;

  @Output() adminEvent = new EventEmitter<boolean>();
  hasAdminRole(isAdmin: boolean) {
    this.adminEvent.emit(isAdmin);
  }

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

  toggleAuthenticate() {
    this.isAuthenticated = !this.isAuthenticated;
    this.hasAdminRole(true);
  }



}
