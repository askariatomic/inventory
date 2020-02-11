import { TestBed } from '@angular/core/testing';

import { TempDetailSpbService } from './temp-detail-spb.service';

describe('TempDetailSpbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempDetailSpbService = TestBed.get(TempDetailSpbService);
    expect(service).toBeTruthy();
  });
});
