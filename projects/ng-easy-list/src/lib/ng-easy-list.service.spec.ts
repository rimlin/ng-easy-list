import { TestBed } from '@angular/core/testing';

import { NgEasyListService } from './ng-easy-list.service';

describe('NgEasyListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgEasyListService = TestBed.get(NgEasyListService);
    expect(service).toBeTruthy();
  });
});
