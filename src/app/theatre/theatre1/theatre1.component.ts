import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatre1',
  templateUrl: './theatre1.component.html',
  styleUrls: ['./theatre1.component.css']
})
export class Theatre1Component implements OnInit {
  disabled: number[] = [0,10,22,217,218,219,240,241,242,255,257,259,261,262,263,264,264,265,266,267,268,271,272,275];
  alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
  seats: number[] = [...new Array(276)]; ;
  constructor() { }

  ngOnInit(): void {
  }

}
