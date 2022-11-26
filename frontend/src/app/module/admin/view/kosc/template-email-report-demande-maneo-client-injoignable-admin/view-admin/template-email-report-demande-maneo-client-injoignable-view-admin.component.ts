import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportDemandeManeoClientInjoignableService} from 'src/app/controller/service/TemplateEmailReportDemandeManeoClientInjoignable.service';
import {TemplateEmailReportDemandeManeoClientInjoignableVo} from 'src/app/controller/model/TemplateEmailReportDemandeManeoClientInjoignable.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-template-email-report-demande-maneo-client-injoignable-view-admin',
  templateUrl: './template-email-report-demande-maneo-client-injoignable-view-admin.component.html',
  styleUrls: ['./template-email-report-demande-maneo-client-injoignable-view-admin.component.css']
})
export class TemplateEmailReportDemandeManeoClientInjoignableViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private templateEmailReportDemandeManeoClientInjoignableService: TemplateEmailReportDemandeManeoClientInjoignableService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewTemplateEmailReportDemandeManeoClientInjoignableDialog  = false;
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

   get viewTemplateEmailReportDemandeManeoClientInjoignableDialog(): boolean {
           return this.templateEmailReportDemandeManeoClientInjoignableService.viewTemplateEmailReportDemandeManeoClientInjoignableDialog;

       }
    set viewTemplateEmailReportDemandeManeoClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientInjoignableService.viewTemplateEmailReportDemandeManeoClientInjoignableDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
