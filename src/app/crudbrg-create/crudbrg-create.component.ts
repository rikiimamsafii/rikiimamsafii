import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crudbrg-create',
  templateUrl: './crudbrg-create.component.html',
  styleUrls: ['./crudbrg-create.component.css'],
})
export class CrudbrgCreateComponent implements OnInit {
  @Input() crudDetails = {
    kobar: '',
    nabar: '',
    harga: '',
    stok: '',
    satuan: '',
  };

  form: FormGroup;
  submitted = false;
  constructor(
    public restApi: RestApiService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
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
      this.restApi.createCrudbrg(this.crudDetails).subscribe((data: {}) => {
        this.router.navigate(['/crudbrg-list']);
      });
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
}
