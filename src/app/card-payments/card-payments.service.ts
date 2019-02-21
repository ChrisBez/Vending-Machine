import { Injectable } from '@angular/core';
import { CardPayment } from '../interfaces/card-payment';

@Injectable({
  providedIn: 'root'
})
export class CardPaymentsService {

  private payments: CardPayment[] = [];

  constructor() { }

  cardPayment(newPayment: CardPayment) {
    this.payments.push(newPayment);
    console.log(this.cardPaymentTotal());
  }

  paymentLog(): CardPayment[] {
    return [...this.payments];
  }

  cardPaymentTotal(): number {
    const x = this.payments.reduce((sum, current) => sum + current.amount, 0);

    console.log(x);

    return x;

  }
}
