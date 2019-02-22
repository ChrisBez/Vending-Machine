import { CardPayment } from './../interfaces/card-payment';
import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './repository.service';
import { CansService } from '../cans/cans.service';
import { CardPaymentsService } from '../card-payments/card-payments.service';
import { HeldCashService } from '../held-cash/held-cash.service';
import { Can } from '../interfaces/can';

describe('RepositoryService', () => {

  let canService: CansService;
  let cardService: CardPaymentsService;
  let cashService: HeldCashService;

  let serviceUnderTest: RepositoryService;

  beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [CansService, CardPaymentsService, HeldCashService]
  });
  canService = TestBed.get(CansService);
  cardService = TestBed.get(CardPaymentsService);
  cashService = TestBed.get(HeldCashService);

  serviceUnderTest = TestBed.get(RepositoryService);

  });


  it('should be created', () => {
    expect(serviceUnderTest).toBeTruthy();
  });

  it('should pass through stock from cans service', () => {

    const expectedCans: Can[] = [
      {id: 1, flavour: 'TestOne', price: .90, quantity: 5},
      {id: 2, flavour: 'TestTwo', price: 1.50, quantity: 5}
    ];
    spyOn(canService, 'getCurrentStock').and.returnValue(expectedCans);

    expect(serviceUnderTest.getStock()).toEqual(expectedCans);
  });

  it('should get a can and add to cash when cash payment is made ', () => {

    canService.restockCans([{id: 1, flavour: 'TestOne', price: 3, quantity: 5}]);
    spyOn(canService, 'dispenseCan').and.callThrough();
    spyOn(cashService, 'cashPayment').and.callThrough();

    serviceUnderTest.buyCan(1, 'cash');

    expect(canService.dispenseCan).toHaveBeenCalledWith(1);
    expect(cashService.cashPayment).toHaveBeenCalledWith(3);
  });

  it('should get a can and log a card payment when card payment is made ', () => {

    jasmine.clock().mockDate(new Date(2010, 1, 1));
    canService.restockCans([{id: 1, flavour: 'TestOne', price: 3, quantity: 5}]);
    spyOn(canService, 'dispenseCan').and.callThrough();
    spyOn(cardService, 'cardPayment').and.callThrough();

    serviceUnderTest.buyCan(1, 'card');

    expect(canService.dispenseCan).toHaveBeenCalledWith(1);
    expect(cardService.cardPayment).toHaveBeenCalledWith({paymentTime: new Date(2010, 1, 1), amount: 3 });
  });

  it('should pass through card history from card service', () => {

    const expectedLog: CardPayment[] = [{paymentTime: new Date(2010, 1, 1), amount: 3}];
    canService.restockCans([{id: 1, flavour: 'TestOne', price: 3, quantity: 5}]);
    spyOn(cardService, 'paymentLog').and.callThrough();

    serviceUnderTest.buyCan(1, 'card');

    expect(serviceUnderTest.getCardPaymentLog().toString()).toEqual(expectedLog.toString());
  });

  it('should pass through current cash from cash service', () => {

    canService.restockCans([{id: 1, flavour: 'TestOne', price: 3, quantity: 5}]);
    spyOn(cashService, 'cashPayment').and.callThrough();

    serviceUnderTest.buyCan(1, 'cash');

    expect(serviceUnderTest.getHeldCash()).toEqual(3);
  });

  it('should call all restock functions in services when restock called', () => {
    spyOn(cardService, 'resetCardPayments').and.callThrough();
    spyOn(cashService, 'emptyCash').and.callThrough();
    spyOn(canService, 'restockCansWithMockData').and.callThrough();

    serviceUnderTest.restock();

    expect(cardService.resetCardPayments).toHaveBeenCalled();
    expect(cashService.emptyCash).toHaveBeenCalled();
    expect(canService.restockCansWithMockData).toHaveBeenCalled();
  });

});
