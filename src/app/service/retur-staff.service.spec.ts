import { TestBed } from '@angular/core/testing';

import { ReturStaffService } from './retur-staff.service';

describe('ReturStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReturStaffService = TestBed.get(ReturStaffService);
    expect(service).toBeTruthy();
  });
});
