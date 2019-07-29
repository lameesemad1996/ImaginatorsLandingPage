import { TestBed } from '@angular/core/testing';

import { HoverEffectCardCardService } from './hover-effect-card-service';

describe('HoverEffectCardCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoverEffectCardCardService = TestBed.get(HoverEffectCardCardService);
    expect(service).toBeTruthy();
  });
});
