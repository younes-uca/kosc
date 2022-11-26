import {Component, OnInit, Input} from '@angular/core';
import {TemplateEmailReportDemandeManeoClientJoignableRefusService} from 'src/app/controller/service/TemplateEmailReportDemandeManeoClientJoignableRefus.service';
import {TemplateEmailReportDemandeManeoClientJoignableRefusVo} from 'src/app/controller/model/TemplateEmailReportDemandeManeoClientJoignableRefus.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
  selector: 'app-template-email-report-demande-maneo-client-joignable-refus-create-admin',
  templateUrl: './template-email-report-demande-maneo-client-joignable-refus-create-admin.component.html',
  styleUrls: ['./template-email-report-demande-maneo-client-joignable-refus-create-admin.component.css']
})
export class TemplateEmailReportDemandeManeoClientJoignableRefusCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle = true;
   _validTemplateEmailReportDemandeManeoClientJoignableRefusObjet = true;
   _validTemplateEmailReportDemandeManeoClientJoignableRefusCorps = true;




constructor(private datePipe: DatePipe, private templateEmailReportDemandeManeoClientJoignableRefusService: TemplateEmailReportDemandeManeoClientJoignableRefusService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle = value;
    this.validTemplateEmailReportDemandeManeoClientJoignableRefusObjet = value;
    this.validTemplateEmailReportDemandeManeoClientJoignableRefusCorps = value;
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
     this.templateEmailReportDemandeManeoClientJoignableRefusService.save().subscribe(templateEmailReportDemandeManeoClientJoignableRefus=>{
      if(templateEmailReportDemandeManeoClientJoignableRefus != null){
       this.templateEmailReportDemandeManeoClientJoignableRefuss.push({...templateEmailReportDemandeManeoClientJoignableRefus});
       this.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog = false;
       this.submitted = false;
       this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus = new TemplateEmailReportDemandeManeoClientJoignableRefusVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Template email report demande maneo client joignable refus existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateTemplateEmailReportDemandeManeoClientJoignableRefusLibelle();
this.validateTemplateEmailReportDemandeManeoClientJoignableRefusObjet();
this.validateTemplateEmailReportDemandeManeoClientJoignableRefusCorps();

    }

private validateTemplateEmailReportDemandeManeoClientJoignableRefusLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle = false;
        } else {
            this.validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle = true;
        }
    }
private validateTemplateEmailReportDemandeManeoClientJoignableRefusObjet(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailReportDemandeManeoClientJoignableRefusObjet = false;
        } else {
            this.validTemplateEmailReportDemandeManeoClientJoignableRefusObjet = true;
        }
    }
private validateTemplateEmailReportDemandeManeoClientJoignableRefusCorps(){
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailReportDemandeManeoClientJoignableRefusCorps = false;
        } else {
            this.validTemplateEmailReportDemandeManeoClientJoignableRefusCorps = true;
        }
    }








hideCreateDialog(){
    this.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog  = false;
    this.setValidation(true);
}

get templateEmailReportDemandeManeoClientJoignableRefuss(): Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo> {
    return this.templateEmailReportDemandeManeoClientJoignableRefusService.templateEmailReportDemandeManeoClientJoignableRefuss;
       }
set templateEmailReportDemandeManeoClientJoignableRefuss(value: Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.templateEmailReportDemandeManeoClientJoignableRefuss = value;
       }

 get selectedTemplateEmailReportDemandeManeoClientJoignableRefus(): TemplateEmailReportDemandeManeoClientJoignableRefusVo {
           return this.templateEmailReportDemandeManeoClientJoignableRefusService.selectedTemplateEmailReportDemandeManeoClientJoignableRefus;
       }
    set selectedTemplateEmailReportDemandeManeoClientJoignableRefus(value: TemplateEmailReportDemandeManeoClientJoignableRefusVo) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.selectedTemplateEmailReportDemandeManeoClientJoignableRefus = value;
       }

   get createTemplateEmailReportDemandeManeoClientJoignableRefusDialog(): boolean {
           return this.templateEmailReportDemandeManeoClientJoignableRefusService.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog;

       }
    set createTemplateEmailReportDemandeManeoClientJoignableRefusDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog= value;
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

    get validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle(): boolean {
    return this._validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle(value: boolean) {
    this._validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle = value;
    }
    get validTemplateEmailReportDemandeManeoClientJoignableRefusObjet(): boolean {
    return this._validTemplateEmailReportDemandeManeoClientJoignableRefusObjet;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableRefusObjet(value: boolean) {
    this._validTemplateEmailReportDemandeManeoClientJoignableRefusObjet = value;
    }
    get validTemplateEmailReportDemandeManeoClientJoignableRefusCorps(): boolean {
    return this._validTemplateEmailReportDemandeManeoClientJoignableRefusCorps;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableRefusCorps(value: boolean) {
    this._validTemplateEmailReportDemandeManeoClientJoignableRefusCorps = value;
    }


}
