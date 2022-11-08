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
    selector: 'app-template-email-client-injoinable-kosc-create-admin',
    templateUrl: './template-email-client-injoinable-kosc-create-admin.component.html',
    styleUrls: ['./template-email-client-injoinable-kosc-create-admin.component.css']
})
export class TemplateEmailClientInjoinableKoscCreateAdminComponent implements OnInit {

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

    get validTemplateEmailClientInjoinableKoscCorps(): boolean {
        return this._validTemplateEmailClientInjoinableKoscCorps;
    }

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

    get createTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this.templateEmailClientInjoinableKoscService.createTemplateEmailClientInjoinableKoscDialog;

    }

    set createTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this.templateEmailClientInjoinableKoscService.createTemplateEmailClientInjoinableKoscDialog = value;
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
        this.templateEmailClientInjoinableKoscService.save().subscribe(templateEmailClientInjoinableKosc => {
            if (templateEmailClientInjoinableKosc != null) {
                this.templateEmailClientInjoinableKoscs.push({...templateEmailClientInjoinableKosc});
                this.createTemplateEmailClientInjoinableKoscDialog = false;
                this.submitted = false;
                this.selectedTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();

            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Template email client injoinable kosc existe déjà'
                });
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createTemplateEmailClientInjoinableKoscDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailClientInjoinableKoscLibelle = value;
        this.validTemplateEmailClientInjoinableKoscObjet = value;
        this.validTemplateEmailClientInjoinableKoscCorps = value;
    }

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
