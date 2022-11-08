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
    selector: 'app-template-email-planification-edit-chercheur',
    templateUrl: './template-email-planification-edit-chercheur.component.html',
    styleUrls: ['./template-email-planification-edit-chercheur.component.css']
})
export class TemplateEmailPlanificationEditChercheurComponent implements OnInit {

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


//openPopup
// methods

    get validTemplateEmailPlanificationCorps(): boolean {
        return this._validTemplateEmailPlanificationCorps;
    }

// getters and setters

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

    get editTemplateEmailPlanificationDialog(): boolean {
        return this.templateEmailPlanificationService.editTemplateEmailPlanificationDialog;

    }

    set editTemplateEmailPlanificationDialog(value: boolean) {
        this.templateEmailPlanificationService.editTemplateEmailPlanificationDialog = value;
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
        this.templateEmailPlanificationService.edit().subscribe(templateEmailPlanification => {
            const myIndex = this.templateEmailPlanifications.findIndex(e => e.id === this.selectedTemplateEmailPlanification.id);
            this.templateEmailPlanifications[myIndex] = templateEmailPlanification;
            this.editTemplateEmailPlanificationDialog = false;
            this.submitted = false;
            this.selectedTemplateEmailPlanification = new TemplateEmailPlanificationVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editTemplateEmailPlanificationDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailPlanificationLibelle = value;
        this.validTemplateEmailPlanificationObjet = value;
        this.validTemplateEmailPlanificationCorps = value;
    }

//validation methods
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
