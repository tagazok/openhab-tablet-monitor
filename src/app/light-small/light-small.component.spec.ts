import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSmallComponent } from './light-small.component';

describe('LightSmallComponent', () => {
  let component: LightSmallComponent;
  let fixture: ComponentFixture<LightSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
