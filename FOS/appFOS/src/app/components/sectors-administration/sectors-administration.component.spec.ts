import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsAdministrationComponent } from './sectors-administration.component';

describe('SectorsAdministrationComponent', () => {
  let component: SectorsAdministrationComponent;
  let fixture: ComponentFixture<SectorsAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorsAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorsAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
