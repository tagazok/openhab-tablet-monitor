import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigRoomComponent } from './big-room.component';

describe('BigRoomComponent', () => {
  let component: BigRoomComponent;
  let fixture: ComponentFixture<BigRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
