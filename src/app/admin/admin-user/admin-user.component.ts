import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserResponse } from './modal/user-response';
import { UserServiceService } from './user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  users: UserResponse[] = [];
  userAddForm: FormGroup = {} as FormGroup;
  message: string = '';
  alertType: string = '';
  hasAlert: boolean = false;

  constructor(
    private userService:UserServiceService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fetchAllUsers();
    this.userAddForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      username: [''],
      contact: [''],
      role: [''],
      password: [''],
      status: ['ACTIVE']
    });
  }

  updateAlert() {
    this.hasAlert = true;
    setTimeout(() => {
      this.hasAlert = false
    },5000)
  }

  addUser() {
     this.userService.addNewUser(this.userAddForm.value).subscribe((data) => {
      this.message = 'User Added Successfully !!!';
      this.alertType = 'success';
      this.updateAlert();
      this.modalService.dismissAll();
      this.ngOnInit();
    },error1 => {
      this.message = error1;
      this.alertType = 'danger';
      this.updateAlert();
      this.modalService.dismissAll();
      this.ngOnInit();
    })
  }

  fetchAllUsers() {
    this.userService.fetchAllUsers().subscribe((data) => {
      this.users = data;
    },error1 => {
      console.log(error1);
    })
  }

  openVerticallyCentered(content:any) {
		this.modalService.open(content, { centered: true ,size:'xl'});
	}

}
