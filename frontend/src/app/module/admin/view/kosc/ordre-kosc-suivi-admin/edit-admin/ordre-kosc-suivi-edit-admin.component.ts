import {Component, OnInit} from '@angular/core';
import {OrdreKoscService} from 'src/app/controller/service/OrdreKosc.service';
import {OrdreKoscVo} from 'src/app/controller/model/OrdreKosc.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MenuItem, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {TemplateEmailClotureVo} from 'src/app/controller/model/TemplateEmailCloture.model';
import {TemplateEmailClotureService} from 'src/app/controller/service/TemplateEmailCloture.service';
import {EtatDemandeKoscVo} from 'src/app/controller/model/EtatDemandeKosc.model';
import {EtatDemandeKoscService} from 'src/app/controller/service/EtatDemandeKosc.service';
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {TechnicienService} from 'src/app/controller/service/Technicien.service';
import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';
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
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {RegionVo} from "../../../../../../controller/model/Region.model";
import {RegionService} from "../../../../../../controller/service/Region.service";
import {
    DefaultTemplateConfigurationService
} from "../../../../../../controller/service/DefaultTemplateConfiguration.service";
import {DefaultTemplateConfigurationVo} from "../../../../../../controller/model/DefaultTemplateConfiguration.model";
import {AuthService} from "../../../../../../controller/service/Auth.service";

@Component({
    selector: 'app-ordre-kosc-suivi-edit-admin',
    templateUrl: './ordre-kosc-suivi-edit-admin.component.html',
    styleUrls: ['./ordre-kosc-suivi-edit-admin.component.css']
})
export class OrdreKoscSuiviEditAdminComponent implements OnInit {


    // methods

    constructor(private datePipe: DatePipe, private ordreKoscService: OrdreKoscService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private regionService: RegionService
        , private templateEmailClotureService: TemplateEmailClotureService
        , private etatDemandeKoscService: EtatDemandeKoscService
        , private templateEmailClientInjoinableInjoinableService: TemplateEmailClientInjoinableService
        , private technicienService: TechnicienService
        , private templateEmailReplanificationService: TemplateEmailReplanificationService
        , private templateSuiviService: TemplateSuiviService
        , private operatorService: OperatorService
        , private departementService: DepartementService
        , private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
        , private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
        , private templateEmailPlanificationService: TemplateEmailPlanificationService
        , private defaultTemplateConfigurationService: DefaultTemplateConfigurationService
        , private authService: AuthService
    ) {

    }

    showSpinner = false;
    blocked = false;
    indexEdit = 0;
    indexDemande = 0;
    indexClient = 0;
    indexManeo = 0;

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

    _validOrdreKoscReferenceWorkOrder = true;

    get validOrdreKoscReferenceWorkOrder(): boolean {
        return this._validOrdreKoscReferenceWorkOrder;
    }

    set validOrdreKoscReferenceWorkOrder(value: boolean) {
        this._validOrdreKoscReferenceWorkOrder = value;
    }

    _validOperatorReference = true;

    get validOperatorReference(): boolean {
        return this._validOperatorReference;
    }

    set validOperatorReference(value: boolean) {
        this._validOperatorReference = value;
    }

    _validOperatorLibelle = true;

    get validOperatorLibelle(): boolean {
        return this._validOperatorLibelle;
    }

    set validOperatorLibelle(value: boolean) {
        this._validOperatorLibelle = value;
    }

    _validDepartementLibelle = true;

    get validDepartementLibelle(): boolean {
        return this._validDepartementLibelle;
    }

    set validDepartementLibelle(value: boolean) {
        this._validDepartementLibelle = value;
    }

    _validDepartementCode = true;

    get validDepartementCode(): boolean {
        return this._validDepartementCode;
    }

    set validDepartementCode(value: boolean) {
        this._validDepartementCode = value;
    }

    _validDepartementRegion = true;

    get validDepartementRegion(): boolean {
        return this._validDepartementRegion;
    }

    set validDepartementRegion(value: boolean) {
        this._validDepartementRegion = value;
    }

    _validTechnicienIdentifiant = true;

    get validTechnicienIdentifiant(): boolean {
        return this._validTechnicienIdentifiant;
    }

    set validTechnicienIdentifiant(value: boolean) {
        this._validTechnicienIdentifiant = value;
    }

    _validTemplateEmailClientInjoinableInjoinableCode = true;

    get validTemplateEmailClientInjoinableInjoinableCode(): boolean {
        return this._validTemplateEmailClientInjoinableInjoinableCode;
    }

    set validTemplateEmailClientInjoinableInjoinableCode(value: boolean) {
        this._validTemplateEmailClientInjoinableInjoinableCode = value;
    }

    _validTemplateEmailClientInjoinableInjoinableLibelle = true;


// openPopup

    get validTemplateEmailClientInjoinableInjoinableLibelle(): boolean {
        return this._validTemplateEmailClientInjoinableInjoinableLibelle;
    }

    set validTemplateEmailClientInjoinableInjoinableLibelle(value: boolean) {
        this._validTemplateEmailClientInjoinableInjoinableLibelle = value;
    }

    _validTemplateEmailClientInjoinableKoscCode = true;

    get validTemplateEmailClientInjoinableKoscCode(): boolean {
        return this._validTemplateEmailClientInjoinableKoscCode;
    }

    set validTemplateEmailClientInjoinableKoscCode(value: boolean) {
        this._validTemplateEmailClientInjoinableKoscCode = value;
    }

    _validTemplateEmailClientInjoinableKoscLibelle = true;

    get validTemplateEmailClientInjoinableKoscLibelle(): boolean {
        return this._validTemplateEmailClientInjoinableKoscLibelle;
    }

    set validTemplateEmailClientInjoinableKoscLibelle(value: boolean) {
        this._validTemplateEmailClientInjoinableKoscLibelle = value;
    }

    _validTemplateEmailPlanificationCode = true;

    get validTemplateEmailPlanificationCode(): boolean {
        return this._validTemplateEmailPlanificationCode;
    }

    set validTemplateEmailPlanificationCode(value: boolean) {
        this._validTemplateEmailPlanificationCode = value;
    }

    _validTemplateEmailPlanificationLibelle = true;

    get validTemplateEmailPlanificationLibelle(): boolean {
        return this._validTemplateEmailPlanificationLibelle;
    }

    //methods

    set validTemplateEmailPlanificationLibelle(value: boolean) {
        this._validTemplateEmailPlanificationLibelle = value;
    }

    get searchOrdreKosc(): OrdreKoscVo {
        return this.ordreKoscService.searchOrdreKoscSuiviRdv;
    }

    set searchordreKosc(value: OrdreKoscVo) {
        this.ordreKoscService.searchOrdreKosc = value;
    }

    // getters and setters

    _validTemplateEmailReplanificationCode = true;

    get validTemplateEmailReplanificationCode(): boolean {
        return this._validTemplateEmailReplanificationCode;
    }

    set validTemplateEmailReplanificationCode(value: boolean) {
        this._validTemplateEmailReplanificationCode = value;
    }

    _validTemplateEmailReplanificationLibelle = true;

    get validTemplateEmailReplanificationLibelle(): boolean {
        return this._validTemplateEmailReplanificationLibelle;
    }

