export class Employe
{
    public get matricule(): number {
        return this._matricule;
    }
    public set matricule(value: number) {
        this._matricule = value;
    }


    constructor(private _matricule: number, private nom:string, private fonction:string, private expert:boolean) {
        
    }
}