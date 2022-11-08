import {EntrepriseVo} from './Entreprise.model';
import {User} from './User.model';
import {ArretTravailVo} from "./ArretTravail.model";


export class TechnicienVo extends User {


    public cellPhone: string;
    public email: string;
    public emailAttachement: string;
    public identifiant: string;
    public motPasse: string;
    public adresseOnt: string;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public passwordChanged: null | boolean;
    public createdAt: Date;
    public updatedAt: Date;
    public username: string;
    public password: string;
    public prenom: string;
    public nom: string;
    public createdAtMax: string;
    public createdAtMin: string;
    public updatedAtMax: string;
    public updatedAtMin: string;
    public entrepriseVo: EntrepriseVo;


}
