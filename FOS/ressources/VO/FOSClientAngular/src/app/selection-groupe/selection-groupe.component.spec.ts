import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionGroupeComponent } from './selection-groupe.component';

describe('SelectionGroupeComponent', () => {
  let component: SelectionGroupeComponent;
  let fixture: ComponentFixture<SelectionGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionGroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
