import { TestBed } from '@angular/core/testing';

import { SalesTransactionService } from './sales-transaction.service';

describe('SalesTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesTransactionService = TestBed.get(SalesTransactionService);
    expect(service).toBeTruthy();
  });
});
