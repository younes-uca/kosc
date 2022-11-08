import {Component, OnInit} from '@angular/core';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';
import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-template-email-replanification-view-chercheur',
    templateUrl: './template-email-replanification-view-chercheur.component.html',
    styleUrls: ['./template-email-replanification-view-chercheur.component.css']
})
export class TemplateEmailReplanificationViewChercheurComponent implements OnInit {


    constructor(private datePipe: DatePipe, private templateEmailReplanificationService: TemplateEmailReplanificationService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

    get templateEmailReplanifications(): Array<TemplateEmailReplanificationVo> {
        return this.templateEmailReplanificationService.templateEmailReplanifications;
    }

    set templateEmailReplanifications(value: Array<TemplateEmailReplanificationVo>) {
        this.templateEmailReplanificationService.templateEmailReplanifications = value;
    }

// getters and setters

    get selectedTemplateEmailReplanification(): TemplateEmailReplanificationVo {
        return this.templateEmailReplanificationService.selectedTemplateEmailReplanification;
    }

    set selectedTemplateEmailReplanification(value: TemplateEmailReplanificationVo) {
        this.templateEmailReplanificationService.selectedTemplateEmailReplanification = value;
    }

    get viewTemplateEmailReplanificationDialog(): boolean {
        return this.templateEmailReplanificationService.viewTemplateEmailReplanificationDialog;

    }

    set viewTemplateEmailReplanificationDialog(value: boolean) {
        this.templateEmailReplanificationService.viewTemplateEmailReplanificationDialog = value;
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
        this.viewTemplateEmailReplanificationDialog = false;
    }
}
