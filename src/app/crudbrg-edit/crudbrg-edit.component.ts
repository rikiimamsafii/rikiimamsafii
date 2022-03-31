import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crudbrg-edit',
  templateUrl: './crudbrg-edit.component.html',
  styleUrls: ['./crudbrg-edit.component.css'],
})
export class CrudbrgEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  crudData: any = {};
  form: FormGroup;
  submitted = false;
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.restApi.getCrudbrg(this.id).subscribe((data: {}) => {
      this.crudData = data;
    });
    this.form = this.formBuilder.group({
      kobar: ['', Validators.required],
      nabar: ['', Validators.required],
      harga: ['', Validators.required],
      stok: ['', Validators.required],
      satuan: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      if (window.confirm('Are you sure, you want to update?')) {
        this.restApi.updateCrudbrg(this.id, this.crudData).subscribe((data) => {
          this.router.navigate(['crudbrg-list']);
        });
      }
    }
  }
}
