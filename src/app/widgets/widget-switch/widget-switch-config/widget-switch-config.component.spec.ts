import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSwitchConfigComponent } from './widget-switch-config.component';

describe('WidgetSwitchConfigComponent', () => {
  let component: WidgetSwitchConfigComponent;
  let fixture: ComponentFixture<WidgetSwitchConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSwitchConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSwitchConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
