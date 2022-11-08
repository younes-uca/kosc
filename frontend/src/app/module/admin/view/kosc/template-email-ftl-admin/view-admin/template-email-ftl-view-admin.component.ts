import {Component, OnInit} from '@angular/core';
import {TemplateEmailFtlService} from 'src/app/controller/service/TemplateEmailFtl.service';
import {TemplateEmailFtlVo} from 'src/app/controller/model/TemplateEmailFtl.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-template-email-ftl-view-admin',
    templateUrl: './template-email-ftl-view-admin.component.html',
    styleUrls: ['./template-email-ftl-view-admin.component.css']
})
export class TemplateEmailFtlViewAdminComponent implements OnInit {


    constructor(private datePipe: DatePipe, private templateEmailFtlService: TemplateEmailFtlService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

    get templateEmailFtls(): Array<TemplateEmailFtlVo> {
        return this.templateEmailFtlService.templateEmailFtls;
    }

    set templateEmailFtls(value: Array<TemplateEmailFtlVo>) {
        this.templateEmailFtlService.templateEmailFtls = value;
    }

// getters and setters

    get selectedTemplateEmailFtl(): TemplateEmailFtlVo {
        return this.templateEmailFtlService.selectedTemplateEmailFtl;
    }

    set selectedTemplateEmailFtl(value: TemplateEmailFtlVo) {
        this.templateEmailFtlService.selectedTemplateEmailFtl = value;
    }

    get viewTemplateEmailFtlDialog(): boolean {
        return this.templateEmailFtlService.viewTemplateEmailFtlDialog;

    }

    set viewTemplateEmailFtlDialog(value: boolean) {
        this.templateEmailFtlService.viewTemplateEmailFtlDialog = value;
    }

    get dateFormat() {
        return environment.dateFormatView;
    }

    get dateFormatColumn() {
        return environment.dateFormatList;
    }

// methods
    ngOnInit(): void {
    }

    hideViewDialog() {
        this.viewTemplateEmailFtlDialog = false;
    }
}
