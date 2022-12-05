import {TemplateEmailReplanificationVo} from './TemplateEmailReplanification.model';
import {TemplateEmailPlanificationVo} from './TemplateEmailPlanification.model';
import {TemplateSuiviVo} from './TemplateSuivi.model';
import {OperatorVo} from './Operator.model';
import {SourceReplanificationVo} from './SourceReplanification.model';
import {TemplateEmailClientInjoinableKoscVo} from './TemplateEmailClientInjoinableKosc.model';
import {CauseKoOkVo} from './CauseKoOk.model';
import {TemplateEmailClientInjoinableVo} from './TemplateEmailClientInjoinable.model';
import {EtatDemandeKoscVo} from './EtatDemandeKosc.model';
import {TemplateEmailFtlVo} from './TemplateEmailFtl.model';
import {TemplateEmailClotureVo} from './TemplateEmailCloture.model';
import {TemplateEmailRefusVo} from './TemplateEmailRefus.model';
import {TemplateEmailConfirmationClientVo} from './TemplateEmailConfirmationClient.model';
import {DepartementVo} from './Departement.model';
import {TemplateEmailMauvaisContactVo} from './TemplateEmailMauvaisContact.model';
import {TechnicienVo} from './Technicien.model';
import {TemplateEmailCriVo} from './TemplateEmailCri.model';
import {User} from "./User.model";


export class OrdreKoscVo {

