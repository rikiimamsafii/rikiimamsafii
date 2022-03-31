import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-crudbrg-list',
  templateUrl: './crudbrg-list.component.html',
  styleUrls: ['./crudbrg-list.component.css'],
})
export class CrudbrgListComponent implements OnInit {
  Crudbarang: any = [];
  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.loadCrudbrg();
  }

  // Get employees list
  loadCrudbrg() {
    return this.restApi.getCrudbrgs().subscribe((data: {}) => {
      this.Crudbarang = data;
    });
  }

  // Delete employee
  deleteCrudbrg(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteCrudbrg(id).subscribe((data) => {
        this.loadCrudbrg();
      });
    }
  }
}
