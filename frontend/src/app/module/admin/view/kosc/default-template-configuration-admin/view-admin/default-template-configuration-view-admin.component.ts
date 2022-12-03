import {Component, OnInit} from '@angular/core';
import {DefaultTemplateConfigurationService} from 'src/app/controller/service/DefaultTemplateConfiguration.service';
import {DefaultTemplateConfigurationVo} from 'src/app/controller/model/DefaultTemplateConfiguration.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';
import {TemplateEmailFtlVo} from 'src/app/controller/model/TemplateEmailFtl.model';
import {TemplateEmailFtlService} from 'src/app/controller/service/TemplateEmailFtl.service';
import {TemplateEmailClotureVo} from 'src/app/controller/model/TemplateEmailCloture.model';
import {TemplateEmailClotureService} from 'src/app/controller/service/TemplateEmailCloture.service';
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {TemplateSuiviVo} from 'src/app/controller/model/TemplateSuivi.model';
import {TemplateSuiviService} from 'src/app/controller/service/TemplateSuivi.service';
import {TemplateEmailRefusVo} from 'src/app/controller/model/TemplateEmailRefus.model';
import {TemplateEmailRefusService} from 'src/app/controller/service/TemplateEmailRefus.service';
import {TemplateEmailConfirmationClientVo} from 'src/app/controller/model/TemplateEmailConfirmationClient.model';
import {
    TemplateEmailConfirmationClientService
} from 'src/app/controller/service/TemplateEmailConfirmationClient.service';
import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
import {TemplateEmailMauvaisContactVo} from 'src/app/controller/model/TemplateEmailMauvaisContact.model';
import {TemplateEmailMauvaisContactService} from 'src/app/controller/service/TemplateEmailMauvaisContact.service';
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {TemplateEmailCriVo} from 'src/app/controller/model/TemplateEmailCri.model';
import {TemplateEmailCriService} from 'src/app/controller/service/TemplateEmailCri.service';
import {
    TemplateEmailReportDemandeManeoClientInjoignableVo
} from "../../../../../../controller/model/TemplateEmailReportDemandeManeoClientInjoignable.model";
import {
    TemplateEmailReportDemandeManeoClientJoignableAccepteVo
} from "../../../../../../controller/model/TemplateEmailReportDemandeManeoClientJoignableAccepte.model";
import {
    TemplateEmailReportDemandeManeoClientJoignableRefusVo
} from "../../../../../../controller/model/TemplateEmailReportDemandeManeoClientJoignableRefus.model";
import {
    TemplateEmailReportDemandeClientClientInjoignableVo
} from "../../../../../../controller/model/TemplateEmailReportDemandeClientClientInjoignable.model";
import {
    TemplateEmailReportDemandeClientClientJoignableVo
} from "../../../../../../controller/model/TemplateEmailReportDemandeClientClientJoignable.model";
import {
    TemplateEmailReportDemandeManeoClientInjoignableService
} from "../../../../../../controller/service/TemplateEmailReportDemandeManeoClientInjoignable.service";
import {
    TemplateEmailReportDemandeManeoClientJoignableAccepteService
} from "../../../../../../controller/service/TemplateEmailReportDemandeManeoClientJoignableAccepte.service";
import {
    TemplateEmailReportDemandeManeoClientJoignableRefusService
} from "../../../../../../controller/service/TemplateEmailReportDemandeManeoClientJoignableRefus.service";
import {
    TemplateEmailReportDemandeClientClientInjoignableService
} from "../../../../../../controller/service/TemplateEmailReportDemandeClientClientInjoignable.service";
import {
    TemplateEmailReportDemandeClientClientJoignableService
} from "../../../../../../controller/service/TemplateEmailReportDemandeClientClientJoignable.service";

@Component({
    selector: 'app-default-template-configuration-view-admin',
    templateUrl: './default-template-configuration-view-admin.component.html',
    styleUrls: ['./default-template-configuration-view-admin.component.css']
})
export class DefaultTemplateConfigurationViewAdminComponent implements OnInit {


