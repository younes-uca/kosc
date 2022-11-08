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
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-confirmation-client-create-admin',
    templateUrl: './template-email-confirmation-client-create-admin.component.html',
    styleUrls: ['./template-email-confirmation-client-create-admin.component.css']
})
export class TemplateEmailConfirmationClientCreateAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailConfirmationClientService: TemplateEmailConfirmationClientService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {

    }

    _submitted = false;

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    private _errorMessages = new Array<string>();

    get errorMessages(): string[] {
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    _validTemplateEmailConfirmationClientLibelle = true;

    get validTemplateEmailConfirmationClientLibelle(): boolean {
        return this._validTemplateEmailConfirmationClientLibelle;
    }

    set validTemplateEmailConfirmationClientLibelle(value: boolean) {
        this._validTemplateEmailConfirmationClientLibelle = value;
    }

    _validTemplateEmailConfirmationClientObjet = true;

    get validTemplateEmailConfirmationClientObjet(): boolean {
        return this._validTemplateEmailConfirmationClientObjet;
    }

    set validTemplateEmailConfirmationClientObjet(value: boolean) {
        this._validTemplateEmailConfirmationClientObjet = value;
    }

    _validTemplateEmailConfirmationClientCorps = true;

    get validTemplateEmailConfirmationClientCorps(): boolean {
        return this._validTemplateEmailConfirmationClientCorps;
    }

    set validTemplateEmailConfirmationClientCorps(value: boolean) {
        this._validTemplateEmailConfirmationClientCorps = value;
    }

    get templateEmailConfirmationClients(): Array<TemplateEmailConfirmationClientVo> {
        return this.templateEmailConfirmationClientService.templateEmailConfirmationClients;
    }

    set templateEmailConfirmationClients(value: Array<TemplateEmailConfirmationClientVo>) {
        this.templateEmailConfirmationClientService.templateEmailConfirmationClients = value;
    }

    get selectedTemplateEmailConfirmationClient(): TemplateEmailConfirmationClientVo {
        return this.templateEmailConfirmationClientService.selectedTemplateEmailConfirmationClient;
    }

    set selectedTemplateEmailConfirmationClient(value: TemplateEmailConfirmationClientVo) {
        this.templateEmailConfirmationClientService.selectedTemplateEmailConfirmationClient = value;
    }

    get createTemplateEmailConfirmationClientDialog(): boolean {
        return this.templateEmailConfirmationClientService.createTemplateEmailConfirmationClientDialog;

    }

    set createTemplateEmailConfirmationClientDialog(value: boolean) {
        this.templateEmailConfirmationClientService.createTemplateEmailConfirmationClientDialog = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    ngOnInit(): void {

    }

    public save() {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.templateEmailConfirmationClientService.save().subscribe(templateEmailConfirmationClient => {
            if (templateEmailConfirmationClient != null) {
                this.templateEmailConfirmationClients.push({...templateEmailConfirmationClient});
                this.createTemplateEmailConfirmationClientDialog = false;
                this.submitted = false;
                this.selectedTemplateEmailConfirmationClient = new TemplateEmailConfirmationClientVo();

            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Template email confirmation client existe déjà'
                });
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createTemplateEmailConfirmationClientDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailConfirmationClientLibelle = value;
        this.validTemplateEmailConfirmationClientObjet = value;
        this.validTemplateEmailConfirmationClientCorps = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailConfirmationClientLibelle();
        this.validateTemplateEmailConfirmationClientObjet();
        this.validateTemplateEmailConfirmationClientCorps();

    }

    private validateTemplateEmailConfirmationClientLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailConfirmationClient.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailConfirmationClientLibelle = false;
        } else {
            this.validTemplateEmailConfirmationClientLibelle = true;
        }
    }

    private validateTemplateEmailConfirmationClientObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailConfirmationClient.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailConfirmationClientObjet = false;
        } else {
            this.validTemplateEmailConfirmationClientObjet = true;
        }
    }

    private validateTemplateEmailConfirmationClientCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailConfirmationClient.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailConfirmationClientCorps = false;
        } else {
            this.validTemplateEmailConfirmationClientCorps = true;
        }
    }


}
