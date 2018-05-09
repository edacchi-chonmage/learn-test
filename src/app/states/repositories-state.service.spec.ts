import { TestBed, inject } from '@angular/core/testing';

import { RepositoriesStateService } from './repositories-state.service';

describe('RepositoriesStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoriesStateService]
    });
  });

  it('should be created', inject([RepositoriesStateService], (service: RepositoriesStateService) => {
    expect(service).toBeTruthy();
  }));
});
