import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportDemandeManeoClientJoignableRefusService} from 'src/app/controller/service/TemplateEmailReportDemandeManeoClientJoignableRefus.service';
import {TemplateEmailReportDemandeManeoClientJoignableRefusVo} from 'src/app/controller/model/TemplateEmailReportDemandeManeoClientJoignableRefus.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-template-email-report-demande-maneo-client-joignable-refus-view-admin',
  templateUrl: './template-email-report-demande-maneo-client-joignable-refus-view-admin.component.html',
  styleUrls: ['./template-email-report-demande-maneo-client-joignable-refus-view-admin.component.css']
})
export class TemplateEmailReportDemandeManeoClientJoignableRefusViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private templateEmailReportDemandeManeoClientJoignableRefusService: TemplateEmailReportDemandeManeoClientJoignableRefusService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog  = false;
}

// getters and setters

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

   get viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog(): boolean {
           return this.templateEmailReportDemandeManeoClientJoignableRefusService.viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog;

       }
    set viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
