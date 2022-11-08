import {Component, OnInit} from '@angular/core';
import {TemplateEmailFtlService} from 'src/app/controller/service/TemplateEmailFtl.service';
import {TemplateEmailFtlVo} from 'src/app/controller/model/TemplateEmailFtl.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-ftl-create-admin',
    templateUrl: './template-email-ftl-create-admin.component.html',
    styleUrls: ['./template-email-ftl-create-admin.component.css']
})
export class TemplateEmailFtlCreateAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailFtlService: TemplateEmailFtlService
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

    _validTemplateEmailFtlLibelle = true;

    get validTemplateEmailFtlLibelle(): boolean {
        return this._validTemplateEmailFtlLibelle;
    }

    set validTemplateEmailFtlLibelle(value: boolean) {
        this._validTemplateEmailFtlLibelle = value;
    }

    _validTemplateEmailFtlObjet = true;

    get validTemplateEmailFtlObjet(): boolean {
        return this._validTemplateEmailFtlObjet;
    }

    set validTemplateEmailFtlObjet(value: boolean) {
        this._validTemplateEmailFtlObjet = value;
    }

    _validTemplateEmailFtlCorps = true;

    get validTemplateEmailFtlCorps(): boolean {
        return this._validTemplateEmailFtlCorps;
    }

    set validTemplateEmailFtlCorps(value: boolean) {
        this._validTemplateEmailFtlCorps = value;
    }

    get templateEmailFtls(): Array<TemplateEmailFtlVo> {
        return this.templateEmailFtlService.templateEmailFtls;
    }

    set templateEmailFtls(value: Array<TemplateEmailFtlVo>) {
        this.templateEmailFtlService.templateEmailFtls = value;
    }

    get selectedTemplateEmailFtl(): TemplateEmailFtlVo {
        return this.templateEmailFtlService.selectedTemplateEmailFtl;
    }

    set selectedTemplateEmailFtl(value: TemplateEmailFtlVo) {
        this.templateEmailFtlService.selectedTemplateEmailFtl = value;
    }

    get createTemplateEmailFtlDialog(): boolean {
        return this.templateEmailFtlService.createTemplateEmailFtlDialog;

    }

    set createTemplateEmailFtlDialog(value: boolean) {
        this.templateEmailFtlService.createTemplateEmailFtlDialog = value;
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
        this.templateEmailFtlService.save().subscribe(templateEmailFtl => {
            if (templateEmailFtl != null) {
                this.templateEmailFtls.push({...templateEmailFtl});
                this.createTemplateEmailFtlDialog = false;
                this.submitted = false;
                this.selectedTemplateEmailFtl = new TemplateEmailFtlVo();

            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Template email ftl existe déjà'
                });
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createTemplateEmailFtlDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailFtlLibelle = value;
        this.validTemplateEmailFtlObjet = value;
        this.validTemplateEmailFtlCorps = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailFtlLibelle();
        this.validateTemplateEmailFtlObjet();
        this.validateTemplateEmailFtlCorps();

    }

    private validateTemplateEmailFtlLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailFtl.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailFtlLibelle = false;
        } else {
            this.validTemplateEmailFtlLibelle = true;
        }
    }

    private validateTemplateEmailFtlObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailFtl.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailFtlObjet = false;
        } else {
            this.validTemplateEmailFtlObjet = true;
        }
    }

    private validateTemplateEmailFtlCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailFtl.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailFtlCorps = false;
        } else {
            this.validTemplateEmailFtlCorps = true;
        }
    }


}
