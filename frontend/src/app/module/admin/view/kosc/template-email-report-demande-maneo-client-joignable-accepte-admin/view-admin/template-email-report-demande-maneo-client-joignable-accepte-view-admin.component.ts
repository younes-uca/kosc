import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportDemandeManeoClientJoignableAccepteService} from 'src/app/controller/service/TemplateEmailReportDemandeManeoClientJoignableAccepte.service';
import {TemplateEmailReportDemandeManeoClientJoignableAccepteVo} from 'src/app/controller/model/TemplateEmailReportDemandeManeoClientJoignableAccepte.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-template-email-report-demande-maneo-client-joignable-accepte-view-admin',
  templateUrl: './template-email-report-demande-maneo-client-joignable-accepte-view-admin.component.html',
  styleUrls: ['./template-email-report-demande-maneo-client-joignable-accepte-view-admin.component.css']
})
export class TemplateEmailReportDemandeManeoClientJoignableAccepteViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private templateEmailReportDemandeManeoClientJoignableAccepteService: TemplateEmailReportDemandeManeoClientJoignableAccepteService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog  = false;
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

   get viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(): boolean {
           return this.templateEmailReportDemandeManeoClientJoignableAccepteService.viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;

       }
    set viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
