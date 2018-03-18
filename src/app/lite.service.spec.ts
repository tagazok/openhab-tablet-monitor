import { TestBed, inject } from '@angular/core/testing';

import { LiteServiceService } from './lite-service.service';

describe('LiteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiteServiceService]
    });
  });

  it('should be created', inject([LiteServiceService], (service: LiteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
