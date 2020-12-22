import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionListesComponent } from './gestion-listes.component';

describe('GestionListesComponent', () => {
  let component: GestionListesComponent;
  let fixture: ComponentFixture<GestionListesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionListesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