    public id: number;
    public erdv: null | boolean;
    public confort: null | boolean;
    public delaiPriseRdvParHeure : string;
    public reference: string;
    public referenceWorkOrder: string;
    public codeDecharge: string;
    public supplierServiceCode: string;
    public dateDebutTraitement: Date;
    public endCustumorName: string;
    public endCustumorSiret: string;
    public endCustumorFirstName: string;
    public endCustumorLastName: string;
    public endCustumorZipcode: string;
    public endCustumorStreetName: string;
    public endCustumorStreetNumber: string;
    public endCustumorCity: string;
    public endCustumorBuilding: string;
    public endCustumorStairs: string;
    public endCustumorFloor: string;
    public endCustumorContactFirstName: string;
    public endCustumorContactLastName: string;
    public endCustumorContactPhone: string;
    public endCustumorContactCellPhone: string;
    public endCustumorContactEmail: string;
    public company: string;
    public referenDossier: string;
    public submissionDate: Date;
    public coordonnePboY: string;
    public hauteurPbo: string;
    public typeMaterielPbo: string;
    public typePbo: string;
    public conditionSyndics: string;
    public typeRacordementPboPto: string;
    public autreInfosPboPto: string;
    public codeAccesImmeuble: string;
    public contacteImmeuble: string;
    public pmaAccessible: string;
    public infoObtentionCle: string;
    public localeIpm: string;
    public contactsSyndic: string;
    public racordementLong: null | boolean;
    public oc1: string;
    public nomModulePm1: string;
    public positionModulePm1: string;
    public referenceCableModulePm1: string;
    public referenceTubeModulePm1: string;
    public informationFibreModulePm1: string;
    public referenceCablePbo1: string;
    public informationTubePbo1: string;
    public informationFibrePbo1: string;
    public connecteurPriseNumero1: string;
    public connecteurPriseCouleur1: string;
    public reserve1: string;
    public oc2: string;
    public nomModulePm2: string;
    public positionModulePm2: string;
    public referenceCableModulePm2: string;
    public referenceTubeModulePm2: string;
    public informationFibreModulePm2: string;
    public referenceCablePbo2: string;
    public informationTubePbo2: string;
    public informationFibrePbo2: string;
    public connecteurPriseNumero2: string;
    public connecteurPriseCouleur2: string;
    public reserve2: string;
    public oc3: string;
    public nomModulePm3: string;
    public positionModulePm3: string;
    public referenceCableModulePm3: string;
    public referenceTubeModulePm3: string;
    public informationFibreModulePm3: string;
    public referenceCablePbo3: string;
    public informationTubePbo3: string;
    public informationFibrePbo3: string;
    public connecteurPriseNumero3: string;
    public connecteurPriseCouleur3: string;
    public reserve3: string;
    public oc4: string;
    public nomModulePm4: string;
    public positionModulePm4: string;
    public referenceCableModulePm4: string;
    public referenceTubeModulePm4: string;
    public informationFibreModulePm4: string;
    public referenceCablePbo4: string;
    public informationTubePbo4: string;
    public informationFibrePbo4: string;
    public connecteurPriseNumero4: string;
    public connecteurPriseCouleur4: string;
    public reserve4: string;
    public pboReel: string;
    public numeroSerieOnt: string;
    public hotline: string;
    public mutationPbo: string;
    public workOrderType: string;
    public product: string;
    public productCode: string;
    public productLabel: string;
    public provider: string;
    public providerFileType: string;
    public spliter: string;
    public existingOtp: null | boolean;
    public profile: string;
    public providerSlId: string;
    public referencePrestationPrise: string;
    public referencePm: string;
    public referencePmTechnique: string;
    public localisationPm: string;
    public providerProduct: string;
    public referencePbo: string;
    public localisationPbo: string;
    public referencePrise: string;
    public datePremierAppel: Date;
    public dateDeuxiemeAppel: Date;
    public dateTroisiemeAppel: Date;
    public datePriseRdv: Date;
    public dateRdv: Date;
    public dateOuverture: Date;
    public commentaireClient: string;
    public commentaireKosc: string;
    public objetPlanification: string;
    public corpsPlanification: string;
    public envoyePlanification: null | boolean;
    public dateEnvoiPlanification: Date;
    public fromPlanification: string;
    public toPlanification: string;
    public dateAppelReplanification: Date;
    public objetReport: string;
    public corpsReport: string;
    public fromReport: string;
    public toReport: string;
    public envoyeReport: null | boolean;
    public dateEnvoiReport: Date;
    public objetReplanification: string;
    public corpsReplanification: string;
    public fromReplanification: string;
    public toReplanification: string;
    public envoyeReplanification: null | boolean;
    public dateEnvoiReplanification: Date;
    public objetRefus: string;
    public corpsRefus: string;
    public fromRefus: string;
    public toRefus: string;
    public envoyeRefus: null | boolean;
    public dateEnvoiRefus: Date;
    public objetMauvaisContact: string;
    public corpsMauvaisContact: string;
    public fromMauvaisContact: string;
    public toMauvaisContact: string;
    public envoyeMauvaisContact: null | boolean;
    public dateEnvoiMauvaisContact: Date;
    public objetConfirmationClient: string;
    public corpsConfirmationClient: string;
    public fromConfirmationClient: string;
    public toConfirmationClient: string;
    public envoyeConfirmationClient: null | boolean;
    public dateEnvoiConfirmationClient: Date;
    public objetCri: string;
    public corpsCri: string;
    public fromCri: string;
    public toCri: string;
    public envoyeCri: null | boolean;
    public dateEnvoiCri: Date;
    public objetFtl: string;
    public corpsFtl: string;
    public fromFtl: string;
    public toFtl: string;
    public envoyeFtl: null | boolean;
    public dateEnvoiFtl: Date;
    public dateInterventionTechniqueDebut: Date;
    public dateInterventionTechniqueFin: Date;
    public objetClientInjoinable: string;
    public corpsClientInjoinable: string;
    public fromClientInjoinable: string;
    public toClientInjoinable: string;
    public envoyeClientInjoinable: null | boolean;
    public dateEnvoiClientInjoinable: Date;
    public objetAutre: string;
    public corpsAutre: string;
    public fromAutre: string;
    public toAutre: string;
    public envoyeAutre: null | boolean;
    public dateEnvoiAutre: Date;
    public objetClientInjoinableKosc: string;
    public corpsClientInjoinableKosc: string;
    public fromClientInjoinableKosc: string;
    public toClientInjoinableKosc: string;
    public envoyeClientInjoinableKosc: null | boolean;
    public dateEnvoiClientInjoinableKosc: Date;
    public commentaireTechnicien: string;
    public commantaireCloture: string;
    public objetCloture: string;
    public corpsCloture: string;
    public envoyeCloture: null | boolean;
    public dateEnvoiCloture: Date;
    public emailCloturePieceJoints: string;
    public objetSuivi: string;
    public corpsSuivi: string;
    public envoyeSuivi: null | boolean;
    public dateEnvoiSuivi: Date;
    public dateErdv: Date;
    public referenceCommandePriseInterneOC: string;
    public type: string;

