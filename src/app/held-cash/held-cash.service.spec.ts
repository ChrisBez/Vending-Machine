import { TestBed } from '@angular/core/testing';

import { HeldCashService } from './held-cash.service';

describe('HeldCashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeldCashService = TestBed.get(HeldCashService);
    expect(service).toBeTruthy();
  });
});
