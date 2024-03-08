import { TestBed } from '@angular/core/testing';

import { UploadBoxService } from './upload-box.service';

describe('UploadBoxService', () => {
  let service: UploadBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
