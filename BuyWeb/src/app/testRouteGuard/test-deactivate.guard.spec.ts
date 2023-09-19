import { TestBed } from '@angular/core/testing';

import { TestDeactivateGuard } from './test-deactivate.guard';

describe('TestDeactivateGuard', () => {
  let guard: TestDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
