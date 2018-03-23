import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetErrorComponent } from './widget-error.component';

describe('WidgetErrorComponent', () => {
  let component: WidgetErrorComponent;
  let fixture: ComponentFixture<WidgetErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
