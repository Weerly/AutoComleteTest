import { TestBed } from '@angular/core/testing';

import { APIMatchingService } from './apimatching.service';

describe('APIMatchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIMatchingService = TestBed.get(APIMatchingService);
    expect(service).toBeTruthy();
  });
});
