import {Component, OnInit} from '@angular/core';
import {TemplateEmailMauvaisContactService} from 'src/app/controller/service/TemplateEmailMauvaisContact.service';
import {TemplateEmailMauvaisContactVo} from 'src/app/controller/model/TemplateEmailMauvaisContact.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-mauvais-contact-edit-admin',
    templateUrl: './template-email-mauvais-contact-edit-admin.component.html',
    styleUrls: ['./template-email-mauvais-contact-edit-admin.component.css']
})
export class TemplateEmailMauvaisContactEditAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailMauvaisContactService: TemplateEmailMauvaisContactService
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

    _validTemplateEmailMauvaisContactLibelle = true;

    get validTemplateEmailMauvaisContactLibelle(): boolean {
        return this._validTemplateEmailMauvaisContactLibelle;
    }

    set validTemplateEmailMauvaisContactLibelle(value: boolean) {
        this._validTemplateEmailMauvaisContactLibelle = value;
    }

    _validTemplateEmailMauvaisContactObjet = true;

    get validTemplateEmailMauvaisContactObjet(): boolean {
        return this._validTemplateEmailMauvaisContactObjet;
    }

    set validTemplateEmailMauvaisContactObjet(value: boolean) {
        this._validTemplateEmailMauvaisContactObjet = value;
    }

    _validTemplateEmailMauvaisContactCorps = true;


//openPopup
// methods

    get validTemplateEmailMauvaisContactCorps(): boolean {
        return this._validTemplateEmailMauvaisContactCorps;
    }

// getters and setters

    set validTemplateEmailMauvaisContactCorps(value: boolean) {
        this._validTemplateEmailMauvaisContactCorps = value;
    }

    get templateEmailMauvaisContacts(): Array<TemplateEmailMauvaisContactVo> {
        return this.templateEmailMauvaisContactService.templateEmailMauvaisContacts;
    }

    set templateEmailMauvaisContacts(value: Array<TemplateEmailMauvaisContactVo>) {
        this.templateEmailMauvaisContactService.templateEmailMauvaisContacts = value;
    }

    get selectedTemplateEmailMauvaisContact(): TemplateEmailMauvaisContactVo {
        return this.templateEmailMauvaisContactService.selectedTemplateEmailMauvaisContact;
    }

    set selectedTemplateEmailMauvaisContact(value: TemplateEmailMauvaisContactVo) {
        this.templateEmailMauvaisContactService.selectedTemplateEmailMauvaisContact = value;
    }

    get editTemplateEmailMauvaisContactDialog(): boolean {
        return this.templateEmailMauvaisContactService.editTemplateEmailMauvaisContactDialog;

    }

    set editTemplateEmailMauvaisContactDialog(value: boolean) {
        this.templateEmailMauvaisContactService.editTemplateEmailMauvaisContactDialog = value;
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
        this.templateEmailMauvaisContactService.edit().subscribe(templateEmailMauvaisContact => {
            const myIndex = this.templateEmailMauvaisContacts.findIndex(e => e.id === this.selectedTemplateEmailMauvaisContact.id);
            this.templateEmailMauvaisContacts[myIndex] = templateEmailMauvaisContact;
            this.editTemplateEmailMauvaisContactDialog = false;
            this.submitted = false;
            this.selectedTemplateEmailMauvaisContact = new TemplateEmailMauvaisContactVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editTemplateEmailMauvaisContactDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailMauvaisContactLibelle = value;
        this.validTemplateEmailMauvaisContactObjet = value;
        this.validTemplateEmailMauvaisContactCorps = value;
    }

//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailMauvaisContactLibelle();
        this.validateTemplateEmailMauvaisContactObjet();
        this.validateTemplateEmailMauvaisContactCorps();

    }

    private validateTemplateEmailMauvaisContactLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailMauvaisContact.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailMauvaisContactLibelle = false;
        } else {
            this.validTemplateEmailMauvaisContactLibelle = true;
        }
    }

    private validateTemplateEmailMauvaisContactObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailMauvaisContact.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailMauvaisContactObjet = false;
        } else {
            this.validTemplateEmailMauvaisContactObjet = true;
        }
    }

    private validateTemplateEmailMauvaisContactCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailMauvaisContact.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailMauvaisContactCorps = false;
        } else {
            this.validTemplateEmailMauvaisContactCorps = true;
        }
    }

}
