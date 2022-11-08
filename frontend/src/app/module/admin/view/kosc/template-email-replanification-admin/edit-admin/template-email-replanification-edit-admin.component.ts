import {Component, OnInit} from '@angular/core';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';
import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-replanification-edit-admin',
    templateUrl: './template-email-replanification-edit-admin.component.html',
    styleUrls: ['./template-email-replanification-edit-admin.component.css']
})
export class TemplateEmailReplanificationEditAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailReplanificationService: TemplateEmailReplanificationService
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

    _validTemplateEmailReplanificationLibelle = true;

    get validTemplateEmailReplanificationLibelle(): boolean {
        return this._validTemplateEmailReplanificationLibelle;
    }

    set validTemplateEmailReplanificationLibelle(value: boolean) {
        this._validTemplateEmailReplanificationLibelle = value;
    }

    _validTemplateEmailReplanificationObjet = true;

    get validTemplateEmailReplanificationObjet(): boolean {
        return this._validTemplateEmailReplanificationObjet;
    }

    set validTemplateEmailReplanificationObjet(value: boolean) {
        this._validTemplateEmailReplanificationObjet = value;
    }

    _validTemplateEmailReplanificationCorps = true;


//openPopup
// methods

    get validTemplateEmailReplanificationCorps(): boolean {
        return this._validTemplateEmailReplanificationCorps;
    }

// getters and setters

    set validTemplateEmailReplanificationCorps(value: boolean) {
        this._validTemplateEmailReplanificationCorps = value;
    }

    get templateEmailReplanifications(): Array<TemplateEmailReplanificationVo> {
        return this.templateEmailReplanificationService.templateEmailReplanifications;
    }

    set templateEmailReplanifications(value: Array<TemplateEmailReplanificationVo>) {
        this.templateEmailReplanificationService.templateEmailReplanifications = value;
    }

    get selectedTemplateEmailReplanification(): TemplateEmailReplanificationVo {
        return this.templateEmailReplanificationService.selectedTemplateEmailReplanification;
    }

    set selectedTemplateEmailReplanification(value: TemplateEmailReplanificationVo) {
        this.templateEmailReplanificationService.selectedTemplateEmailReplanification = value;
    }

    get editTemplateEmailReplanificationDialog(): boolean {
        return this.templateEmailReplanificationService.editTemplateEmailReplanificationDialog;

    }

    set editTemplateEmailReplanificationDialog(value: boolean) {
        this.templateEmailReplanificationService.editTemplateEmailReplanificationDialog = value;
    }

    get dateFormat() {
        return environment.dateFormatEdit;
    }

    get dateFormatColumn() {
        return environment.dateFormatEdit;
    }

// methods
    ngOnInit(): void {

    }

    public edit() {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.templateEmailReplanificationService.edit().subscribe(templateEmailReplanification => {
            const myIndex = this.templateEmailReplanifications.findIndex(e => e.id === this.selectedTemplateEmailReplanification.id);
            this.templateEmailReplanifications[myIndex] = templateEmailReplanification;
            this.editTemplateEmailReplanificationDialog = false;
            this.submitted = false;
            this.selectedTemplateEmailReplanification = new TemplateEmailReplanificationVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editTemplateEmailReplanificationDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailReplanificationLibelle = value;
        this.validTemplateEmailReplanificationObjet = value;
        this.validTemplateEmailReplanificationCorps = value;
    }

//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailReplanificationLibelle();
        this.validateTemplateEmailReplanificationObjet();
        this.validateTemplateEmailReplanificationCorps();

    }

    private validateTemplateEmailReplanificationLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReplanification.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailReplanificationLibelle = false;
        } else {
            this.validTemplateEmailReplanificationLibelle = true;
        }
    }

    private validateTemplateEmailReplanificationObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReplanification.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailReplanificationObjet = false;
        } else {
            this.validTemplateEmailReplanificationObjet = true;
        }
    }

    private validateTemplateEmailReplanificationCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReplanification.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailReplanificationCorps = false;
        } else {
            this.validTemplateEmailReplanificationCorps = true;
        }
    }

}
