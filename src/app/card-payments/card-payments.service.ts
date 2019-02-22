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
  }

  paymentLog(): CardPayment[] {
    return JSON.parse(JSON.stringify(this.payments));
  }

  cardPaymentTotal(): number {
    return this.payments.reduce((sum, current) => sum + current.amount, 0);
  }

  resetCardPayments() {
    this.payments = [];
  }
}
