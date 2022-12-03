import {Component, OnInit} from '@angular/core';
import {OrdreKoscService} from 'src/app/controller/service/OrdreKosc.service';
import {OrdreKoscVo} from 'src/app/controller/model/OrdreKosc.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';
import {EtatDemandeKoscVo} from 'src/app/controller/model/EtatDemandeKosc.model';
import {EtatDemandeKoscService} from 'src/app/controller/service/EtatDemandeKosc.service';
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {TemplateEmailClotureVo} from 'src/app/controller/model/TemplateEmailCloture.model';
import {TemplateEmailClotureService} from 'src/app/controller/service/TemplateEmailCloture.service';
import {TemplateSuiviVo} from 'src/app/controller/model/TemplateSuivi.model';
import {TemplateSuiviService} from 'src/app/controller/service/TemplateSuivi.service';
import {OperatorVo} from 'src/app/controller/model/Operator.model';
import {OperatorService} from 'src/app/controller/service/Operator.service';
import {DepartementVo} from 'src/app/controller/model/Departement.model';
import {DepartementService} from 'src/app/controller/service/Departement.service';
import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {TechnicienService} from 'src/app/controller/service/Technicien.service';
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {CauseKoOkVo} from "../../../../../../controller/model/CauseKoOk.model";
import {CauseKoOkService} from "../../../../../../controller/service/CauseKoOk.service";

@Component({
    selector: 'app-ordre-kosc-prise-rdv-view-admin',
    templateUrl: './ordre-kosc-prise-rdv-view-admin.component.html',
    styleUrls: ['./ordre-kosc-prise-rdv-view-admin.component.css']
})
export class OrdreKoscPriseRdvViewAdminComponent implements OnInit {
    blocked = false;
    showSpinner = false;
    private editOrdreKoscDialog: boolean;


    constructor(private datePipe: DatePipe, private ordreKoscService: OrdreKoscService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private templateEmailReplanificationService: TemplateEmailReplanificationService
        , private etatDemandeKoscService: EtatDemandeKoscService
        , private templateEmailPlanificationService: TemplateEmailPlanificationService
        , private templateEmailClotureService: TemplateEmailClotureService
        , private templateSuiviService: TemplateSuiviService
        , private operatorService: OperatorService
        , private departementService: DepartementService
        , private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
        , private technicienService: TechnicienService
        , private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
                      , private causeKoOkService: CauseKoOkService

    ) {
    }


    sendMauvaisContactEmail() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendMauvaisContactEmail().subscribe(data => {
                if (data.envoyeMauvaisContact == true) {

                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Email envoyé avec succès'
                    });
                    this.editOrdreKoscDialog = false;
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreurs', detail: 'échec d\'envoi'
                    });
                }
                this.showSpinner = false;
                this.blocked = false;
            }
        );
    }


    get ordreKoscs(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscs;
    }

    set ordreKoscs(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscs = value;
    }

