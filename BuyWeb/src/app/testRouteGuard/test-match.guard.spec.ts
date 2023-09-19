import { TestBed } from '@angular/core/testing';

import { TestMatchGuard } from './test-match.guard';

describe('TestMatchGuard', () => {
  let guard: TestMatchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestMatchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
