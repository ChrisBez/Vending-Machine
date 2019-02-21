import { Injectable } from '@angular/core';
import { HeldCashService } from '../held-cash/held-cash.service';
import { CansService } from '../cans/cans.service';
import { Can } from '../interfaces/can';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private canService: CansService, private heldCashService: HeldCashService) { }

  getStock(): Can[] {
    return this.canService.getCurrentStock()
  }

  buyCan(canId: number, paymentType: string) {
    this.canService.dispenseCan(canId);
    
    const canCost = this.canService.getPriceOfCan(canId);

    if(paymentType === 'cash') {
      this.heldCashService.cashPayment(canCost);
    }

  }


}