    constructor(private datePipe: DatePipe, private defaultTemplateConfigurationService: DefaultTemplateConfigurationService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private templateEmailReplanificationService: TemplateEmailReplanificationService
        , private templateEmailFtlService: TemplateEmailFtlService
        , private templateEmailClotureService: TemplateEmailClotureService
        , private templateEmailPlanificationService: TemplateEmailPlanificationService
        , private templateSuiviService: TemplateSuiviService
        , private templateEmailRefusService: TemplateEmailRefusService
        , private templateEmailConfirmationClientService: TemplateEmailConfirmationClientService
        , private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
        , private templateEmailMauvaisContactService: TemplateEmailMauvaisContactService
        , private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
        , private templateEmailCriService: TemplateEmailCriService
        , private templateEmailReportDemandeManeoClientInjoignableService: TemplateEmailReportDemandeManeoClientInjoignableService
        , private templateEmailReportDemandeManeoClientJoignableAccepteService: TemplateEmailReportDemandeManeoClientJoignableAccepteService
        , private templateEmailReportDemandeManeoClientJoignableRefusService: TemplateEmailReportDemandeManeoClientJoignableRefusService
        , private templateEmailReportDemandeClientClientInjoignableService: TemplateEmailReportDemandeClientClientInjoignableService
        , private templateEmailReportDemandeClientClientJoignableService: TemplateEmailReportDemandeClientClientJoignableService

    ) {
    }

    get defaultTemplateConfigurations(): Array<DefaultTemplateConfigurationVo> {
        return this.defaultTemplateConfigurationService.defaultTemplateConfigurations;
    }

    set defaultTemplateConfigurations(value: Array<DefaultTemplateConfigurationVo>) {
        this.defaultTemplateConfigurationService.defaultTemplateConfigurations = value;
    }

// getters and setters

    get selectedDefaultTemplateConfiguration(): DefaultTemplateConfigurationVo {
        return this.defaultTemplateConfigurationService.selectedDefaultTemplateConfiguration;
    }

    set selectedDefaultTemplateConfiguration(value: DefaultTemplateConfigurationVo) {
        this.defaultTemplateConfigurationService.selectedDefaultTemplateConfiguration = value;
    }

    get viewDefaultTemplateConfigurationDialog(): boolean {
        return this.defaultTemplateConfigurationService.viewDefaultTemplateConfigurationDialog;

    }

    set viewDefaultTemplateConfigurationDialog(value: boolean) {
        this.defaultTemplateConfigurationService.viewDefaultTemplateConfigurationDialog = value;
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
    get templateEmailReportDemandeClientClientInjoignables(): Array<TemplateEmailReportDemandeClientClientInjoignableVo> {
        return this.templateEmailReportDemandeClientClientInjoignableService.templateEmailReportDemandeClientClientInjoignables;
    }

    set templateEmailReportDemandeClientClientInjoignables(value: Array<TemplateEmailReportDemandeClientClientInjoignableVo>) {
        this.templateEmailReportDemandeClientClientInjoignableService.templateEmailReportDemandeClientClientInjoignables = value;
    }

    get selectedTemplateEmailReportDemandeClientClientInjoignable(): TemplateEmailReportDemandeClientClientInjoignableVo {

        return this.templateEmailReportDemandeClientClientInjoignableService.selectedTemplateEmailReportDemandeClientClientInjoignable;
    }

    set selectedTemplateEmailReportDemandeClientClientInjoignable(value: TemplateEmailReportDemandeClientClientInjoignableVo) {
        this.templateEmailReportDemandeClientClientInjoignableService.selectedTemplateEmailReportDemandeClientClientInjoignable = value;
    }
    get editTemplateEmailReportDemandeClientClientInjoignableDialog(): boolean {
        return this.templateEmailReportDemandeClientClientInjoignableService.createTemplateEmailReportDemandeClientClientInjoignableDialog;
    }

    set editTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientInjoignableService.createTemplateEmailReportDemandeClientClientInjoignableDialog = value;
    }
    get templateEmailReportDemandeClientClientJoignables(): Array<TemplateEmailReportDemandeClientClientJoignableVo> {
        return this.templateEmailReportDemandeClientClientJoignableService.templateEmailReportDemandeClientClientJoignables;
    }

    set templateEmailReportDemandeClientClientJoignables(value: Array<TemplateEmailReportDemandeClientClientJoignableVo>) {
        this.templateEmailReportDemandeClientClientJoignableService.templateEmailReportDemandeClientClientJoignables = value;
    }

