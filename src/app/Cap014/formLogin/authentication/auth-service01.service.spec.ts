import { TestBed } from '@angular/core/testing';

import { AuthService01Service } from './auth-service01.service';

describe('AuthService01Service', () => {
  let service: AuthService01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
