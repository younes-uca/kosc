import {Component, OnInit} from '@angular/core';
import {TemplateEmailCriService} from 'src/app/controller/service/TemplateEmailCri.service';
import {TemplateEmailCriVo} from 'src/app/controller/model/TemplateEmailCri.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-cri-edit-chercheur',
    templateUrl: './template-email-cri-edit-chercheur.component.html',
    styleUrls: ['./template-email-cri-edit-chercheur.component.css']
})
export class TemplateEmailCriEditChercheurComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailCriService: TemplateEmailCriService
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

    _validTemplateEmailCriLibelle = true;

    get validTemplateEmailCriLibelle(): boolean {
        return this._validTemplateEmailCriLibelle;
    }

    set validTemplateEmailCriLibelle(value: boolean) {
        this._validTemplateEmailCriLibelle = value;
    }

    _validTemplateEmailCriObjet = true;

    get validTemplateEmailCriObjet(): boolean {
        return this._validTemplateEmailCriObjet;
    }

    set validTemplateEmailCriObjet(value: boolean) {
        this._validTemplateEmailCriObjet = value;
    }

    _validTemplateEmailCriCorps = true;


//openPopup
// methods

    get validTemplateEmailCriCorps(): boolean {
        return this._validTemplateEmailCriCorps;
    }

// getters and setters

    set validTemplateEmailCriCorps(value: boolean) {
        this._validTemplateEmailCriCorps = value;
    }

    get templateEmailCris(): Array<TemplateEmailCriVo> {
        return this.templateEmailCriService.templateEmailCris;
    }

    set templateEmailCris(value: Array<TemplateEmailCriVo>) {
        this.templateEmailCriService.templateEmailCris = value;
    }

    get selectedTemplateEmailCri(): TemplateEmailCriVo {
        return this.templateEmailCriService.selectedTemplateEmailCri;
    }

    set selectedTemplateEmailCri(value: TemplateEmailCriVo) {
        this.templateEmailCriService.selectedTemplateEmailCri = value;
    }

    get editTemplateEmailCriDialog(): boolean {
        return this.templateEmailCriService.editTemplateEmailCriDialog;

    }

    set editTemplateEmailCriDialog(value: boolean) {
        this.templateEmailCriService.editTemplateEmailCriDialog = value;
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
        this.templateEmailCriService.edit().subscribe(templateEmailCri => {
            const myIndex = this.templateEmailCris.findIndex(e => e.id === this.selectedTemplateEmailCri.id);
            this.templateEmailCris[myIndex] = templateEmailCri;
            this.editTemplateEmailCriDialog = false;
            this.submitted = false;
            this.selectedTemplateEmailCri = new TemplateEmailCriVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editTemplateEmailCriDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailCriLibelle = value;
        this.validTemplateEmailCriObjet = value;
        this.validTemplateEmailCriCorps = value;
    }

//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailCriLibelle();
        this.validateTemplateEmailCriObjet();
        this.validateTemplateEmailCriCorps();

    }

    private validateTemplateEmailCriLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailCri.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailCriLibelle = false;
        } else {
            this.validTemplateEmailCriLibelle = true;
        }
    }

    private validateTemplateEmailCriObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailCri.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailCriObjet = false;
        } else {
            this.validTemplateEmailCriObjet = true;
        }
    }

    private validateTemplateEmailCriCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailCri.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailCriCorps = false;
        } else {
            this.validTemplateEmailCriCorps = true;
        }
    }

}
