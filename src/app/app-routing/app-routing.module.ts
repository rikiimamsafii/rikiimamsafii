import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudbrgCreateComponent } from '../crudbrg-create/crudbrg-create.component';
import { CrudbrgDetailComponent } from '../crudbrg-detail/crudbrg-detail.component';
import { CrudbrgEditComponent } from '../crudbrg-edit/crudbrg-edit.component';
import { CrudbrgListComponent } from '../crudbrg-list/crudbrg-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'crudbrg-list' },
  { path: 'create-crudbrg', component: CrudbrgCreateComponent },
  { path: 'crudbrg-list', component: CrudbrgListComponent },
  { path: 'crudbrg-edit/:id', component: CrudbrgEditComponent },
  { path: 'crudbrg-detail/:id', component: CrudbrgDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
