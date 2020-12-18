import { TestBed } from '@angular/core/testing';

import { BonjourService } from './bonjour.service';

describe('BonjourService', () => {
  let service: BonjourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonjourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
