import { TestBed } from '@angular/core/testing';

import { BuyTransactionService } from './buy-transaction.service';

describe('BuyTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyTransactionService = TestBed.get(BuyTransactionService);
    expect(service).toBeTruthy();
  });
});
