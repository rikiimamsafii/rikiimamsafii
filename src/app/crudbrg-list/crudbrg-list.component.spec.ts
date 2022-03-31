import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudbrgListComponent } from './crudbrg-list.component';

describe('CrudbrgListComponent', () => {
  let component: CrudbrgListComponent;
  let fixture: ComponentFixture<CrudbrgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudbrgListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudbrgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
