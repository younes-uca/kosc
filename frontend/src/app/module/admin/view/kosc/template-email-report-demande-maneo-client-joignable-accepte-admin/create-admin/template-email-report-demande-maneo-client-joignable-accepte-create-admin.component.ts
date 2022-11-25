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
  selector: 'app-template-email-report-demande-maneo-client-joignable-accepte-create-admin',
  templateUrl: './template-email-report-demande-maneo-client-joignable-accepte-create-admin.component.html',
  styleUrls: ['./template-email-report-demande-maneo-client-joignable-accepte-create-admin.component.css']
})
export class TemplateEmailReportDemandeManeoClientJoignableAccepteCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle = true;
   _validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet = true;
   _validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps = true;




constructor(private datePipe: DatePipe, private templateEmailReportDemandeManeoClientJoignableAccepteService: TemplateEmailReportDemandeManeoClientJoignableAccepteService
 ,       private stringUtilService: StringUtilService
 ,       private roleService: RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}

ngOnInit(): void {
}




private setValidation(value: boolean){
    this.validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle = value;
    this.validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet = value;
    this.validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps = value;
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
     this.templateEmailReportDemandeManeoClientJoignableAccepteService.save().subscribe(templateEmailReportDemandeManeoClientJoignableAccepte=>{
      if(templateEmailReportDemandeManeoClientJoignableAccepte != null){
       this.templateEmailReportDemandeManeoClientJoignableAcceptes.push({...templateEmailReportDemandeManeoClientJoignableAccepte});
       this.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = false;
       this.submitted = false;
       this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = new TemplateEmailReportDemandeManeoClientJoignableAccepteVo();

    }else{
    this.messageService.add({severity: 'error', summary: 'Erreurs',detail: 'Template email report demande maneo client joignable accepte existe déjà' });
    }

    } , error =>{
        console.log(error);
    });
}

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








hideCreateDialog(){
    this.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog  = false;
    this.setValidation(true);
}

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

   get createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(): boolean {
           return this.templateEmailReportDemandeManeoClientJoignableAccepteService.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;

       }
    set createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog= value;
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