    get selectedTemplateEmailReportDemandeClientClientJoignable(): TemplateEmailReportDemandeClientClientJoignableVo {
        return this.templateEmailReportDemandeClientClientJoignableService.selectedTemplateEmailReportDemandeClientClientJoignable;
    }

    set selectedTemplateEmailReportDemandeClientClientJoignable(value: TemplateEmailReportDemandeClientClientJoignableVo) {
        this.templateEmailReportDemandeClientClientJoignableService.selectedTemplateEmailReportDemandeClientClientJoignable = value;
    }

    get editTemplateEmailReportDemandeClientClientJoignableDialog(): boolean {
        return this.templateEmailReportDemandeClientClientJoignableService.createTemplateEmailReportDemandeClientClientJoignableDialog;
    }

    set editTemplateEmailReportDemandeClientClientJoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientJoignableService.createTemplateEmailReportDemandeClientClientJoignableDialog = value;
    }
    get templateEmailReportDemandeManeoClientInjoignables(): Array<TemplateEmailReportDemandeManeoClientInjoignableVo> {
        return this.templateEmailReportDemandeManeoClientInjoignableService.templateEmailReportDemandeManeoClientInjoignables;
    }

    set templateEmailReportDemandeManeoClientInjoignables(value: Array<TemplateEmailReportDemandeManeoClientInjoignableVo>) {
        this.templateEmailReportDemandeManeoClientInjoignableService.templateEmailReportDemandeManeoClientInjoignables = value;
    }

    get selectedTemplateEmailReportDemandeManeoClientInjoignable(): TemplateEmailReportDemandeManeoClientInjoignableVo {
        return this.templateEmailReportDemandeManeoClientInjoignableService.selectedTemplateEmailReportDemandeManeoClientInjoignable;
    }

    set selectedTemplateEmailReportDemandeManeoClientInjoignable(value: TemplateEmailReportDemandeManeoClientInjoignableVo) {
        this.templateEmailReportDemandeManeoClientInjoignableService.selectedTemplateEmailReportDemandeManeoClientInjoignable = value;
    }
    get editTemplateEmailReportDemandeManeoClientInjoignableDialog(): boolean {
        return this.templateEmailReportDemandeManeoClientInjoignableService.createTemplateEmailReportDemandeManeoClientInjoignableDialog;
    }

    set editTemplateEmailReportDemandeManeoClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientInjoignableService.createTemplateEmailReportDemandeManeoClientInjoignableDialog = value;
    }

    get templateEmailReportDemandeManeoClientJoignableAcceptes(): Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> {

        return this.templateEmailReportDemandeManeoClientJoignableAccepteService.templateEmailReportDemandeManeoClientJoignableAcceptes;
    }

    set templateEmailReportDemandeManeoClientJoignableAcceptes(value: Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.templateEmailReportDemandeManeoClientJoignableAcceptes = value;
    }

    get selectedTemplateEmailReportDemandeManeoClientJoignableAccepte(): TemplateEmailReportDemandeManeoClientJoignableAccepteVo {
        return this.templateEmailReportDemandeManeoClientJoignableAccepteService.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte;
    }

    set selectedTemplateEmailReportDemandeManeoClientJoignableAccepte(value: TemplateEmailReportDemandeManeoClientJoignableAccepteVo) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = value;
    }
    get editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(): boolean {
        return this.templateEmailReportDemandeManeoClientJoignableAccepteService.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;
    }

    set editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = value;
    }
    get templateEmailReportDemandeManeoClientJoignableRefuss(): Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo> {
        return this.templateEmailReportDemandeManeoClientJoignableRefusService.templateEmailReportDemandeManeoClientJoignableRefuss;
    }

    set templateEmailReportDemandeManeoClientJoignableRefuss(value: Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.templateEmailReportDemandeManeoClientJoignableRefuss = value;
    }

    get selectedTemplateEmailReportDemandeManeoClientJoignableRefus(): TemplateEmailReportDemandeManeoClientJoignableRefusVo {
        return this.templateEmailReportDemandeManeoClientJoignableRefusService.selectedTemplateEmailReportDemandeManeoClientJoignableRefus;
    }

    set selectedTemplateEmailReportDemandeManeoClientJoignableRefus(value: TemplateEmailReportDemandeManeoClientJoignableRefusVo) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.selectedTemplateEmailReportDemandeManeoClientJoignableRefus = value;
    }

    get editTemplateEmailReportDemandeManeoClientJoignableRefusDialog(): boolean {
        return this.templateEmailReportDemandeManeoClientJoignableRefusService.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog;
    }

    set editTemplateEmailReportDemandeManeoClientJoignableRefusDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog = value;
    }


    get dateFormat() {
        return environment.dateFormatView;
    }

    get dateFormatColumn() {
        return environment.dateFormatList;
    }

