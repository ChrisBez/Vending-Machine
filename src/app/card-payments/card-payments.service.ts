import { Injectable } from '@angular/core';
import { cardPayment } from '../interfaces/card-payment';

@Injectable({
  providedIn: 'root'
})
export class CardPaymentsService {

  private payments: cardPayment[] = [];

  constructor() { }

  cardPayment(newPayment: cardPayment) {
    this.payments.push(newPayment);
    console.log(this.cardPaymentTotal());
  }

  paymentLog(): cardPayment[] {
    return [...this.payments];
  }

  cardPaymentTotal(): number {
    const x = this.payments.reduce((sum, current) => sum + current.amount, 0);

    console.log(x);

    return x;

  }
}
