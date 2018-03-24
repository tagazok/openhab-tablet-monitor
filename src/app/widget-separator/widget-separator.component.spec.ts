import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSeparatorComponent } from './widget-separator.component';

describe('WidgetSeparatorComponent', () => {
  let component: WidgetSeparatorComponent;
  let fixture: ComponentFixture<WidgetSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
