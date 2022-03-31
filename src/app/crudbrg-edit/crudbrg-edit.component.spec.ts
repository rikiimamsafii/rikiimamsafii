import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudbrgEditComponent } from './crudbrg-edit.component';

describe('CrudbrgEditComponent', () => {
  let component: CrudbrgEditComponent;
  let fixture: ComponentFixture<CrudbrgEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudbrgEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudbrgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
