import {Component, OnInit} from '@angular/core';
import {DefaultTemplateConfigurationService} from 'src/app/controller/service/DefaultTemplateConfiguration.service';
import {DefaultTemplateConfigurationVo} from 'src/app/controller/model/DefaultTemplateConfiguration.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {TemplateEmailMauvaisContactVo} from 'src/app/controller/model/TemplateEmailMauvaisContact.model';
import {TemplateEmailMauvaisContactService} from 'src/app/controller/service/TemplateEmailMauvaisContact.service';
import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';
import {TemplateEmailFtlVo} from 'src/app/controller/model/TemplateEmailFtl.model';
import {TemplateEmailFtlService} from 'src/app/controller/service/TemplateEmailFtl.service';
import {TemplateEmailRefusVo} from 'src/app/controller/model/TemplateEmailRefus.model';
import {TemplateEmailRefusService} from 'src/app/controller/service/TemplateEmailRefus.service';
import {TemplateSuiviVo} from 'src/app/controller/model/TemplateSuivi.model';
import {TemplateSuiviService} from 'src/app/controller/service/TemplateSuivi.service';
import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
import {TemplateEmailClotureVo} from 'src/app/controller/model/TemplateEmailCloture.model';
import {TemplateEmailClotureService} from 'src/app/controller/service/TemplateEmailCloture.service';
import {TemplateEmailConfirmationClientVo} from 'src/app/controller/model/TemplateEmailConfirmationClient.model';
import {
    TemplateEmailConfirmationClientService
} from 'src/app/controller/service/TemplateEmailConfirmationClient.service';
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {TemplateEmailCriVo} from 'src/app/controller/model/TemplateEmailCri.model';
import {TemplateEmailCriService} from 'src/app/controller/service/TemplateEmailCri.service';
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
import {
    TemplateEmailReportDemandeClientClientInjoignableVo
} from "../../../../../../controller/model/TemplateEmailReportDemandeClientClientInjoignable.model";
import {
    TemplateEmailReportDemandeClientClientJoignableVo
} from "../../../../../../controller/model/TemplateEmailReportDemandeClientClientJoignable.model";
import {
    TemplateEmailReportDemandeManeoClientInjoignableVo
} from "../../../../../../controller/model/TemplateEmailReportDemandeManeoClientInjoignable.model";
import {
    TemplateEmailReportDemandeManeoClientJoignableAccepteVo
} from "../../../../../../controller/model/TemplateEmailReportDemandeManeoClientJoignableAccepte.model";
import {
    TemplateEmailReportDemandeManeoClientJoignableRefusVo
} from "../../../../../../controller/model/TemplateEmailReportDemandeManeoClientJoignableRefus.model";

