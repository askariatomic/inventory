import { TestBed } from '@angular/core/testing';

import { DetailBbmService } from './detail-bbm.service';

describe('DetailBbmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailBbmService = TestBed.get(DetailBbmService);
    expect(service).toBeTruthy();
  });
});
