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
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {TemplateSuiviVo} from 'src/app/controller/model/TemplateSuivi.model';
import {TemplateSuiviService} from 'src/app/controller/service/TemplateSuivi.service';
import {OperatorVo} from 'src/app/controller/model/Operator.model';
import {OperatorService} from 'src/app/controller/service/Operator.service';
import {SourceReplanificationVo} from 'src/app/controller/model/SourceReplanification.model';
import {SourceReplanificationService} from 'src/app/controller/service/SourceReplanification.service';
import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
import {CauseKoOkVo} from 'src/app/controller/model/CauseKoOk.model';
import {CauseKoOkService} from 'src/app/controller/service/CauseKoOk.service';
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {EtatDemandeKoscVo} from 'src/app/controller/model/EtatDemandeKosc.model';
import {EtatDemandeKoscService} from 'src/app/controller/service/EtatDemandeKosc.service';
import {TemplateEmailFtlVo} from 'src/app/controller/model/TemplateEmailFtl.model';
import {TemplateEmailFtlService} from 'src/app/controller/service/TemplateEmailFtl.service';
import {TemplateEmailClotureVo} from 'src/app/controller/model/TemplateEmailCloture.model';
import {TemplateEmailClotureService} from 'src/app/controller/service/TemplateEmailCloture.service';
import {TemplateEmailRefusVo} from 'src/app/controller/model/TemplateEmailRefus.model';
import {TemplateEmailRefusService} from 'src/app/controller/service/TemplateEmailRefus.service';
import {TemplateEmailConfirmationClientVo} from 'src/app/controller/model/TemplateEmailConfirmationClient.model';
import {
    TemplateEmailConfirmationClientService
} from 'src/app/controller/service/TemplateEmailConfirmationClient.service';
import {DepartementVo} from 'src/app/controller/model/Departement.model';
import {DepartementService} from 'src/app/controller/service/Departement.service';
import {TemplateEmailMauvaisContactVo} from 'src/app/controller/model/TemplateEmailMauvaisContact.model';
import {TemplateEmailMauvaisContactService} from 'src/app/controller/service/TemplateEmailMauvaisContact.service';
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {TechnicienService} from 'src/app/controller/service/Technicien.service';
import {TemplateEmailCriVo} from 'src/app/controller/model/TemplateEmailCri.model';
import {TemplateEmailCriService} from 'src/app/controller/service/TemplateEmailCri.service';

@Component({
    selector: 'app-ordre-kosc-view-admin',
    templateUrl: './ordre-kosc-view-admin.component.html',
    styleUrls: ['./ordre-kosc-view-admin.component.css']
})
export class OrdreKoscViewAdminComponent implements OnInit {


    constructor(private datePipe: DatePipe, private ordreKoscService: OrdreKoscService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private templateEmailReplanificationService: TemplateEmailReplanificationService
        , private templateEmailPlanificationService: TemplateEmailPlanificationService
        , private templateSuiviService: TemplateSuiviService
        , private operatorService: OperatorService
        , private sourceReplanificationService: SourceReplanificationService
        , private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
        , private causeKoOkService: CauseKoOkService
        , private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
        , private etatDemandeKoscService: EtatDemandeKoscService
        , private templateEmailFtlService: TemplateEmailFtlService
        , private templateEmailClotureService: TemplateEmailClotureService
        , private templateEmailRefusService: TemplateEmailRefusService
        , private templateEmailConfirmationClientService: TemplateEmailConfirmationClientService
        , private departementService: DepartementService
        , private templateEmailMauvaisContactService: TemplateEmailMauvaisContactService
        , private technicienService: TechnicienService
        , private templateEmailCriService: TemplateEmailCriService
    ) {
    }



    get ordreKoscs(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscs;
    }

    set ordreKoscs(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscs = value;
    }

// getters and setters



    get selectedIndexView(): number {
        return this.ordreKoscService.selectedIndexView;
    }

    set selectedIndexView(value: number) {
        this.ordreKoscService.selectedIndexView = value;
    }

    get selectedKoscTabView(): number {
        return this.ordreKoscService.selectedKoscTabView;
    }

    set selectedKoscTabView(value: number) {
        this.ordreKoscService.selectedKoscTabView = value;
    }


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

    get selectedTemplateEmailCri(): TemplateEmailCriVo {
        return this.templateEmailCriService.selectedTemplateEmailCri;
    }

    set selectedTemplateEmailCri(value: TemplateEmailCriVo) {
        this.templateEmailCriService.selectedTemplateEmailCri = value;
    }

