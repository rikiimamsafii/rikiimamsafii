import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crudbrg-detail',
  templateUrl: './crudbrg-detail.component.html',
  styleUrls: ['./crudbrg-detail.component.css'],
})
export class CrudbrgDetailComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  crudData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.restApi.getCrudbrg(this.id).subscribe((data: {}) => {
      this.crudData = data;
    });
  }
}
