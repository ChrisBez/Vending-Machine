import { Injectable } from '@angular/core';
import { Can } from './can';
import { CANS } from './mock-cans';

@Injectable({
  providedIn: 'root'
})
export class CansService {

  private cans: Can[] = [];

  constructor() {
    this.cans = CANS;
   }
}
