import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeldCashService {

  private _heldCash = 0;

  constructor() { }

  public get heldCash(): number {
    return this._heldCash;
  }

  cashPayment(purchasePrice: number) {
    this._heldCash += purchasePrice;
  }

  emptyCash() {
    this._heldCash = 0;
  }

}