    set validTemplateEmailReplanificationLibelle(value: boolean) {
        this._validTemplateEmailReplanificationLibelle = value;
    }

    _validTemplateEmailReportCode = true;

    get validTemplateEmailReportCode(): boolean {
        return this._validTemplateEmailReportCode;
    }

    set validTemplateEmailReportCode(value: boolean) {
        this._validTemplateEmailReportCode = value;
    }

    _validTemplateEmailReportLibelle = true;

    get validTemplateEmailReportLibelle(): boolean {
        return this._validTemplateEmailReportLibelle;
    }

    set validTemplateEmailReportLibelle(value: boolean) {
        this._validTemplateEmailReportLibelle = value;
    }

    _validEtatDemandeKoscCode = true;

    get validEtatDemandeKoscCode(): boolean {
        return this._validEtatDemandeKoscCode;
    }

    set validEtatDemandeKoscCode(value: boolean) {
        this._validEtatDemandeKoscCode = value;
    }

    _validEtatDemandeKoscLibelle = true;

    get validEtatDemandeKoscLibelle(): boolean {
        return this._validEtatDemandeKoscLibelle;
    }

    set validEtatDemandeKoscLibelle(value: boolean) {
        this._validEtatDemandeKoscLibelle = value;
    }

    _validTemplateEmailClotureCode = true;

    get validTemplateEmailClotureCode(): boolean {
        return this._validTemplateEmailClotureCode;
    }

    set validTemplateEmailClotureCode(value: boolean) {
        this._validTemplateEmailClotureCode = value;
    }

    _validTemplateEmailClotureLibelle = true;

    get validTemplateEmailClotureLibelle(): boolean {
        return this._validTemplateEmailClotureLibelle;
    }

    set validTemplateEmailClotureLibelle(value: boolean) {
        this._validTemplateEmailClotureLibelle = value;
    }

    _validTemplateSuiviCode = true;

    get validTemplateSuiviCode(): boolean {
        return this._validTemplateSuiviCode;
    }

    set validTemplateSuiviCode(value: boolean) {
        this._validTemplateSuiviCode = value;
    }

    _validTemplateSuiviLibelle = true;

    get validTemplateSuiviLibelle(): boolean {
        return this._validTemplateSuiviLibelle;
    }

    set validTemplateSuiviLibelle(value: boolean) {
        this._validTemplateSuiviLibelle = value;
    }


    private _ReportDemandeManeo: MenuItem[];
    private _ReportDemandeClient: MenuItem[];


    get ReportDemandeManeo(): MenuItem[] {
        return this._ReportDemandeManeo;
    }

    set ReportDemandeManeo(value: MenuItem[]) {
        this._ReportDemandeManeo = value;
    }

    get ReportDemandeClient(): MenuItem[] {
        return this._ReportDemandeClient;
    }

    set ReportDemandeClient(value: MenuItem[]) {
        this._ReportDemandeClient = value;
    }

    get ordreKoscs(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscsSuiviRdv;
    }

    set ordreKoscs(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscsSuiviRdv = value;
    }

    get selectedOrdreKosc(): OrdreKoscVo {
        return this.ordreKoscService.selectedOrdreKosc;
    }

    set selectedOrdreKosc(value: OrdreKoscVo) {
        this.ordreKoscService.selectedOrdreKosc = value;
    }

    get editOrdreKoscDialog(): boolean {
        return this.ordreKoscService.editOrdreKoscDialog;

    }

