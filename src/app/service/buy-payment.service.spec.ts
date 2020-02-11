import { TestBed } from '@angular/core/testing';

import { BuyPaymentService } from './buy-payment.service';

describe('BuyPaymentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyPaymentService = TestBed.get(BuyPaymentService);
    expect(service).toBeTruthy();
  });
});
