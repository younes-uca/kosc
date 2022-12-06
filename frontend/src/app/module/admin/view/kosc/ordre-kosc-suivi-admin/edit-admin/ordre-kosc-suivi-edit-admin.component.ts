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
                ,private authService:AuthService
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
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendMailReportDemandeManeoClientInjoignable().subscribe(data => {
                if (data.envoyeReportDemandeManeoClientInjoignable == true) {
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
            }
        );

    }

    sendMailReportDemandeManeoClientJoignableAccepte() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendMailReportDemandeManeoClientJoignableAccepte().subscribe(data => {
                if (data.envoyeReportDemandeManeoClientJoignableAccepte == true) {
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
            }
        );

    }

    sendMailReportDemandeManeoClientJoignableRefus() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendMailReportDemandeManeoClientJoignableRefus().subscribe(data => {
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
            }
        );

    }

    sendMailReportDemandeClientClientInjoignable() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendMailReportDemandeClientClientInjoignable().subscribe(data => {
                if (data.envoyeReportDemandeClientClientInjoignable == true) {
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
            }
        );

    }

    sendMailReportDemandeClientClientJoignable() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendMailReportDemandeClientClientJoignable().subscribe(data => {
                if (data.envoyeReportDemandeClientClientJoignable == true) {
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
            }
        );

    }
    private reportEtats = ['report-demande-maneo-cl-inj', 'report-demande-maneo-cl-j-accepte', 'report-demande-maneo-cl-j-refus',
        'report-demande-client-cl-inj'  ,'report-demande-client-cl-j'];
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
            this.selectedOrdreKosc.userReportDemandeManeoClientJoignableAccepte=userCourant;
        } else if (myEtat === this.reportEtats[2]) {
            this.indexDemande = 0;
            this.indexManeo = 2;
            this.selectedOrdreKosc.fromReportDemandeManeoClientJoignableRefus = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toReportDemandeManeoClientJoignableRefus = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetReportDemandeManeoClientJoignableRefus = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeManeoClientJoignableRefusVo.objet);
            this.selectedOrdreKosc.corpsReportDemandeManeoClientJoignableRefus = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeManeoClientJoignableRefusVo.corps);
            this.selectedOrdreKosc.userReportDemandeManeoClientJoignableRefus=userCourant;
        }else if (myEtat === this.reportEtats[3]) {
            this.indexDemande = 1;
            this.indexClient = 0;
            this.selectedOrdreKosc.fromReportDemandeClientClientInjoignable = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toReportDemandeClientClientInjoignable = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetReportDemandeClientClientInjoignable = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeClientClientInjoignableVo.objet);
            this.selectedOrdreKosc.corpsReportDemandeClientClientInjoignable = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeClientClientInjoignableVo.corps);
            this.selectedOrdreKosc.userReportDemandeClientClientInjoignable=userCourant;
        }else if (myEtat === this.reportEtats[4]) {
            this.indexDemande = 1;
            this.indexClient = 1;
            this.selectedOrdreKosc.fromReportDemandeClientClientJoignable = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toReportDemandeClientClientJoignable = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetReportDemandeClientClientJoignable = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeClientClientJoignableVo.objet);
            this.selectedOrdreKosc.corpsReportDemandeClientClientJoignable = eval(this.selectedDefaultTemplateConfiguration.templateEmailReportDemandeClientClientJoignableVo.corps);
            this.selectedOrdreKosc.userReportDemandeClientClientJoignable=userCourant;
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
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendMailReplanification().subscribe(data => {
                if (data.envoyeReplanification == true) {

                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Email envoyé avec succès'
                    });
                    this.editOrdreKoscDialog = false;
                } else  {
                    this.messageService.add({
                        severity: 'warn',
                        summary: 'Warning', detail: 'mise à jour avec succes et échec d\'envoi'
                    });
                }
                this.showSpinner = false;
                this.blocked = false;
            }
        );
    }



}
