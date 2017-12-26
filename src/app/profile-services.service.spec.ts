/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfileServicesService } from './profile-services.service';

describe('ProfileServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileServicesService]
    });
  });

  it('should ...', inject([ProfileServicesService], (service: ProfileServicesService) => {
    expect(service).toBeTruthy();
  }));
});
