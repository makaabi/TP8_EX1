import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EmployesService } from '../employes.service';
import { Employe } from '../Employe';

@Component({
  selector: 'app-selected-employe',
  templateUrl: './selected-employe.component.html',
  styleUrls: ['./selected-employe.component.css']
})
export class SelectedEmployeComponent implements OnInit {

  employe: Employe;
  constructor(private activatedRouter:ActivatedRoute, 
    private employeService:EmployesService, 
    private router:Router) { }

  ngOnInit() {
    let mat= Number(this.activatedRouter.snapshot.params['matricule']);
    this.employe = this.employeService.getEmployeByMatricule(mat);
    console.log(mat);
  }
  onRetour()
  {
    this.router.navigate(['/employes']);
  }
}
