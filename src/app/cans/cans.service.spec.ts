import { TestBed } from '@angular/core/testing';

import { CansService } from './cans.service';
import { CANS } from './mock-cans';
import { Can } from '../interfaces/can';

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

  it('should return the correct price for a can when getPriceOfCan is called', () => {
    const service: CansService = TestBed.get(CansService);

    const initialCans: Can[] = [
      {id: 1, flavour: 'Soda Water', price: 1.50, quantity: 5}

    ];

    service.restockCans(initialCans);

    expect(service.getPriceOfCan(1)).toEqual(1.5);
  });


  it('should decrement the quantity of a can when a purchase is made', () => {
    const service: CansService = TestBed.get(CansService);

    const initialCans: Can[] = [
      {id: 1, flavour: 'Soda Water', price: 1.50, quantity: 5},
      {id: 2, flavour: 'Lemonade', price: 1.50, quantity: 5},
      {id: 3, flavour: 'Cola', price: 1.50, quantity: 5},
      {id: 4, flavour: 'Orange Juice', price: 1.50, quantity: 5},
      {id: 5, flavour: 'Water', price: 1.50, quantity: 0},
      {id: 6, flavour: 'Diet Cola', price: 1.50, quantity: 5},
      {id: 7, flavour: 'Ginger Ale', price: 1.50, quantity: 5},
      {id: 8, flavour: 'Ginger Beer', price: 1.50, quantity: 5},
    ];

    const finalCans: Can[] = [
      {id: 1, flavour: 'Soda Water', price: 1.50, quantity: 5},
      {id: 2, flavour: 'Lemonade', price: 1.50, quantity: 4},
      {id: 3, flavour: 'Cola', price: 1.50, quantity: 5},
      {id: 4, flavour: 'Orange Juice', price: 1.50, quantity: 5},
      {id: 5, flavour: 'Water', price: 1.50, quantity: 0},
      {id: 6, flavour: 'Diet Cola', price: 1.50, quantity: 5},
      {id: 7, flavour: 'Ginger Ale', price: 1.50, quantity: 5},
      {id: 8, flavour: 'Ginger Beer', price: 1.50, quantity: 5},
    ];

    service.restockCans(initialCans);

    service.dispenseCan(2);

    expect(service.getCurrentStock()).toEqual(finalCans);

  } );

  it('should reset to CANS when restockCansWithMockData is called', () => {
    const service: CansService = TestBed.get(CansService);

    service.dispenseCan(2);
    service.dispenseCan(3);
    service.restockCansWithMockData();

    expect(service.getCurrentStock()).toEqual(CANS);
  });

});
