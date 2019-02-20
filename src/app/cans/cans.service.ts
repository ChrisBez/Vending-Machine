import { Injectable } from '@angular/core';
import { Can } from './can';
import { CANS } from './mock-cans';

@Injectable({
  providedIn: 'root'
})
export class CansService {


  private cans: Can[] = [];

  constructor() {
    Object.assign(this.cans, CANS);
   }

  getCurrentStock(): Can[] {
    //creating a new can array here so I can pass by value to the consumer
    let cans: Can[] = []

    Object.assign( cans, this.cans)

    return cans;
  }

  buyCan(selectedCan: number, paymentType: string): any {
    console.log("can purchased");
    this.cans.find(c => c.id === selectedCan).quantity--;
  }
}
