import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportDemandeClientClientInjoignableService} from 'src/app/controller/service/TemplateEmailReportDemandeClientClientInjoignable.service';
import {TemplateEmailReportDemandeClientClientInjoignableVo} from 'src/app/controller/model/TemplateEmailReportDemandeClientClientInjoignable.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-template-email-report-demande-client-client-injoignable-view-admin',
  templateUrl: './template-email-report-demande-client-client-injoignable-view-admin.component.html',
  styleUrls: ['./template-email-report-demande-client-client-injoignable-view-admin.component.css']
})
export class TemplateEmailReportDemandeClientClientInjoignableViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private templateEmailReportDemandeClientClientInjoignableService: TemplateEmailReportDemandeClientClientInjoignableService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewTemplateEmailReportDemandeClientClientInjoignableDialog  = false;
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

   get viewTemplateEmailReportDemandeClientClientInjoignableDialog(): boolean {
           return this.templateEmailReportDemandeClientClientInjoignableService.viewTemplateEmailReportDemandeClientClientInjoignableDialog;

       }
    set viewTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientInjoignableService.viewTemplateEmailReportDemandeClientClientInjoignableDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
