import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetValueConfigComponent } from './widget-value-config.component';

describe('WidgetValueConfigComponent', () => {
  let component: WidgetValueConfigComponent;
  let fixture: ComponentFixture<WidgetValueConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetValueConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetValueConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
