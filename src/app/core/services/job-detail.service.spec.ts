import { TestBed, inject } from '@angular/core/testing';

import { JobDetailService } from './job-detail.service';

describe('JobDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobDetailService]
    });
  });

  it('should be created', inject([JobDetailService], (service: JobDetailService) => {
    expect(service).toBeTruthy();
  }));
});
