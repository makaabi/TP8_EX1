import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { Quatre04Component } from './quatre04/quatre04.component';
import { SelectedEmployeComponent } from './selected-employe/selected-employe.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { ChercherComponent } from './chercher/chercher.component';
import { ModifEmployeComponent } from './modif-employe/modif-employe.component';



@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    PresentationComponent,
    EmployesListComponent,
    AjoutEmployeComponent,
    Quatre04Component,
    SelectedEmployeComponent,
    AddEmployeComponent,
    ChercherComponent,
    ModifEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