// getters and setters

    get selectedOrdreKosc(): OrdreKoscVo {
        return this.ordreKoscService.selectedOrdreKosc;
    }

    set selectedOrdreKosc(value: OrdreKoscVo) {
        this.ordreKoscService.selectedOrdreKosc = value;
    }

    get viewOrdreKoscDialog(): boolean {
        return this.ordreKoscService.viewOrdreKoscDialog;

    }

    set viewOrdreKoscDialog(value: boolean) {
        this.ordreKoscService.viewOrdreKoscDialog = value;
    }

    get selectedTemplateEmailPlanification(): TemplateEmailPlanificationVo {
        return this.templateEmailPlanificationService.selectedTemplateEmailPlanification;
    }

    set selectedTemplateEmailPlanification(value: TemplateEmailPlanificationVo) {
        this.templateEmailPlanificationService.selectedTemplateEmailPlanification = value;
    }

    get templateEmailPlanifications(): Array<TemplateEmailPlanificationVo> {
        return this.templateEmailPlanificationService.templateEmailPlanifications;
    }

    set templateEmailPlanifications(value: Array<TemplateEmailPlanificationVo>) {
        this.templateEmailPlanificationService.templateEmailPlanifications = value;
    }

    get editTemplateEmailPlanificationDialog(): boolean {
        return this.templateEmailPlanificationService.editTemplateEmailPlanificationDialog;
    }

    set editTemplateEmailPlanificationDialog(value: boolean) {
        this.templateEmailPlanificationService.editTemplateEmailPlanificationDialog = value;
    }

    get selectedTemplateEmailClientInjoinable(): TemplateEmailClientInjoinableVo {
        return this.templateEmailClientInjoinableService.selectedTemplateEmailClientInjoinable;
    }

    set selectedTemplateEmailClientInjoinable(value: TemplateEmailClientInjoinableVo) {
        this.templateEmailClientInjoinableService.selectedTemplateEmailClientInjoinable = value;
    }

    get templateEmailClientInjoinables(): Array<TemplateEmailClientInjoinableVo> {
        return this.templateEmailClientInjoinableService.templateEmailClientInjoinables;
    }

    set templateEmailClientInjoinables(value: Array<TemplateEmailClientInjoinableVo>) {
        this.templateEmailClientInjoinableService.templateEmailClientInjoinables = value;
    }

    get editTemplateEmailClientInjoinableDialog(): boolean {
        return this.templateEmailClientInjoinableService.editTemplateEmailClientInjoinableDialog;
    }

    set editTemplateEmailClientInjoinableDialog(value: boolean) {
        this.templateEmailClientInjoinableService.editTemplateEmailClientInjoinableDialog = value;
    }

    get selectedTemplateEmailCloture(): TemplateEmailClotureVo {
        return this.templateEmailClotureService.selectedTemplateEmailCloture;
    }

    set selectedTemplateEmailCloture(value: TemplateEmailClotureVo) {
        this.templateEmailClotureService.selectedTemplateEmailCloture = value;
    }

    get templateEmailClotures(): Array<TemplateEmailClotureVo> {
        return this.templateEmailClotureService.templateEmailClotures;
    }

    set templateEmailClotures(value: Array<TemplateEmailClotureVo>) {
        this.templateEmailClotureService.templateEmailClotures = value;
    }

    get editTemplateEmailClotureDialog(): boolean {
        return this.templateEmailClotureService.editTemplateEmailClotureDialog;
    }

    set editTemplateEmailClotureDialog(value: boolean) {
        this.templateEmailClotureService.editTemplateEmailClotureDialog = value;
    }


    get selectedDepartement(): DepartementVo {
        return this.departementService.selectedDepartement;
    }

    set selectedDepartement(value: DepartementVo) {
        this.departementService.selectedDepartement = value;
    }

    get departements(): Array<DepartementVo> {
        return this.departementService.departements;
    }

    set departements(value: Array<DepartementVo>) {
        this.departementService.departements = value;
    }

    get editDepartementDialog(): boolean {
        return this.departementService.editDepartementDialog;
    }

    set editDepartementDialog(value: boolean) {
        this.departementService.editDepartementDialog = value;
    }

    get selectedTemplateEmailReplanification(): TemplateEmailReplanificationVo {
        return this.templateEmailReplanificationService.selectedTemplateEmailReplanification;
    }

    set selectedTemplateEmailReplanification(value: TemplateEmailReplanificationVo) {
        this.templateEmailReplanificationService.selectedTemplateEmailReplanification = value;
    }

    get templateEmailReplanifications(): Array<TemplateEmailReplanificationVo> {
        return this.templateEmailReplanificationService.templateEmailReplanifications;
    }

    set templateEmailReplanifications(value: Array<TemplateEmailReplanificationVo>) {
        this.templateEmailReplanificationService.templateEmailReplanifications = value;
    }

    get editTemplateEmailReplanificationDialog(): boolean {
        return this.templateEmailReplanificationService.editTemplateEmailReplanificationDialog;
    }

    set editTemplateEmailReplanificationDialog(value: boolean) {
        this.templateEmailReplanificationService.editTemplateEmailReplanificationDialog = value;
    }

    get selectedTemplateEmailClientInjoinableKosc(): TemplateEmailClientInjoinableKoscVo {
        return this.templateEmailClientInjoinableKoscService.selectedTemplateEmailClientInjoinableKosc;
    }

    set selectedTemplateEmailClientInjoinableKosc(value: TemplateEmailClientInjoinableKoscVo) {
        this.templateEmailClientInjoinableKoscService.selectedTemplateEmailClientInjoinableKosc = value;
    }

    get templateEmailClientInjoinableKoscs(): Array<TemplateEmailClientInjoinableKoscVo> {
        return this.templateEmailClientInjoinableKoscService.templateEmailClientInjoinableKoscs;
    }

    set templateEmailClientInjoinableKoscs(value: Array<TemplateEmailClientInjoinableKoscVo>) {
        this.templateEmailClientInjoinableKoscService.templateEmailClientInjoinableKoscs = value;
    }

    get editTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this.templateEmailClientInjoinableKoscService.editTemplateEmailClientInjoinableKoscDialog;
    }

    set editTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this.templateEmailClientInjoinableKoscService.editTemplateEmailClientInjoinableKoscDialog = value;
    }

    get selectedEtatDemandeKosc(): EtatDemandeKoscVo {
        return this.etatDemandeKoscService.selectedEtatDemandeKosc;
    }

    set selectedEtatDemandeKosc(value: EtatDemandeKoscVo) {
        this.etatDemandeKoscService.selectedEtatDemandeKosc = value;
    }

    get etatDemandeKoscs(): Array<EtatDemandeKoscVo> {
        return this.etatDemandeKoscService.etatDemandeKoscs;
    }

    set etatDemandeKoscs(value: Array<EtatDemandeKoscVo>) {
        this.etatDemandeKoscService.etatDemandeKoscs = value;
    }

    get editEtatDemandeKoscDialog(): boolean {
        return this.etatDemandeKoscService.editEtatDemandeKoscDialog;
    }

    set editEtatDemandeKoscDialog(value: boolean) {
        this.etatDemandeKoscService.editEtatDemandeKoscDialog = value;
    }

    get selectedTemplateSuivi(): TemplateSuiviVo {
        return this.templateSuiviService.selectedTemplateSuivi;
    }

    set selectedTemplateSuivi(value: TemplateSuiviVo) {
        this.templateSuiviService.selectedTemplateSuivi = value;
    }

    get templateSuivis(): Array<TemplateSuiviVo> {
        return this.templateSuiviService.templateSuivis;
    }

    set templateSuivis(value: Array<TemplateSuiviVo>) {
        this.templateSuiviService.templateSuivis = value;
    }

    get editTemplateSuiviDialog(): boolean {
        return this.templateSuiviService.editTemplateSuiviDialog;
    }

    set editTemplateSuiviDialog(value: boolean) {
        this.templateSuiviService.editTemplateSuiviDialog = value;
    }

    get selectedTechnicien(): TechnicienVo {
        return this.technicienService.selectedTechnicien;
    }

    set selectedTechnicien(value: TechnicienVo) {
        this.technicienService.selectedTechnicien = value;
    }

    get techniciens(): Array<TechnicienVo> {
        return this.technicienService.techniciens;
    }

    set techniciens(value: Array<TechnicienVo>) {
        this.technicienService.techniciens = value;
    }

    get editTechnicienDialog(): boolean {
        return this.technicienService.editTechnicienDialog;
    }

    set editTechnicienDialog(value: boolean) {
        this.technicienService.editTechnicienDialog = value;
    }

    get selectedOperator(): OperatorVo {
        return this.operatorService.selectedOperator;
    }

    set selectedOperator(value: OperatorVo) {
        this.operatorService.selectedOperator = value;
    }

    get operators(): Array<OperatorVo> {
        return this.operatorService.operators;
    }

    set operators(value: Array<OperatorVo>) {
        this.operatorService.operators = value;
    }

    get editOperatorDialog(): boolean {
        return this.operatorService.editOperatorDialog;
    }

    set editOperatorDialog(value: boolean) {
        this.operatorService.editOperatorDialog = value;
    }

    get dateFormat() {
        return environment.dateFormatView;
    }

    get dateFormatColumn() {
        return environment.dateFormatList;
    }

