import {Component, OnInit} from '@angular/core';
import {
    TemplateEmailConfirmationClientService
} from 'src/app/controller/service/TemplateEmailConfirmationClient.service';
import {TemplateEmailConfirmationClientVo} from 'src/app/controller/model/TemplateEmailConfirmationClient.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-template-email-confirmation-client-view-chercheur',
    templateUrl: './template-email-confirmation-client-view-chercheur.component.html',
    styleUrls: ['./template-email-confirmation-client-view-chercheur.component.css']
})
export class TemplateEmailConfirmationClientViewChercheurComponent implements OnInit {


    constructor(private datePipe: DatePipe, private templateEmailConfirmationClientService: TemplateEmailConfirmationClientService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

    get templateEmailConfirmationClients(): Array<TemplateEmailConfirmationClientVo> {
        return this.templateEmailConfirmationClientService.templateEmailConfirmationClients;
    }

    set templateEmailConfirmationClients(value: Array<TemplateEmailConfirmationClientVo>) {
        this.templateEmailConfirmationClientService.templateEmailConfirmationClients = value;
    }

// getters and setters

    get selectedTemplateEmailConfirmationClient(): TemplateEmailConfirmationClientVo {
        return this.templateEmailConfirmationClientService.selectedTemplateEmailConfirmationClient;
    }

    set selectedTemplateEmailConfirmationClient(value: TemplateEmailConfirmationClientVo) {
        this.templateEmailConfirmationClientService.selectedTemplateEmailConfirmationClient = value;
    }

    get viewTemplateEmailConfirmationClientDialog(): boolean {
        return this.templateEmailConfirmationClientService.viewTemplateEmailConfirmationClientDialog;

    }

    set viewTemplateEmailConfirmationClientDialog(value: boolean) {
        this.templateEmailConfirmationClientService.viewTemplateEmailConfirmationClientDialog = value;
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
        this.viewTemplateEmailConfirmationClientDialog = false;
    }
}
