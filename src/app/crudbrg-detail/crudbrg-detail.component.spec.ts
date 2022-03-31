import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudbrgDetailComponent } from './crudbrg-detail.component';

describe('CrudbrgDetailComponent', () => {
  let component: CrudbrgDetailComponent;
  let fixture: ComponentFixture<CrudbrgDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudbrgDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudbrgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
