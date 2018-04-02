import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightAdvancedComponent } from './light-advanced.component';

describe('LightAdvancedComponent', () => {
  let component: LightAdvancedComponent;
  let fixture: ComponentFixture<LightAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
