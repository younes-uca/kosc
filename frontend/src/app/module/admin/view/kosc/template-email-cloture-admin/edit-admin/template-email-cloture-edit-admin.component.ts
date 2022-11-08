import {Component, OnInit} from '@angular/core';
import {TemplateEmailClotureService} from 'src/app/controller/service/TemplateEmailCloture.service';
import {TemplateEmailClotureVo} from 'src/app/controller/model/TemplateEmailCloture.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-cloture-edit-admin',
    templateUrl: './template-email-cloture-edit-admin.component.html',
    styleUrls: ['./template-email-cloture-edit-admin.component.css']
})
export class TemplateEmailClotureEditAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailClotureService: TemplateEmailClotureService
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

    _validTemplateEmailClotureLibelle = true;

    get validTemplateEmailClotureLibelle(): boolean {
        return this._validTemplateEmailClotureLibelle;
    }

    set validTemplateEmailClotureLibelle(value: boolean) {
        this._validTemplateEmailClotureLibelle = value;
    }

    _validTemplateEmailClotureObjet = true;

    get validTemplateEmailClotureObjet(): boolean {
        return this._validTemplateEmailClotureObjet;
    }

    set validTemplateEmailClotureObjet(value: boolean) {
        this._validTemplateEmailClotureObjet = value;
    }

    _validTemplateEmailClotureCorps = true;


//openPopup
// methods

    get validTemplateEmailClotureCorps(): boolean {
        return this._validTemplateEmailClotureCorps;
    }

// getters and setters

    set validTemplateEmailClotureCorps(value: boolean) {
        this._validTemplateEmailClotureCorps = value;
    }

    get templateEmailClotures(): Array<TemplateEmailClotureVo> {
        return this.templateEmailClotureService.templateEmailClotures;
    }

    set templateEmailClotures(value: Array<TemplateEmailClotureVo>) {
        this.templateEmailClotureService.templateEmailClotures = value;
    }

    get selectedTemplateEmailCloture(): TemplateEmailClotureVo {
        return this.templateEmailClotureService.selectedTemplateEmailCloture;
    }

    set selectedTemplateEmailCloture(value: TemplateEmailClotureVo) {
        this.templateEmailClotureService.selectedTemplateEmailCloture = value;
    }

    get editTemplateEmailClotureDialog(): boolean {
        return this.templateEmailClotureService.editTemplateEmailClotureDialog;

    }

    set editTemplateEmailClotureDialog(value: boolean) {
        this.templateEmailClotureService.editTemplateEmailClotureDialog = value;
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
        this.templateEmailClotureService.edit().subscribe(templateEmailCloture => {
            const myIndex = this.templateEmailClotures.findIndex(e => e.id === this.selectedTemplateEmailCloture.id);
            this.templateEmailClotures[myIndex] = templateEmailCloture;
            this.editTemplateEmailClotureDialog = false;
            this.submitted = false;
            this.selectedTemplateEmailCloture = new TemplateEmailClotureVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editTemplateEmailClotureDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailClotureLibelle = value;
        this.validTemplateEmailClotureObjet = value;
        this.validTemplateEmailClotureCorps = value;
    }

//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailClotureLibelle();
        this.validateTemplateEmailClotureObjet();
        this.validateTemplateEmailClotureCorps();

    }

    private validateTemplateEmailClotureLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailCloture.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailClotureLibelle = false;
        } else {
            this.validTemplateEmailClotureLibelle = true;
        }
    }

    private validateTemplateEmailClotureObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailCloture.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailClotureObjet = false;
        } else {
            this.validTemplateEmailClotureObjet = true;
        }
    }

    private validateTemplateEmailClotureCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailCloture.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailClotureCorps = false;
        } else {
            this.validTemplateEmailClotureCorps = true;
        }
    }

}
