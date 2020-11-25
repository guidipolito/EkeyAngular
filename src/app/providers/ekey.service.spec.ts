import { TestBed } from '@angular/core/testing';

import { EkeyService } from './ekey.service';

describe('EkeyService', () => {
  let service: EkeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
