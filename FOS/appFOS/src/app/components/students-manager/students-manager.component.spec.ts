import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsManagerComponent } from './students-manager.component';

describe('StudentsManagerComponent', () => {
  let component: StudentsManagerComponent;
  let fixture: ComponentFixture<StudentsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
