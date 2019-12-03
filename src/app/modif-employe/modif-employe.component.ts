import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';
import { Employe } from '../Employe';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-modif-employe',
  templateUrl: './modif-employe.component.html',
  styles: []
})
export class ModifEmployeComponent implements OnInit {
  employes:Employe[];
  modifForm: FormGroup;
  onChange(valeur:string)
  {
    
    let obj:Employe=this.employeService.getEmployeByMatricule(parseInt(valeur));
    this.modifForm.get('nom').setValue(obj.nom);
    this.modifForm.get('fonction').setValue(obj.fonction);
    this.modifForm.get('expert').setValue(obj.expert);



  }
  /*
  public get nom()
  { return this.modifForm.get('employe').value; }
  */
  public get nomobj()
  { return this.modifForm.get('nom'); }

  modif()
  {
    this.employeService.modifierEmploye(parseInt(this.modifForm.get('employe').value)
    ,this.modifForm.get('nom').value,this.modifForm.get('fonction').value
    ,this.modifForm.get('expert').value)
    
  }



  constructor(private employeService: EmployesService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.employes= this.employeService.lesEmployes;
    this.modifForm = this.formBuilder.group(
      {
        employe:['12587'],

        nom:['', Validators.required,],
      
      fonction:['Ingénieur'],
      expert:[false]
      }
      )

  }

}
