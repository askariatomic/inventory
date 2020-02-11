import { TestBed } from '@angular/core/testing';

import { DetailReturSupplierService } from './detail-retur-supplier.service';

describe('DetailReturSupplierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailReturSupplierService = TestBed.get(DetailReturSupplierService);
    expect(service).toBeTruthy();
  });
});
