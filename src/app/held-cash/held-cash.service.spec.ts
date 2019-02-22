import { TestBed } from '@angular/core/testing';

import { HeldCashService } from './held-cash.service';

describe('HeldCashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeldCashService = TestBed.get(HeldCashService);
    expect(service).toBeTruthy();
  });

  it('should be hold $0 on creation', () => {
    const service: HeldCashService = TestBed.get(HeldCashService);
    expect(service.heldCash).toEqual(0);
  });

  it('should return the total of all cash payment made', () => {
    const service: HeldCashService = TestBed.get(HeldCashService);

    service.cashPayment(1);
    service.cashPayment(2);

    expect(service.heldCash).toEqual(3);
  });

  it('should be hold $0 after emptyCash called', () => {
    const service: HeldCashService = TestBed.get(HeldCashService);

    service.cashPayment(1);
    service.cashPayment(1.1);

    service.emptyCash();

    expect(service.heldCash).toEqual(0);
  });

});
