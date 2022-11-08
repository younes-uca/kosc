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
    selector: 'app-template-email-report-edit-chercheur',
    templateUrl: './template-email-report-edit-chercheur.component.html',
    styleUrls: ['./template-email-report-edit-chercheur.component.css']
})
export class TemplateEmailReportEditChercheurComponent implements OnInit {

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


//openPopup
// methods

    get validTemplateEmailReportCorps(): boolean {
        return this._validTemplateEmailReportCorps;
    }

// getters and setters

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

    get editTemplateEmailReportDialog(): boolean {
        return this.templateEmailReportService.editTemplateEmailReportDialog;

    }

    set editTemplateEmailReportDialog(value: boolean) {
        this.templateEmailReportService.editTemplateEmailReportDialog = value;
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
        this.templateEmailReportService.edit().subscribe(templateEmailReport => {
            const myIndex = this.templateEmailReports.findIndex(e => e.id === this.selectedTemplateEmailReport.id);
            this.templateEmailReports[myIndex] = templateEmailReport;
            this.editTemplateEmailReportDialog = false;
            this.submitted = false;
            this.selectedTemplateEmailReport = new TemplateEmailReportVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editTemplateEmailReportDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTemplateEmailReportLibelle = value;
        this.validTemplateEmailReportObjet = value;
        this.validTemplateEmailReportCorps = value;
    }

//validation methods
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
