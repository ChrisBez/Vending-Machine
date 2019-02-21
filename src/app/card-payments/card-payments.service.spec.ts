import { TestBed } from '@angular/core/testing';

import { CardPaymentsService } from './card-payments.service';
import { cardPayment } from '../interfaces/card-payment';

describe('CardPaymentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardPaymentsService = TestBed.get(CardPaymentsService);
    expect(service).toBeTruthy();
  });

  it('should store and retrieve the correct payment history', () => {
    const expectedOutput: cardPayment[] = [
      { paymentTime: new Date("2010-01-01"), amount: 1 },
      { paymentTime: new Date("2011-01-01"), amount: 2 },
      { paymentTime: new Date("2012-01-01"), amount: 3 }
    ]
    const service: CardPaymentsService = TestBed.get(CardPaymentsService);
    
    service.cardPayment({ paymentTime: new Date("2010-01-01"), amount: 1 });
    service.cardPayment({ paymentTime: new Date("2011-01-01"), amount: 2 });
    service.cardPayment({ paymentTime: new Date("2012-01-01"), amount: 3 });
    
    expect(service.paymentLog()).toEqual(expectedOutput);
  });

  it('should return the correct sum of amounts in history', () => {
    const service: CardPaymentsService = TestBed.get(CardPaymentsService);
    
    service.cardPayment({ paymentTime: new Date("2010-01-01"), amount: 1 });
    service.cardPayment({ paymentTime: new Date("2011-01-01"), amount: 1.5 });
    service.cardPayment({ paymentTime: new Date("2012-01-01"), amount: 2.5 });

    expect(service.cardPaymentTotal()).toEqual(5);
  });

});
