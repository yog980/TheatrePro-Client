import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatre3',
  templateUrl: './theatre3.component.html',
  styleUrls: ['./theatre3.component.css']
})
export class Theatre3Component implements OnInit {
  rows: number[] = [1,2,3,4,5,6,7,8];
  disabled: number[] = [0,1,2,20,21,22,23,24,44,45,46,47,67,68,69,91,92,114];
  alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
  seats: number[] = [...new Array(184)];
  seatArrays: number[][] = [
    [],[],[],[],[],[],[],[]];
    leftSeats: number[] = [3,25,48,70,93,115,138,161];
    rightSeats: number[] = [19,43,66,90,113,137,160,183];



  constructor() { }

  ngOnInit(): void {
    for (let r = 0; r < this.rows.length; r++) {
      for(let  i = 0; i < this.seats.length; i++) {
        if (i < (r+1)*23  && i >= r*23)
        this.seatArrays[r].push(i);
      }
    }
    console.log(this.seatArrays);
  }

}
