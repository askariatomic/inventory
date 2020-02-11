import { TestBed } from '@angular/core/testing';

import { StockProductService } from './stock-product.service';

describe('StockProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockProductService = TestBed.get(StockProductService);
    expect(service).toBeTruthy();
  });
});
