import { TestBed } from '@angular/core/testing';

import { ReturSupplierService } from './retur-supplier.service';

describe('ReturSupplierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReturSupplierService = TestBed.get(ReturSupplierService);
    expect(service).toBeTruthy();
  });
});
