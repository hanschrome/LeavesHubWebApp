import { TestBed } from '@angular/core/testing';

import { RestForestRepositoryService } from './rest-forest-repository.service';

describe('RestForestRepositoryService', () => {
  let service: RestForestRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestForestRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
