import {Component, OnInit} from '@angular/core';
import {TemplateEmailRefusService} from 'src/app/controller/service/TemplateEmailRefus.service';
import {TemplateEmailRefusVo} from 'src/app/controller/model/TemplateEmailRefus.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-template-email-refus-view-admin',
    templateUrl: './template-email-refus-view-admin.component.html',
    styleUrls: ['./template-email-refus-view-admin.component.css']
})
export class TemplateEmailRefusViewAdminComponent implements OnInit {


    constructor(private datePipe: DatePipe, private templateEmailRefusService: TemplateEmailRefusService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

    get templateEmailRefuss(): Array<TemplateEmailRefusVo> {
        return this.templateEmailRefusService.templateEmailRefuss;
    }

    set templateEmailRefuss(value: Array<TemplateEmailRefusVo>) {
        this.templateEmailRefusService.templateEmailRefuss = value;
    }

// getters and setters

    get selectedTemplateEmailRefus(): TemplateEmailRefusVo {
        return this.templateEmailRefusService.selectedTemplateEmailRefus;
    }

    set selectedTemplateEmailRefus(value: TemplateEmailRefusVo) {
        this.templateEmailRefusService.selectedTemplateEmailRefus = value;
    }

    get viewTemplateEmailRefusDialog(): boolean {
        return this.templateEmailRefusService.viewTemplateEmailRefusDialog;

    }

    set viewTemplateEmailRefusDialog(value: boolean) {
        this.templateEmailRefusService.viewTemplateEmailRefusDialog = value;
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
        this.viewTemplateEmailRefusDialog = false;
    }
}
