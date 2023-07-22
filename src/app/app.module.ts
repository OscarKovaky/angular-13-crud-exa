import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddFacturaComponent } from './components/add-factura/add-factura.component';
import { AddUserComponent } from './components/add-user-directorio/add-user.component';
import { FacturaListComponent } from './components/facturas-list/factura-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    AddFacturaComponent,
    AddUserComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    FacturaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
