import {Component, OnInit, Input} from '@angular/core';
import {TemplateEmailReportDemandeManeoClientInjoignableService} from 'src/app/controller/service/TemplateEmailReportDemandeManeoClientInjoignable.service';
import {TemplateEmailReportDemandeManeoClientInjoignableVo} from 'src/app/controller/model/TemplateEmailReportDemandeManeoClientInjoignable.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-template-email-report-demande-maneo-client-injoignable-edit-admin',
  templateUrl: './template-email-report-demande-maneo-client-injoignable-edit-admin.component.html',
  styleUrls: ['./template-email-report-demande-maneo-client-injoignable-edit-admin.component.css']
})
export class TemplateEmailReportDemandeManeoClientInjoignableEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTemplateEmailReportDemandeManeoClientInjoignableLibelle = true;
   _validTemplateEmailReportDemandeManeoClientInjoignableObjet = true;
   _validTemplateEmailReportDemandeManeoClientInjoignableCorps = true;




constructor(private datePipe: DatePipe, private templateEmailReportDemandeManeoClientInjoignableService: TemplateEmailReportDemandeManeoClientInjoignableService
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
    this.validTemplateEmailReportDemandeManeoClientInjoignableLibelle = value;
    this.validTemplateEmailReportDemandeManeoClientInjoignableObjet = value;
    this.validTemplateEmailReportDemandeManeoClientInjoignableCorps = value;
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
     this.templateEmailReportDemandeManeoClientInjoignableService.edit().subscribe(templateEmailReportDemandeManeoClientInjoignable=>{
     const myIndex = this.templateEmailReportDemandeManeoClientInjoignables.findIndex(e => e.id === this.selectedTemplateEmailReportDemandeManeoClientInjoignable.id);
     this.templateEmailReportDemandeManeoClientInjoignables[myIndex] = templateEmailReportDemandeManeoClientInjoignable;
     this.editTemplateEmailReportDemandeManeoClientInjoignableDialog = false;
     this.submitted = false;
     this.selectedTemplateEmailReportDemandeManeoClientInjoignable = new TemplateEmailReportDemandeManeoClientInjoignableVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateTemplateEmailReportDemandeManeoClientInjoignableLibelle();
this.validateTemplateEmailReportDemandeManeoClientInjoignableObjet();
this.validateTemplateEmailReportDemandeManeoClientInjoignableCorps();

    }

private validateTemplateEmailReportDemandeManeoClientInjoignableLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeManeoClientInjoignable.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailReportDemandeManeoClientInjoignableLibelle = false;
        } else {
            this.validTemplateEmailReportDemandeManeoClientInjoignableLibelle = true;
        }
    }
private validateTemplateEmailReportDemandeManeoClientInjoignableObjet(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeManeoClientInjoignable.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailReportDemandeManeoClientInjoignableObjet = false;
        } else {
            this.validTemplateEmailReportDemandeManeoClientInjoignableObjet = true;
        }
    }
private validateTemplateEmailReportDemandeManeoClientInjoignableCorps(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeManeoClientInjoignable.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailReportDemandeManeoClientInjoignableCorps = false;
        } else {
            this.validTemplateEmailReportDemandeManeoClientInjoignableCorps = true;
        }
    }







//openPopup
// methods

hideEditDialog(){
    this.editTemplateEmailReportDemandeManeoClientInjoignableDialog  = false;
    this.setValidation(true);
}

// getters and setters

get templateEmailReportDemandeManeoClientInjoignables(): Array<TemplateEmailReportDemandeManeoClientInjoignableVo> {
    return this.templateEmailReportDemandeManeoClientInjoignableService.templateEmailReportDemandeManeoClientInjoignables;
       }
set templateEmailReportDemandeManeoClientInjoignables(value: Array<TemplateEmailReportDemandeManeoClientInjoignableVo>) {
        this.templateEmailReportDemandeManeoClientInjoignableService.templateEmailReportDemandeManeoClientInjoignables = value;
       }

 get selectedTemplateEmailReportDemandeManeoClientInjoignable(): TemplateEmailReportDemandeManeoClientInjoignableVo {
           return this.templateEmailReportDemandeManeoClientInjoignableService.selectedTemplateEmailReportDemandeManeoClientInjoignable;
       }
    set selectedTemplateEmailReportDemandeManeoClientInjoignable(value: TemplateEmailReportDemandeManeoClientInjoignableVo) {
        this.templateEmailReportDemandeManeoClientInjoignableService.selectedTemplateEmailReportDemandeManeoClientInjoignable = value;
       }

   get editTemplateEmailReportDemandeManeoClientInjoignableDialog(): boolean {
           return this.templateEmailReportDemandeManeoClientInjoignableService.editTemplateEmailReportDemandeManeoClientInjoignableDialog;

       }
    set editTemplateEmailReportDemandeManeoClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientInjoignableService.editTemplateEmailReportDemandeManeoClientInjoignableDialog= value;
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

    get validTemplateEmailReportDemandeManeoClientInjoignableLibelle(): boolean {
    return this._validTemplateEmailReportDemandeManeoClientInjoignableLibelle;
    }

    set validTemplateEmailReportDemandeManeoClientInjoignableLibelle(value: boolean) {
    this._validTemplateEmailReportDemandeManeoClientInjoignableLibelle = value;
    }
    get validTemplateEmailReportDemandeManeoClientInjoignableObjet(): boolean {
    return this._validTemplateEmailReportDemandeManeoClientInjoignableObjet;
    }

    set validTemplateEmailReportDemandeManeoClientInjoignableObjet(value: boolean) {
    this._validTemplateEmailReportDemandeManeoClientInjoignableObjet = value;
    }
    get validTemplateEmailReportDemandeManeoClientInjoignableCorps(): boolean {
    return this._validTemplateEmailReportDemandeManeoClientInjoignableCorps;
    }

    set validTemplateEmailReportDemandeManeoClientInjoignableCorps(value: boolean) {
    this._validTemplateEmailReportDemandeManeoClientInjoignableCorps = value;
    }

}
