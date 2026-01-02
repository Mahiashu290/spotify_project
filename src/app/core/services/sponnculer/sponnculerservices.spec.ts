import { TestBed } from '@angular/core/testing';

import { Sponnculerservices } from './sponnculerservices';

describe('Sponnculerservices', () => {
  let service: Sponnculerservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sponnculerservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
