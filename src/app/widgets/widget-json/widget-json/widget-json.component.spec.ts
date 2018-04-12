import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetJsonComponent } from './widget-json.component';

describe('WidgetJsonComponent', () => {
  let component: WidgetJsonComponent;
  let fixture: ComponentFixture<WidgetJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
