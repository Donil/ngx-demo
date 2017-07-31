import { TestBed, inject } from '@angular/core/testing';

import { CanDiactivateGuardService } from './can-diactivate-guard.service';

describe('CanDiactivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDiactivateGuardService]
    });
  });

  it('should be created', inject([CanDiactivateGuardService], (service: CanDiactivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
