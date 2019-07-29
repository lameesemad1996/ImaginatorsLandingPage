import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverEffectElementComponent } from './hover-effect-element.component';

describe('CarouselComponent', () => {
  let component: HoverEffectElementComponent;
  let fixture: ComponentFixture<HoverEffectElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverEffectElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverEffectElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
