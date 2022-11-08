import {Component, OnInit} from '@angular/core';
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-template-email-client-injoinable-kosc-view-admin',
    templateUrl: './template-email-client-injoinable-kosc-view-admin.component.html',
    styleUrls: ['./template-email-client-injoinable-kosc-view-admin.component.css']
})
export class TemplateEmailClientInjoinableKoscViewAdminComponent implements OnInit {


    constructor(private datePipe: DatePipe, private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

    get templateEmailClientInjoinableKoscs(): Array<TemplateEmailClientInjoinableKoscVo> {
        return this.templateEmailClientInjoinableKoscService.templateEmailClientInjoinableKoscs;
    }

    set templateEmailClientInjoinableKoscs(value: Array<TemplateEmailClientInjoinableKoscVo>) {
        this.templateEmailClientInjoinableKoscService.templateEmailClientInjoinableKoscs = value;
    }

// getters and setters

    get selectedTemplateEmailClientInjoinableKosc(): TemplateEmailClientInjoinableKoscVo {
        return this.templateEmailClientInjoinableKoscService.selectedTemplateEmailClientInjoinableKosc;
    }

    set selectedTemplateEmailClientInjoinableKosc(value: TemplateEmailClientInjoinableKoscVo) {
        this.templateEmailClientInjoinableKoscService.selectedTemplateEmailClientInjoinableKosc = value;
    }

    get viewTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this.templateEmailClientInjoinableKoscService.viewTemplateEmailClientInjoinableKoscDialog;

    }

    set viewTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this.templateEmailClientInjoinableKoscService.viewTemplateEmailClientInjoinableKoscDialog = value;
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
        this.viewTemplateEmailClientInjoinableKoscDialog = false;
    }
}
