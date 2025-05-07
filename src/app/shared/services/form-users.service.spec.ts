import { TestBed } from '@angular/core/testing';

import { FormUsersService } from './form-users.service';

describe('FormUsersService', () => {
  let service: FormUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
