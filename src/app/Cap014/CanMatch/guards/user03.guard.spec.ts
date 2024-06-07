import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { user03Guard } from './user03.guard';

describe('user03Guard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => user03Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
