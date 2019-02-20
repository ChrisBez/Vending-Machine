import { TestBed } from '@angular/core/testing';

import { CansService } from './cans.service';
import { CANS } from './mock-cans';
import { Can } from './can';

describe('CansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CansService = TestBed.get(CansService);
    expect(service).toBeTruthy();
  });

  it('should return the mock data when getCurrentStock is called', () => {
    const service: CansService = TestBed.get(CansService);
  
    expect(CANS).toEqual(service.getCurrentStock());
  });

  it('should decrement the quantity of a can when a purchase is made', () => {
    const service: CansService = TestBed.get(CansService);

    const finalCans: Can[] = [
      {id: 1, name: "Soda Water", price: 1.50, quantity: 5},
      {id: 2, name: "Lemonade", price: 1.50, quantity: 4},
      {id: 3, name: "Cola", price: 1.50, quantity: 5},
      {id: 4, name: "Orange Juice", price: 1.50, quantity: 5},
      {id: 5, name: "Water", price: 1.50, quantity: 0},
      {id: 6, name: "Diet Cola", price: 1.50, quantity: 5},
      {id: 7, name: "Ginger Ale", price: 1.50, quantity: 5},
      {id: 8, name: "Ginger Beer", price: 1.50, quantity: 5},
    ]

    service.buyCan(2, "card");

    expect(service.getCurrentStock()).toEqual(finalCans);

  } );

});
