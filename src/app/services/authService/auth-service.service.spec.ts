import { TestBed } from '@angular/core/testing';

import { AithServiceService } from './auth-service.service';

describe('AithServiceService', () => {
  let service: AithServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AithServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
