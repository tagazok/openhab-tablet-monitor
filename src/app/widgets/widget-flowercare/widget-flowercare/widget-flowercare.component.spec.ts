import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFlowercareComponent } from './widget-flowercare.component';

describe('WidgetFlowercareComponent', () => {
  let component: WidgetFlowercareComponent;
  let fixture: ComponentFixture<WidgetFlowercareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetFlowercareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFlowercareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
