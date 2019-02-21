import { TestBed } from '@angular/core/testing';

import { CardPaymentsService } from './card-payments.service';

describe('CardPaymentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardPaymentsService = TestBed.get(CardPaymentsService);
    expect(service).toBeTruthy();
  });
});
