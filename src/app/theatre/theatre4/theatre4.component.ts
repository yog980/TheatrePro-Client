import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatre4',
  templateUrl: './theatre4.component.html',
  styleUrls: ['./theatre4.component.css']
})
export class Theatre4Component implements OnInit {
  disabled: number[] = [0,10,11,33,55,65,66,67,68,77,78,79,80,81];
  alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
  smallMargins: number[] = [];
  seats: number[] = [...new Array(88)];
  rows: number[] = [...new Array(8)];
  seatArray: number[][] = [[],[],[],[],[],[],[],[]];
  leftSeats: number[] = [1,12,22,34,44,56,70,82];
  rightSeats: number[] = [9,21,32,43,54,65,76,87];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.seats.length;i++) {
      if (Math.floor(i/11)%2 != 0) {
        this.smallMargins.push(i);
      }
    }
    for (let r = 0; r < this.rows.length; r++) {
      for(let  i = 0; i < this.seats.length; i++) {
        if (i < (r+1)*11  && i >= r*11)
        this.seatArray[r].push(i);
      }
    }
  }

}
