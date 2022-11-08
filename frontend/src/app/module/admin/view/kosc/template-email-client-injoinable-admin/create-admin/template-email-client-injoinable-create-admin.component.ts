import {Component, OnInit} from '@angular/core';
import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-client-injoinable-create-admin',
    templateUrl: './template-email-client-injoinable-create-admin.component.html',
    styleUrls: ['./template-email-client-injoinable-create-admin.component.css']
})
export class TemplateEmailClientInjoinableCreateAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
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

    _validTemplateEmailClientInjoinableLibelle = true;

    get validTemplateEmailClientInjoinableLibelle(): boolean {
        return this._validTemplateEmailClientInjoinableLibelle;
    }

    set validTemplateEmailClientInjoinableLibelle(value: boolean) {
        this._validTemplateEmailClientInjoinableLibelle = value;
    }

    _validTemplateEmailClientInjoinableObjet = true;

    get validTemplateEmailClientInjoinableObjet(): boolean {
        return this._validTemplateEmailClientInjoinableObjet;
    }

    set validTemplateEmailClientInjoinableObjet(value: boolean) {
        this._validTemplateEmailClientInjoinableObjet = value;
    }

    _validTemplateEmailClientInjoinableCorps = true;

    get validTemplateEmailClientInjoinableCorps(): boolean {
        return this._validTemplateEmailClientInjoinableCorps;
    }

    set validTemplateEmailClientInjoinableCorps(value: boolean) {
        this._validTemplateEmailClientInjoinableCorps = value;
    }

    get templateEmailClientInjoinables(): Array<TemplateEmailClientInjoinableVo> {
        return this.templateEmailClientInjoinableService.templateEmailClientInjoinables;
    }

    set templateEmailClientInjoinables(value: Array<TemplateEmailClientInjoinableVo>) {
        this.templateEmailClientInjoinableService.templateEmailClientInjoinables = value;
    }

    get selectedTemplateEmailClientInjoinable(): TemplateEmailClientInjoinableVo {
        return this.templateEmailClientInjoinableService.selectedTemplateEmailClientInjoinable;
    }

    set selectedTemplateEmailClientInjoinable(value: TemplateEmailClientInjoinableVo) {
        this.templateEmailClientInjoinableService.selectedTemplateEmailClientInjoinable = value;
    }

    get createTemplateEmailClientInjoinableDialog(): boolean {
        return this.templateEmailClientInjoinableService.createTemplateEmailClientInjoinableDialog;

    }

    set createTemplateEmailClientInjoinableDialog(value: boolean) {
        this.templateEmailClientInjoinableService.createTemplateEmailClientInjoinableDialog = value;
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
        this.templateEmailClientInjoinableService.save().subscribe(templateEmailClientInjoinable => {
            if (templateEmailClientInjoinable != null) {
                this.templateEmailClientInjoinables.push({...templateEmailClientInjoinable});
                this.createTemplateEmailClientInjoinableDialog = false;
                this.submitted = false;
                this.selectedTemplateEmailClientInjoinable = new TemplateEmailClientInjoinableVo();

            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Template email client injoinable existe déjà'
                });
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createTemplateEmailClientInjoinableDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailClientInjoinableLibelle = value;
        this.validTemplateEmailClientInjoinableObjet = value;
        this.validTemplateEmailClientInjoinableCorps = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailClientInjoinableLibelle();
        this.validateTemplateEmailClientInjoinableObjet();
        this.validateTemplateEmailClientInjoinableCorps();

    }

    private validateTemplateEmailClientInjoinableLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailClientInjoinable.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailClientInjoinableLibelle = false;
        } else {
            this.validTemplateEmailClientInjoinableLibelle = true;
        }
    }

    private validateTemplateEmailClientInjoinableObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailClientInjoinable.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailClientInjoinableObjet = false;
        } else {
            this.validTemplateEmailClientInjoinableObjet = true;
        }
    }

    private validateTemplateEmailClientInjoinableCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailClientInjoinable.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailClientInjoinableCorps = false;
        } else {
            this.validTemplateEmailClientInjoinableCorps = true;
        }
    }


}
