import {Component, OnInit} from '@angular/core';
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-client-injoinable-kosc-edit-admin',
    templateUrl: './template-email-client-injoinable-kosc-edit-admin.component.html',
    styleUrls: ['./template-email-client-injoinable-kosc-edit-admin.component.css']
})
export class TemplateEmailClientInjoinableKoscEditAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
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

    _validTemplateEmailClientInjoinableKoscLibelle = true;

    get validTemplateEmailClientInjoinableKoscLibelle(): boolean {
        return this._validTemplateEmailClientInjoinableKoscLibelle;
    }

    set validTemplateEmailClientInjoinableKoscLibelle(value: boolean) {
        this._validTemplateEmailClientInjoinableKoscLibelle = value;
    }

    _validTemplateEmailClientInjoinableKoscObjet = true;

    get validTemplateEmailClientInjoinableKoscObjet(): boolean {
        return this._validTemplateEmailClientInjoinableKoscObjet;
    }

    set validTemplateEmailClientInjoinableKoscObjet(value: boolean) {
        this._validTemplateEmailClientInjoinableKoscObjet = value;
    }

    _validTemplateEmailClientInjoinableKoscCorps = true;


//openPopup
// methods

    get validTemplateEmailClientInjoinableKoscCorps(): boolean {
        return this._validTemplateEmailClientInjoinableKoscCorps;
    }

// getters and setters

    set validTemplateEmailClientInjoinableKoscCorps(value: boolean) {
        this._validTemplateEmailClientInjoinableKoscCorps = value;
    }

    get templateEmailClientInjoinableKoscs(): Array<TemplateEmailClientInjoinableKoscVo> {
        return this.templateEmailClientInjoinableKoscService.templateEmailClientInjoinableKoscs;
    }

    set templateEmailClientInjoinableKoscs(value: Array<TemplateEmailClientInjoinableKoscVo>) {
        this.templateEmailClientInjoinableKoscService.templateEmailClientInjoinableKoscs = value;
    }

    get selectedTemplateEmailClientInjoinableKosc(): TemplateEmailClientInjoinableKoscVo {
        return this.templateEmailClientInjoinableKoscService.selectedTemplateEmailClientInjoinableKosc;
    }

    set selectedTemplateEmailClientInjoinableKosc(value: TemplateEmailClientInjoinableKoscVo) {
        this.templateEmailClientInjoinableKoscService.selectedTemplateEmailClientInjoinableKosc = value;
    }

    get editTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this.templateEmailClientInjoinableKoscService.editTemplateEmailClientInjoinableKoscDialog;

    }

    set editTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this.templateEmailClientInjoinableKoscService.editTemplateEmailClientInjoinableKoscDialog = value;
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
        this.templateEmailClientInjoinableKoscService.edit().subscribe(templateEmailClientInjoinableKosc => {
            const myIndex = this.templateEmailClientInjoinableKoscs.findIndex(e => e.id === this.selectedTemplateEmailClientInjoinableKosc.id);
            this.templateEmailClientInjoinableKoscs[myIndex] = templateEmailClientInjoinableKosc;
            this.editTemplateEmailClientInjoinableKoscDialog = false;
            this.submitted = false;
            this.selectedTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editTemplateEmailClientInjoinableKoscDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailClientInjoinableKoscLibelle = value;
        this.validTemplateEmailClientInjoinableKoscObjet = value;
        this.validTemplateEmailClientInjoinableKoscCorps = value;
    }

//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailClientInjoinableKoscLibelle();
        this.validateTemplateEmailClientInjoinableKoscObjet();
        this.validateTemplateEmailClientInjoinableKoscCorps();

    }

    private validateTemplateEmailClientInjoinableKoscLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailClientInjoinableKosc.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailClientInjoinableKoscLibelle = false;
        } else {
            this.validTemplateEmailClientInjoinableKoscLibelle = true;
        }
    }

    private validateTemplateEmailClientInjoinableKoscObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailClientInjoinableKosc.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailClientInjoinableKoscObjet = false;
        } else {
            this.validTemplateEmailClientInjoinableKoscObjet = true;
        }
    }

    private validateTemplateEmailClientInjoinableKoscCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailClientInjoinableKosc.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailClientInjoinableKoscCorps = false;
        } else {
            this.validTemplateEmailClientInjoinableKoscCorps = true;
        }
    }

}
