/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfosectionService } from './infosection.service';

describe('Service: Infosection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfosectionService]
    });
  });

  it('should ...', inject([InfosectionService], (service: InfosectionService) => {
    expect(service).toBeTruthy();
  }));
});