// methods
    ngOnInit(): void {
        this.selectedTemplateEmailFtl = new TemplateEmailFtlVo();
        this.templateEmailFtlService.findAll().subscribe((data) => this.templateEmailFtls = data);
        this.selectedTemplateEmailCloture = new TemplateEmailClotureVo();
        this.templateEmailClotureService.findAll().subscribe((data) => this.templateEmailClotures = data);
        this.selectedTemplateSuivi = new TemplateSuiviVo();
        this.templateSuiviService.findAll().subscribe((data) => this.templateSuivis = data);
        this.selectedTemplateEmailClientInjoinable = new TemplateEmailClientInjoinableVo();
        this.templateEmailClientInjoinableService.findAll().subscribe((data) => this.templateEmailClientInjoinables = data);
        this.selectedTemplateEmailPlanification = new TemplateEmailPlanificationVo();
        this.templateEmailPlanificationService.findAll().subscribe((data) => this.templateEmailPlanifications = data);
        this.selectedTemplateEmailReplanification = new TemplateEmailReplanificationVo();
        this.templateEmailReplanificationService.findAll().subscribe((data) => this.templateEmailReplanifications = data);
        this.selectedTemplateEmailRefus = new TemplateEmailRefusVo();
        this.templateEmailRefusService.findAll().subscribe((data) => this.templateEmailRefuss = data);
        this.selectedTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();
        this.templateEmailClientInjoinableKoscService.findAll().subscribe((data) => this.templateEmailClientInjoinableKoscs = data);
        this.selectedTemplateEmailConfirmationClient = new TemplateEmailConfirmationClientVo();
        this.templateEmailConfirmationClientService.findAll().subscribe((data) => this.templateEmailConfirmationClients = data);
        this.selectedTemplateEmailMauvaisContact = new TemplateEmailMauvaisContactVo();
        this.templateEmailMauvaisContactService.findAll().subscribe((data) => this.templateEmailMauvaisContacts = data);
        this.selectedTemplateEmailCri = new TemplateEmailCriVo();
        this.templateEmailCriService.findAll().subscribe((data) => this.templateEmailCris = data);
        this.selectedTemplateEmailReportDemandeManeoClientInjoignable = new TemplateEmailReportDemandeManeoClientInjoignableVo();
        this.templateEmailReportDemandeManeoClientInjoignableService.findAll().subscribe((data) => this.templateEmailReportDemandeManeoClientInjoignables = data);

        this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = new TemplateEmailReportDemandeManeoClientJoignableAccepteVo();
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.findAll().subscribe((data) => this.templateEmailReportDemandeManeoClientJoignableAcceptes = data);

        this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus = new TemplateEmailReportDemandeManeoClientJoignableRefusVo();
        this.templateEmailReportDemandeManeoClientJoignableRefusService.findAll().subscribe((data) => this.templateEmailReportDemandeManeoClientJoignableRefuss = data);

        this.selectedTemplateEmailReportDemandeClientClientInjoignable = new TemplateEmailReportDemandeClientClientInjoignableVo();
        this.templateEmailReportDemandeClientClientInjoignableService.findAll().subscribe((data) => this.templateEmailReportDemandeClientClientInjoignables = data);

        this.selectedTemplateEmailReportDemandeClientClientJoignable = new TemplateEmailReportDemandeClientClientJoignableVo();
        this.templateEmailReportDemandeClientClientJoignableService.findAll().subscribe((data) => this.templateEmailReportDemandeClientClientJoignables = data);

    }

    hideViewDialog() {
        this.viewDefaultTemplateConfigurationDialog = false;
    }
}
