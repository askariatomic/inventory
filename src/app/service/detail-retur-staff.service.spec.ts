import { TestBed } from '@angular/core/testing';

import { DetailReturStaffService } from './detail-retur-staff.service';

describe('DetailReturStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailReturStaffService = TestBed.get(DetailReturStaffService);
    expect(service).toBeTruthy();
  });
});
