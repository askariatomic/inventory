import { TestBed } from '@angular/core/testing';

import { SalesPaymentService } from './sales-payment.service';

describe('SalesPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesPaymentService = TestBed.get(SalesPaymentService);
    expect(service).toBeTruthy();
  });
});
