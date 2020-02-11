import { TestBed } from '@angular/core/testing';

import { ReceivableService } from './receivable.service';

describe('ReceivableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceivableService = TestBed.get(ReceivableService);
    expect(service).toBeTruthy();
  });
});
