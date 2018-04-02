import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMusicControlsComponent } from './widget-music-controls.component';

describe('WidgetMusicControlsComponent', () => {
  let component: WidgetMusicControlsComponent;
  let fixture: ComponentFixture<WidgetMusicControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMusicControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMusicControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
