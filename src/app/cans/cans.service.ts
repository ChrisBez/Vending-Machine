import { Injectable } from '@angular/core';
import { Can } from './can';
import { CANS } from './mock-cans';

@Injectable({
  providedIn: 'root'
})
export class CansService {


  private cans: Can[] = [];

  constructor() {
    this.cans = [...CANS];  
   }

  getCurrentStock(): Can[] {
    return [...this.cans];
  }

  dispenseCan(canId: number) {
    console.log("can purchased");
    this.cans.find(c => c.id === canId).quantity--;
  }

  getPriceOfCan(canId: number): number {
    return this.cans.find(c => c.id === canId).price;
  }

}
