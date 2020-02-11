import { TestBed } from '@angular/core/testing';

import { DetailTransferService } from './detail-transfer.service';

describe('DetailTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailTransferService = TestBed.get(DetailTransferService);
    expect(service).toBeTruthy();
  });
});
