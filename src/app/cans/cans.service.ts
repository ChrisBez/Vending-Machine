import { Injectable } from '@angular/core';
import { Can } from '../interfaces/can';
import { CANS } from './mock-cans';

@Injectable({
  providedIn: 'root'
})
export class CansService {


  private cans: Can[] = [];

  constructor() {
    this.cans = JSON.parse(JSON.stringify(CANS));
   }

  getCurrentStock(): Can[] {
    return JSON.parse(JSON.stringify(this.cans));
  }

  dispenseCan(canId: number) {
    this.cans.find(c => c.id === canId).quantity--;
  }

  getPriceOfCan(canId: number): number {
    return this.cans.find(c => c.id === canId).price;
  }

  restockCans(newStock: Can[]) {
    this.cans = newStock;
  }

  restockCansWithMockData() {
    this.cans = JSON.parse(JSON.stringify(CANS));
  }

}