    set editOrdreKoscDialog(value: boolean) {
        this.ordreKoscService.editOrdreKoscDialog = value;
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

    get createTemplateEmailPlanificationDialog(): boolean {
        return this.templateEmailPlanificationService.createTemplateEmailPlanificationDialog;
    }

    set createTemplateEmailPlanificationDialog(value: boolean) {
        this.templateEmailPlanificationService.createTemplateEmailPlanificationDialog = value;
    }

    get selectedClientInjoinable(): TemplateEmailClientInjoinableVo {
        return this.templateEmailClientInjoinableService.selectedTemplateEmailClientInjoinable;
    }

    set selectedClientInjoinable(value: TemplateEmailClientInjoinableVo) {
        this.templateEmailClientInjoinableService.selectedTemplateEmailClientInjoinable = value;
    }

    get clientInjoinables(): Array<TemplateEmailClientInjoinableVo> {
        return this.templateEmailClientInjoinableService.templateEmailClientInjoinables;
    }

    set clientInjoinables(value: Array<TemplateEmailClientInjoinableVo>) {
        this.templateEmailClientInjoinableService.templateEmailClientInjoinables = value;
    }

    get createClientInjoinableDialog(): boolean {
        return this.templateEmailClientInjoinableService.createTemplateEmailClientInjoinableDialog;
    }

    set createClientInjoinableDialog(value: boolean) {
        this.templateEmailClientInjoinableService.createTemplateEmailClientInjoinableDialog = value;
    }

    get selectedTemplateEmailClientInjoinableInjoinable(): TemplateEmailClientInjoinableVo {
        return this.templateEmailClientInjoinableInjoinableService.selectedTemplateEmailClientInjoinable;
    }

    set selectedTemplateEmailClientInjoinableInjoinable(value: TemplateEmailClientInjoinableVo) {
        this.templateEmailClientInjoinableInjoinableService.selectedTemplateEmailClientInjoinable = value;
    }

    get templateEmailClientInjoinableInjoinables(): Array<TemplateEmailClientInjoinableVo> {
        return this.templateEmailClientInjoinableInjoinableService.templateEmailClientInjoinables;
    }

    set templateEmailClientInjoinableInjoinables(value: Array<TemplateEmailClientInjoinableVo>) {
        this.templateEmailClientInjoinableInjoinableService.templateEmailClientInjoinables = value;
    }

    get createTemplateEmailClientInjoinableInjoinableDialog(): boolean {
        return this.templateEmailClientInjoinableInjoinableService.createTemplateEmailClientInjoinableDialog;
    }

    set createTemplateEmailClientInjoinableInjoinableDialog(value: boolean) {
        this.templateEmailClientInjoinableInjoinableService.createTemplateEmailClientInjoinableDialog = value;
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

    get createTemplateEmailClotureDialog(): boolean {
        return this.templateEmailClotureService.createTemplateEmailClotureDialog;
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

    get createDepartementDialog(): boolean {
        return this.departementService.createDepartementDialog;
    }

    set createDepartementDialog(value: boolean) {
        this.departementService.createDepartementDialog = value;
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

    get createTemplateEmailReplanificationDialog(): boolean {
        return this.templateEmailReplanificationService.createTemplateEmailReplanificationDialog;
    }

    set createTemplateEmailReplanificationDialog(value: boolean) {
        this.templateEmailReplanificationService.createTemplateEmailReplanificationDialog = value;
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

    get createTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this.templateEmailClientInjoinableKoscService.createTemplateEmailClientInjoinableKoscDialog;
    }

    set createTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this.templateEmailClientInjoinableKoscService.createTemplateEmailClientInjoinableKoscDialog = value;
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

    get createEtatDemandeKoscDialog(): boolean {
        return this.etatDemandeKoscService.createEtatDemandeKoscDialog;
    }

    set createEtatDemandeKoscDialog(value: boolean) {
        this.etatDemandeKoscService.createEtatDemandeKoscDialog = value;
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

    get createTemplateSuiviDialog(): boolean {
        return this.templateSuiviService.createTemplateSuiviDialog;
    }

    set createTemplateSuiviDialog(value: boolean) {
        this.templateSuiviService.createTemplateSuiviDialog = value;
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

    get createTechnicienDialog(): boolean {
        return this.technicienService.createTechnicienDialog;
    }

    set createTechnicienDialog(value: boolean) {
        this.technicienService.createTechnicienDialog = value;
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

    get createOperatorDialog(): boolean {
        return this.operatorService.createOperatorDialog;
    }

    set createOperatorDialog(value: boolean) {
        this.operatorService.createOperatorDialog = value;
    }

    get dateFormat() {
        return environment.dateFormatEdit;
    }

    get dateFormatColumn() {
        return environment.dateFormatEdit;
    }

    get selectedRegion(): RegionVo {
        return this.regionService.selectedRegion;
    }

    set selectedRegion(value: RegionVo) {
        this.regionService.selectedRegion = value;
    }

    get regions(): Array<RegionVo> {
        return this.regionService.regions;
    }

    set regions(value: Array<RegionVo>) {
        this.regionService.regions = value;
    }

    get createRegionDialog(): boolean {
        return this.regionService.createRegionDialog;
    }

    set createRegionDialog(value: boolean) {
        this.regionService.createRegionDialog = value;
    }

    get selectedDefaultTemplateConfiguration(): DefaultTemplateConfigurationVo {

        return this.defaultTemplateConfigurationService.selectedDefaultTemplateConfiguration;
    }

    set selectedDefaultTemplateConfiguration(value: DefaultTemplateConfigurationVo) {
        this.defaultTemplateConfigurationService.selectedDefaultTemplateConfiguration = value;
    }

    ngOnInit(): void {

        this.initReportDemandeManeo();
        this.initReportDemandeClient();
        this.defaultTemplateConfigurationService.findDefaultTemplateConfiguration().subscribe((data) =>
            this.selectedDefaultTemplateConfiguration = data,
        );
        this.selectedOperator = new OperatorVo();
        this.operatorService.findAll().subscribe((data) => this.operators = data);
        this.selectedDepartement = new DepartementVo();
        this.departementService.findAll().subscribe((data) => this.departements = data);
        this.selectedTechnicien = new TechnicienVo();
        this.technicienService.findAll().subscribe((data) => this.techniciens = data);
        this.selectedClientInjoinable = new TemplateEmailClientInjoinableVo();
        this.templateEmailClientInjoinableService.findAll().subscribe((data) => this.clientInjoinables = data);
        this.selectedTemplateEmailClientInjoinableInjoinable = new TemplateEmailClientInjoinableVo();
        this.templateEmailClientInjoinableInjoinableService.findAll().subscribe((data) => this.templateEmailClientInjoinableInjoinables = data);
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
        this.ordreKoscService.edit().subscribe(ordreKosc => {
            const myIndex = this.ordreKoscs.findIndex(e => e.id === this.selectedOrdreKosc.id);
            this.ordreKoscs[myIndex] = ordreKosc;
            this.ordreKoscService.deleteIfEtatNotIn(this.searchOrdreKosc.etatDemandeKoscVos, this.ordreKoscs, ordreKosc);
            this.editOrdreKoscDialog = false;
            this.submitted = false;
            this.selectedOrdreKosc = new OrdreKoscVo();

        }, error => {
            console.log(error);
        });

    }

    public async openCreateRegion(region: string) {
        const isPermistted = await this.roleService.isPermitted('Region', 'add');
        if (isPermistted) {
            this.selectedRegion = new RegionVo();
            this.createRegionDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailPlanification(templateEmailPlanification: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailPlanification', 'edit');
        if (isPermistted) {
            this.selectedTemplateEmailPlanification = new TemplateEmailPlanificationVo();
            this.createTemplateEmailPlanificationDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateClientInjoinable(clientInjoinable: string) {
        const isPermistted = await this.roleService.isPermitted('ClientInjoinable', 'edit');
        if (isPermistted) {
            this.selectedClientInjoinable = new TemplateEmailClientInjoinableVo();
            this.createClientInjoinableDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailClientInjoinableInjoinable(templateEmailClientInjoinableInjoinable: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailClientInjoinableInjoinable', 'edit');
        if (isPermistted) {
            this.selectedTemplateEmailClientInjoinableInjoinable = new TemplateEmailClientInjoinableVo();
            this.createTemplateEmailClientInjoinableInjoinableDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }


    public async openCreateDepartement(departement: string) {
        const isPermistted = await this.roleService.isPermitted('Departement', 'edit');
        if (isPermistted) {
            this.selectedDepartement = new DepartementVo();
            this.createDepartementDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailReplanification(templateEmailReplanification: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReplanification', 'edit');
        if (isPermistted) {
            this.selectedTemplateEmailReplanification = new TemplateEmailReplanificationVo();
            this.createTemplateEmailReplanificationDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailClientInjoinableKosc(templateEmailClientInjoinableKosc: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailClientInjoinableKosc', 'edit');
        if (isPermistted) {
            this.selectedTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();
            this.createTemplateEmailClientInjoinableKoscDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateEtatDemandeKosc(etatDemandeKosc: string) {
        const isPermistted = await this.roleService.isPermitted('EtatDemandeKosc', 'edit');
        if (isPermistted) {
            this.selectedEtatDemandeKosc = new EtatDemandeKoscVo();
            this.createEtatDemandeKoscDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateSuivi(templateSuivi: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateSuivi', 'edit');
        if (isPermistted) {
            this.selectedTemplateSuivi = new TemplateSuiviVo();
            this.createTemplateSuiviDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTechnicien(technicien: string) {
        const isPermistted = await this.roleService.isPermitted('Technicien', 'edit');
        if (isPermistted) {
            this.selectedTechnicien = new TechnicienVo();
            this.createTechnicienDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateOperator(operator: string) {
        const isPermistted = await this.roleService.isPermitted('Operator', 'edit');
        if (isPermistted) {
            this.selectedOperator = new OperatorVo();
            this.createOperatorDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    hideEditDialog() {
        this.editOrdreKoscDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validOrdreKoscReferenceWorkOrder = value;
    }

// validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        //this.validateOrdreKoscReferenceWorkOrder();

    }

    private validateOrdreKoscReferenceWorkOrder() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.referenceWorkOrder)) {
            this.errorMessages.push('Reference work order non valide');
            this.validOrdreKoscReferenceWorkOrder = false;
        } else {
            this.validOrdreKoscReferenceWorkOrder = true;
        }
    }

    sendMailReportDemandeManeoClientInjoignable() {

        this.validateFormReportDemandeManeoClientInjoignable();
        if (this.errorMessages.length === 0) {
            this.showSpinner = true;
            this.blocked = true;
            this.ordreKoscService.sendMailReportDemandeManeoClientInjoignable().subscribe(data => {
                this.deleteFromList(this.selectedOrdreKosc);
                    if (data.envoyeReportDemandeManeoClientInjoignable == true) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Email envoyé avec succès'
                        });
                    } else {
                        this.messageService.add({
                                severity: 'warn',
                                summary: 'Warning', detail: 'mise à jour avec succes et échec d\'envoi'
                            }
                        );
                    }
                    this.showSpinner = false;
                    this.blocked = false;
                    this.editOrdreKoscDialog = false;
                }
            );
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }

    }

    sendMailReportDemandeManeoClientJoignableAccepte() {
        this.validateFormReportDemandeManeoClientJoignableAccepte();
        if (this.errorMessages.length === 0) {
            this.showSpinner = true;
            this.blocked = true;
            this.ordreKoscService.sendMailReportDemandeManeoClientJoignableAccepte().subscribe(data => {
                this.deleteFromList(this.selectedOrdreKosc);
                    if (data.envoyeReportDemandeManeoClientJoignableAccepte == true) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Email envoyé avec succès'
                        });
                    } else {
                        this.messageService.add({
                                severity: 'warn',
                                summary: 'Warning', detail: 'mise à jour avec succes et échec d\'envoi'
                            }
                        );
                    }
                    this.showSpinner = false;
                    this.blocked = false;
                    this.editOrdreKoscDialog = false;
                }
            );
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }

    }

    sendMailReportDemandeManeoClientJoignableRefus() {
        this.validateFormReportDemandeManeoClientJoignableRefus();
        if (this.errorMessages.length === 0) {
            this.showSpinner = true;
            this.blocked = true;
            this.ordreKoscService.sendMailReportDemandeManeoClientJoignableRefus().subscribe(data => {
                this.deleteFromList(this.selectedOrdreKosc);
                    if (data.envoyeReportDemandeManeoClientJoignableRefus == true) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Email envoyé avec succès'
                        });
                        this.editOrdreKoscDialog = false;
                    } else {
                        this.messageService.add({
                                severity: 'warn',
                                summary: 'Warning', detail: 'mise à jour avec succes et échec d\'envoi'
                            }
                        );
                    }
                    this.showSpinner = false;
                    this.blocked = false;
                    this.editOrdreKoscDialog = false;
                }
            );
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    sendMailReportDemandeClientClientInjoignable() {
        this.validateFormReportDemandeClientClientInjoignable();
        if (this.errorMessages.length === 0) {
            this.showSpinner = true;
            this.blocked = true;
            this.ordreKoscService.sendMailReportDemandeClientClientInjoignable().subscribe(data => {
                this.deleteFromList(this.selectedOrdreKosc);
                    if (data.envoyeReportDemandeClientClientInjoignable == true) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Email envoyé avec succès'
                        });
                    } else {
                        this.messageService.add({
                                severity: 'warn',
                                summary: 'Warning', detail: 'mise à jour avec succes et échec d\'envoi'
                            }
                        );
                    }
                    this.showSpinner = false;
                    this.blocked = false;
                    this.editOrdreKoscDialog = false;
                }
            );
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }

    }

    sendMailReportDemandeClientClientJoignable() {
        this.validateFormReportDemandeClientClientJoignable();
        if (this.errorMessages.length === 0) {
            this.showSpinner = true;
            this.blocked = true;
            this.ordreKoscService.sendMailReportDemandeClientClientJoignable().subscribe(data => {
                this.deleteFromList(this.selectedOrdreKosc);
                    if (data.envoyeReportDemandeClientClientJoignable == true) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Email envoyé avec succès'
                        });
                    } else {
                        this.messageService.add({
                                severity: 'warn',
                                summary: 'Warning', detail: 'mise à jour avec succes et échec d\'envoi'
                            }
                        );
                    }
                    this.showSpinner = false;
                    this.blocked = false;
                    this.editOrdreKoscDialog = false;
                }
            );
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }

    }

    private reportEtats = ['report-demande-maneo-cl-inj', 'report-demande-maneo-cl-j-accepte', 'report-demande-maneo-cl-j-refus',
        'report-demande-client-cl-inj', 'report-demande-client-cl-j'];

    private initReportDemandeManeo() {
        this.ReportDemandeManeo = [
            {
                label: 'Client injoinable',
                icon: 'pi pi-file',
                command: () => this.selectTab(this.reportEtats[0])
            },
            {
                label: 'Client joinable accepte',
                icon: 'pi pi-file',
                command: () => this.selectTab(this.reportEtats[1])
            },
            {
                label: 'Client joinable refuse',
                icon: 'pi pi-file-excel',
                command: () => this.selectTab(this.reportEtats[2])
            },
        ];
    }

    private initReportDemandeClient() {
        this.ReportDemandeClient = [
            {
                label: 'Client injoinable',
                icon: 'pi pi-file',
                command: () => this.selectTab(this.reportEtats[3])
            },
            {
                label: 'Client joinable',
                icon: 'pi pi-file',
                command: () => this.selectTab(this.reportEtats[4])
            },
        ];
    }


    private selectTab(myEtat: string) {
        let userCourant = this.authService.authenticatedUser;
        this.selectedOrdreKosc.etatDemandeKoscVo = this.findEtatDemandeByCode(myEtat);
        this.indexEdit = 1;
        if (myEtat === this.reportEtats[0]) {
            this.indexDemande = 0;
            this.indexManeo = 0;
            this.selectedOrdreKosc.fromReportDemandeManeoClientInjoignable = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toReportDemandeManeoClientInjoignable = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetReportDemandeManeoClientInjoignable = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeManeoClientInjoignableVo.objet);
            this.selectedOrdreKosc.corpsReportDemandeManeoClientInjoignable = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeManeoClientInjoignableVo.corps);
            this.selectedOrdreKosc.userReportDemandeManeoClientInjoignable = userCourant;
        } else if (myEtat === this.reportEtats[1]) {
            this.indexDemande = 0;
            this.indexManeo = 1;
            this.selectedOrdreKosc.fromReportDemandeManeoClientJoignableAccepte = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toReportDemandeManeoClientJoignableAccepte = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetReportDemandeManeoClientJoignableAccepte = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeManeoClientJoignableAccepteVo.objet);
            this.selectedOrdreKosc.corpsReportDemandeManeoClientJoignableAccepte = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeManeoClientJoignableAccepteVo.corps);
            this.selectedOrdreKosc.userReportDemandeManeoClientJoignableAccepte = userCourant;
        } else if (myEtat === this.reportEtats[2]) {
            this.indexDemande = 0;
            this.indexManeo = 2;
            this.selectedOrdreKosc.fromReportDemandeManeoClientJoignableRefus = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toReportDemandeManeoClientJoignableRefus = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetReportDemandeManeoClientJoignableRefus = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeManeoClientJoignableRefusVo.objet);
            this.selectedOrdreKosc.corpsReportDemandeManeoClientJoignableRefus = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeManeoClientJoignableRefusVo.corps);
            this.selectedOrdreKosc.userReportDemandeManeoClientJoignableRefus = userCourant;
        } else if (myEtat === this.reportEtats[3]) {
            this.indexDemande = 1;
            this.indexClient = 0;
            this.selectedOrdreKosc.fromReportDemandeClientClientInjoignable = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toReportDemandeClientClientInjoignable = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetReportDemandeClientClientInjoignable = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeClientClientInjoignableVo.objet);
            this.selectedOrdreKosc.corpsReportDemandeClientClientInjoignable = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeClientClientInjoignableVo.corps);
            this.selectedOrdreKosc.userReportDemandeClientClientInjoignable = userCourant;
        } else if (myEtat === this.reportEtats[4]) {
            this.indexDemande = 1;
            this.indexClient = 1;
            this.selectedOrdreKosc.fromReportDemandeClientClientJoignable = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toReportDemandeClientClientJoignable = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetReportDemandeClientClientJoignable = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeClientClientJoignableVo.objet);
            this.selectedOrdreKosc.corpsReportDemandeClientClientJoignable = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeClientClientJoignableVo.corps);
            this.selectedOrdreKosc.userReportDemandeClientClientJoignable = userCourant;
        }


    }

    goToMailReplanification() {
        this.indexEdit = 2;
        this.selectedOrdreKosc.fromReplanification = this.selectedDefaultTemplateConfiguration.emailManeo;
        this.selectedOrdreKosc.toReplanification = this.selectedOrdreKosc.endCustumorContactEmail;
        this.selectedOrdreKosc.objetReplanification = eval(this.selectedDefaultTemplateConfiguration.templateEmailReplanificationVo.objet);
        this.selectedOrdreKosc.corpsReplanification = eval(this.selectedDefaultTemplateConfiguration.templateEmailReplanificationVo.corps);


    }

    public findEtatDemandeByCode(code: string) {
        let res = this.etatDemandeKoscService.findByCode(code, this.etatDemandeKoscs);
        return res;
    }

    sendMailReplanification() {
        this.validateFormReplanification();
        if (this.errorMessages.length === 0) {
            this.showSpinner = true;
            this.blocked = true;
            this.ordreKoscService.sendMailReplanification().subscribe(data => {
                this.deleteFromList(this.selectedOrdreKosc);
                    if (data.envoyeReplanification == true) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Email envoyé avec succès'
                        });
                        this.editOrdreKoscDialog = false;
                    } else {
                        this.messageService.add({
                            severity: 'warn',
                            summary: 'Warning', detail: 'mise à jour avec succes et échec d\'envoi'
                        });
                    }
                    this.showSpinner = false;
                    this.blocked = false;
                }
            );
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }


    private validateOrdreKoscObjetReplanification() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetReplanification)) {
            this.errorMessages.push('Objet replanification non valide');
            this.validOrdreKoscObjetReplanification = false;
        } else {
            this.validOrdreKoscObjetReplanification = true;
        }
    }

    private validateOrdreKoscCorpsReplanification() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsReplanification)) {
            this.errorMessages.push('Corps replanification non valide');
            this.validOrdreKoscCorpsReplanification = false;
        } else {
            this.validOrdreKoscCorpsReplanification = true;
        }
    }

    private validateOrdreKoscFromReplanification() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromReplanification)) {
            this.errorMessages.push('De replanification non valide');
            this.validOrdreKoscFromReplanification = false;
        } else {
            this.validOrdreKoscFromReplanification = true;
        }
    }

    private validateOrdreKoscToReplanification() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toReplanification)) {
            this.errorMessages.push('A replanification non valide');
            this.validOrdreKoscToReplanification = false;
        } else {
            this.validOrdreKoscToReplanification = true;
        }
    }

    private validateOrdreKoscDateReplanificationReplanification() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.dateAppelReplanification)) {
            this.errorMessages.push('Date replanification replanification non valide');
            this.validOrdreKoscDateReplanificationReplanification = false;
        } else {
            this.validOrdreKoscDateReplanificationReplanification = true;
        }
    }


    private validateOrdreKoscObjetReportDemandeClientClientJoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetReportDemandeClientClientJoignable)) {
            this.errorMessages.push('Objet date replanification non valide');
            this.validOrdreKoscObjetReportDemandeClientClientJoignable = false;
        } else {
            this.validOrdreKoscObjetReportDemandeClientClientJoignable = true;
        }
    }

    private validateOrdreKoscCorpsReportDemandeClientClientJoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsReportDemandeClientClientJoignable)) {
            this.errorMessages.push('Corps date replanification non valide');
            this.validOrdreKoscCorpsReportDemandeClientClientJoignable = false;
        } else {
            this.validOrdreKoscCorpsReportDemandeClientClientJoignable = true;
        }
    }

    private validateOrdreKoscFromReportDemandeClientClientJoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromReportDemandeClientClientJoignable)) {
            this.errorMessages.push('De date replanification non valide');
            this.validOrdreKoscFromReportDemandeClientClientJoignable = false;
        } else {
            this.validOrdreKoscFromReportDemandeClientClientJoignable = true;
        }
    }

    private validateOrdreKoscToReportDemandeClientClientJoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toReportDemandeClientClientJoignable)) {
            this.errorMessages.push('A date replanification non valide');
            this.validOrdreKoscToReportDemandeClientClientJoignable = false;
        } else {
            this.validOrdreKoscToReportDemandeClientClientJoignable = true;
        }
    }

    private validateOrdreKoscDateReplanificationReportDemandeClientClientJoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.dateAppelReplanification)) {
            this.errorMessages.push('Date replanification date replanification non valide');
            this.validOrdreKoscDateReplanificationReportDemandeClientClientJoignable = false;
        } else {
            this.validOrdreKoscDateReplanificationReportDemandeClientClientJoignable = true;
        }
    }


    private validateOrdreKoscObjetReportDemandeManeoClientJoignableRefus() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetReportDemandeManeoClientJoignableRefus)) {
            this.errorMessages.push('Objet report demande maneo client joignable refus non valide');
            this.validOrdreKoscObjetReportDemandeManeoClientJoignableRefus = false;
        } else {
            this.validOrdreKoscObjetReportDemandeManeoClientJoignableRefus = true;
        }
    }

    private validateOrdreKoscCorpsReportDemandeManeoClientJoignableRefus() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsReportDemandeManeoClientJoignableRefus)) {
            this.errorMessages.push('Corps report demande maneo client joignable refus non valide');
            this.validOrdreKoscCorpsReportDemandeManeoClientJoignableRefus = false;
        } else {
            this.validOrdreKoscCorpsReportDemandeManeoClientJoignableRefus = true;
        }
    }

    private validateOrdreKoscFromReportDemandeManeoClientJoignableRefus() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromReportDemandeManeoClientJoignableRefus)) {
            this.errorMessages.push('De report demande maneo client joignable refus non valide');
            this.validOrdreKoscFromReportDemandeManeoClientJoignableRefus = false;
        } else {
            this.validOrdreKoscFromReportDemandeManeoClientJoignableRefus = true;
        }
    }

    private validateOrdreKoscToReportDemandeManeoClientJoignableRefus() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toReportDemandeManeoClientJoignableRefus)) {
            this.errorMessages.push('A report demande maneo client joignable refus non valide');
            this.validOrdreKoscToReportDemandeManeoClientJoignableRefus = false;
        } else {
            this.validOrdreKoscToReportDemandeManeoClientJoignableRefus = true;
        }
    }

    private validateOrdreKoscDateReplanificationReportDemandeManeoClientJoignableRefus() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.dateAppelReplanification)) {
            this.errorMessages.push('Date replanification report demande maneo client joignable refus non valide');
            this.validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableRefus = false;
        } else {
            this.validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableRefus = true;
        }
    }


    private validateOrdreKoscObjetReportDemandeManeoClientJoignableAccepte() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetReportDemandeManeoClientJoignableAccepte)) {
            this.errorMessages.push('Objet report demande maneo client joignable accepte non valide');
            this.validOrdreKoscObjetReportDemandeManeoClientJoignableAccepte = false;
        } else {
            this.validOrdreKoscObjetReportDemandeManeoClientJoignableAccepte = true;
        }
    }

    private validateOrdreKoscCorpsReportDemandeManeoClientJoignableAccepte() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsReportDemandeManeoClientJoignableAccepte)) {
            this.errorMessages.push('Corps report demande maneo client joignable accepte non valide');
            this.validOrdreKoscCorpsReportDemandeManeoClientJoignableAccepte = false;
        } else {
            this.validOrdreKoscCorpsReportDemandeManeoClientJoignableAccepte = true;
        }
    }

    private validateOrdreKoscFromReportDemandeManeoClientJoignableAccepte() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromReportDemandeManeoClientJoignableAccepte)) {
            this.errorMessages.push('De report demande maneo client joignable accepte non valide');
            this.validOrdreKoscFromReportDemandeManeoClientJoignableAccepte = false;
        } else {
            this.validOrdreKoscFromReportDemandeManeoClientJoignableAccepte = true;
        }
    }

    private validateOrdreKoscToReportDemandeManeoClientJoignableAccepte() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toReportDemandeManeoClientJoignableAccepte)) {
            this.errorMessages.push('A report demande maneo client joignable accepte non valide');
            this.validOrdreKoscToReportDemandeManeoClientJoignableAccepte = false;
        } else {
            this.validOrdreKoscToReportDemandeManeoClientJoignableAccepte = true;
        }
    }

    private validateOrdreKoscDateReplanificationReportDemandeManeoClientJoignableAccepte() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.dateAppelReplanification)) {
            this.errorMessages.push('Date replanification report demande maneo client joignable accepte non valide');
            this.validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableAccepte = false;
        } else {
            this.validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableAccepte = true;
        }
    }


    private validateOrdreKoscObjetReportDemandeManeoClientInjoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetReportDemandeManeoClientInjoignable)) {
            this.errorMessages.push('Objet report demande maneo client injoignable non valide');
            this.validOrdreKoscObjetReportDemandeManeoClientInjoignable = false;
        } else {
            this.validOrdreKoscObjetReportDemandeManeoClientInjoignable = true;
        }
    }

    private validateOrdreKoscCorpsReportDemandeManeoClientInjoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsReportDemandeManeoClientInjoignable)) {
            this.errorMessages.push('Corps report demande maneo client injoignable non valide');
            this.validOrdreKoscCorpsReportDemandeManeoClientInjoignable = false;
        } else {
            this.validOrdreKoscCorpsReportDemandeManeoClientInjoignable = true;
        }
    }

    private validateOrdreKoscFromReportDemandeManeoClientInjoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromReportDemandeManeoClientInjoignable)) {
            this.errorMessages.push('De report demande maneo client injoignable non valide');
            this.validOrdreKoscFromReportDemandeManeoClientInjoignable = false;
        } else {
            this.validOrdreKoscFromReportDemandeManeoClientInjoignable = true;
        }
    }

    private validateOrdreKoscToReportDemandeManeoClientInjoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toReportDemandeManeoClientInjoignable)) {
            this.errorMessages.push('A report demande maneo client injoignable non valide');
            this.validOrdreKoscToReportDemandeManeoClientInjoignable = false;
        } else {
            this.validOrdreKoscToReportDemandeManeoClientInjoignable = true;
        }
    }

    private validateOrdreKoscDateReplanificationReportDemandeManeoClientInjoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.dateAppelReplanification)) {
            this.errorMessages.push('Date replanification report demande maneo client injoignable non valide');
            this.validOrdreKoscDateReplanificationReportDemandeManeoClientInjoignable = false;
        } else {
            this.validOrdreKoscDateReplanificationReportDemandeManeoClientInjoignable = true;
        }
    }


    private validateOrdreKoscObjetReportDemandeClientClientInjoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetReportDemandeClientClientInjoignable)) {
            this.errorMessages.push('Objet report demande client client injoignable non valide');
            this.validOrdreKoscObjetReportDemandeClientClientInjoignable = false;
        } else {
            this.validOrdreKoscObjetReportDemandeClientClientInjoignable = true;
        }
    }

    private validateOrdreKoscCorpsReportDemandeClientClientInjoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsReportDemandeClientClientInjoignable)) {
            this.errorMessages.push('Corps report demande client client injoignable non valide');
            this.validOrdreKoscCorpsReportDemandeClientClientInjoignable = false;
        } else {
            this.validOrdreKoscCorpsReportDemandeClientClientInjoignable = true;
        }
    }

    private validateOrdreKoscFromReportDemandeClientClientInjoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromReportDemandeClientClientInjoignable)) {
            this.errorMessages.push('De report demande client client injoignable non valide');
            this.validOrdreKoscFromReportDemandeClientClientInjoignable = false;
        } else {
            this.validOrdreKoscFromReportDemandeClientClientInjoignable = true;
        }
    }

    private validateOrdreKoscToReportDemandeClientClientInjoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toReportDemandeClientClientInjoignable)) {
            this.errorMessages.push('A report demande client client injoignable non valide');
            this.validOrdreKoscToReportDemandeClientClientInjoignable = false;
        } else {
            this.validOrdreKoscToReportDemandeClientClientInjoignable = true;
        }
    }

    private validateOrdreKoscDateReplanificationReportDemandeClientClientInjoignable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.dateAppelReplanification)) {
            this.errorMessages.push('Date replanification report demande client client injoignable non valide');
            this.validOrdreKoscDateReplanificationReportDemandeClientClientInjoignable = false;
        } else {
            this.validOrdreKoscDateReplanificationReportDemandeClientClientInjoignable = true;
        }
    }


    private validateFormReportDemandeManeoClientInjoignable(): void {
        this.errorMessages = new Array<string>();
        this.validateOrdreKoscDateReplanificationReportDemandeManeoClientInjoignable();
        this.validateOrdreKoscObjetReportDemandeManeoClientInjoignable();
        this.validateOrdreKoscCorpsReportDemandeManeoClientInjoignable();
        this.validateOrdreKoscFromReportDemandeManeoClientInjoignable();
        this.validateOrdreKoscToReportDemandeManeoClientInjoignable();

    }


    private validateFormReportDemandeManeoClientJoignableAccepte(): void {
        this.errorMessages = new Array<string>();
        this.validateOrdreKoscDateReplanificationReportDemandeManeoClientJoignableAccepte();
        this.validateOrdreKoscObjetReportDemandeManeoClientJoignableAccepte();
        this.validateOrdreKoscCorpsReportDemandeManeoClientJoignableAccepte();
        this.validateOrdreKoscFromReportDemandeManeoClientJoignableAccepte();
        this.validateOrdreKoscToReportDemandeManeoClientJoignableAccepte();

    }


    private validateFormReportDemandeManeoClientJoignableRefus(): void {
        this.errorMessages = new Array<string>();
        this.validateOrdreKoscDateReplanificationReportDemandeManeoClientJoignableRefus();
        this.validateOrdreKoscObjetReportDemandeManeoClientJoignableRefus();
        this.validateOrdreKoscCorpsReportDemandeManeoClientJoignableRefus();
        this.validateOrdreKoscFromReportDemandeManeoClientJoignableRefus();
        this.validateOrdreKoscToReportDemandeManeoClientJoignableRefus();

    }


    private validateFormReportDemandeClientClientInjoignable(): void {
        this.errorMessages = new Array<string>();
        this.validateOrdreKoscDateReplanificationReportDemandeClientClientInjoignable();
        this.validateOrdreKoscObjetReportDemandeClientClientInjoignable();
        this.validateOrdreKoscCorpsReportDemandeClientClientInjoignable();
        this.validateOrdreKoscFromReportDemandeClientClientInjoignable();
        this.validateOrdreKoscToReportDemandeClientClientInjoignable();

    }


    private validateFormReportDemandeClientClientJoignable(): void {
        this.errorMessages = new Array<string>();
        this.validateOrdreKoscDateReplanificationReportDemandeClientClientJoignable();
        this.validateOrdreKoscObjetReportDemandeClientClientJoignable();
        this.validateOrdreKoscCorpsReportDemandeClientClientJoignable();
        this.validateOrdreKoscFromReportDemandeClientClientJoignable();
        this.validateOrdreKoscToReportDemandeClientClientJoignable();

    }


    private validateFormReplanification(): void {
        this.errorMessages = new Array<string>();
        this.validateOrdreKoscDateReplanificationReplanification();
        this.validateOrdreKoscObjetReplanification();
        this.validateOrdreKoscCorpsReplanification();
        this.validateOrdreKoscFromReplanification();
        this.validateOrdreKoscToReplanification();

    }


    private _validOrdreKoscFromReplanification = true;
    private _validOrdreKoscDateReplanificationReplanification = true;
    private _validOrdreKoscToReplanification = true;
    private _validOrdreKoscObjetReplanification = true;
    private _validOrdreKoscCorpsReplanification = true;

    private _validOrdreKoscDateReplanificationReportDemandeClientClientJoignable = true;
    private _validOrdreKoscFromReportDemandeClientClientJoignable = true;
    private _validOrdreKoscToReportDemandeClientClientJoignable = true;
    private _validOrdreKoscObjetReportDemandeClientClientJoignable = true;
    private _validOrdreKoscCorpsReportDemandeClientClientJoignable = true;

    private _validOrdreKoscDateReplanificationReportDemandeClientClientInjoignable = true;
    private _validOrdreKoscFromReportDemandeClientClientInjoignable = true;
    private _validOrdreKoscToReportDemandeClientClientInjoignable = true;
    private _validOrdreKoscObjetReportDemandeClientClientInjoignable = true;
    private _validOrdreKoscCorpsReportDemandeClientClientInjoignable = true;

    private _validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableRefus = true;
    private _validOrdreKoscFromReportDemandeManeoClientJoignableRefus = true;
    private _validOrdreKoscToReportDemandeManeoClientJoignableRefus = true;
    private _validOrdreKoscObjetReportDemandeManeoClientJoignableRefus = true;
    private _validOrdreKoscCorpsReportDemandeManeoClientJoignableRefus = true;

    private _validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableAccepte = true;
    private _validOrdreKoscFromReportDemandeManeoClientJoignableAccepte = true;
    private _validOrdreKoscToReportDemandeManeoClientJoignableAccepte = true;
    private _validOrdreKoscObjetReportDemandeManeoClientJoignableAccepte = true;
    private _validOrdreKoscCorpsReportDemandeManeoClientJoignableAccepte = true;

    private _validOrdreKoscDateReplanificationReportDemandeManeoClientInjoignable = true;
    private _validOrdreKoscFromReportDemandeManeoClientInjoignable = true;
    private _validOrdreKoscToReportDemandeManeoClientInjoignable = true;
    private _validOrdreKoscObjetReportDemandeManeoClientInjoignable = true;
    private _validOrdreKoscCorpsReportDemandeManeoClientInjoignable = true;


    get validOrdreKoscDateReplanificationReplanification(): boolean {
        return this._validOrdreKoscDateReplanificationReplanification;
    }

    set validOrdreKoscDateReplanificationReplanification(value: boolean) {
        this._validOrdreKoscDateReplanificationReplanification = value;
    }

    get validOrdreKoscDateReplanificationReportDemandeClientClientJoignable(): boolean {
        return this._validOrdreKoscDateReplanificationReportDemandeClientClientJoignable;
    }

    set validOrdreKoscDateReplanificationReportDemandeClientClientJoignable(value: boolean) {
        this._validOrdreKoscDateReplanificationReportDemandeClientClientJoignable = value;
    }

    get validOrdreKoscDateReplanificationReportDemandeClientClientInjoignable(): boolean {
        return this._validOrdreKoscDateReplanificationReportDemandeClientClientInjoignable;
    }

    set validOrdreKoscDateReplanificationReportDemandeClientClientInjoignable(value: boolean) {
        this._validOrdreKoscDateReplanificationReportDemandeClientClientInjoignable = value;
    }

    get validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableRefus(): boolean {
        return this._validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableRefus;
    }

    set validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableRefus(value: boolean) {
        this._validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableRefus = value;
    }

    get validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableAccepte(): boolean {
        return this._validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableAccepte;
    }

    set validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableAccepte(value: boolean) {
        this._validOrdreKoscDateReplanificationReportDemandeManeoClientJoignableAccepte = value;
    }

    get validOrdreKoscDateReplanificationReportDemandeManeoClientInjoignable(): boolean {
        return this._validOrdreKoscDateReplanificationReportDemandeManeoClientInjoignable;
    }

    set validOrdreKoscDateReplanificationReportDemandeManeoClientInjoignable(value: boolean) {
        this._validOrdreKoscDateReplanificationReportDemandeManeoClientInjoignable = value;
    }

    get validOrdreKoscFromReplanification(): boolean {
        return this._validOrdreKoscFromReplanification;
    }

    set validOrdreKoscFromReplanification(value: boolean) {
        this._validOrdreKoscFromReplanification = value;
    }

    get validOrdreKoscToReplanification(): boolean {
        return this._validOrdreKoscToReplanification;
    }

    set validOrdreKoscToReplanification(value: boolean) {
        this._validOrdreKoscToReplanification = value;
    }

    get validOrdreKoscObjetReplanification(): boolean {
        return this._validOrdreKoscObjetReplanification;
    }

    set validOrdreKoscObjetReplanification(value: boolean) {
        this._validOrdreKoscObjetReplanification = value;
    }

    get validOrdreKoscCorpsReplanification(): boolean {
        return this._validOrdreKoscCorpsReplanification;
    }

    set validOrdreKoscCorpsReplanification(value: boolean) {
        this._validOrdreKoscCorpsReplanification = value;
    }

    get validOrdreKoscFromReportDemandeClientClientJoignable(): boolean {
        return this._validOrdreKoscFromReportDemandeClientClientJoignable;
    }

    set validOrdreKoscFromReportDemandeClientClientJoignable(value: boolean) {
        this._validOrdreKoscFromReportDemandeClientClientJoignable = value;
    }

    get validOrdreKoscToReportDemandeClientClientJoignable(): boolean {
        return this._validOrdreKoscToReportDemandeClientClientJoignable;
    }

    set validOrdreKoscToReportDemandeClientClientJoignable(value: boolean) {
        this._validOrdreKoscToReportDemandeClientClientJoignable = value;
    }

    get validOrdreKoscObjetReportDemandeClientClientJoignable(): boolean {
        return this._validOrdreKoscObjetReportDemandeClientClientJoignable;
    }

    set validOrdreKoscObjetReportDemandeClientClientJoignable(value: boolean) {
        this._validOrdreKoscObjetReportDemandeClientClientJoignable = value;
    }

    get validOrdreKoscCorpsReportDemandeClientClientJoignable(): boolean {
        return this._validOrdreKoscCorpsReportDemandeClientClientJoignable;
    }

    set validOrdreKoscCorpsReportDemandeClientClientJoignable(value: boolean) {
        this._validOrdreKoscCorpsReportDemandeClientClientJoignable = value;
    }

    get validOrdreKoscFromReportDemandeClientClientInjoignable(): boolean {
        return this._validOrdreKoscFromReportDemandeClientClientInjoignable;
    }

    set validOrdreKoscFromReportDemandeClientClientInjoignable(value: boolean) {
        this._validOrdreKoscFromReportDemandeClientClientInjoignable = value;
    }

    get validOrdreKoscToReportDemandeClientClientInjoignable(): boolean {
        return this._validOrdreKoscToReportDemandeClientClientInjoignable;
    }

    set validOrdreKoscToReportDemandeClientClientInjoignable(value: boolean) {
        this._validOrdreKoscToReportDemandeClientClientInjoignable = value;
    }

    get validOrdreKoscObjetReportDemandeClientClientInjoignable(): boolean {
        return this._validOrdreKoscObjetReportDemandeClientClientInjoignable;
    }

    set validOrdreKoscObjetReportDemandeClientClientInjoignable(value: boolean) {
        this._validOrdreKoscObjetReportDemandeClientClientInjoignable = value;
    }

    get validOrdreKoscCorpsReportDemandeClientClientInjoignable(): boolean {
        return this._validOrdreKoscCorpsReportDemandeClientClientInjoignable;
    }

    set validOrdreKoscCorpsReportDemandeClientClientInjoignable(value: boolean) {
        this._validOrdreKoscCorpsReportDemandeClientClientInjoignable = value;
    }

    get validOrdreKoscFromReportDemandeManeoClientJoignableRefus(): boolean {
        return this._validOrdreKoscFromReportDemandeManeoClientJoignableRefus;
    }

    set validOrdreKoscFromReportDemandeManeoClientJoignableRefus(value: boolean) {
        this._validOrdreKoscFromReportDemandeManeoClientJoignableRefus = value;
    }

    get validOrdreKoscToReportDemandeManeoClientJoignableRefus(): boolean {
        return this._validOrdreKoscToReportDemandeManeoClientJoignableRefus;
    }

    set validOrdreKoscToReportDemandeManeoClientJoignableRefus(value: boolean) {
        this._validOrdreKoscToReportDemandeManeoClientJoignableRefus = value;
    }

    get validOrdreKoscObjetReportDemandeManeoClientJoignableRefus(): boolean {
        return this._validOrdreKoscObjetReportDemandeManeoClientJoignableRefus;
    }

    set validOrdreKoscObjetReportDemandeManeoClientJoignableRefus(value: boolean) {
        this._validOrdreKoscObjetReportDemandeManeoClientJoignableRefus = value;
    }

    get validOrdreKoscCorpsReportDemandeManeoClientJoignableRefus(): boolean {
        return this._validOrdreKoscCorpsReportDemandeManeoClientJoignableRefus;
    }

    set validOrdreKoscCorpsReportDemandeManeoClientJoignableRefus(value: boolean) {
        this._validOrdreKoscCorpsReportDemandeManeoClientJoignableRefus = value;
    }

    get validOrdreKoscFromReportDemandeManeoClientJoignableAccepte(): boolean {
        return this._validOrdreKoscFromReportDemandeManeoClientJoignableAccepte;
    }

    set validOrdreKoscFromReportDemandeManeoClientJoignableAccepte(value: boolean) {
        this._validOrdreKoscFromReportDemandeManeoClientJoignableAccepte = value;
    }

    get validOrdreKoscToReportDemandeManeoClientJoignableAccepte(): boolean {
        return this._validOrdreKoscToReportDemandeManeoClientJoignableAccepte;
    }

    set validOrdreKoscToReportDemandeManeoClientJoignableAccepte(value: boolean) {
        this._validOrdreKoscToReportDemandeManeoClientJoignableAccepte = value;
    }

    get validOrdreKoscObjetReportDemandeManeoClientJoignableAccepte(): boolean {
        return this._validOrdreKoscObjetReportDemandeManeoClientJoignableAccepte;
    }

    set validOrdreKoscObjetReportDemandeManeoClientJoignableAccepte(value: boolean) {
        this._validOrdreKoscObjetReportDemandeManeoClientJoignableAccepte = value;
    }

    get validOrdreKoscCorpsReportDemandeManeoClientJoignableAccepte(): boolean {
        return this._validOrdreKoscCorpsReportDemandeManeoClientJoignableAccepte;
    }

    set validOrdreKoscCorpsReportDemandeManeoClientJoignableAccepte(value: boolean) {
        this._validOrdreKoscCorpsReportDemandeManeoClientJoignableAccepte = value;
    }

    get validOrdreKoscFromReportDemandeManeoClientInjoignable(): boolean {
        return this._validOrdreKoscFromReportDemandeManeoClientInjoignable;
    }

    set validOrdreKoscFromReportDemandeManeoClientInjoignable(value: boolean) {
        this._validOrdreKoscFromReportDemandeManeoClientInjoignable = value;
    }

    get validOrdreKoscToReportDemandeManeoClientInjoignable(): boolean {
        return this._validOrdreKoscToReportDemandeManeoClientInjoignable;
    }

    set validOrdreKoscToReportDemandeManeoClientInjoignable(value: boolean) {
        this._validOrdreKoscToReportDemandeManeoClientInjoignable = value;
    }

    get validOrdreKoscObjetReportDemandeManeoClientInjoignable(): boolean {
        return this._validOrdreKoscObjetReportDemandeManeoClientInjoignable;
    }

    set validOrdreKoscObjetReportDemandeManeoClientInjoignable(value: boolean) {
        this._validOrdreKoscObjetReportDemandeManeoClientInjoignable = value;
    }

    get validOrdreKoscCorpsReportDemandeManeoClientInjoignable(): boolean {
        return this._validOrdreKoscCorpsReportDemandeManeoClientInjoignable;
    }

    set validOrdreKoscCorpsReportDemandeManeoClientInjoignable(value: boolean) {
        this._validOrdreKoscCorpsReportDemandeManeoClientInjoignable = value;
    }


    private deleteFromList(selectedOrdreKosc: OrdreKoscVo) {
        const position = this.ordreKoscs.findIndex(e => e.id == selectedOrdreKosc.id);
        position > -1 ? this.ordreKoscs.splice(position, 1) : false;
    }
    public formatDdMmYy(date: Date): string {
        return date != null ? this.datePipe.transform(date, 'd/M/yyyy') : '';
    }

    public formatHhMm(date: Date): string {
        return date != null ? this.datePipe.transform(date, 'hh:mm') : '';
    }
}