    get templateEmailCris(): Array<TemplateEmailCriVo> {
        return this.templateEmailCriService.templateEmailCris;
    }

    set templateEmailCris(value: Array<TemplateEmailCriVo>) {
        this.templateEmailCriService.templateEmailCris = value;
    }

    get editTemplateEmailCriDialog(): boolean {
        return this.templateEmailCriService.editTemplateEmailCriDialog;
    }

    set editTemplateEmailCriDialog(value: boolean) {
        this.templateEmailCriService.editTemplateEmailCriDialog = value;
    }

    get selectedTemplateEmailFtl(): TemplateEmailFtlVo {
        return this.templateEmailFtlService.selectedTemplateEmailFtl;
    }

    set selectedTemplateEmailFtl(value: TemplateEmailFtlVo) {
        this.templateEmailFtlService.selectedTemplateEmailFtl = value;
    }

    get templateEmailFtls(): Array<TemplateEmailFtlVo> {
        return this.templateEmailFtlService.templateEmailFtls;
    }

    set templateEmailFtls(value: Array<TemplateEmailFtlVo>) {
        this.templateEmailFtlService.templateEmailFtls = value;
    }

    get editTemplateEmailFtlDialog(): boolean {
        return this.templateEmailFtlService.editTemplateEmailFtlDialog;
    }

