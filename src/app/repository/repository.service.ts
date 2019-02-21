import { Injectable } from '@angular/core';
import { HeldCashService } from '../held-cash/held-cash.service';
import { CansService } from '../cans/cans.service';
import { Can } from '../interfaces/can';
import { CardPaymentsService } from '../card-payments/card-payments.service';
import { CardPayment } from '../interfaces/card-payment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private canService: CansService, private heldCashService: HeldCashService, private cardPaymentService:CardPaymentsService) { }

  getStock(): Can[] {
    return this.canService.getCurrentStock()
  }

  buyCan(canId: number, paymentType: string) {
    this.canService.dispenseCan(canId);
    
    const canCost = this.canService.getPriceOfCan(canId);

    if(paymentType === 'cash') {
      this.heldCashService.cashPayment(canCost);
    }

    if(paymentType === 'card') {

      const newPayment: CardPayment = { paymentTime: new Date(), amount: canCost };

      this.cardPaymentService.cardPayment(newPayment);
    }

  }


}
