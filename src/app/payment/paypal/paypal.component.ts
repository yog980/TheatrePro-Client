import { Component, OnInit, ViewChild,ElementRef,Input } from '@angular/core';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  @Input() paymentAmount: number = 13;

  constructor() { }

  ngOnInit(): void {
    console.log(window.paypal);
    window.paypal.Buttons(
      {
        style: {
          layout: 'horizontal',
        //   color:  'blue',
        //   shape: 'rect',
        //   // label: 'paypal'
        },
        createOrder:(data: any,actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: this.paymentAmount.toFixed(2).toString(),
                currencyCode: 'GBP'
              }
            }      
            ]
          })
        },
        onApprove: (data: any,actions: any) => {
          return actions.order.capture().then((details: any) => {
            console.log(details);
          });
        },
        onError: (error: any) => {
          console.log(error);
        }
      }
    ).render(this.paypalPayment.nativeElement);
  }

  @ViewChild('paypalPayment',{static:true}) paypalPayment:any = undefined;

}
