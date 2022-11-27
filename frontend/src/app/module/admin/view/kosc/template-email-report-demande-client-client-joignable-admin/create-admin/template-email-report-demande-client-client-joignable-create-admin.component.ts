import {Component, OnInit, Input} from '@angular/core';
import {TemplateEmailReportDemandeClientClientJoignableService} from 'src/app/controller/service/TemplateEmailReportDemandeClientClientJoignable.service';
import {TemplateEmailReportDemandeClientClientJoignableVo} from 'src/app/controller/model/TemplateEmailReportDemandeClientClientJoignable.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-template-email-report-demande-client-client-joignable-create-admin',
  templateUrl: './template-email-report-demande-client-client-joignable-create-admin.component.html',
  styleUrls: ['./template-email-report-demande-client-client-joignable-create-admin.component.css']
})
export class TemplateEmailReportDemandeClientClientJoignableCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTemplateEmailReportDemandeClientClientJoignableLibelle = true;
   _validTemplateEmailReportDemandeClientClientJoignableObjet = true;
   _validTemplateEmailReportDemandeClientClientJoignableCorps = true;




constructor(private datePipe: DatePipe, private templateEmailReportDemandeClientClientJoignableService: TemplateEmailReportDemandeClientClientJoignableService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validTemplateEmailReportDemandeClientClientJoignableLibelle = value;
    this.validTemplateEmailReportDemandeClientClientJoignableObjet = value;
    this.validTemplateEmailReportDemandeClientClientJoignableCorps = value;
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
     this.templateEmailReportDemandeClientClientJoignableService.save().subscribe(templateEmailReportDemandeClientClientJoignable=>{
      if(templateEmailReportDemandeClientClientJoignable != null){
       this.templateEmailReportDemandeClientClientJoignables.push({...templateEmailReportDemandeClientClientJoignable});
       this.createTemplateEmailReportDemandeClientClientJoignableDialog = false;
       this.submitted = false;
       this.selectedTemplateEmailReportDemandeClientClientJoignable = new TemplateEmailReportDemandeClientClientJoignableVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Template email report demande client client joignable existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateTemplateEmailReportDemandeClientClientJoignableLibelle();
this.validateTemplateEmailReportDemandeClientClientJoignableObjet();
this.validateTemplateEmailReportDemandeClientClientJoignableCorps();

    }

private validateTemplateEmailReportDemandeClientClientJoignableLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeClientClientJoignable.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailReportDemandeClientClientJoignableLibelle = false;
        } else {
            this.validTemplateEmailReportDemandeClientClientJoignableLibelle = true;
        }
    }
private validateTemplateEmailReportDemandeClientClientJoignableObjet(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeClientClientJoignable.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailReportDemandeClientClientJoignableObjet = false;
        } else {
            this.validTemplateEmailReportDemandeClientClientJoignableObjet = true;
        }
    }
private validateTemplateEmailReportDemandeClientClientJoignableCorps(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeClientClientJoignable.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailReportDemandeClientClientJoignableCorps = false;
        } else {
            this.validTemplateEmailReportDemandeClientClientJoignableCorps = true;
        }
    }








hideCreateDialog(){
    this.createTemplateEmailReportDemandeClientClientJoignableDialog  = false;
    this.setValidation(true);
}

get templateEmailReportDemandeClientClientJoignables(): Array<TemplateEmailReportDemandeClientClientJoignableVo> {
    return this.templateEmailReportDemandeClientClientJoignableService.templateEmailReportDemandeClientClientJoignables;
       }
set templateEmailReportDemandeClientClientJoignables(value: Array<TemplateEmailReportDemandeClientClientJoignableVo>) {
        this.templateEmailReportDemandeClientClientJoignableService.templateEmailReportDemandeClientClientJoignables = value;
       }

 get selectedTemplateEmailReportDemandeClientClientJoignable(): TemplateEmailReportDemandeClientClientJoignableVo {
           return this.templateEmailReportDemandeClientClientJoignableService.selectedTemplateEmailReportDemandeClientClientJoignable;
       }
    set selectedTemplateEmailReportDemandeClientClientJoignable(value: TemplateEmailReportDemandeClientClientJoignableVo) {
        this.templateEmailReportDemandeClientClientJoignableService.selectedTemplateEmailReportDemandeClientClientJoignable = value;
       }

   get createTemplateEmailReportDemandeClientClientJoignableDialog(): boolean {
           return this.templateEmailReportDemandeClientClientJoignableService.createTemplateEmailReportDemandeClientClientJoignableDialog;

       }
    set createTemplateEmailReportDemandeClientClientJoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientJoignableService.createTemplateEmailReportDemandeClientClientJoignableDialog= value;
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

    get validTemplateEmailReportDemandeClientClientJoignableLibelle(): boolean {
    return this._validTemplateEmailReportDemandeClientClientJoignableLibelle;
    }

    set validTemplateEmailReportDemandeClientClientJoignableLibelle(value: boolean) {
    this._validTemplateEmailReportDemandeClientClientJoignableLibelle = value;
    }
    get validTemplateEmailReportDemandeClientClientJoignableObjet(): boolean {
    return this._validTemplateEmailReportDemandeClientClientJoignableObjet;
    }

    set validTemplateEmailReportDemandeClientClientJoignableObjet(value: boolean) {
    this._validTemplateEmailReportDemandeClientClientJoignableObjet = value;
    }
    get validTemplateEmailReportDemandeClientClientJoignableCorps(): boolean {
    return this._validTemplateEmailReportDemandeClientClientJoignableCorps;
    }

    set validTemplateEmailReportDemandeClientClientJoignableCorps(value: boolean) {
    this._validTemplateEmailReportDemandeClientClientJoignableCorps = value;
    }


}
