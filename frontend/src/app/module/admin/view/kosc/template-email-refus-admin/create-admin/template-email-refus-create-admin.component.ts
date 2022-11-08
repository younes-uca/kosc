import {Component, OnInit} from '@angular/core';
import {TemplateEmailRefusService} from 'src/app/controller/service/TemplateEmailRefus.service';
import {TemplateEmailRefusVo} from 'src/app/controller/model/TemplateEmailRefus.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-refus-create-admin',
    templateUrl: './template-email-refus-create-admin.component.html',
    styleUrls: ['./template-email-refus-create-admin.component.css']
})
export class TemplateEmailRefusCreateAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailRefusService: TemplateEmailRefusService
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

    _validTemplateEmailRefusLibelle = true;

    get validTemplateEmailRefusLibelle(): boolean {
        return this._validTemplateEmailRefusLibelle;
    }

    set validTemplateEmailRefusLibelle(value: boolean) {
        this._validTemplateEmailRefusLibelle = value;
    }

    _validTemplateEmailRefusObjet = true;

    get validTemplateEmailRefusObjet(): boolean {
        return this._validTemplateEmailRefusObjet;
    }

    set validTemplateEmailRefusObjet(value: boolean) {
        this._validTemplateEmailRefusObjet = value;
    }

    _validTemplateEmailRefusCorps = true;

    get validTemplateEmailRefusCorps(): boolean {
        return this._validTemplateEmailRefusCorps;
    }

    set validTemplateEmailRefusCorps(value: boolean) {
        this._validTemplateEmailRefusCorps = value;
    }

    get templateEmailRefuss(): Array<TemplateEmailRefusVo> {
        return this.templateEmailRefusService.templateEmailRefuss;
    }

    set templateEmailRefuss(value: Array<TemplateEmailRefusVo>) {
        this.templateEmailRefusService.templateEmailRefuss = value;
    }

    get selectedTemplateEmailRefus(): TemplateEmailRefusVo {
        return this.templateEmailRefusService.selectedTemplateEmailRefus;
    }

    set selectedTemplateEmailRefus(value: TemplateEmailRefusVo) {
        this.templateEmailRefusService.selectedTemplateEmailRefus = value;
    }

    get createTemplateEmailRefusDialog(): boolean {
        return this.templateEmailRefusService.createTemplateEmailRefusDialog;

    }

    set createTemplateEmailRefusDialog(value: boolean) {
        this.templateEmailRefusService.createTemplateEmailRefusDialog = value;
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
        this.templateEmailRefusService.save().subscribe(templateEmailRefus => {
            if (templateEmailRefus != null) {
                this.templateEmailRefuss.push({...templateEmailRefus});
                this.createTemplateEmailRefusDialog = false;
                this.submitted = false;
                this.selectedTemplateEmailRefus = new TemplateEmailRefusVo();

            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Template email refus existe déjà'
                });
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createTemplateEmailRefusDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailRefusLibelle = value;
        this.validTemplateEmailRefusObjet = value;
        this.validTemplateEmailRefusCorps = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailRefusLibelle();
        this.validateTemplateEmailRefusObjet();
        this.validateTemplateEmailRefusCorps();

    }

    private validateTemplateEmailRefusLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailRefus.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailRefusLibelle = false;
        } else {
            this.validTemplateEmailRefusLibelle = true;
        }
    }

    private validateTemplateEmailRefusObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailRefus.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailRefusObjet = false;
        } else {
            this.validTemplateEmailRefusObjet = true;
        }
    }

    private validateTemplateEmailRefusCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailRefus.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailRefusCorps = false;
        } else {
            this.validTemplateEmailRefusCorps = true;
        }
    }


}
