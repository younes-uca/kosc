import {Component, OnInit} from '@angular/core';
import {TemplateSuiviService} from 'src/app/controller/service/TemplateSuivi.service';
import {TemplateSuiviVo} from 'src/app/controller/model/TemplateSuivi.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-suivi-create-chercheur',
    templateUrl: './template-suivi-create-chercheur.component.html',
    styleUrls: ['./template-suivi-create-chercheur.component.css']
})
export class TemplateSuiviCreateChercheurComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateSuiviService: TemplateSuiviService
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

    _validTemplateSuiviLibelle = true;

    get validTemplateSuiviLibelle(): boolean {
        return this._validTemplateSuiviLibelle;
    }

    set validTemplateSuiviLibelle(value: boolean) {
        this._validTemplateSuiviLibelle = value;
    }

    _validTemplateSuiviObjet = true;

    get validTemplateSuiviObjet(): boolean {
        return this._validTemplateSuiviObjet;
    }

    set validTemplateSuiviObjet(value: boolean) {
        this._validTemplateSuiviObjet = value;
    }

    _validTemplateSuiviCorps = true;

    get validTemplateSuiviCorps(): boolean {
        return this._validTemplateSuiviCorps;
    }

    set validTemplateSuiviCorps(value: boolean) {
        this._validTemplateSuiviCorps = value;
    }

    get templateSuivis(): Array<TemplateSuiviVo> {
        return this.templateSuiviService.templateSuivis;
    }

    set templateSuivis(value: Array<TemplateSuiviVo>) {
        this.templateSuiviService.templateSuivis = value;
    }

    get selectedTemplateSuivi(): TemplateSuiviVo {
        return this.templateSuiviService.selectedTemplateSuivi;
    }

    set selectedTemplateSuivi(value: TemplateSuiviVo) {
        this.templateSuiviService.selectedTemplateSuivi = value;
    }

    get createTemplateSuiviDialog(): boolean {
        return this.templateSuiviService.createTemplateSuiviDialog;

    }

    set createTemplateSuiviDialog(value: boolean) {
        this.templateSuiviService.createTemplateSuiviDialog = value;
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
        this.templateSuiviService.save().subscribe(templateSuivi => {
            if (templateSuivi != null) {
                this.templateSuivis.push({...templateSuivi});
                this.createTemplateSuiviDialog = false;
                this.submitted = false;
                this.selectedTemplateSuivi = new TemplateSuiviVo();

            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Template suivi existe déjà'});
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createTemplateSuiviDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateSuiviLibelle = value;
        this.validTemplateSuiviObjet = value;
        this.validTemplateSuiviCorps = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateSuiviLibelle();
        this.validateTemplateSuiviObjet();
        this.validateTemplateSuiviCorps();

    }

    private validateTemplateSuiviLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateSuivi.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateSuiviLibelle = false;
        } else {
            this.validTemplateSuiviLibelle = true;
        }
    }

    private validateTemplateSuiviObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateSuivi.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateSuiviObjet = false;
        } else {
            this.validTemplateSuiviObjet = true;
        }
    }

    private validateTemplateSuiviCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateSuivi.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateSuiviCorps = false;
        } else {
            this.validTemplateSuiviCorps = true;
        }
    }


}
