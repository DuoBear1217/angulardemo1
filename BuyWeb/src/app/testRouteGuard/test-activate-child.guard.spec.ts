import { TestBed } from '@angular/core/testing';

import { TestActivateChildGuard } from './test-activate-child.guard';

describe('TestActivateChildGuard', () => {
  let guard: TestActivateChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestActivateChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
