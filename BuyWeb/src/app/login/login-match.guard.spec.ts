import { TestBed } from '@angular/core/testing';

import { LoginMatchGuard } from './login-match.guard';

describe('LoginMatchGuard', () => {
  let guard: LoginMatchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginMatchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