// methods
    ngOnInit(): void {
        this.selectedOperator = new OperatorVo();
        this.operatorService.findAll().subscribe((data) => this.operators = data);
        this.selectedDepartement = new DepartementVo();
        this.departementService.findAll().subscribe((data) => this.departements = data);
        this.selectedTechnicien = new TechnicienVo();
        this.technicienService.findAll().subscribe((data) => this.techniciens = data)
        this.selectedTemplateEmailClientInjoinable = new TemplateEmailClientInjoinableVo();
        this.templateEmailClientInjoinableService.findAll().subscribe((data) => this.templateEmailClientInjoinables = data);
        this.selectedTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();
        this.templateEmailClientInjoinableKoscService.findAll().subscribe((data) => this.templateEmailClientInjoinableKoscs = data);
        this.selectedTemplateEmailPlanification = new TemplateEmailPlanificationVo();
        this.templateEmailPlanificationService.findAll().subscribe((data) => this.templateEmailPlanifications = data);
        this.selectedTemplateEmailReplanification = new TemplateEmailReplanificationVo();
        this.templateEmailReplanificationService.findAll().subscribe((data) => this.templateEmailReplanifications = data);
        this.selectedEtatDemandeKosc = new EtatDemandeKoscVo();
        this.etatDemandeKoscService.findAll().subscribe((data) => this.etatDemandeKoscs = data);
        this.selectedTemplateEmailCloture = new TemplateEmailClotureVo();
        this.templateEmailClotureService.findAll().subscribe((data) => this.templateEmailClotures = data);
        this.selectedTemplateSuivi = new TemplateSuiviVo();
        this.templateSuiviService.findAll().subscribe((data) => this.templateSuivis = data);
    }

    hideViewDialog() {
        this.viewOrdreKoscDialog = false;
    }

    public appropriateTechniciens:Array<TechnicienVo>;

    public findAppropriateTechnicien(rdv:Date,codeDepartement:string){
        this.technicienService.findAppropriateTechnicien(rdv, codeDepartement).subscribe(data =>{
            this.appropriateTechniciens=data;
        })
    }

    get indexEdit(): number {
        return this.ordreKoscService.indexEdit;
    }

    set indexEdit(value: number) {
        this.ordreKoscService.indexEdit = value;
    }

    get causeKoOks(): Array<CauseKoOkVo> {
        return this.causeKoOkService.causeKoOks;
    }

    set causeKoOks(value: Array<CauseKoOkVo>) {
        this.causeKoOkService.causeKoOks = value;
    }

    private _emailIndex = 0;

    get emailIndex(): number {
        return this._emailIndex;
    }

    set emailIndex(value: number) {
        this._emailIndex = value;
    }
}
