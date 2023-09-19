import { TestBed } from '@angular/core/testing';

import { TestLoadGuard } from './test-load.guard';

describe('TestLoadGuard', () => {
  let guard: TestLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
