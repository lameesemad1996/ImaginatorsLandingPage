import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverEffectCardCardComponent } from './hover-effect-card.component';

describe('HoverEffectCardComponent', () => {
  let component: HoverEffectCardCardComponent;
  let fixture: ComponentFixture<HoverEffectCardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverEffectCardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverEffectCardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
