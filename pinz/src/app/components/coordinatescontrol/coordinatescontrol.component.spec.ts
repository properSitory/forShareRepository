import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesControlComponent } from './coordinatescontrol.component';

describe('CoordinatesControlComponent', () => {
  let component: CoordinatesControlComponent;
  let fixture: ComponentFixture<CoordinatesControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatesControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
