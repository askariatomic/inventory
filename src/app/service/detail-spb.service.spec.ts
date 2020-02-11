import { TestBed } from '@angular/core/testing';

import { DetailSpbService } from './detail-spb.service';

describe('DetailSpbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailSpbService = TestBed.get(DetailSpbService);
    expect(service).toBeTruthy();
  });
});
