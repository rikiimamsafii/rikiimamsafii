import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudbrgCreateComponent } from './crudbrg-create.component';

describe('CrudbrgCreateComponent', () => {
  let component: CrudbrgCreateComponent;
  let fixture: ComponentFixture<CrudbrgCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudbrgCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudbrgCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