    public dateDebutTraitementMax: string;
    public dateDebutTraitementMin: string;
    public submissionDateMax: string;
    public submissionDateMin: string;
    public datePremierAppelMax: string;
    public datePremierAppelMin: string;
    public dateDeuxiemeAppelMax: string;
    public dateDeuxiemeAppelMin: string;
    public dateTroisiemeAppelMax: string;
    public dateTroisiemeAppelMin: string;
    public datePriseRdvMax: string;
    public datePriseRdvMin: string;
    public dateRdvMax: string;
    public dateRdvMin: string;
    public dateOuvertureMax: string;
    public dateOuvertureMin: string;
    public dateEnvoiPlanificationMax: string;
    public dateEnvoiPlanificationMin: string;
    public dateAppelReplanificationMax: string;
    public dateAppelReplanificationMin: string;
    public dateEnvoiReportMax: string;
    public dateEnvoiReportMin: string;
    public dateEnvoiReplanificationMax: string;
    public dateEnvoiReplanificationMin: string;
    public dateEnvoiRefusMax: string;
    public dateEnvoiRefusMin: string;
    public dateEnvoiMauvaisContactMax: string;
    public dateEnvoiMauvaisContactMin: string;
    public dateEnvoiConfirmationClientMax: string;
    public dateEnvoiConfirmationClientMin: string;
    public dateEnvoiCriMax: string;
    public dateEnvoiCriMin: string;
    public dateEnvoiFtlMax: string;
    public dateEnvoiFtlMin: string;
    public dateInterventionTechniqueDebutMax: string;
    public dateInterventionTechniqueDebutMin: string;
    public dateInterventionTechniqueFinMax: string;
    public dateInterventionTechniqueFinMin: string;
    public dateEnvoiClientInjoinableMax: string;
    public dateEnvoiClientInjoinableMin: string;
    public dateEnvoiAutreMax: string;
    public dateEnvoiAutreMin: string;
    public dateEnvoiClientInjoinableKoscMax: string;
    public dateEnvoiClientInjoinableKoscMin: string;
    public dateEnvoiClotureMax: string;
    public dateEnvoiClotureMin: string;
    public dateEnvoiSuiviMax: string;
    public dateEnvoiSuiviMin: string;
    public operatorVo: OperatorVo;
    public departementVo: DepartementVo;
    public technicienVo: TechnicienVo;
    public templateEmailPlanificationVo: TemplateEmailPlanificationVo;
    public templateEmailReplanificationVo: TemplateEmailReplanificationVo;
    public templateEmailRefusVo: TemplateEmailRefusVo;
    public templateEmailMauvaisContactVo: TemplateEmailMauvaisContactVo;
    public templateEmailConfirmationClientVo: TemplateEmailConfirmationClientVo;
    public templateEmailCriVo: TemplateEmailCriVo;
    public templateEmailFtlVo: TemplateEmailFtlVo;
    public templateEmailClientInjoinableVo: TemplateEmailClientInjoinableVo;
    public templateEmailClientInjoinableKoscVo: TemplateEmailClientInjoinableKoscVo;
    public etatDemandeKoscVo: EtatDemandeKoscVo;
    public etatDemandeKoscVos : Array<EtatDemandeKoscVo>
    public templateEmailClotureVo: TemplateEmailClotureVo;
    public templateSuiviVo: TemplateSuiviVo;
    public causeKoOkVo: CauseKoOkVo;
    public sourceReplanificationVo: SourceReplanificationVo;
    public dateDernierAppel: Date;
    public numeroDernierAppel: number;
    public nbrHeureDateSubmissionAndNow: number;
    public nbrHeureDateSubmissionAndNowMin: number;
    public nbrHeureDateSubmissionAndNowMax: number;

    public objetReportDemandeManeoClientInjoignable: string;
    public corpsReportDemandeManeoClientInjoignable: string;
    public fromReportDemandeManeoClientInjoignable: string;
    public toReportDemandeManeoClientInjoignable: string;
    public envoyeReportDemandeManeoClientInjoignable: null | boolean;
    public dateEnvoiReportDemandeManeoClientInjoignable: Date;

    public objetReportDemandeManeoClientJoignableAccepte: string;
    public corpsReportDemandeManeoClientJoignableAccepte: string;
    public fromReportDemandeManeoClientJoignableAccepte: string;
    public toReportDemandeManeoClientJoignableAccepte: string;
    public envoyeReportDemandeManeoClientJoignableAccepte: null | boolean;
    public dateEnvoiReportDemandeManeoClientJoignableAccepte: Date;

    public objetReportDemandeManeoClientJoignableRefus: string;
    public corpsReportDemandeManeoClientJoignableRefus: string;
    public fromReportDemandeManeoClientJoignableRefus: string;
    public toReportDemandeManeoClientJoignableRefus: string;
    public envoyeReportDemandeManeoClientJoignableRefus: null | boolean;
    public dateEnvoiReportDemandeManeoClientJoignableRefus: Date;

    public objetReportDemandeClientClientInjoignable: string;
    public corpsReportDemandeClientClientInjoignable: string;
    public fromReportDemandeClientClientInjoignable: string;
    public toReportDemandeClientClientInjoignable: string;
    public envoyeReportDemandeClientClientInjoignable: null | boolean;
    public dateEnvoiReportDemandeClientClientInjoignable: Date;

    public objetReportDemandeClientClientJoignable: string;
    public corpsReportDemandeClientClientJoignable: string;
    public fromReportDemandeClientClientJoignable: string;
    public toReportDemandeClientClientJoignable: string;
    public envoyeReportDemandeClientClientJoignable: null | boolean;
    public dateEnvoiReportDemandeClientClientJoignable: Date;


    public dateCri: Date;

     public  supplier : string;


     public   customerOperator: string;


     public   slid;

     public   koscContactFirstName: string;

     public   koscContactLastName: string;



     public   koscContactPhone: string;

     public   koscContactEmail1: string;

     public   koscContactEmail2: string;

     public   koscContactEmail3: string;

     public   koscSplitterPosition: string;

     public   koscComment: string;


     public   otpRef: string;

     public   operatorComment: string;
    

    public userMauvaisContact: User;
    public userRefus: User;
    public userClientInjoinable: User;
    public userAutre: User;



}
