import { TestBed } from '@angular/core/testing';

import { DetailSoService } from './detail-so.service';

describe('DetailSoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailSoService = TestBed.get(DetailSoService);
    expect(service).toBeTruthy();
  });
});
