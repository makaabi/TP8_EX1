import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';
import { Employe } from '../Employe';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {
employes:Employe[];
  constructor(private employeService: EmployesService) { }

  ngOnInit() {
    this.employes= this.employeService.lesEmployes;
  }

}
