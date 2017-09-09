import { TestBed, inject } from '@angular/core/testing';

import { CustomCompileService } from './custom-compile.service';

describe('CustomCompileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomCompileService]
    });
  });

  it('should be created', inject([CustomCompileService], (service: CustomCompileService) => {
    expect(service).toBeTruthy();
  }));
});
