import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetButtonComponent } from './widget-button.component';

describe('WidgetButtonComponent', () => {
  let component: WidgetButtonComponent;
  let fixture: ComponentFixture<WidgetButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
