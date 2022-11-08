import {Component, OnInit} from '@angular/core';
import {TemplateEmailMauvaisContactService} from 'src/app/controller/service/TemplateEmailMauvaisContact.service';
import {TemplateEmailMauvaisContactVo} from 'src/app/controller/model/TemplateEmailMauvaisContact.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-template-email-mauvais-contact-view-admin',
    templateUrl: './template-email-mauvais-contact-view-admin.component.html',
    styleUrls: ['./template-email-mauvais-contact-view-admin.component.css']
})
export class TemplateEmailMauvaisContactViewAdminComponent implements OnInit {


    constructor(private datePipe: DatePipe, private templateEmailMauvaisContactService: TemplateEmailMauvaisContactService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

    get templateEmailMauvaisContacts(): Array<TemplateEmailMauvaisContactVo> {
        return this.templateEmailMauvaisContactService.templateEmailMauvaisContacts;
    }

    set templateEmailMauvaisContacts(value: Array<TemplateEmailMauvaisContactVo>) {
        this.templateEmailMauvaisContactService.templateEmailMauvaisContacts = value;
    }

// getters and setters

    get selectedTemplateEmailMauvaisContact(): TemplateEmailMauvaisContactVo {
        return this.templateEmailMauvaisContactService.selectedTemplateEmailMauvaisContact;
    }

    set selectedTemplateEmailMauvaisContact(value: TemplateEmailMauvaisContactVo) {
        this.templateEmailMauvaisContactService.selectedTemplateEmailMauvaisContact = value;
    }

    get viewTemplateEmailMauvaisContactDialog(): boolean {
        return this.templateEmailMauvaisContactService.viewTemplateEmailMauvaisContactDialog;

    }

    set viewTemplateEmailMauvaisContactDialog(value: boolean) {
        this.templateEmailMauvaisContactService.viewTemplateEmailMauvaisContactDialog = value;
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
        this.viewTemplateEmailMauvaisContactDialog = false;
    }
}
