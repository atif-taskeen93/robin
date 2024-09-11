import { TestBed } from '@angular/core/testing';

import { HandlePublicNavigationService } from './handle-public-navigation.service';

describe('HandlePublicNavigationService', () => {
  let service: HandlePublicNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlePublicNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
