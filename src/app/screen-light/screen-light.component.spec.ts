import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLightComponent } from './screen-light.component';

describe('ScreenLightComponent', () => {
  let component: ScreenLightComponent;
  let fixture: ComponentFixture<ScreenLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