    set editTemplateEmailFtlDialog(value: boolean) {
        this.templateEmailFtlService.editTemplateEmailFtlDialog = value;
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

    get selectedSourceReplanification(): SourceReplanificationVo {
        return this.sourceReplanificationService.selectedSourceReplanification;
    }

    set selectedSourceReplanification(value: SourceReplanificationVo) {
        this.sourceReplanificationService.selectedSourceReplanification = value;
    }

    get sourceReplanifications(): Array<SourceReplanificationVo> {
        return this.sourceReplanificationService.sourceReplanifications;
    }

    set sourceReplanifications(value: Array<SourceReplanificationVo>) {
        this.sourceReplanificationService.sourceReplanifications = value;
    }

    get editSourceReplanificationDialog(): boolean {
        return this.sourceReplanificationService.editSourceReplanificationDialog;
    }

    set editSourceReplanificationDialog(value: boolean) {
        this.sourceReplanificationService.editSourceReplanificationDialog = value;
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

    get selectedTemplateEmailConfirmationClient(): TemplateEmailConfirmationClientVo {
        return this.templateEmailConfirmationClientService.selectedTemplateEmailConfirmationClient;
    }

    set selectedTemplateEmailConfirmationClient(value: TemplateEmailConfirmationClientVo) {
        this.templateEmailConfirmationClientService.selectedTemplateEmailConfirmationClient = value;
    }

    get templateEmailConfirmationClients(): Array<TemplateEmailConfirmationClientVo> {
        return this.templateEmailConfirmationClientService.templateEmailConfirmationClients;
    }

    set templateEmailConfirmationClients(value: Array<TemplateEmailConfirmationClientVo>) {
        this.templateEmailConfirmationClientService.templateEmailConfirmationClients = value;
    }

    get editTemplateEmailConfirmationClientDialog(): boolean {
        return this.templateEmailConfirmationClientService.editTemplateEmailConfirmationClientDialog;
    }

    set editTemplateEmailConfirmationClientDialog(value: boolean) {
        this.templateEmailConfirmationClientService.editTemplateEmailConfirmationClientDialog = value;
    }

    get selectedTemplateEmailRefus(): TemplateEmailRefusVo {
        return this.templateEmailRefusService.selectedTemplateEmailRefus;
    }

    set selectedTemplateEmailRefus(value: TemplateEmailRefusVo) {
        this.templateEmailRefusService.selectedTemplateEmailRefus = value;
    }

    get templateEmailRefuss(): Array<TemplateEmailRefusVo> {
        return this.templateEmailRefusService.templateEmailRefuss;
    }

    set templateEmailRefuss(value: Array<TemplateEmailRefusVo>) {
        this.templateEmailRefusService.templateEmailRefuss = value;
    }

    get editTemplateEmailRefusDialog(): boolean {
        return this.templateEmailRefusService.editTemplateEmailRefusDialog;
    }

    set editTemplateEmailRefusDialog(value: boolean) {
        this.templateEmailRefusService.editTemplateEmailRefusDialog = value;
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

    get selectedTemplateEmailMauvaisContact(): TemplateEmailMauvaisContactVo {
        return this.templateEmailMauvaisContactService.selectedTemplateEmailMauvaisContact;
    }

    set selectedTemplateEmailMauvaisContact(value: TemplateEmailMauvaisContactVo) {
        this.templateEmailMauvaisContactService.selectedTemplateEmailMauvaisContact = value;
    }

    get templateEmailMauvaisContacts(): Array<TemplateEmailMauvaisContactVo> {
        return this.templateEmailMauvaisContactService.templateEmailMauvaisContacts;
    }

    set templateEmailMauvaisContacts(value: Array<TemplateEmailMauvaisContactVo>) {
        this.templateEmailMauvaisContactService.templateEmailMauvaisContacts = value;
    }

    get editTemplateEmailMauvaisContactDialog(): boolean {
        return this.templateEmailMauvaisContactService.editTemplateEmailMauvaisContactDialog;
    }

    set editTemplateEmailMauvaisContactDialog(value: boolean) {
        this.templateEmailMauvaisContactService.editTemplateEmailMauvaisContactDialog = value;
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

    get selectedCauseKoOk(): CauseKoOkVo {
        return this.causeKoOkService.selectedCauseKoOk;
    }

    set selectedCauseKoOk(value: CauseKoOkVo) {
        this.causeKoOkService.selectedCauseKoOk = value;
    }

    get causeKoOks(): Array<CauseKoOkVo> {
        return this.causeKoOkService.causeKoOks;
    }

    set causeKoOks(value: Array<CauseKoOkVo>) {
        this.causeKoOkService.causeKoOks = value;
    }

    get editCauseKoOkDialog(): boolean {
        return this.causeKoOkService.editCauseKoOkDialog;
    }

    set editCauseKoOkDialog(value: boolean) {
        this.causeKoOkService.editCauseKoOkDialog = value;
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
        this.technicienService.findAll().subscribe((data) => this.techniciens = data);
        this.selectedTemplateEmailPlanification = new TemplateEmailPlanificationVo();
        this.templateEmailPlanificationService.findAll().subscribe((data) => this.templateEmailPlanifications = data);

        this.selectedTemplateEmailReplanification = new TemplateEmailReplanificationVo();
        this.templateEmailReplanificationService.findAll().subscribe((data) => this.templateEmailReplanifications = data);
        this.selectedTemplateEmailRefus = new TemplateEmailRefusVo();
        this.templateEmailRefusService.findAll().subscribe((data) => this.templateEmailRefuss = data);
        this.selectedTemplateEmailMauvaisContact = new TemplateEmailMauvaisContactVo();
        this.templateEmailMauvaisContactService.findAll().subscribe((data) => this.templateEmailMauvaisContacts = data);
        this.selectedTemplateEmailConfirmationClient = new TemplateEmailConfirmationClientVo();
        this.templateEmailConfirmationClientService.findAll().subscribe((data) => this.templateEmailConfirmationClients = data);
        this.selectedTemplateEmailCri = new TemplateEmailCriVo();
        this.templateEmailCriService.findAll().subscribe((data) => this.templateEmailCris = data);
        this.selectedTemplateEmailFtl = new TemplateEmailFtlVo();
        this.templateEmailFtlService.findAll().subscribe((data) => this.templateEmailFtls = data);
        this.selectedTemplateEmailClientInjoinable = new TemplateEmailClientInjoinableVo();
        this.templateEmailClientInjoinableService.findAll().subscribe((data) => this.templateEmailClientInjoinables = data);
        this.selectedTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();
        this.templateEmailClientInjoinableKoscService.findAll().subscribe((data) => this.templateEmailClientInjoinableKoscs = data);
        this.selectedEtatDemandeKosc = new EtatDemandeKoscVo();
        this.etatDemandeKoscService.findAll().subscribe((data) => this.etatDemandeKoscs = data);
        this.selectedTemplateEmailCloture = new TemplateEmailClotureVo();
        this.templateEmailClotureService.findAll().subscribe((data) => this.templateEmailClotures = data);
        this.selectedTemplateSuivi = new TemplateSuiviVo();
        this.templateSuiviService.findAll().subscribe((data) => this.templateSuivis = data);
        this.selectedCauseKoOk = new CauseKoOkVo();
        this.causeKoOkService.findAll().subscribe((data) => this.causeKoOks = data);
        this.selectedSourceReplanification = new SourceReplanificationVo();
        this.sourceReplanificationService.findAll().subscribe((data) => this.sourceReplanifications = data);
    }

    hideViewDialog() {
        this.viewOrdreKoscDialog = false;
    }
}
