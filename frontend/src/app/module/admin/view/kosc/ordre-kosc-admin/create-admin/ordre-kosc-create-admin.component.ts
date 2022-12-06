import {Component, OnInit} from '@angular/core';
import {OrdreKoscService} from 'src/app/controller/service/OrdreKosc.service';
import {OrdreKoscVo} from 'src/app/controller/model/OrdreKosc.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {TechnicienService} from 'src/app/controller/service/Technicien.service';
import {TemplateEmailRefusVo} from 'src/app/controller/model/TemplateEmailRefus.model';
import {TemplateEmailRefusService} from 'src/app/controller/service/TemplateEmailRefus.service';
import {OperatorVo} from 'src/app/controller/model/Operator.model';
import {OperatorService} from 'src/app/controller/service/Operator.service';
import {TemplateEmailFtlVo} from 'src/app/controller/model/TemplateEmailFtl.model';
import {TemplateEmailFtlService} from 'src/app/controller/service/TemplateEmailFtl.service';
import {EtatDemandeKoscVo} from 'src/app/controller/model/EtatDemandeKosc.model';
import {EtatDemandeKoscService} from 'src/app/controller/service/EtatDemandeKosc.service';
import {TemplateSuiviVo} from 'src/app/controller/model/TemplateSuivi.model';
import {TemplateSuiviService} from 'src/app/controller/service/TemplateSuivi.service';
import {CauseKoOkVo} from 'src/app/controller/model/CauseKoOk.model';
import {CauseKoOkService} from 'src/app/controller/service/CauseKoOk.service';
import {DepartementVo} from 'src/app/controller/model/Departement.model';
import {DepartementService} from 'src/app/controller/service/Departement.service';
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {SourceReplanificationVo} from 'src/app/controller/model/SourceReplanification.model';
import {SourceReplanificationService} from 'src/app/controller/service/SourceReplanification.service';
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {TemplateEmailConfirmationClientVo} from 'src/app/controller/model/TemplateEmailConfirmationClient.model';
import {
    TemplateEmailConfirmationClientService
} from 'src/app/controller/service/TemplateEmailConfirmationClient.service';
import {TemplateEmailMauvaisContactVo} from 'src/app/controller/model/TemplateEmailMauvaisContact.model';
import {TemplateEmailMauvaisContactService} from 'src/app/controller/service/TemplateEmailMauvaisContact.service';
import {TemplateEmailClotureVo} from 'src/app/controller/model/TemplateEmailCloture.model';
import {TemplateEmailClotureService} from 'src/app/controller/service/TemplateEmailCloture.service';
import {TemplateEmailCriVo} from 'src/app/controller/model/TemplateEmailCri.model';
import {TemplateEmailCriService} from 'src/app/controller/service/TemplateEmailCri.service';
import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';

