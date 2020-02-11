import { TestBed } from '@angular/core/testing';

import { TempDetailTransferService } from './temp-detail-transfer.service';

describe('TempDetailTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempDetailTransferService = TestBed.get(TempDetailTransferService);
    expect(service).toBeTruthy();
  });
});
