import { Injectable } from '@angular/core';
import { Employe } from './Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  lesEmployes = [
    new Employe(12345, 'Mounir Ben Ali', 'Directeur', true),
    new Employe(12587,'Maha Ben Nasr', 'Ingénieur', false),
    new Employe(85719, 'Alia Moalla', 'Secrétaire', false),
    new Employe(45879,'Sami Toumi', 'Ingénieur', true)
  ]

  public addEmploye(emp:Employe)
  {
    this.lesEmployes.push(emp);
  }

  public modifierEmploye(mat:number, nom:string, fct:string, expert:boolean)
  {
   let obj:Employe=this.getEmployeByMatricule(mat);
   obj.nom=nom;
   obj.fonction=fct;
   obj.expert=expert;


  }

  public getEmployeByMatricule(mat:number)
  {
    for(let e of this.lesEmployes)
    {
      if(e.matricule === mat)
        return e;
    }
  }

  constructor() { }
}
