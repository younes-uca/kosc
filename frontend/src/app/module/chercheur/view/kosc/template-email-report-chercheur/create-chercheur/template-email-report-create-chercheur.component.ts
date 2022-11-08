import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportService} from 'src/app/controller/service/TemplateEmailReport.service';
import {TemplateEmailReportVo} from 'src/app/controller/model/TemplateEmailReport.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-template-email-report-create-chercheur',
    templateUrl: './template-email-report-create-chercheur.component.html',
    styleUrls: ['./template-email-report-create-chercheur.component.css']
})
export class TemplateEmailReportCreateChercheurComponent implements OnInit {

    constructor(private datePipe: DatePipe, private templateEmailReportService: TemplateEmailReportService
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

    _validTemplateEmailReportLibelle = true;

    get validTemplateEmailReportLibelle(): boolean {
        return this._validTemplateEmailReportLibelle;
    }

    set validTemplateEmailReportLibelle(value: boolean) {
        this._validTemplateEmailReportLibelle = value;
    }

    _validTemplateEmailReportObjet = true;

    get validTemplateEmailReportObjet(): boolean {
        return this._validTemplateEmailReportObjet;
    }

    set validTemplateEmailReportObjet(value: boolean) {
        this._validTemplateEmailReportObjet = value;
    }

    _validTemplateEmailReportCorps = true;

    get validTemplateEmailReportCorps(): boolean {
        return this._validTemplateEmailReportCorps;
    }

    set validTemplateEmailReportCorps(value: boolean) {
        this._validTemplateEmailReportCorps = value;
    }

    get templateEmailReports(): Array<TemplateEmailReportVo> {
        return this.templateEmailReportService.templateEmailReports;
    }

    set templateEmailReports(value: Array<TemplateEmailReportVo>) {
        this.templateEmailReportService.templateEmailReports = value;
    }

    get selectedTemplateEmailReport(): TemplateEmailReportVo {
        return this.templateEmailReportService.selectedTemplateEmailReport;
    }

    set selectedTemplateEmailReport(value: TemplateEmailReportVo) {
        this.templateEmailReportService.selectedTemplateEmailReport = value;
    }

    get createTemplateEmailReportDialog(): boolean {
        return this.templateEmailReportService.createTemplateEmailReportDialog;

    }

    set createTemplateEmailReportDialog(value: boolean) {
        this.templateEmailReportService.createTemplateEmailReportDialog = value;
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
        this.templateEmailReportService.save().subscribe(templateEmailReport => {
            if (templateEmailReport != null) {
                this.templateEmailReports.push({...templateEmailReport});
                this.createTemplateEmailReportDialog = false;
                this.submitted = false;
                this.selectedTemplateEmailReport = new TemplateEmailReportVo();

            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Template email report existe déjà'
                });
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createTemplateEmailReportDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailReportLibelle = value;
        this.validTemplateEmailReportObjet = value;
        this.validTemplateEmailReportCorps = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTemplateEmailReportLibelle();
        this.validateTemplateEmailReportObjet();
        this.validateTemplateEmailReportCorps();

    }

    private validateTemplateEmailReportLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReport.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTemplateEmailReportLibelle = false;
        } else {
            this.validTemplateEmailReportLibelle = true;
        }
    }

    private validateTemplateEmailReportObjet() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReport.objet)) {
            this.errorMessages.push('Objet non valide');
            this.validTemplateEmailReportObjet = false;
        } else {
            this.validTemplateEmailReportObjet = true;
        }
    }

    private validateTemplateEmailReportCorps() {
        if (this.stringUtilService.isEmpty(this.selectedTemplateEmailReport.corps)) {
            this.errorMessages.push('Corps non valide');
            this.validTemplateEmailReportCorps = false;
        } else {
            this.validTemplateEmailReportCorps = true;
        }
    }


}
