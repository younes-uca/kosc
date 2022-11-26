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
  selector: 'app-template-email-report-demande-client-client-injoignable-create-admin',
  templateUrl: './template-email-report-demande-client-client-injoignable-create-admin.component.html',
  styleUrls: ['./template-email-report-demande-client-client-injoignable-create-admin.component.css']
})
export class TemplateEmailReportDemandeClientClientInjoignableCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTemplateEmailReportDemandeClientClientInjoignableLibelle = true;
   _validTemplateEmailReportDemandeClientClientInjoignableObjet = true;
   _validTemplateEmailReportDemandeClientClientInjoignableCorps = true;




constructor(private datePipe: DatePipe, private templateEmailReportDemandeClientClientInjoignableService: TemplateEmailReportDemandeClientClientInjoignableService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validTemplateEmailReportDemandeClientClientInjoignableLibelle = value;
    this.validTemplateEmailReportDemandeClientClientInjoignableObjet = value;
    this.validTemplateEmailReportDemandeClientClientInjoignableCorps = value;
    }


public save(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.saveWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public saveWithShowOption(showList: boolean){
     this.templateEmailReportDemandeClientClientInjoignableService.save().subscribe(templateEmailReportDemandeClientClientInjoignable=>{
      if(templateEmailReportDemandeClientClientInjoignable != null){
       this.templateEmailReportDemandeClientClientInjoignables.push({...templateEmailReportDemandeClientClientInjoignable});
       this.createTemplateEmailReportDemandeClientClientInjoignableDialog = false;
       this.submitted = false;
       this.selectedTemplateEmailReportDemandeClientClientInjoignable = new TemplateEmailReportDemandeClientClientInjoignableVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Template email report demande client client injoignable existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

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








hideCreateDialog(){
    this.createTemplateEmailReportDemandeClientClientInjoignableDialog  = false;
    this.setValidation(true);
}

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

   get createTemplateEmailReportDemandeClientClientInjoignableDialog(): boolean {
           return this.templateEmailReportDemandeClientClientInjoignableService.createTemplateEmailReportDemandeClientClientInjoignableDialog;

       }
    set createTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientInjoignableService.createTemplateEmailReportDemandeClientClientInjoignableDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatCreate;
    }

    get dateFormatColumn(){
            return environment.dateFormatCreate;
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
