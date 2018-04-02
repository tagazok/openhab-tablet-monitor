import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetOutletSettingsComponent } from './widget-outlet-settings.component';

describe('WidgetOutletSettingsComponent', () => {
  let component: WidgetOutletSettingsComponent;
  let fixture: ComponentFixture<WidgetOutletSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetOutletSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetOutletSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
