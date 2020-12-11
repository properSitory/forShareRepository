import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatescontrolComponent } from './coordinatescontrol.component';

describe('CoordinatescontrolComponent', () => {
  let component: CoordinatescontrolComponent;
  let fixture: ComponentFixture<CoordinatescontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatescontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatescontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
