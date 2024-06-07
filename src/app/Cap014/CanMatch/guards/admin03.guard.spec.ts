import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { admin03Guard } from './admin03.guard';

describe('admin03Guard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => admin03Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
