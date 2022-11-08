import {DepartementVo} from './Departement.model';
import {TechnicienVo} from './Technicien.model';
import {ArretTravailVo} from "./ArretTravail.model";


export class DepartementTechnicienVo {

    public id: number;

    public dateDebut: Date;
    public dateFin: Date;
    public dateDebutMax: string;
    public dateDebutMin: string;
    public dateFinMax: string;
    public dateFinMin: string;
    public technicienVo: TechnicienVo;
    public departementVo: DepartementVo;
    public arretTravailVos : Array<ArretTravailVo>;

}
