import { TestBed } from '@angular/core/testing';

import { BbmService } from './bbm.service';

describe('BbmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BbmService = TestBed.get(BbmService);
    expect(service).toBeTruthy();
  });
});
