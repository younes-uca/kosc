import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportDemandeClientClientJoignableService} from 'src/app/controller/service/TemplateEmailReportDemandeClientClientJoignable.service';
import {TemplateEmailReportDemandeClientClientJoignableVo} from 'src/app/controller/model/TemplateEmailReportDemandeClientClientJoignable.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-template-email-report-demande-client-client-joignable-view-admin',
  templateUrl: './template-email-report-demande-client-client-joignable-view-admin.component.html',
  styleUrls: ['./template-email-report-demande-client-client-joignable-view-admin.component.css']
})
export class TemplateEmailReportDemandeClientClientJoignableViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private templateEmailReportDemandeClientClientJoignableService: TemplateEmailReportDemandeClientClientJoignableService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewTemplateEmailReportDemandeClientClientJoignableDialog  = false;
}

// getters and setters

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

   get viewTemplateEmailReportDemandeClientClientJoignableDialog(): boolean {
           return this.templateEmailReportDemandeClientClientJoignableService.viewTemplateEmailReportDemandeClientClientJoignableDialog;

       }
    set viewTemplateEmailReportDemandeClientClientJoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientJoignableService.viewTemplateEmailReportDemandeClientClientJoignableDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
