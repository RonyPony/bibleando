/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BiblesService } from './bibles.service';

describe('Service: Bibles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiblesService]
    });
  });

  it('should ...', inject([BiblesService], (service: BiblesService) => {
    expect(service).toBeTruthy();
  }));
});
