import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { SelectedEmployeComponent } from './selected-employe/selected-employe.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { Quatre04Component } from './quatre04/quatre04.component';


const routes: Routes = [
  {path:'presentation', component:PresentationComponent},
  {path:'employes', component:EmployesListComponent},
  {path:'employes/:matricule', component:SelectedEmployeComponent},
  {path:'ajout', component:AjoutEmployeComponent},
  {path:'', redirectTo:'presentation', pathMatch:'full'},
  {path:'**', component:Quatre04Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
