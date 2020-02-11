import { TestBed } from '@angular/core/testing';

import { TempDetailSoService } from './temp-detail-so.service';

describe('TempDetailSoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempDetailSoService = TestBed.get(TempDetailSoService);
    expect(service).toBeTruthy();
  });
});
