import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
		`
			.dark-modal .modal-content {
				background-color: #292b2c;
				color: white;
			}
			.dark-modal .close {
				color: white;
			}
			.light-blue-backdrop {
				background-color: #5cb3fd;
			}
		`,
	],
})
export class LoginComponent {

  closeResult: string = '';

	constructor(private modalService: NgbModal) {}

	openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true });
	}
}
