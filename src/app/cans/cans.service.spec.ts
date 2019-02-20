import { TestBed } from '@angular/core/testing';

import { CansService } from './cans.service';

describe('CansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CansService = TestBed.get(CansService);
    expect(service).toBeTruthy();
  });
});
