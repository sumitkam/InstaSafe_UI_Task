import { TestBed } from '@angular/core/testing';

import { UserAPiService } from './user-api.service';

describe('UserAPiService', () => {
  let service: UserAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
