import {Component, OnInit} from '@angular/core';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-planification-create-admin',
    templateUrl: './template-email-planification-create-admin.component.html',
    styleUrls: ['./template-email-planification-create-admin.component.css']
})
export class TemplateEmailPlanificationCreateAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailPlanificationService: TemplateEmailPlanificationService
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

    _validTemplateEmailPlanificationLibelle = true;

    get validTemplateEmailPlanificationLibelle(): boolean {
        return this._validTemplateEmailPlanificationLibelle;
    }

    set validTemplateEmailPlanificationLibelle(value: boolean) {
        this._validTemplateEmailPlanificationLibelle = value;
    }

    _validTemplateEmailPlanificationObjet = true;

    get validTemplateEmailPlanificationObjet(): boolean {
        return this._validTemplateEmailPlanificationObjet;
    }

    set validTemplateEmailPlanificationObjet(value: boolean) {
        this._validTemplateEmailPlanificationObjet = value;
    }

    _validTemplateEmailPlanificationCorps = true;

    get validTemplateEmailPlanificationCorps(): boolean {
        return this._validTemplateEmailPlanificationCorps;
    }

    set validTemplateEmailPlanificationCorps(value: boolean) {
        this._validTemplateEmailPlanificationCorps = value;
    }

    get templateEmailPlanifications(): Array<TemplateEmailPlanificationVo> {
        return this.templateEmailPlanificationService.templateEmailPlanifications;
    }

    set templateEmailPlanifications(value: Array<TemplateEmailPlanificationVo>) {
        this.templateEmailPlanificationService.templateEmailPlanifications = value;
    }

    get selectedTemplateEmailPlanification(): TemplateEmailPlanificationVo {
        return this.templateEmailPlanificationService.selectedTemplateEmailPlanification;
    }

    set selectedTemplateEmailPlanification(value: TemplateEmailPlanificationVo) {
        this.templateEmailPlanificationService.selectedTemplateEmailPlanification = value;
    }

    get createTemplateEmailPlanificationDialog(): boolean {
        return this.templateEmailPlanificationService.createTemplateEmailPlanificationDialog;

    }

    set createTemplateEmailPlanificationDialog(value: boolean) {
        this.templateEmailPlanificationService.createTemplateEmailPlanificationDialog = value;
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
        this.templateEmailPlanificationService.save().subscribe(templateEmailPlanification => {
            if (templateEmailPlanification != null) {
                this.templateEmailPlanifications.push({...templateEmailPlanification});
                this.createTemplateEmailPlanificationDialog = false;
                this.submitted = false;
                this.selectedTemplateEmailPlanification = new TemplateEmailPlanificationVo();

            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Template email planification existe déjà'
                });
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createTemplateEmailPlanificationDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailPlanificationLibelle = value;
        this.validTemplateEmailPlanificationObjet = value;
        this.validTemplateEmailPlanificationCorps = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailPlanificationLibelle();
        this.validateTemplateEmailPlanificationObjet();
        this.validateTemplateEmailPlanificationCorps();

    }

    private validateTemplateEmailPlanificationLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailPlanification.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailPlanificationLibelle = false;
        } else {
            this.validTemplateEmailPlanificationLibelle = true;
        }
    }

    private validateTemplateEmailPlanificationObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailPlanification.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailPlanificationObjet = false;
        } else {
            this.validTemplateEmailPlanificationObjet = true;
        }
    }

    private validateTemplateEmailPlanificationCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailPlanification.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailPlanificationCorps = false;
        } else {
            this.validTemplateEmailPlanificationCorps = true;
        }
    }


}
