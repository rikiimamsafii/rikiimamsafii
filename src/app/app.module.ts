import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
// Routing module for router service
import { AppRoutingModule } from './app-routing/app-routing.module';
// Forms module
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { CrudbrgCreateComponent } from './crudbrg-create/crudbrg-create.component';
import { CrudbrgListComponent } from './crudbrg-list/crudbrg-list.component';
import { CrudbrgDetailComponent } from './crudbrg-detail/crudbrg-detail.component';
import { CrudbrgEditComponent } from './crudbrg-edit/crudbrg-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudbrgCreateComponent,
    CrudbrgListComponent,
    CrudbrgDetailComponent,
    CrudbrgEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