@Component({
    selector: 'app-default-template-configuration-create-admin',
    templateUrl: './default-template-configuration-create-admin.component.html',
    styleUrls: ['./default-template-configuration-create-admin.component.css']
})
export class DefaultTemplateConfigurationCreateAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private defaultTemplateConfigurationService: DefaultTemplateConfigurationService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
        , private templateEmailMauvaisContactService: TemplateEmailMauvaisContactService
        , private templateEmailReplanificationService: TemplateEmailReplanificationService
        , private templateEmailFtlService: TemplateEmailFtlService
        , private templateEmailRefusService: TemplateEmailRefusService
        , private templateSuiviService: TemplateSuiviService
        , private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
        , private templateEmailClotureService: TemplateEmailClotureService
        , private templateEmailConfirmationClientService: TemplateEmailConfirmationClientService
        , private templateEmailPlanificationService: TemplateEmailPlanificationService
        , private templateEmailCriService: TemplateEmailCriService
        , private templateEmailReportDemandeManeoClientInjoignableService: TemplateEmailReportDemandeManeoClientInjoignableService
        , private templateEmailReportDemandeManeoClientJoignableAccepteService: TemplateEmailReportDemandeManeoClientJoignableAccepteService
        , private templateEmailReportDemandeManeoClientJoignableRefusService: TemplateEmailReportDemandeManeoClientJoignableRefusService
        , private templateEmailReportDemandeClientClientInjoignableService: TemplateEmailReportDemandeClientClientInjoignableService
        , private templateEmailReportDemandeClientClientJoignableService: TemplateEmailReportDemandeClientClientJoignableService
    ) {

    }

    private _validTemplateEmailReportDemandeManeoClientInjoignableLibelle = true;
    private _validTemplateEmailReportDemandeManeoClientInjoignableObjet = true;
    private _validTemplateEmailReportDemandeManeoClientInjoignableCorps = true;

    private _validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle = true;
    private _validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet = true;
    private _validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps = true;

    private _validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle = true;
    private _validTemplateEmailReportDemandeManeoClientJoignableRefusObjet = true;
    private _validTemplateEmailReportDemandeManeoClientJoignableRefusCorps = true;

    private _validTemplateEmailReportDemandeClientClientInjoignableLibelle = true;
    private _validTemplateEmailReportDemandeClientClientInjoignableObjet = true;
    private _validTemplateEmailReportDemandeClientClientInjoignableCorps = true;

    private _validTemplateEmailReportDemandeClientClientJoignableLibelle = true;
    private _validTemplateEmailReportDemandeClientClientJoignableObjet = true;
    private _validTemplateEmailReportDemandeClientClientJoignableCorps = true;

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

    _validDefaultTemplateConfigurationEmailKosc = true;

    get validDefaultTemplateConfigurationEmailKosc(): boolean {
        return this._validDefaultTemplateConfigurationEmailKosc;
    }

    set validDefaultTemplateConfigurationEmailKosc(value: boolean) {
        this._validDefaultTemplateConfigurationEmailKosc = value;
    }

    _validDefaultTemplateConfigurationEmailManeo = true;

    get validDefaultTemplateConfigurationEmailManeo(): boolean {
        return this._validDefaultTemplateConfigurationEmailManeo;
    }

    set validDefaultTemplateConfigurationEmailManeo(value: boolean) {
        this._validDefaultTemplateConfigurationEmailManeo = value;
    }

    _validTemplateEmailFtlLibelle = true;

    get validTemplateEmailFtlLibelle(): boolean {
        return this._validTemplateEmailFtlLibelle;
    }

    set validTemplateEmailFtlLibelle(value: boolean) {
        this._validTemplateEmailFtlLibelle = value;
    }

    _validTemplateEmailFtlObjet = true;

    get validTemplateEmailFtlObjet(): boolean {
        return this._validTemplateEmailFtlObjet;
    }

    set validTemplateEmailFtlObjet(value: boolean) {
        this._validTemplateEmailFtlObjet = value;
    }

    _validTemplateEmailFtlCorps = true;

    get validTemplateEmailFtlCorps(): boolean {
        return this._validTemplateEmailFtlCorps;
    }

    set validTemplateEmailFtlCorps(value: boolean) {
        this._validTemplateEmailFtlCorps = value;
    }

    _validTemplateEmailClotureLibelle = true;

    get validTemplateEmailClotureLibelle(): boolean {
        return this._validTemplateEmailClotureLibelle;
    }

    set validTemplateEmailClotureLibelle(value: boolean) {
        this._validTemplateEmailClotureLibelle = value;
    }

    _validTemplateEmailClotureObjet = true;

    get validTemplateEmailClotureObjet(): boolean {
        return this._validTemplateEmailClotureObjet;
    }

    set validTemplateEmailClotureObjet(value: boolean) {
        this._validTemplateEmailClotureObjet = value;
    }

    _validTemplateEmailClotureCorps = true;

    get validTemplateEmailClotureCorps(): boolean {
        return this._validTemplateEmailClotureCorps;
    }

    set validTemplateEmailClotureCorps(value: boolean) {
        this._validTemplateEmailClotureCorps = value;
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

    _validTemplateEmailClientInjoinableLibelle = true;

    get validTemplateEmailClientInjoinableLibelle(): boolean {
        return this._validTemplateEmailClientInjoinableLibelle;
    }

    set validTemplateEmailClientInjoinableLibelle(value: boolean) {
        this._validTemplateEmailClientInjoinableLibelle = value;
    }

    _validTemplateEmailClientInjoinableObjet = true;

    get validTemplateEmailClientInjoinableObjet(): boolean {
        return this._validTemplateEmailClientInjoinableObjet;
    }

    set validTemplateEmailClientInjoinableObjet(value: boolean) {
        this._validTemplateEmailClientInjoinableObjet = value;
    }

    _validTemplateEmailClientInjoinableCorps = true;

    get validTemplateEmailClientInjoinableCorps(): boolean {
        return this._validTemplateEmailClientInjoinableCorps;
    }

    set validTemplateEmailClientInjoinableCorps(value: boolean) {
        this._validTemplateEmailClientInjoinableCorps = value;
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

    _validTemplateEmailPlanificationLibelle = true;

    get validTemplateEmailPlanificationLibelle(): boolean {
        return this._validTemplateEmailPlanificationLibelle;
    }

    set validTemplateEmailPlanificationLibelle(value: boolean) {
        this._validTemplateEmailPlanificationLibelle = value;
    }

    _validTemplateEmailPlanificationObjet = true;

    get validTemplateEmailPlanificationObjet(): boolean {
        return this._validTemplateEmailPlanificationObjet;
    }

    set validTemplateEmailPlanificationObjet(value: boolean) {
        this._validTemplateEmailPlanificationObjet = value;
    }

    _validTemplateEmailPlanificationCorps = true;

    get validTemplateEmailPlanificationCorps(): boolean {
        return this._validTemplateEmailPlanificationCorps;
    }

    set validTemplateEmailPlanificationCorps(value: boolean) {
        this._validTemplateEmailPlanificationCorps = value;
    }

    _validTemplateEmailReplanificationLibelle = true;

    get validTemplateEmailReplanificationLibelle(): boolean {
        return this._validTemplateEmailReplanificationLibelle;
    }

    set validTemplateEmailReplanificationLibelle(value: boolean) {
        this._validTemplateEmailReplanificationLibelle = value;
    }

    _validTemplateEmailReplanificationObjet = true;

    get validTemplateEmailReplanificationObjet(): boolean {
        return this._validTemplateEmailReplanificationObjet;
    }

    set validTemplateEmailReplanificationObjet(value: boolean) {
        this._validTemplateEmailReplanificationObjet = value;
    }

    _validTemplateEmailReplanificationCorps = true;

    get validTemplateEmailReplanificationCorps(): boolean {
        return this._validTemplateEmailReplanificationCorps;
    }

    set validTemplateEmailReplanificationCorps(value: boolean) {
        this._validTemplateEmailReplanificationCorps = value;
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

    _validTemplateEmailClientInjoinableKoscLibelle = true;

    get validTemplateEmailClientInjoinableKoscLibelle(): boolean {
        return this._validTemplateEmailClientInjoinableKoscLibelle;
    }

    set validTemplateEmailClientInjoinableKoscLibelle(value: boolean) {
        this._validTemplateEmailClientInjoinableKoscLibelle = value;
    }

    _validTemplateEmailClientInjoinableKoscObjet = true;

    get validTemplateEmailClientInjoinableKoscObjet(): boolean {
        return this._validTemplateEmailClientInjoinableKoscObjet;
    }

    set validTemplateEmailClientInjoinableKoscObjet(value: boolean) {
        this._validTemplateEmailClientInjoinableKoscObjet = value;
    }

    _validTemplateEmailClientInjoinableKoscCorps = true;

    get validTemplateEmailClientInjoinableKoscCorps(): boolean {
        return this._validTemplateEmailClientInjoinableKoscCorps;
    }

    set validTemplateEmailClientInjoinableKoscCorps(value: boolean) {
        this._validTemplateEmailClientInjoinableKoscCorps = value;
    }

    _validTemplateEmailConfirmationClientLibelle = true;

    get validTemplateEmailConfirmationClientLibelle(): boolean {
        return this._validTemplateEmailConfirmationClientLibelle;
    }

    set validTemplateEmailConfirmationClientLibelle(value: boolean) {
        this._validTemplateEmailConfirmationClientLibelle = value;
    }

    _validTemplateEmailConfirmationClientObjet = true;

    get validTemplateEmailConfirmationClientObjet(): boolean {
        return this._validTemplateEmailConfirmationClientObjet;
    }

    set validTemplateEmailConfirmationClientObjet(value: boolean) {
        this._validTemplateEmailConfirmationClientObjet = value;
    }

    _validTemplateEmailConfirmationClientCorps = true;

    get validTemplateEmailConfirmationClientCorps(): boolean {
        return this._validTemplateEmailConfirmationClientCorps;
    }

    set validTemplateEmailConfirmationClientCorps(value: boolean) {
        this._validTemplateEmailConfirmationClientCorps = value;
    }

    _validTemplateEmailMauvaisContactLibelle = true;

    get validTemplateEmailMauvaisContactLibelle(): boolean {
        return this._validTemplateEmailMauvaisContactLibelle;
    }

    set validTemplateEmailMauvaisContactLibelle(value: boolean) {
        this._validTemplateEmailMauvaisContactLibelle = value;
    }

    _validTemplateEmailMauvaisContactObjet = true;

    get validTemplateEmailMauvaisContactObjet(): boolean {
        return this._validTemplateEmailMauvaisContactObjet;
    }

    set validTemplateEmailMauvaisContactObjet(value: boolean) {
        this._validTemplateEmailMauvaisContactObjet = value;
    }

    _validTemplateEmailMauvaisContactCorps = true;

    get validTemplateEmailMauvaisContactCorps(): boolean {
        return this._validTemplateEmailMauvaisContactCorps;
    }

    set validTemplateEmailMauvaisContactCorps(value: boolean) {
        this._validTemplateEmailMauvaisContactCorps = value;
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

    get validTemplateEmailCriCorps(): boolean {
        return this._validTemplateEmailCriCorps;
    }

    set validTemplateEmailCriCorps(value: boolean) {
        this._validTemplateEmailCriCorps = value;
    }


    get defaultTemplateConfigurations(): Array<DefaultTemplateConfigurationVo> {
        return this.defaultTemplateConfigurationService.defaultTemplateConfigurations;
    }

    set defaultTemplateConfigurations(value: Array<DefaultTemplateConfigurationVo>) {
        this.defaultTemplateConfigurationService.defaultTemplateConfigurations = value;
    }

    get selectedDefaultTemplateConfiguration(): DefaultTemplateConfigurationVo {
        return this.defaultTemplateConfigurationService.selectedDefaultTemplateConfiguration;
    }

    set selectedDefaultTemplateConfiguration(value: DefaultTemplateConfigurationVo) {
        this.defaultTemplateConfigurationService.selectedDefaultTemplateConfiguration = value;
    }

    get createDefaultTemplateConfigurationDialog(): boolean {
        return this.defaultTemplateConfigurationService.createDefaultTemplateConfigurationDialog;

    }

    set createDefaultTemplateConfigurationDialog(value: boolean) {
        this.defaultTemplateConfigurationService.createDefaultTemplateConfigurationDialog = value;
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

    get createTemplateEmailCriDialog(): boolean {
        return this.templateEmailCriService.createTemplateEmailCriDialog;
    }

    set createTemplateEmailCriDialog(value: boolean) {
        this.templateEmailCriService.createTemplateEmailCriDialog = value;
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

    get createTemplateEmailFtlDialog(): boolean {
        return this.templateEmailFtlService.createTemplateEmailFtlDialog;
    }

    set createTemplateEmailFtlDialog(value: boolean) {
        this.templateEmailFtlService.createTemplateEmailFtlDialog = value;
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

    get createTemplateEmailRefusDialog(): boolean {
        return this.templateEmailRefusService.createTemplateEmailRefusDialog;
    }

    set createTemplateEmailRefusDialog(value: boolean) {
        this.templateEmailRefusService.createTemplateEmailRefusDialog = value;
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

    get createTemplateEmailClientInjoinableDialog(): boolean {
        return this.templateEmailClientInjoinableService.createTemplateEmailClientInjoinableDialog;
    }

    set createTemplateEmailClientInjoinableDialog(value: boolean) {
        this.templateEmailClientInjoinableService.createTemplateEmailClientInjoinableDialog = value;
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

    set createTemplateEmailClotureDialog(value: boolean) {
        this.templateEmailClotureService.createTemplateEmailClotureDialog = value;
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

    get createTemplateEmailMauvaisContactDialog(): boolean {
        return this.templateEmailMauvaisContactService.createTemplateEmailMauvaisContactDialog;
    }

    set createTemplateEmailMauvaisContactDialog(value: boolean) {
        this.templateEmailMauvaisContactService.createTemplateEmailMauvaisContactDialog = value;
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

    get createTemplateEmailConfirmationClientDialog(): boolean {
        return this.templateEmailConfirmationClientService.createTemplateEmailConfirmationClientDialog;
    }

    set createTemplateEmailConfirmationClientDialog(value: boolean) {
        this.templateEmailConfirmationClientService.createTemplateEmailConfirmationClientDialog = value;
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
    get createTemplateEmailReportDemandeClientClientInjoignableDialog(): boolean {
        return this.templateEmailReportDemandeClientClientInjoignableService.createTemplateEmailReportDemandeClientClientInjoignableDialog;
    }

    set createTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
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

    get createTemplateEmailReportDemandeClientClientJoignableDialog(): boolean {
        return this.templateEmailReportDemandeClientClientJoignableService.createTemplateEmailReportDemandeClientClientJoignableDialog;
    }

    set createTemplateEmailReportDemandeClientClientJoignableDialog(value: boolean) {
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
    get createTemplateEmailReportDemandeManeoClientInjoignableDialog(): boolean {
        return this.templateEmailReportDemandeManeoClientInjoignableService.createTemplateEmailReportDemandeManeoClientInjoignableDialog;
    }

    set createTemplateEmailReportDemandeManeoClientInjoignableDialog(value: boolean) {
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
    get createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(): boolean {
        return this.templateEmailReportDemandeManeoClientJoignableAccepteService.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;
    }

    set createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
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

    get createTemplateEmailReportDemandeManeoClientJoignableRefusDialog(): boolean {
        return this.templateEmailReportDemandeManeoClientJoignableRefusService.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog;
    }

    set createTemplateEmailReportDemandeManeoClientJoignableRefusDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog = value;
    }


    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

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
        this.defaultTemplateConfigurationService.save().subscribe(defaultTemplateConfiguration => {
            if (defaultTemplateConfiguration != null) {
                this.defaultTemplateConfigurations.push({...defaultTemplateConfiguration});
                this.createDefaultTemplateConfigurationDialog = false;
                this.submitted = false;
                this.selectedDefaultTemplateConfiguration = new DefaultTemplateConfigurationVo();

            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Default template configuration existe déjà'
                });
            }

        }, error => {
            console.log(error);
        });
    }

    public async openCreateTemplateEmailCri(templateEmailCri: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailCri', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailCri = new TemplateEmailCriVo();
            this.createTemplateEmailCriDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailFtl(templateEmailFtl: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailFtl', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailFtl = new TemplateEmailFtlVo();
            this.createTemplateEmailFtlDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailRefus(templateEmailRefus: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailRefus', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailRefus = new TemplateEmailRefusVo();
            this.createTemplateEmailRefusDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailPlanification(templateEmailPlanification: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailPlanification', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailPlanification = new TemplateEmailPlanificationVo();
            this.createTemplateEmailPlanificationDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailClientInjoinable(templateEmailClientInjoinable: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailClientInjoinable', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailClientInjoinable = new TemplateEmailClientInjoinableVo();
            this.createTemplateEmailClientInjoinableDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailCloture(templateEmailCloture: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailCloture', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailCloture = new TemplateEmailClotureVo();
            this.createTemplateEmailClotureDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }


    public async openCreateTemplateEmailReplanification(templateEmailReplanification: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReplanification', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailReplanification = new TemplateEmailReplanificationVo();
            this.createTemplateEmailReplanificationDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailMauvaisContact(templateEmailMauvaisContact: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailMauvaisContact', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailMauvaisContact = new TemplateEmailMauvaisContactVo();
            this.createTemplateEmailMauvaisContactDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateSuivi(templateSuivi: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateSuivi', 'add');
        if (isPermistted) {
            this.selectedTemplateSuivi = new TemplateSuiviVo();
            this.createTemplateSuiviDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailConfirmationClient(templateEmailConfirmationClient: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailConfirmationClient', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailConfirmationClient = new TemplateEmailConfirmationClientVo();
            this.createTemplateEmailConfirmationClientDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailClientInjoinableKosc(templateEmailClientInjoinableKosc: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailClientInjoinableKosc', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();
            this.createTemplateEmailClientInjoinableKoscDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailReportDemandeManeoClientInjoignable(templateEmailReportDemandeManeoClientInjoignable: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientInjoignable', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailReportDemandeManeoClientInjoignable = new TemplateEmailReportDemandeManeoClientInjoignableVo();
            this.createTemplateEmailReportDemandeManeoClientInjoignableDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailReportDemandeManeoClientJoignableAccepte(templateEmailReportDemandeManeoClientJoignableAccepte: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientJoignableAccepte', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = new TemplateEmailReportDemandeManeoClientJoignableAccepteVo();
            this.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailReportDemandeManeoClientJoignableRefus(templateEmailReportDemandeManeoClientJoignableRefus: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientJoignableRefus', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus = new TemplateEmailReportDemandeManeoClientJoignableRefusVo();
            this.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailReportDemandeClientClientInjoignable(templateEmailReportDemandeClientClientInjoignable: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeClientClientInjoignable', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailReportDemandeClientClientInjoignable = new TemplateEmailReportDemandeClientClientInjoignableVo();
            this.createTemplateEmailReportDemandeClientClientInjoignableDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTemplateEmailReportDemandeClientClientJoignable(templateEmailReportDemandeClientClientJoignable: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeClientClientJoignable', 'add');
        if (isPermistted) {
            this.selectedTemplateEmailReportDemandeClientClientJoignable = new TemplateEmailReportDemandeClientClientJoignableVo();
            this.createTemplateEmailReportDemandeClientClientJoignableDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    hideCreateDialog() {
        this.createDefaultTemplateConfigurationDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validDefaultTemplateConfigurationEmailKosc = value;
        this.validDefaultTemplateConfigurationEmailManeo = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateDefaultTemplateConfigurationEmailKosc();
        this.validateDefaultTemplateConfigurationEmailManeo();

    }

    private validateDefaultTemplateConfigurationEmailKosc() {
        if (this.stringUtilService.isEmpty(this.selectedDefaultTemplateConfiguration.emailKosc)) {
            this.errorMessages.push('Email kosc non valide');
            this.validDefaultTemplateConfigurationEmailKosc = false;
        } else {
            this.validDefaultTemplateConfigurationEmailKosc = true;
        }
    }

    private validateDefaultTemplateConfigurationEmailManeo() {
        if (this.stringUtilService.isEmpty(this.selectedDefaultTemplateConfiguration.emailManeo)) {
            this.errorMessages.push('Email maneo non valide');
            this.validDefaultTemplateConfigurationEmailManeo = false;
        } else {
            this.validDefaultTemplateConfigurationEmailManeo = true;
        }
    }


    get validTemplateEmailReportDemandeManeoClientInjoignableLibelle(): boolean {
        return this._validTemplateEmailReportDemandeManeoClientInjoignableLibelle;
    }

    set validTemplateEmailReportDemandeManeoClientInjoignableLibelle(value: boolean) {
        this._validTemplateEmailReportDemandeManeoClientInjoignableLibelle = value;
    }

    get validTemplateEmailReportDemandeManeoClientInjoignableObjet(): boolean {
        return this._validTemplateEmailReportDemandeManeoClientInjoignableObjet;
    }

    set validTemplateEmailReportDemandeManeoClientInjoignableObjet(value: boolean) {
        this._validTemplateEmailReportDemandeManeoClientInjoignableObjet = value;
    }

    get validTemplateEmailReportDemandeManeoClientInjoignableCorps(): boolean {
        return this._validTemplateEmailReportDemandeManeoClientInjoignableCorps;
    }

    set validTemplateEmailReportDemandeManeoClientInjoignableCorps(value: boolean) {
        this._validTemplateEmailReportDemandeManeoClientInjoignableCorps = value;
    }

    get validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle(): boolean {
        return this._validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle(value: boolean) {
        this._validTemplateEmailReportDemandeManeoClientJoignableAccepteLibelle = value;
    }

    get validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet(): boolean {
        return this._validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet(value: boolean) {
        this._validTemplateEmailReportDemandeManeoClientJoignableAccepteObjet = value;
    }

    get validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps(): boolean {
        return this._validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps(value: boolean) {
        this._validTemplateEmailReportDemandeManeoClientJoignableAccepteCorps = value;
    }

    get validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle(): boolean {
        return this._validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle(value: boolean) {
        this._validTemplateEmailReportDemandeManeoClientJoignableRefusLibelle = value;
    }

    get validTemplateEmailReportDemandeManeoClientJoignableRefusObjet(): boolean {
        return this._validTemplateEmailReportDemandeManeoClientJoignableRefusObjet;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableRefusObjet(value: boolean) {
        this._validTemplateEmailReportDemandeManeoClientJoignableRefusObjet = value;
    }

    get validTemplateEmailReportDemandeManeoClientJoignableRefusCorps(): boolean {
        return this._validTemplateEmailReportDemandeManeoClientJoignableRefusCorps;
    }

    set validTemplateEmailReportDemandeManeoClientJoignableRefusCorps(value: boolean) {
        this._validTemplateEmailReportDemandeManeoClientJoignableRefusCorps = value;
    }

    get validTemplateEmailReportDemandeClientClientInjoignableLibelle(): boolean {
        return this._validTemplateEmailReportDemandeClientClientInjoignableLibelle;
    }

    set validTemplateEmailReportDemandeClientClientInjoignableLibelle(value: boolean) {
        this._validTemplateEmailReportDemandeClientClientInjoignableLibelle = value;
    }

    get validTemplateEmailReportDemandeClientClientInjoignableObjet(): boolean {
        return this._validTemplateEmailReportDemandeClientClientInjoignableObjet;
    }

    set validTemplateEmailReportDemandeClientClientInjoignableObjet(value: boolean) {
        this._validTemplateEmailReportDemandeClientClientInjoignableObjet = value;
    }

    get validTemplateEmailReportDemandeClientClientInjoignableCorps(): boolean {
        return this._validTemplateEmailReportDemandeClientClientInjoignableCorps;
    }

    set validTemplateEmailReportDemandeClientClientInjoignableCorps(value: boolean) {
        this._validTemplateEmailReportDemandeClientClientInjoignableCorps = value;
    }

    get validTemplateEmailReportDemandeClientClientJoignableLibelle(): boolean {
        return this._validTemplateEmailReportDemandeClientClientJoignableLibelle;
    }

    set validTemplateEmailReportDemandeClientClientJoignableLibelle(value: boolean) {
        this._validTemplateEmailReportDemandeClientClientJoignableLibelle = value;
    }

    get validTemplateEmailReportDemandeClientClientJoignableObjet(): boolean {
        return this._validTemplateEmailReportDemandeClientClientJoignableObjet;
    }

    set validTemplateEmailReportDemandeClientClientJoignableObjet(value: boolean) {
        this._validTemplateEmailReportDemandeClientClientJoignableObjet = value;
    }

    get validTemplateEmailReportDemandeClientClientJoignableCorps(): boolean {
        return this._validTemplateEmailReportDemandeClientClientJoignableCorps;
    }

    set validTemplateEmailReportDemandeClientClientJoignableCorps(value: boolean) {
        this._validTemplateEmailReportDemandeClientClientJoignableCorps = value;
    }
}
