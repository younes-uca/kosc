import {Component, OnInit, Input} from '@angular/core';
import {TemplateEmailReportDemandeClientClientInjoignableService} from 'src/app/controller/service/TemplateEmailReportDemandeClientClientInjoignable.service';
import {TemplateEmailReportDemandeClientClientInjoignableVo} from 'src/app/controller/model/TemplateEmailReportDemandeClientClientInjoignable.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-template-email-report-demande-client-client-injoignable-edit-admin',
  templateUrl: './template-email-report-demande-client-client-injoignable-edit-admin.component.html',
  styleUrls: ['./template-email-report-demande-client-client-injoignable-edit-admin.component.css']
})
export class TemplateEmailReportDemandeClientClientInjoignableEditAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTemplateEmailReportDemandeClientClientInjoignableLibelle = true;
   _validTemplateEmailReportDemandeClientClientInjoignableObjet = true;
   _validTemplateEmailReportDemandeClientClientInjoignableCorps = true;




constructor(private datePipe: DatePipe, private templateEmailReportDemandeClientClientInjoignableService: TemplateEmailReportDemandeClientClientInjoignableService
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
    this.validTemplateEmailReportDemandeClientClientInjoignableLibelle = value;
    this.validTemplateEmailReportDemandeClientClientInjoignableObjet = value;
    this.validTemplateEmailReportDemandeClientClientInjoignableCorps = value;
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
     this.templateEmailReportDemandeClientClientInjoignableService.edit().subscribe(templateEmailReportDemandeClientClientInjoignable=>{
     const myIndex = this.templateEmailReportDemandeClientClientInjoignables.findIndex(e => e.id === this.selectedTemplateEmailReportDemandeClientClientInjoignable.id);
     this.templateEmailReportDemandeClientClientInjoignables[myIndex] = templateEmailReportDemandeClientClientInjoignable;
     this.editTemplateEmailReportDemandeClientClientInjoignableDialog = false;
     this.submitted = false;
     this.selectedTemplateEmailReportDemandeClientClientInjoignable = new TemplateEmailReportDemandeClientClientInjoignableVo();



    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateTemplateEmailReportDemandeClientClientInjoignableLibelle();
this.validateTemplateEmailReportDemandeClientClientInjoignableObjet();
this.validateTemplateEmailReportDemandeClientClientInjoignableCorps();

    }

private validateTemplateEmailReportDemandeClientClientInjoignableLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeClientClientInjoignable.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailReportDemandeClientClientInjoignableLibelle = false;
        } else {
            this.validTemplateEmailReportDemandeClientClientInjoignableLibelle = true;
        }
    }
private validateTemplateEmailReportDemandeClientClientInjoignableObjet(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeClientClientInjoignable.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailReportDemandeClientClientInjoignableObjet = false;
        } else {
            this.validTemplateEmailReportDemandeClientClientInjoignableObjet = true;
        }
    }
private validateTemplateEmailReportDemandeClientClientInjoignableCorps(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeClientClientInjoignable.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailReportDemandeClientClientInjoignableCorps = false;
        } else {
            this.validTemplateEmailReportDemandeClientClientInjoignableCorps = true;
        }
    }







//openPopup
// methods

hideEditDialog(){
    this.editTemplateEmailReportDemandeClientClientInjoignableDialog  = false;
    this.setValidation(true);
}

// getters and setters

get templateEmailReportDemandeClientClientInjoignables(): Array<TemplateEmailReportDemandeClientClientInjoignableVo> {
    return this.templateEmailReportDemandeClientClientInjoignableService.templateEmailReportDemandeClientClientInjoignables;
       }
set templateEmailReportDemandeClientClientInjoignables(value: Array<TemplateEmailReportDemandeClientClientInjoignableVo>) {
        this.templateEmailReportDemandeClientClientInjoignableService.templateEmailReportDemandeClientClientInjoignables = value;
       }

 get selectedTemplateEmailReportDemandeClientClientInjoignable(): TemplateEmailReportDemandeClientClientInjoignableVo {
           return this.templateEmailReportDemandeClientClientInjoignableService.selectedTemplateEmailReportDemandeClientClientInjoignable;
       }
    set selectedTemplateEmailReportDemandeClientClientInjoignable(value: TemplateEmailReportDemandeClientClientInjoignableVo) {
        this.templateEmailReportDemandeClientClientInjoignableService.selectedTemplateEmailReportDemandeClientClientInjoignable = value;
       }

   get editTemplateEmailReportDemandeClientClientInjoignableDialog(): boolean {
           return this.templateEmailReportDemandeClientClientInjoignableService.editTemplateEmailReportDemandeClientClientInjoignableDialog;

       }
    set editTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientInjoignableService.editTemplateEmailReportDemandeClientClientInjoignableDialog= value;
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

    get validTemplateEmailReportDemandeClientClientInjoignableLibelle(): boolean {
    return this._validTemplateEmailReportDemandeClientClientInjoignableLibelle;
    }

    set validTemplateEmailReportDemandeClientClientInjoignableLibelle(value: boolean) {
    this._validTemplateEmailReportDemandeClientClientInjoignableLibelle = value;
    }
    get validTemplateEmailReportDemandeClientClientInjoignableObjet(): boolean {
    return this._validTemplateEmailReportDemandeClientClientInjoignableObjet;
    }

    set validTemplateEmailReportDemandeClientClientInjoignableObjet(value: boolean) {
    this._validTemplateEmailReportDemandeClientClientInjoignableObjet = value;
    }
    get validTemplateEmailReportDemandeClientClientInjoignableCorps(): boolean {
    return this._validTemplateEmailReportDemandeClientClientInjoignableCorps;
    }

    set validTemplateEmailReportDemandeClientClientInjoignableCorps(value: boolean) {
    this._validTemplateEmailReportDemandeClientClientInjoignableCorps = value;
    }

}
