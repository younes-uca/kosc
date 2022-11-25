import {Component, OnInit, Input} from '@angular/core';
import {TemplateEmailReportDemandeManeoClientJoignableAccepteService} from 'src/app/controller/service/TemplateEmailReportDemandeManeoClientJoignableAccepte.service';
import {TemplateEmailReportDemandeManeoClientJoignableAccepteVo} from 'src/app/controller/model/TemplateEmailReportDemandeManeoClientJoignableAccepte.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-template-email-report-demande-maneo-client-joignable-accepte-edit-admin',
  templateUrl: './template-email-report-demande-maneo-client-joignable-accepte-edit-admin.component.html',
  styleUrls: ['./template-email-report-demande-maneo-client-joignable-accepte-edit-admin.component.css']
})
export class TemplateEmailReportDemandeManeoClientJoignableAccepteEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle = true;
   _validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet = true;
   _validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps = true;




constructor(private datePipe: DatePipe, private templateEmailReportDemandeManeoClientJoignableAccepteService: TemplateEmailReportDemandeManeoClientJoignableAccepteService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

// methods
ngOnInit(): void {
}




private setValidation(value : boolean){
    this.validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle = value;
    this.validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet = value;
    this.validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps = value;
    }


public edit(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.editWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public editWithShowOption(showList: boolean){
     this.templateEmailReportDemandeManeoClientJoignableAccepteService.edit().subscribe(templateEmailReportDemandeManeoClientJoignableAccepte=>{
     const myIndex = this.templateEmailReportDemandeManeoClientJoignableAcceptes.findIndex(e => e.id === this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte.id);
     this.templateEmailReportDemandeManeoClientJoignableAcceptes[myIndex] = templateEmailReportDemandeManeoClientJoignableAccepte;
     this.editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = false;
     this.submitted = false;
     this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = new TemplateEmailReportDemandeManeoClientJoignableAccepteVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle();
this.validateTemplateEmailReportDemandeManeoClientJoignableAccepteObjet();
this.validateTemplateEmailReportDemandeManeoClientJoignableAccepteCorps();

    }

private validateTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle = false;
        } else {
            this.validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle = true;
        }
    }
private validateTemplateEmailReportDemandeManeoClientJoignableAccepteObjet(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet = false;
        } else {
            this.validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet = true;
        }
    }
private validateTemplateEmailReportDemandeManeoClientJoignableAccepteCorps(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps = false;
        } else {
            this.validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps = true;
        }
    }







//openPopup
// methods

hideEditDialog(){
    this.editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog  = false;
    this.setValidation(true);
}

// getters and setters

get templateEmailReportDemandeManeoClientJoignableAcceptes(): Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> {
    return this.templateEmailReportDemandeManeoClientJoignableAccepteService.templateEmailReportDemandeManeoClientJoignableAcceptes;
       }
set templateEmailReportDemandeManeoClientJoignableAcceptes(value: Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.templateEmailReportDemandeManeoClientJoignableAcceptes = value;
       }

 get selectedTemplateEmailReportDemandeManeoClientJoignableAccepte(): TemplateEmailReportDemandeManeoClientJoignableAccepteVo {
           return this.templateEmailReportDemandeManeoClientJoignableAccepteService.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte;
       }
    set selectedTemplateEmailReportDemandeManeoClientJoignableAccepte(value: TemplateEmailReportDemandeManeoClientJoignableAccepteVo) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = value;
       }

   get editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(): boolean {
           return this.templateEmailReportDemandeManeoClientJoignableAccepteService.editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;

       }
    set editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatEdit;
     }

     get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }




    get errorMessages(): string[] {
    return this._errorMessages;
    }

    set errorMessages(value: string[]) {
    this._errorMessages = value;
    }

    get validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle(): boolean {
    return this._validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle(value: boolean) {
    this._validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle = value;
    }
    get validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet(): boolean {
    return this._validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet(value: boolean) {
    this._validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet = value;
    }
    get validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps(): boolean {
    return this._validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps(value: boolean) {
    this._validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps = value;
    }

}
