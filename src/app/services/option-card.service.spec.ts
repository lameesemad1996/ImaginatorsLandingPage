import { TestBed } from '@angular/core/testing';

import { OptionCardService } from './option-card.service';

describe('OptionCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptionCardService = TestBed.get(OptionCardService);
    expect(service).toBeTruthy();
  });
});
