import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLayoutComponent } from './manage-layout.component';

describe('ManageLayoutComponent', () => {
  let component: ManageLayoutComponent;
  let fixture: ComponentFixture<ManageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
