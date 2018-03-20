import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetValueComponent } from './widget-value.component';

describe('WidgetValueComponent', () => {
  let component: WidgetValueComponent;
  let fixture: ComponentFixture<WidgetValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
