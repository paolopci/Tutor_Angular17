import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { auth01Guard } from './auth01.guard';

describe('auth01Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => auth01Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