@Component({
    selector: 'app-ordre-kosc-create-admin',
    templateUrl: './ordre-kosc-create-admin.component.html',
    styleUrls: ['./ordre-kosc-create-admin.component.css']
})
export class OrdreKoscCreateAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private ordreKoscService: OrdreKoscService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
        , private technicienService: TechnicienService
        , private templateEmailRefusService: TemplateEmailRefusService
        , private operatorService: OperatorService
        , private templateEmailFtlService: TemplateEmailFtlService
        , private etatDemandeKoscService: EtatDemandeKoscService
        , private templateSuiviService: TemplateSuiviService
        , private causeKoOkService: CauseKoOkService
        , private departementService: DepartementService
        , private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
        , private sourceReplanificationService: SourceReplanificationService
        , private templateEmailPlanificationService: TemplateEmailPlanificationService
        , private templateEmailConfirmationClientService: TemplateEmailConfirmationClientService
        , private templateEmailMauvaisContactService: TemplateEmailMauvaisContactService
        , private templateEmailClotureService: TemplateEmailClotureService
        , private templateEmailCriService: TemplateEmailCriService
        , private templateEmailReplanificationService: TemplateEmailReplanificationService
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

    _validOrdreKoscObjetPlanification = true;

    get validOrdreKoscObjetPlanification(): boolean {
        return this._validOrdreKoscObjetPlanification;
    }

    set validOrdreKoscObjetPlanification(value: boolean) {
        this._validOrdreKoscObjetPlanification = value;
    }

    _validOrdreKoscCorpsPlanification = true;

    get validOrdreKoscCorpsPlanification(): boolean {
        return this._validOrdreKoscCorpsPlanification;
    }

    set validOrdreKoscCorpsPlanification(value: boolean) {
        this._validOrdreKoscCorpsPlanification = value;
    }

    _validOrdreKoscFromPlanification = true;

    get validOrdreKoscFromPlanification(): boolean {
        return this._validOrdreKoscFromPlanification;
    }

    set validOrdreKoscFromPlanification(value: boolean) {
        this._validOrdreKoscFromPlanification = value;
    }

    _validOrdreKoscToPlanification = true;

    get validOrdreKoscToPlanification(): boolean {
        return this._validOrdreKoscToPlanification;
    }

    set validOrdreKoscToPlanification(value: boolean) {
        this._validOrdreKoscToPlanification = value;
    }



    _validOrdreKoscObjetReplanification = true;

    get validOrdreKoscObjetReplanification(): boolean {
        return this._validOrdreKoscObjetReplanification;
    }

    set validOrdreKoscObjetReplanification(value: boolean) {
        this._validOrdreKoscObjetReplanification = value;
    }

    _validOrdreKoscCorpsReplanification = true;

    get validOrdreKoscCorpsReplanification(): boolean {
        return this._validOrdreKoscCorpsReplanification;
    }

    set validOrdreKoscCorpsReplanification(value: boolean) {
        this._validOrdreKoscCorpsReplanification = value;
    }

    _validOrdreKoscObjetRefus = true;

    get validOrdreKoscObjetRefus(): boolean {
        return this._validOrdreKoscObjetRefus;
    }

    set validOrdreKoscObjetRefus(value: boolean) {
        this._validOrdreKoscObjetRefus = value;
    }

    _validOrdreKoscCorpsRefus = true;

    get validOrdreKoscCorpsRefus(): boolean {
        return this._validOrdreKoscCorpsRefus;
    }

    set validOrdreKoscCorpsRefus(value: boolean) {
        this._validOrdreKoscCorpsRefus = value;
    }

    _validOrdreKoscFromRefus = true;

    get validOrdreKoscFromRefus(): boolean {
        return this._validOrdreKoscFromRefus;
    }

    set validOrdreKoscFromRefus(value: boolean) {
        this._validOrdreKoscFromRefus = value;
    }

    _validOrdreKoscToRefus = true;

    get validOrdreKoscToRefus(): boolean {
        return this._validOrdreKoscToRefus;
    }

    set validOrdreKoscToRefus(value: boolean) {
        this._validOrdreKoscToRefus = value;
    }

    _validOrdreKoscObjetMauvaisContact = true;

    get validOrdreKoscObjetMauvaisContact(): boolean {
        return this._validOrdreKoscObjetMauvaisContact;
    }

    set validOrdreKoscObjetMauvaisContact(value: boolean) {
        this._validOrdreKoscObjetMauvaisContact = value;
    }

    _validOrdreKoscCorpsMauvaisContact = true;

    get validOrdreKoscCorpsMauvaisContact(): boolean {
        return this._validOrdreKoscCorpsMauvaisContact;
    }

    set validOrdreKoscCorpsMauvaisContact(value: boolean) {
        this._validOrdreKoscCorpsMauvaisContact = value;
    }

    _validOrdreKoscFromMauvaisContact = true;

    get validOrdreKoscFromMauvaisContact(): boolean {
        return this._validOrdreKoscFromMauvaisContact;
    }

    set validOrdreKoscFromMauvaisContact(value: boolean) {
        this._validOrdreKoscFromMauvaisContact = value;
    }

    _validOrdreKoscToMauvaisContact = true;

    get validOrdreKoscToMauvaisContact(): boolean {
        return this._validOrdreKoscToMauvaisContact;
    }

    set validOrdreKoscToMauvaisContact(value: boolean) {
        this._validOrdreKoscToMauvaisContact = value;
    }

    _validOrdreKoscObjetConfirmationClient = true;

    get validOrdreKoscObjetConfirmationClient(): boolean {
        return this._validOrdreKoscObjetConfirmationClient;
    }

    set validOrdreKoscObjetConfirmationClient(value: boolean) {
        this._validOrdreKoscObjetConfirmationClient = value;
    }

    _validOrdreKoscCorpsConfirmationClient = true;

    get validOrdreKoscCorpsConfirmationClient(): boolean {
        return this._validOrdreKoscCorpsConfirmationClient;
    }

    set validOrdreKoscCorpsConfirmationClient(value: boolean) {
        this._validOrdreKoscCorpsConfirmationClient = value;
    }

    _validOrdreKoscFromConfirmationClient = true;

    get validOrdreKoscFromConfirmationClient(): boolean {
        return this._validOrdreKoscFromConfirmationClient;
    }

    set validOrdreKoscFromConfirmationClient(value: boolean) {
        this._validOrdreKoscFromConfirmationClient = value;
    }

    _validOrdreKoscToConfirmationClient = true;

    get validOrdreKoscToConfirmationClient(): boolean {
        return this._validOrdreKoscToConfirmationClient;
    }

    set validOrdreKoscToConfirmationClient(value: boolean) {
        this._validOrdreKoscToConfirmationClient = value;
    }

    _validOrdreKoscObjetCri = true;

    get validOrdreKoscObjetCri(): boolean {
        return this._validOrdreKoscObjetCri;
    }

    set validOrdreKoscObjetCri(value: boolean) {
        this._validOrdreKoscObjetCri = value;
    }

    _validOrdreKoscCorpsCri = true;

    get validOrdreKoscCorpsCri(): boolean {
        return this._validOrdreKoscCorpsCri;
    }

    set validOrdreKoscCorpsCri(value: boolean) {
        this._validOrdreKoscCorpsCri = value;
    }

    _validOrdreKoscFromCri = true;

    get validOrdreKoscFromCri(): boolean {
        return this._validOrdreKoscFromCri;
    }

    set validOrdreKoscFromCri(value: boolean) {
        this._validOrdreKoscFromCri = value;
    }

    _validOrdreKoscToCri = true;

    get validOrdreKoscToCri(): boolean {
        return this._validOrdreKoscToCri;
    }

    set validOrdreKoscToCri(value: boolean) {
        this._validOrdreKoscToCri = value;
    }

    _validOrdreKoscObjetFtl = true;

    get validOrdreKoscObjetFtl(): boolean {
        return this._validOrdreKoscObjetFtl;
    }

    set validOrdreKoscObjetFtl(value: boolean) {
        this._validOrdreKoscObjetFtl = value;
    }

    _validOrdreKoscCorpsFtl = true;

    get validOrdreKoscCorpsFtl(): boolean {
        return this._validOrdreKoscCorpsFtl;
    }

    set validOrdreKoscCorpsFtl(value: boolean) {
        this._validOrdreKoscCorpsFtl = value;
    }

    _validOrdreKoscFromFtl = true;

    get validOrdreKoscFromFtl(): boolean {
        return this._validOrdreKoscFromFtl;
    }

    set validOrdreKoscFromFtl(value: boolean) {
        this._validOrdreKoscFromFtl = value;
    }

    _validOrdreKoscToFtl = true;

    get validOrdreKoscToFtl(): boolean {
        return this._validOrdreKoscToFtl;
    }

    set validOrdreKoscToFtl(value: boolean) {
        this._validOrdreKoscToFtl = value;
    }

    _validOrdreKoscObjetClientInjoinable = true;

    get validOrdreKoscObjetClientInjoinable(): boolean {
        return this._validOrdreKoscObjetClientInjoinable;
    }

    set validOrdreKoscObjetClientInjoinable(value: boolean) {
        this._validOrdreKoscObjetClientInjoinable = value;
    }

    _validOrdreKoscFromClientInjoinable = true;

    get validOrdreKoscFromClientInjoinable(): boolean {
        return this._validOrdreKoscFromClientInjoinable;
    }

    set validOrdreKoscFromClientInjoinable(value: boolean) {
        this._validOrdreKoscFromClientInjoinable = value;
    }

    _validOrdreKoscToClientInjoinable = true;

    get validOrdreKoscToClientInjoinable(): boolean {
        return this._validOrdreKoscToClientInjoinable;
    }

    set validOrdreKoscToClientInjoinable(value: boolean) {
        this._validOrdreKoscToClientInjoinable = value;
    }

    _validOrdreKoscObjetClientInjoinableKosc = true;

    get validOrdreKoscObjetClientInjoinableKosc(): boolean {
        return this._validOrdreKoscObjetClientInjoinableKosc;
    }

    set validOrdreKoscObjetClientInjoinableKosc(value: boolean) {
        this._validOrdreKoscObjetClientInjoinableKosc = value;
    }

    _validOrdreKoscCorpsClientInjoinableKosc = true;

    get validOrdreKoscCorpsClientInjoinableKosc(): boolean {
        return this._validOrdreKoscCorpsClientInjoinableKosc;
    }

    set validOrdreKoscCorpsClientInjoinableKosc(value: boolean) {
        this._validOrdreKoscCorpsClientInjoinableKosc = value;
    }

    _validOrdreKoscFromClientInjoinableKosc = true;

    get validOrdreKoscFromClientInjoinableKosc(): boolean {
        return this._validOrdreKoscFromClientInjoinableKosc;
    }

    set validOrdreKoscFromClientInjoinableKosc(value: boolean) {
        this._validOrdreKoscFromClientInjoinableKosc = value;
    }

    _validOrdreKoscToClientInjoinableKosc = true;

    get validOrdreKoscToClientInjoinableKosc(): boolean {
        return this._validOrdreKoscToClientInjoinableKosc;
    }

    set validOrdreKoscToClientInjoinableKosc(value: boolean) {
        this._validOrdreKoscToClientInjoinableKosc = value;
    }

    _validOrdreKoscObjetCloture = true;

    get validOrdreKoscObjetCloture(): boolean {
        return this._validOrdreKoscObjetCloture;
    }

    set validOrdreKoscObjetCloture(value: boolean) {
        this._validOrdreKoscObjetCloture = value;
    }

    _validOrdreKoscCorpsCloture = true;

    get validOrdreKoscCorpsCloture(): boolean {
        return this._validOrdreKoscCorpsCloture;
    }

    set validOrdreKoscCorpsCloture(value: boolean) {
        this._validOrdreKoscCorpsCloture = value;
    }

    _validOrdreKoscObjetSuivi = true;

    get validOrdreKoscObjetSuivi(): boolean {
        return this._validOrdreKoscObjetSuivi;
    }

    set validOrdreKoscObjetSuivi(value: boolean) {
        this._validOrdreKoscObjetSuivi = value;
    }

    _validOrdreKoscCorpsSuivi = true;

    get validOrdreKoscCorpsSuivi(): boolean {
        return this._validOrdreKoscCorpsSuivi;
    }

    set validOrdreKoscCorpsSuivi(value: boolean) {
        this._validOrdreKoscCorpsSuivi = value;
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

    _validTechnicienCellPhone = true;

    get validTechnicienCellPhone(): boolean {
        return this._validTechnicienCellPhone;
    }

    set validTechnicienCellPhone(value: boolean) {
        this._validTechnicienCellPhone = value;
    }

    _validTechnicienEmail = true;

    get validTechnicienEmail(): boolean {
        return this._validTechnicienEmail;
    }

    set validTechnicienEmail(value: boolean) {
        this._validTechnicienEmail = value;
    }

    _validTechnicienIdentifiant = true;

    get validTechnicienIdentifiant(): boolean {
        return this._validTechnicienIdentifiant;
    }

    set validTechnicienIdentifiant(value: boolean) {
        this._validTechnicienIdentifiant = value;
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

    _validCauseKoOkCode = true;

    get validCauseKoOkCode(): boolean {
        return this._validCauseKoOkCode;
    }

    set validCauseKoOkCode(value: boolean) {
        this._validCauseKoOkCode = value;
    }

    _validCauseKoOkLibelle = true;

    get validCauseKoOkLibelle(): boolean {
        return this._validCauseKoOkLibelle;
    }

    set validCauseKoOkLibelle(value: boolean) {
        this._validCauseKoOkLibelle = value;
    }

    _validSourceReplanificationCode = true;

    get validSourceReplanificationCode(): boolean {
        return this._validSourceReplanificationCode;
    }

    set validSourceReplanificationCode(value: boolean) {
        this._validSourceReplanificationCode = value;
    }

    _validSourceReplanificationLibelle = true;

    get validSourceReplanificationLibelle(): boolean {
        return this._validSourceReplanificationLibelle;
    }

    set validSourceReplanificationLibelle(value: boolean) {
        this._validSourceReplanificationLibelle = value;
    }

    get ordreKoscs(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscs;
    }

    set ordreKoscs(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscs = value;
    }

    get selectedOrdreKosc(): OrdreKoscVo {
        return this.ordreKoscService.selectedOrdreKosc;
    }

    set selectedOrdreKosc(value: OrdreKoscVo) {
        this.ordreKoscService.selectedOrdreKosc = value;
    }

    get createOrdreKoscDialog(): boolean {
        return this.ordreKoscService.createOrdreKoscDialog;

    }

    set createOrdreKoscDialog(value: boolean) {
        this.ordreKoscService.createOrdreKoscDialog = value;
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

    get createSourceReplanificationDialog(): boolean {
        return this.sourceReplanificationService.createSourceReplanificationDialog;
    }

    set createSourceReplanificationDialog(value: boolean) {
        this.sourceReplanificationService.createSourceReplanificationDialog = value;
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

    get createCauseKoOkDialog(): boolean {
        return this.causeKoOkService.createCauseKoOkDialog;
    }

    set createCauseKoOkDialog(value: boolean) {
        this.causeKoOkService.createCauseKoOkDialog = value;
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

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

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

    navigateToOrdreKoscList() {
        this.router.navigate(['/app/ordre-kosc/list']);
    }

    public saveAndShowList() {
        this.saveWithShowOption(true);
    }

    public save() {
        this.submitted = true;
        // this.validateForm();
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
        this.ordreKoscService.save().subscribe(ordreKosc => {
            if (ordreKosc != null) {
                this.ordreKoscs.push({...ordreKosc});
                this.createOrdreKoscDialog = false;
                this.submitted = false;
                this.selectedOrdreKosc = new OrdreKoscVo();

                if (showList === true) {
                    this.navigateToOrdreKoscList();
                }
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Ordre kosc existe déjà'});
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



    public async openCreateDepartement(departement: string) {
        const isPermistted = await this.roleService.isPermitted('Departement', 'add');
        if (isPermistted) {
            this.selectedDepartement = new DepartementVo();
            this.createDepartementDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateSourceReplanification(sourceReplanification: string) {
        const isPermistted = await this.roleService.isPermitted('SourceReplanification', 'add');
        if (isPermistted) {
            this.selectedSourceReplanification = new SourceReplanificationVo();
            this.createSourceReplanificationDialog = true;
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

    public async openCreateTechnicien(technicien: string) {
        const isPermistted = await this.roleService.isPermitted('Technicien', 'add');
        if (isPermistted) {
            this.selectedTechnicien = new TechnicienVo();
            this.createTechnicienDialog = true;
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

    public async openCreateEtatDemandeKosc(etatDemandeKosc: string) {
        const isPermistted = await this.roleService.isPermitted('EtatDemandeKosc', 'add');
        if (isPermistted) {
            this.selectedEtatDemandeKosc = new EtatDemandeKoscVo();
            this.createEtatDemandeKoscDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateCauseKoOk(causeKoOk: string) {
        const isPermistted = await this.roleService.isPermitted('CauseKoOk', 'add');
        if (isPermistted) {
            this.selectedCauseKoOk = new CauseKoOkVo();
            this.createCauseKoOkDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateOperator(operator: string) {
        const isPermistted = await this.roleService.isPermitted('Operator', 'add');
        if (isPermistted) {
            this.selectedOperator = new OperatorVo();
            this.createOperatorDialog = true;
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

    hideCreateDialog() {
        this.createOrdreKoscDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validOrdreKoscObjetPlanification = value;
        this.validOrdreKoscCorpsPlanification = value;
        this.validOrdreKoscFromPlanification = value;
        this.validOrdreKoscToPlanification = value;
        this.validOrdreKoscObjetReplanification = value;
        this.validOrdreKoscCorpsReplanification = value;
        this.validOrdreKoscObjetRefus = value;
        this.validOrdreKoscCorpsRefus = value;
        this.validOrdreKoscFromRefus = value;
        this.validOrdreKoscToRefus = value;
        this.validOrdreKoscObjetMauvaisContact = value;
        this.validOrdreKoscCorpsMauvaisContact = value;
        this.validOrdreKoscFromMauvaisContact = value;
        this.validOrdreKoscToMauvaisContact = value;
        this.validOrdreKoscObjetConfirmationClient = value;
        this.validOrdreKoscCorpsConfirmationClient = value;
        this.validOrdreKoscFromConfirmationClient = value;
        this.validOrdreKoscToConfirmationClient = value;
        this.validOrdreKoscObjetCri = value;
        this.validOrdreKoscCorpsCri = value;
        this.validOrdreKoscFromCri = value;
        this.validOrdreKoscToCri = value;
        this.validOrdreKoscObjetFtl = value;
        this.validOrdreKoscCorpsFtl = value;
        this.validOrdreKoscFromFtl = value;
        this.validOrdreKoscToFtl = value;
        this.validOrdreKoscObjetClientInjoinable = value;
        this.validOrdreKoscFromClientInjoinable = value;
        this.validOrdreKoscToClientInjoinable = value;
        this.validOrdreKoscObjetClientInjoinableKosc = value;
        this.validOrdreKoscCorpsClientInjoinableKosc = value;
        this.validOrdreKoscFromClientInjoinableKosc = value;
        this.validOrdreKoscToClientInjoinableKosc = value;
        this.validOrdreKoscObjetCloture = value;
        this.validOrdreKoscCorpsCloture = value;
        this.validOrdreKoscObjetSuivi = value;
        this.validOrdreKoscCorpsSuivi = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateOrdreKoscObjetPlanification();
        this.validateOrdreKoscCorpsPlanification();
        this.validateOrdreKoscFromPlanification();
        this.validateOrdreKoscToPlanification();
        this.validateOrdreKoscObjetReplanification();
        this.validateOrdreKoscCorpsReplanification();
        this.validateOrdreKoscObjetRefus();
        this.validateOrdreKoscCorpsRefus();
        this.validateOrdreKoscFromRefus();
        this.validateOrdreKoscToRefus();
        this.validateOrdreKoscObjetMauvaisContact();
        this.validateOrdreKoscCorpsMauvaisContact();
        this.validateOrdreKoscFromMauvaisContact();
        this.validateOrdreKoscToMauvaisContact();
        this.validateOrdreKoscObjetConfirmationClient();
        this.validateOrdreKoscCorpsConfirmationClient();
        this.validateOrdreKoscFromConfirmationClient();
        this.validateOrdreKoscToConfirmationClient();
        this.validateOrdreKoscObjetCri();
        this.validateOrdreKoscCorpsCri();
        this.validateOrdreKoscFromCri();
        this.validateOrdreKoscToCri();
        this.validateOrdreKoscObjetFtl();
        this.validateOrdreKoscCorpsFtl();
        this.validateOrdreKoscFromFtl();
        this.validateOrdreKoscToFtl();
        this.validateOrdreKoscObjetClientInjoinable();
        this.validateOrdreKoscFromClientInjoinable();
        this.validateOrdreKoscToClientInjoinable();
        this.validateOrdreKoscObjetClientInjoinableKosc();
        this.validateOrdreKoscCorpsClientInjoinableKosc();
        this.validateOrdreKoscFromClientInjoinableKosc();
        this.validateOrdreKoscToClientInjoinableKosc();
        this.validateOrdreKoscObjetCloture();
        this.validateOrdreKoscCorpsCloture();
        this.validateOrdreKoscObjetSuivi();
        this.validateOrdreKoscCorpsSuivi();

    }

    private validateOrdreKoscObjetPlanification() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetPlanification)) {
            this.errorMessages.push('Objet planification non valide');
            this.validOrdreKoscObjetPlanification = false;
        } else {
            this.validOrdreKoscObjetPlanification = true;
        }
    }

    private validateOrdreKoscCorpsPlanification() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsPlanification)) {
            this.errorMessages.push('Corps planification non valide');
            this.validOrdreKoscCorpsPlanification = false;
        } else {
            this.validOrdreKoscCorpsPlanification = true;
        }
    }

    private validateOrdreKoscFromPlanification() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromPlanification)) {
            this.errorMessages.push('From planification non valide');
            this.validOrdreKoscFromPlanification = false;
        } else {
            this.validOrdreKoscFromPlanification = true;
        }
    }

    private validateOrdreKoscToPlanification() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toPlanification)) {
            this.errorMessages.push('To planification non valide');
            this.validOrdreKoscToPlanification = false;
        } else {
            this.validOrdreKoscToPlanification = true;
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

    private validateOrdreKoscObjetRefus() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetRefus)) {
            this.errorMessages.push('Objet refus non valide');
            this.validOrdreKoscObjetRefus = false;
        } else {
            this.validOrdreKoscObjetRefus = true;
        }
    }

    private validateOrdreKoscCorpsRefus() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsRefus)) {
            this.errorMessages.push('Corps refus non valide');
            this.validOrdreKoscCorpsRefus = false;
        } else {
            this.validOrdreKoscCorpsRefus = true;
        }
    }

    private validateOrdreKoscFromRefus() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromRefus)) {
            this.errorMessages.push('From refus non valide');
            this.validOrdreKoscFromRefus = false;
        } else {
            this.validOrdreKoscFromRefus = true;
        }
    }

    private validateOrdreKoscToRefus() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toRefus)) {
            this.errorMessages.push('To refus non valide');
            this.validOrdreKoscToRefus = false;
        } else {
            this.validOrdreKoscToRefus = true;
        }
    }

    private validateOrdreKoscObjetMauvaisContact() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetMauvaisContact)) {
            this.errorMessages.push('Objet mauvais contact non valide');
            this.validOrdreKoscObjetMauvaisContact = false;
        } else {
            this.validOrdreKoscObjetMauvaisContact = true;
        }
    }

    private validateOrdreKoscCorpsMauvaisContact() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsMauvaisContact)) {
            this.errorMessages.push('Corps mauvais contact non valide');
            this.validOrdreKoscCorpsMauvaisContact = false;
        } else {
            this.validOrdreKoscCorpsMauvaisContact = true;
        }
    }

    private validateOrdreKoscFromMauvaisContact() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromMauvaisContact)) {
            this.errorMessages.push('From mauvais contact non valide');
            this.validOrdreKoscFromMauvaisContact = false;
        } else {
            this.validOrdreKoscFromMauvaisContact = true;
        }
    }

    private validateOrdreKoscToMauvaisContact() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toMauvaisContact)) {
            this.errorMessages.push('To mauvais contact non valide');
            this.validOrdreKoscToMauvaisContact = false;
        } else {
            this.validOrdreKoscToMauvaisContact = true;
        }
    }

    private validateOrdreKoscObjetConfirmationClient() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetConfirmationClient)) {
            this.errorMessages.push('Objet confirmation client non valide');
            this.validOrdreKoscObjetConfirmationClient = false;
        } else {
            this.validOrdreKoscObjetConfirmationClient = true;
        }
    }

    private validateOrdreKoscCorpsConfirmationClient() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsConfirmationClient)) {
            this.errorMessages.push('Corps confirmation client non valide');
            this.validOrdreKoscCorpsConfirmationClient = false;
        } else {
            this.validOrdreKoscCorpsConfirmationClient = true;
        }
    }

    private validateOrdreKoscFromConfirmationClient() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromConfirmationClient)) {
            this.errorMessages.push('From confirmation client non valide');
            this.validOrdreKoscFromConfirmationClient = false;
        } else {
            this.validOrdreKoscFromConfirmationClient = true;
        }
    }

    private validateOrdreKoscToConfirmationClient() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toConfirmationClient)) {
            this.errorMessages.push('To confirmation client non valide');
            this.validOrdreKoscToConfirmationClient = false;
        } else {
            this.validOrdreKoscToConfirmationClient = true;
        }
    }

    private validateOrdreKoscObjetCri() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetCri)) {
            this.errorMessages.push('Objet cri non valide');
            this.validOrdreKoscObjetCri = false;
        } else {
            this.validOrdreKoscObjetCri = true;
        }
    }

    private validateOrdreKoscCorpsCri() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsCri)) {
            this.errorMessages.push('Corps cri non valide');
            this.validOrdreKoscCorpsCri = false;
        } else {
            this.validOrdreKoscCorpsCri = true;
        }
    }

    private validateOrdreKoscFromCri() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromCri)) {
            this.errorMessages.push('From cri non valide');
            this.validOrdreKoscFromCri = false;
        } else {
            this.validOrdreKoscFromCri = true;
        }
    }

    private validateOrdreKoscToCri() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toCri)) {
            this.errorMessages.push('To cri non valide');
            this.validOrdreKoscToCri = false;
        } else {
            this.validOrdreKoscToCri = true;
        }
    }

    private validateOrdreKoscObjetFtl() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetFtl)) {
            this.errorMessages.push('Objet ftl non valide');
            this.validOrdreKoscObjetFtl = false;
        } else {
            this.validOrdreKoscObjetFtl = true;
        }
    }

    private validateOrdreKoscCorpsFtl() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsFtl)) {
            this.errorMessages.push('Corps ftl non valide');
            this.validOrdreKoscCorpsFtl = false;
        } else {
            this.validOrdreKoscCorpsFtl = true;
        }
    }

    private validateOrdreKoscFromFtl() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromFtl)) {
            this.errorMessages.push('From ftl non valide');
            this.validOrdreKoscFromFtl = false;
        } else {
            this.validOrdreKoscFromFtl = true;
        }
    }

    private validateOrdreKoscToFtl() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toFtl)) {
            this.errorMessages.push('To ftl non valide');
            this.validOrdreKoscToFtl = false;
        } else {
            this.validOrdreKoscToFtl = true;
        }
    }

    private validateOrdreKoscObjetClientInjoinable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetClientInjoinable)) {
            this.errorMessages.push('Objet client injoinable non valide');
            this.validOrdreKoscObjetClientInjoinable = false;
        } else {
            this.validOrdreKoscObjetClientInjoinable = true;
        }
    }

    private validateOrdreKoscFromClientInjoinable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromClientInjoinable)) {
            this.errorMessages.push('From client injoinable non valide');
            this.validOrdreKoscFromClientInjoinable = false;
        } else {
            this.validOrdreKoscFromClientInjoinable = true;
        }
    }

    private validateOrdreKoscToClientInjoinable() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toClientInjoinable)) {
            this.errorMessages.push('To client injoinable non valide');
            this.validOrdreKoscToClientInjoinable = false;
        } else {
            this.validOrdreKoscToClientInjoinable = true;
        }
    }

    private validateOrdreKoscObjetClientInjoinableKosc() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetClientInjoinableKosc)) {
            this.errorMessages.push('Objet client injoinable kosc non valide');
            this.validOrdreKoscObjetClientInjoinableKosc = false;
        } else {
            this.validOrdreKoscObjetClientInjoinableKosc = true;
        }
    }

    private validateOrdreKoscCorpsClientInjoinableKosc() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsClientInjoinableKosc)) {
            this.errorMessages.push('Corps client injoinable kosc non valide');
            this.validOrdreKoscCorpsClientInjoinableKosc = false;
        } else {
            this.validOrdreKoscCorpsClientInjoinableKosc = true;
        }
    }

    private validateOrdreKoscFromClientInjoinableKosc() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromClientInjoinableKosc)) {
            this.errorMessages.push('From client injoinable kosc non valide');
            this.validOrdreKoscFromClientInjoinableKosc = false;
        } else {
            this.validOrdreKoscFromClientInjoinableKosc = true;
        }
    }

    private validateOrdreKoscToClientInjoinableKosc() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toClientInjoinableKosc)) {
            this.errorMessages.push('To client injoinable kosc non valide');
            this.validOrdreKoscToClientInjoinableKosc = false;
        } else {
            this.validOrdreKoscToClientInjoinableKosc = true;
        }
    }

    private validateOrdreKoscObjetCloture() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetCloture)) {
            this.errorMessages.push('Objet cloture non valide');
            this.validOrdreKoscObjetCloture = false;
        } else {
            this.validOrdreKoscObjetCloture = true;
        }
    }

    private validateOrdreKoscCorpsCloture() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsCloture)) {
            this.errorMessages.push('Corps cloture non valide');
            this.validOrdreKoscCorpsCloture = false;
        } else {
            this.validOrdreKoscCorpsCloture = true;
        }
    }

    private validateOrdreKoscObjetSuivi() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetSuivi)) {
            this.errorMessages.push('Objet suivi non valide');
            this.validOrdreKoscObjetSuivi = false;
        } else {
            this.validOrdreKoscObjetSuivi = true;
        }
    }

    private validateOrdreKoscCorpsSuivi() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsSuivi)) {
            this.errorMessages.push('Corps suivi non valide');
            this.validOrdreKoscCorpsSuivi = false;
        } else {
            this.validOrdreKoscCorpsSuivi = true;
        }
    }

}
