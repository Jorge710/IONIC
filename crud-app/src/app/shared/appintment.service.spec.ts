import { TestBed } from '@angular/core/testing';

import { AppintmentService } from './appintment.service';

describe('AppintmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppintmentService = TestBed.get(AppintmentService);
    expect(service).toBeTruthy();
  });
});
