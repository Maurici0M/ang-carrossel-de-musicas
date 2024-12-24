import { TestBed } from '@angular/core/testing';

import { ScreenSizeDetectorService } from '../services/screen-size-detector.service';

describe('ScreenSizeDetectorService', () => {
  let service: ScreenSizeDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenSizeDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
