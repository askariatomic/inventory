import { TestBed } from '@angular/core/testing';

import { DetailDoService } from './detail-do.service';

describe('DetailDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailDoService = TestBed.get(DetailDoService);
    expect(service).toBeTruthy();
  });
});
