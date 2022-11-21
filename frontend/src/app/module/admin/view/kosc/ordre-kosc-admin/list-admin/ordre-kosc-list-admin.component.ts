import {Component, OnInit} from '@angular/core';
import {OrdreKoscService} from 'src/app/controller/service/OrdreKosc.service';
import {OrdreKoscVo} from 'src/app/controller/model/OrdreKosc.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {OperatorService} from 'src/app/controller/service/Operator.service';
import {DepartementService} from 'src/app/controller/service/Departement.service';
import {TechnicienService} from 'src/app/controller/service/Technicien.service';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {TemplateEmailReportService} from 'src/app/controller/service/TemplateEmailReport.service';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';
import {TemplateEmailRefusService} from 'src/app/controller/service/TemplateEmailRefus.service';
import {TemplateEmailMauvaisContactService} from 'src/app/controller/service/TemplateEmailMauvaisContact.service';
import {
    TemplateEmailConfirmationClientService
} from 'src/app/controller/service/TemplateEmailConfirmationClient.service';
import {TemplateEmailCriService} from 'src/app/controller/service/TemplateEmailCri.service';
import {TemplateEmailFtlService} from 'src/app/controller/service/TemplateEmailFtl.service';
import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
import {EtatDemandeKoscService} from 'src/app/controller/service/EtatDemandeKosc.service';
import {TemplateEmailClotureService} from 'src/app/controller/service/TemplateEmailCloture.service';
import {TemplateSuiviService} from 'src/app/controller/service/TemplateSuivi.service';
import {CauseKoOkService} from 'src/app/controller/service/CauseKoOk.service';
import {SourceReplanificationService} from 'src/app/controller/service/SourceReplanification.service';

import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {TemplateSuiviVo} from 'src/app/controller/model/TemplateSuivi.model';
import {OperatorVo} from 'src/app/controller/model/Operator.model';
import {SourceReplanificationVo} from 'src/app/controller/model/SourceReplanification.model';
import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';
import {CauseKoOkVo} from 'src/app/controller/model/CauseKoOk.model';
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {EtatDemandeKoscVo} from 'src/app/controller/model/EtatDemandeKosc.model';
import {TemplateEmailFtlVo} from 'src/app/controller/model/TemplateEmailFtl.model';
import {TemplateEmailClotureVo} from 'src/app/controller/model/TemplateEmailCloture.model';
import {TemplateEmailRefusVo} from 'src/app/controller/model/TemplateEmailRefus.model';
import {TemplateEmailConfirmationClientVo} from 'src/app/controller/model/TemplateEmailConfirmationClient.model';
import {DepartementVo} from 'src/app/controller/model/Departement.model';
import {TemplateEmailReportVo} from 'src/app/controller/model/TemplateEmailReport.model';
import {TemplateEmailMauvaisContactVo} from 'src/app/controller/model/TemplateEmailMauvaisContact.model';
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {TemplateEmailCriVo} from 'src/app/controller/model/TemplateEmailCri.model';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';
import * as XLSX from 'xlsx';
import {
    DefaultTemplateConfigurationService
} from "../../../../../../controller/service/DefaultTemplateConfiguration.service";
import {StatisticVo} from "../../../../../../controller/model/Statistic.model";
import {DateUtils} from "../../../../../../utils/DateUtils";


import {Observable} from "rxjs";
import {OrdreKoscExcelService} from "../../../../../../controller/service/OrdreKoscExcel.service";


@Component({
    selector: 'app-ordre-kosc-list-admin',
    templateUrl: './ordre-kosc-list-admin.component.html',
    styleUrls: ['./ordre-kosc-list-admin.component.css']
})
export class OrdreKoscListAdminComponent implements OnInit {
    get findByCriteriaShow(): boolean {
        return this._findByCriteriaShow;
    }
    set findByCriteriaShow(value: boolean) {
        this._findByCriteriaShow = value;
    }

    // declarations
    showSpinner = false;
    private _findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    excelImportButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'OrdreKosc';
    yesOrNoRacordementLong: any[] = [];
    yesOrNoExistingOtp: any[] = [];
    yesOrNoEnvoyePlanification: any[] = [];
    yesOrNoEnvoyeReport: any[] = [];
    yesOrNoEnvoyeReplanification: any[] = [];
    yesOrNoEnvoyeRefus: any[] = [];
    yesOrNoEnvoyeMauvaisContact: any[] = [];
    yesOrNoEnvoyeConfirmationClient: any[] = [];
    yesOrNoEnvoyeCri: any[] = [];
    yesOrNoEnvoyeFtl: any[] = [];
    yesOrNoEnvoyeClientInjoinable: any[] = [];
    yesOrNoEnvoyeClientInjoinableKosc: any[] = [];
    yesOrNoEnvoyeCloture: any[] = [];
    yesOrNoEnvoyeSuivi: any[] = [];
    yesOrNoErdv: any[] = [];
    yesOrNoConfort: any[] = [];

    operators: Array<OperatorVo>;
    departements: Array<DepartementVo>;
    techniciens: Array<TechnicienVo>;
    templateEmailPlanifications: Array<TemplateEmailPlanificationVo>;
    templateEmailReports: Array<TemplateEmailReportVo>;
    templateEmailReplanifications: Array<TemplateEmailReplanificationVo>;
    templateEmailRefuss: Array<TemplateEmailRefusVo>;
    templateEmailMauvaisContacts: Array<TemplateEmailMauvaisContactVo>;
    templateEmailConfirmationClients: Array<TemplateEmailConfirmationClientVo>;
    templateEmailCris: Array<TemplateEmailCriVo>;
    templateEmailFtls: Array<TemplateEmailFtlVo>;
    templateEmailClientInjoinables: Array<TemplateEmailClientInjoinableVo>;
    templateEmailClientInjoinableKoscs: Array<TemplateEmailClientInjoinableKoscVo>;
    etatDemandeKoscs: Array<EtatDemandeKoscVo>;
    templateEmailClotures: Array<TemplateEmailClotureVo>;
    templateSuivis: Array<TemplateSuiviVo>;
    causeKoOks: Array<CauseKoOkVo>;
    sourceReplanifications: Array<SourceReplanificationVo>;

    data: any [];
    arrayBuffer: any;
    display: boolean = false;


    constructor(private datePipe: DatePipe, private ordreKoscService: OrdreKoscService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
        , private operatorService: OperatorService
        , private departementService: DepartementService
        , private technicienService: TechnicienService
        , private templateEmailPlanificationService: TemplateEmailPlanificationService
        , private templateEmailReportService: TemplateEmailReportService
        , private templateEmailReplanificationService: TemplateEmailReplanificationService
        , private templateEmailRefusService: TemplateEmailRefusService
        , private templateEmailMauvaisContactService: TemplateEmailMauvaisContactService
        , private templateEmailConfirmationClientService: TemplateEmailConfirmationClientService
        , private templateEmailCriService: TemplateEmailCriService
        , private defaultTemplateConfigurationService: DefaultTemplateConfigurationService
        , private templateEmailFtlService: TemplateEmailFtlService
        , private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
        , private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
        , private etatDemandeKoscService: EtatDemandeKoscService
        , private templateEmailClotureService: TemplateEmailClotureService
        , private templateSuiviService: TemplateSuiviService
        , private causeKoOkService: CauseKoOkService
        , private sourceReplanificationService: SourceReplanificationService
        , private ordreKoscExcelService: OrdreKoscExcelService
    ) {
    }


    public async loadEtatDemandeKoscIncluding(etatNonDesire : Array<String>) {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.etatDemandeKoscService.findAll().subscribe(etatDemandeKoscs =>{
                this.etatDemandeKoscs = etatDemandeKoscs;
                this.searchOrdreKosc.etatDemandeKoscVos = this.etatDemandeKoscs.filter(e => etatNonDesire.indexOf(e.code) != -1);
                // console.log( this.searchOrdreKosc.etatDemandeKoscVos);
            }, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }


    isEtatNotEmpty(ordreKoscVo : OrdreKoscVo){

        if (ordreKoscVo.etatDemandeKoscVo !== null ){
            return true;
        }else {
            return false;
        }
    }



    showEndCustumorTab(ordreKosc: OrdreKoscVo) {
        this.selectedOrdreKosc = ordreKosc;
        this.selectedIndexView = 0;
        this.selectedKoscTabView = 1;
        this.viewOrdreKoscDialog = true;}





    endCustumorDetails(ordreKoscVo : OrdreKoscVo){
        if (ordreKoscVo.endCustumorFirstName != null && ordreKoscVo.endCustumorLastName){
            return `${ordreKoscVo.endCustumorFirstName}\t${ordreKoscVo.endCustumorLastName}`;
        }

    }


    isErdvAndReferenceEmpty(ordreKoscVo : OrdreKoscVo){
        if (ordreKoscVo.erdv == true && ordreKoscVo.reference != null){
            return true;
        }else {
            return false;
        }
    }
    isErdvAndReferencWorkOrdereEmpty(ordreKoscVo : OrdreKoscVo){
        if (ordreKoscVo.erdv == true && ordreKoscVo.referenceWorkOrder != null){
            return true;
        }else {
            return false;
        }
    }

     importAll(event: any) {
         this.showSpinner = true;
    this.ordreKoscExcelService.importAll(event);
    this.searchRequest();
         this.showSpinner = false;
     }

    importerDataBase(event:any){
        this.showSpinner = true;
        this.ordreKoscExcelService.importerDataBase(event).subscribe({
            next: () => {
                this.showSpinner = false;


            },
            error: () => {
                this.showSpinner = false;
            }
        });
    }

    showBasicDialog() {
        this.display = true;
    }

    private statistic: Array<StatisticVo>

    calculerStatistic() {
        this.ordreKoscService.calculerStatistic(this.searchOrdreKosc).subscribe(
            (data) => this.statistic = data,
        );

    }


    ngOnInit(): void {
        this.loadEtatDemandeKoscIncluding(['initialisation-wo', 'initialisation-erdv']);
        this.initExport();
        this.initImport();
        this.initCol();
        this.loadOperator();
        this.loadDepartement();
        this.loadTechnicien();
        this.loadTemplateEmailPlanification();
        this.loadTemplateEmailReport();
        this.loadTemplateEmailReplanification();
        this.loadTemplateEmailRefus();
        this.loadTemplateEmailMauvaisContact();
        this.loadTemplateEmailConfirmationClient();
        this.loadTemplateEmailCri();
        this.loadTemplateEmailFtl();
        this.loadTemplateEmailClientInjoinable();
        this.loadTemplateEmailClientInjoinableKosc();
        this.loadTemplateEmailCloture();
        this.loadTemplateSuivi();
        this.loadCauseKoOk();
        this.loadSourceReplanification();
        this.yesOrNoRacordementLong = [{label: 'RacordementLong', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoExistingOtp = [{label: 'ExistingOtp', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoEnvoyePlanification = [{label: 'EnvoyePlanification', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this.yesOrNoEnvoyeReport = [{label: 'EnvoyeReport', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoEnvoyeReplanification = [{label: 'EnvoyeReplanification', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this.yesOrNoEnvoyeRefus = [{label: 'EnvoyeRefus', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoEnvoyeMauvaisContact = [{label: 'EnvoyeMauvaisContact', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this.yesOrNoEnvoyeConfirmationClient = [{label: 'EnvoyeConfirmationClient', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this
            .yesOrNoEnvoyeCri = [{label: 'EnvoyeCri', value: null}, {label: 'Oui', value: 1}, {label: 'Non', value: 0}];
        this.yesOrNoEnvoyeFtl = [{label: 'EnvoyeFtl', value: null}, {label: 'Oui', value: 1}, {label: 'Non', value: 0}];
        this.yesOrNoEnvoyeClientInjoinable = [{label: 'EnvoyeClientInjoinable', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this.yesOrNoEnvoyeClientInjoinableKosc = [{label: 'EnvoyeClientInjoinableKosc', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this.yesOrNoEnvoyeCloture = [{label: 'EnvoyeCloture', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoEnvoyeSuivi = [{label: 'EnvoyeSuivi', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoErdv = [{label: 'Erdv', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoConfort = [{label: 'Confort', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.searchRequest();
    }

    // methods
    public async loadOrdreKoscs() {
        // await this.roleService.findAll();
        // const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        // isPermistted ?
        console.log('just before console findAll');
            this.ordreKoscService.findAll().subscribe(ordreKoscs => this.ordreKoscs = ordreKoscs, error => console.log(error));
           // : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.ordreKoscService.findByCriteriaOrderKoscImport(this.searchOrdreKosc).subscribe(ordreKoscs => {
            this.ordreKoscs = ordreKoscs;
        }, error => console.log(error));
    }

    public async editOrdreKosc(ordreKosc: OrdreKoscVo) {
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'edit');
        if (isPermistted) {
            this.ordreKoscService.findByIdWithAssociatedList(ordreKosc).subscribe(res => {
                this.selectedOrdreKosc = res;
                this.selectedOrdreKosc.dateDebutTraitement = DateUtils.toDate(ordreKosc.dateDebutTraitement);
                this.selectedOrdreKosc.submissionDate = DateUtils.toDate(ordreKosc.submissionDate);
                this.selectedOrdreKosc.datePremierAppel = DateUtils.toDate(ordreKosc.datePremierAppel);
                this.selectedOrdreKosc.dateDeuxiemeAppel = DateUtils.toDate(ordreKosc.dateDeuxiemeAppel);
                this.selectedOrdreKosc.dateTroisiemeAppel = DateUtils.toDate(ordreKosc.dateTroisiemeAppel);
                this.selectedOrdreKosc.datePriseRdv = DateUtils.toDate(ordreKosc.datePriseRdv);
                this.selectedOrdreKosc.dateRdv = DateUtils.toDate(ordreKosc.dateRdv);
                this.selectedOrdreKosc.dateOuverture =DateUtils.toDate(ordreKosc.dateOuverture);
                this.selectedOrdreKosc.dateEnvoiPlanification =DateUtils.toDate(ordreKosc.dateEnvoiPlanification);
                this.selectedOrdreKosc.dateAppelReplanification =DateUtils.toDate(ordreKosc.dateAppelReplanification);
                this.selectedOrdreKosc.dateEnvoiReport = DateUtils.toDate(ordreKosc.dateEnvoiReport);
                this.selectedOrdreKosc.dateEnvoiReplanification =DateUtils.toDate(ordreKosc.dateEnvoiReplanification);
                this.selectedOrdreKosc.dateEnvoiRefus =DateUtils.toDate(ordreKosc.dateEnvoiRefus);
                this.selectedOrdreKosc.dateEnvoiMauvaisContact =DateUtils.toDate(ordreKosc.dateEnvoiMauvaisContact);
                this.selectedOrdreKosc.dateEnvoiConfirmationClient =DateUtils.toDate(ordreKosc.dateEnvoiConfirmationClient);
                this.selectedOrdreKosc.dateEnvoiCri = DateUtils.toDate(ordreKosc.dateEnvoiCri);
                this.selectedOrdreKosc.dateEnvoiFtl =DateUtils.toDate(ordreKosc.dateEnvoiFtl);
                this.selectedOrdreKosc.dateInterventionTechniqueDebut =DateUtils.toDate(ordreKosc.dateInterventionTechniqueDebut);
                this.selectedOrdreKosc.dateInterventionTechniqueFin =DateUtils.toDate(ordreKosc.dateInterventionTechniqueFin);
                this.selectedOrdreKosc.dateEnvoiClientInjoinable =DateUtils.toDate(ordreKosc.dateEnvoiClientInjoinable);
                this.selectedOrdreKosc.dateEnvoiClientInjoinableKosc =DateUtils.toDate(ordreKosc.dateEnvoiClientInjoinableKosc);
                this.selectedOrdreKosc.dateEnvoiCloture =DateUtils.toDate(ordreKosc.dateEnvoiCloture);
                this.selectedOrdreKosc.dateEnvoiSuivi =DateUtils.toDate(ordreKosc.dateEnvoiSuivi);

                this.editOrdreKoscDialog = true;
                this.indexEdit=0
                this.selectedKoscTabView = 0;


            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewOrdreKosc(ordreKosc: OrdreKoscVo) {
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'view');
        if (isPermistted) {
            this.ordreKoscService.findByIdWithAssociatedList(ordreKosc).subscribe(res => {
                this.selectedOrdreKosc = res;
                this.selectedOrdreKosc.dateDebutTraitement = new Date(ordreKosc.dateDebutTraitement);
                this.selectedOrdreKosc.submissionDate = new Date(ordreKosc.submissionDate);
                this.selectedOrdreKosc.datePremierAppel = new Date(ordreKosc.datePremierAppel);
                this.selectedOrdreKosc.dateDeuxiemeAppel = new Date(ordreKosc.dateDeuxiemeAppel);
                this.selectedOrdreKosc.dateTroisiemeAppel = new Date(ordreKosc.dateTroisiemeAppel);
                this.selectedOrdreKosc.datePriseRdv = new Date(ordreKosc.datePriseRdv);
                this.selectedOrdreKosc.dateRdv = new Date(ordreKosc.dateRdv);
                this.selectedOrdreKosc.dateOuverture = new Date(ordreKosc.dateOuverture);
                this.selectedOrdreKosc.dateEnvoiPlanification = new Date(ordreKosc.dateEnvoiPlanification);
                this.selectedOrdreKosc.dateAppelReplanification = new Date(ordreKosc.dateAppelReplanification);
                this.selectedOrdreKosc.dateEnvoiReport = new Date(ordreKosc.dateEnvoiReport);
                this.selectedOrdreKosc.dateEnvoiReplanification = new Date(ordreKosc.dateEnvoiReplanification);
                this.selectedOrdreKosc.dateEnvoiRefus = new Date(ordreKosc.dateEnvoiRefus);
                this.selectedOrdreKosc.dateEnvoiMauvaisContact = new Date(ordreKosc.dateEnvoiMauvaisContact);
                this.selectedOrdreKosc.dateEnvoiConfirmationClient = new Date(ordreKosc.dateEnvoiConfirmationClient);
                this.selectedOrdreKosc.dateEnvoiCri = new Date(ordreKosc.dateEnvoiCri);
                this.selectedOrdreKosc.dateEnvoiFtl = new Date(ordreKosc.dateEnvoiFtl);
                this.selectedOrdreKosc.dateInterventionTechniqueDebut = new Date(ordreKosc.dateInterventionTechniqueDebut);
                this.selectedOrdreKosc.dateInterventionTechniqueFin = new Date(ordreKosc.dateInterventionTechniqueFin);
                this.selectedOrdreKosc.dateEnvoiClientInjoinable = new Date(ordreKosc.dateEnvoiClientInjoinable);
                this.selectedOrdreKosc.dateEnvoiClientInjoinableKosc = new Date(ordreKosc.dateEnvoiClientInjoinableKosc);
                this.selectedOrdreKosc.dateEnvoiCloture = new Date(ordreKosc.dateEnvoiCloture);
                this.selectedOrdreKosc.dateEnvoiSuivi = new Date(ordreKosc.dateEnvoiSuivi);

                this.viewOrdreKoscDialog = true;
                this.selectedIndexView=0
                this.selectedKoscTabView = 0;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }



    public async openCreateOrdreKosc(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedOrdreKosc = new OrdreKoscVo();
            this.createOrdreKoscDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteOrdreKosc(ordreKosc: OrdreKoscVo) {
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Ordre kosc) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.ordreKoscService.delete(ordreKosc).subscribe(status => {
                        if (status > 0) {
                            const position = this.ordreKoscs.indexOf(ordreKosc);
                            position > -1 ? this.ordreKoscs.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Ordre kosc Supprimé',
                                life: 3000
                            });
                        }

                    }, error => console.log(error))
                }
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
            });
        }
    }

    public async loadOperator() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.operatorService.findAll().subscribe(operators => this.operators = operators, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadDepartement() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.departementService.findAll().subscribe(departements => this.departements = departements, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTechnicien() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.technicienService.findAll().subscribe(techniciens => this.techniciens = techniciens, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async  loadTemplateEmailPlanification() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailPlanificationService.findAll().subscribe(templateEmailPlanifications => this.templateEmailPlanifications = templateEmailPlanifications, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTemplateEmailReport() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailReportService.findAll().subscribe(templateEmailReports => this.templateEmailReports = templateEmailReports, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTemplateEmailReplanification() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailReplanificationService.findAll().subscribe(templateEmailReplanifications => this.templateEmailReplanifications = templateEmailReplanifications, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTemplateEmailRefus() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailRefusService.findAll().subscribe(templateEmailRefuss => this.templateEmailRefuss = templateEmailRefuss, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTemplateEmailMauvaisContact() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailMauvaisContactService.findAll().subscribe(templateEmailMauvaisContacts => this.templateEmailMauvaisContacts = templateEmailMauvaisContacts, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    // getters and setters

    public async loadTemplateEmailConfirmationClient() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailConfirmationClientService.findAll().subscribe(templateEmailConfirmationClients => this.templateEmailConfirmationClients = templateEmailConfirmationClients, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async  loadTemplateEmailCri() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailCriService.findAll().subscribe(templateEmailCris => this.templateEmailCris = templateEmailCris, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTemplateEmailFtl() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailFtlService.findAll().subscribe(templateEmailFtls => this.templateEmailFtls = templateEmailFtls, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTemplateEmailClientInjoinable() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailClientInjoinableService.findAll().subscribe(templateEmailClientInjoinables => this.templateEmailClientInjoinables = templateEmailClientInjoinables, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTemplateEmailClientInjoinableKosc() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailClientInjoinableKoscService.findAll().subscribe(templateEmailClientInjoinableKoscs => this.templateEmailClientInjoinableKoscs = templateEmailClientInjoinableKoscs, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadEtatDemandeKosc() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.etatDemandeKoscService.findAll().subscribe(etatDemandeKoscs => this.etatDemandeKoscs = etatDemandeKoscs, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public async loadEtatDemandeKoscExcept(etatNonDesire : Array<String>) {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.etatDemandeKoscService.findAll().subscribe(etatDemandeKoscs =>{
                this.etatDemandeKoscs = etatDemandeKoscs;
                this.searchOrdreKosc.etatDemandeKoscVos = this.etatDemandeKoscs.filter(e => etatNonDesire.indexOf(e .code) == -1);
                console.log( this.searchOrdreKosc.etatDemandeKoscVos);
            }, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public async loadTemplateEmailCloture() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailClotureService.findAll().subscribe(templateEmailClotures => this.templateEmailClotures = templateEmailClotures, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTemplateSuivi() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateSuiviService.findAll().subscribe(templateSuivis => this.templateSuivis = templateSuivis, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadCauseKoOk() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.causeKoOkService.findAll().subscribe(causeKoOks => this.causeKoOks = causeKoOks, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadSourceReplanification() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.sourceReplanificationService.findAll().subscribe(sourceReplanifications => this.sourceReplanifications = sourceReplanifications, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async duplicateOrdreKosc(ordreKosc: OrdreKoscVo) {

        this.ordreKoscService.findByIdWithAssociatedList(ordreKosc).subscribe(
            res => {
                this.initDuplicateOrdreKosc(res);
                this.selectedOrdreKosc = res;
                this.selectedOrdreKosc.id = null;


                this.createOrdreKoscDialog = true;

            });

    }

    initDuplicateOrdreKosc(res: OrdreKoscVo) {

    }

    initExport(): void {
        this.excelPdfButons = [
            {
                label: 'CSV', icon: 'pi pi-file', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterCSV(this.criteriaData, this.exportData, this.fileName);
                }
            },
        ];
    }

    initImport()
        :
        void {
        this.excelImportButons = [
            {
                label: 'Importer Kosc', icon: 'pi pi-plus', command: e => {
                    //this.readExcel(e);
                    //this.prepareColumnExport();
                    //this.exportService.exporterCSV(this.criteriaData, this.exportData, this.fileName);
                }
            },
            {
                label: 'Importer Ftel', icon: 'pi pi-plus', command: e => {
                    //this.readFtel(e);
                    /*this.prepareColumnExport();
                    this.exportService.exporterExcel(this.criteriaData, this.exportData, this.fileName);*/
                }
            },
            {
                label: 'Importer ERdv', icon: 'pi pi-plus', command: e => {
                    //this.readERdv(e);
                    /* this.prepareColumnExport();
                     this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName);*/
                }
            }
        ];
    }

    prepareColumnExport()
        :
        void {
        this.exportData = this.ordreKoscs.map(e => {
            return {
                'Reference': e.reference,
                'Reference work order': e.referenceWorkOrder,
                'Code decharge': e.codeDecharge,
                'Supplier service code': e.supplierServiceCode,
                'Erdv': e.erdv ? 'Vrai' : 'Faux',
                'Confort': e.confort ? 'Vrai' : 'Faux',
                'Delai prise rdv par heure': e.delaiPriseRdvParHeure,
                'Date debut traitement': this.datePipe.transform(e.dateDebutTraitement, 'dd/MM/yyyy hh:mm'),
                'End custumor name': e.endCustumorName,
                'End custumor siret': e.endCustumorSiret,
                'End custumor first name': e.endCustumorFirstName,
                'End custumor last name': e.endCustumorLastName,
                'End custumor zipcode': e.endCustumorZipcode,
                'End custumor street name': e.endCustumorStreetName,
                'End custumor street number': e.endCustumorStreetNumber,
                'End custumor city': e.endCustumorCity,
                'End custumor building': e.endCustumorBuilding,
                'End custumor stairs': e.endCustumorStairs,
                'End custumor floor': e.endCustumorFloor,
                'End custumor contact first name': e.endCustumorContactFirstName,
                'End custumor contact last name': e.endCustumorContactLastName,
                'End custumor contact phone': e.endCustumorContactPhone,
                'End custumor contact cell phone': e.endCustumorContactCellPhone,
                'End custumor contact email': e.endCustumorContactEmail,
                'Operator': e.operatorVo?.libelle,
                'Company': e.company,
                'Referen dossier': e.referenDossier,
                'Submission date': this.datePipe.transform(e.submissionDate, 'dd/MM/yyyy hh:mm'),
                'Coordonne pbo y': e.coordonnePboY,
                'Hauteur pbo': e.hauteurPbo,
                'Type materiel pbo': e.typeMaterielPbo,
                'Type pbo': e.typePbo,
                'Condition syndics': e.conditionSyndics,
                'Type racordement pbo pto': e.typeRacordementPboPto,
                'Autre infos pbo pto': e.autreInfosPboPto,
                'Code acces immeuble': e.codeAccesImmeuble,
                'Contacte immeuble': e.contacteImmeuble,
                'Pma accessible': e.pmaAccessible,
                'Info obtention cle': e.infoObtentionCle,
                'Locale ipm': e.localeIpm,
                'Contacts syndic': e.contactsSyndic,
                'Racordement long': e.racordementLong ? 'Vrai' : 'Faux',
                'Oc1': e.oc1,
                'Nom module pm1': e.nomModulePm1,
                'Position module pm1': e.positionModulePm1,
                'Reference cable module pm1': e.referenceCableModulePm1,
                'Reference tube module pm1': e.referenceTubeModulePm1,
                'Information fibre module pm1': e.informationFibreModulePm1,
                'Reference cable pbo1': e.referenceCablePbo1,
                'Information tube pbo1': e.informationTubePbo1,
                'Information fibre pbo1': e.informationFibrePbo1,
                'Connecteur prise numero1': e.connecteurPriseNumero1,
                'Connecteur prise couleur1': e.connecteurPriseCouleur1,
                'Reserve1': e.reserve1,
                'Oc2': e.oc2,
                'Nom module pm2': e.nomModulePm2,
                'Position module pm2': e.positionModulePm2,
                'Reference cable module pm2': e.referenceCableModulePm2,
                'Reference tube module pm2': e.referenceTubeModulePm2,
                'Information fibre module pm2': e.informationFibreModulePm2,
                'Reference cable pbo2': e.referenceCablePbo2,
                'Information tube pbo2': e.informationTubePbo2,
                'Information fibre pbo2': e.informationFibrePbo2,
                'Connecteur prise numero2': e.connecteurPriseNumero2,
                'Connecteur prise couleur2': e.connecteurPriseCouleur2,
                'Reserve2': e.reserve2,
                'Oc3': e.oc3,
                'Nom module pm3': e.nomModulePm3,
                'Position module pm3': e.positionModulePm3,
                'Reference cable module pm3': e.referenceCableModulePm3,
                'Reference tube module pm3': e.referenceTubeModulePm3,
                'Information fibre module pm3': e.informationFibreModulePm3,
                'Reference cable pbo3': e.referenceCablePbo3,
                'Information tube pbo3': e.informationTubePbo3,
                'Information fibre pbo3': e.informationFibrePbo3,
                'Connecteur prise numero3': e.connecteurPriseNumero3,
                'Connecteur prise couleur3': e.connecteurPriseCouleur3,
                'Reserve3': e.reserve3,
                'Oc4': e.oc4,
                'Nom module pm4': e.nomModulePm4,
                'Position module pm4': e.positionModulePm4,
                'Reference cable module pm4': e.referenceCableModulePm4,
                'Reference tube module pm4': e.referenceTubeModulePm4,
                'Information fibre module pm4': e.informationFibreModulePm4,
                'Reference cable pbo4': e.referenceCablePbo4,
                'Information tube pbo4': e.informationTubePbo4,
                'Information fibre pbo4': e.informationFibrePbo4,
                'Connecteur prise numero4': e.connecteurPriseNumero4,
                'Connecteur prise couleur4': e.connecteurPriseCouleur4,
                'Reserve4': e.reserve4,
                'Departement': e.departementVo?.libelle,
                'Technicien': e.technicienVo?.identifiant,
                'Pbo reel': e.pboReel,
                'Numero serie ont': e.numeroSerieOnt,
                'Hotline': e.hotline,
                'Mutation pbo': e.mutationPbo,
                'Work order type': e.workOrderType,
                'Product': e.product,
                'Provider': e.provider,
                'Provider file type': e.providerFileType,
                'Spliter': e.spliter,
                'Existing otp': e.existingOtp ? 'Vrai' : 'Faux',
                'Profile': e.profile,
                'Provider sl id': e.providerSlId,
                'Reference prestation prise': e.referencePrestationPrise,
                'Reference pm': e.referencePm,
                'Reference pm technique': e.referencePmTechnique,
                'Localisation pm': e.localisationPm,
                'Provider product': e.providerProduct,
                'Reference pbo': e.referencePbo,
                'Localisation pbo': e.localisationPbo,
                'Reference prise': e.referencePrise,
                'Date premier appel': this.datePipe.transform(e.datePremierAppel, 'dd/MM/yyyy hh:mm'),
                'Date deuxieme appel': this.datePipe.transform(e.dateDeuxiemeAppel, 'dd/MM/yyyy hh:mm'),
                'Date troisieme appel': this.datePipe.transform(e.dateTroisiemeAppel, 'dd/MM/yyyy hh:mm'),
                'Date prise rdv': this.datePipe.transform(e.datePriseRdv, 'dd/MM/yyyy hh:mm'),
                'Date rdv': this.datePipe.transform(e.dateRdv, 'dd/MM/yyyy hh:mm'),
                'Date ouverture': this.datePipe.transform(e.dateOuverture, 'dd/MM/yyyy hh:mm'),
                'Commentaire client': e.commentaireClient,
                'Commentaire kosc': e.commentaireKosc,
                'Template email planification': e.templateEmailPlanificationVo?.libelle,
                'Objet planification': e.objetPlanification,
                'Corps planification': e.corpsPlanification,
                'Envoye planification': e.envoyePlanification ? 'Vrai' : 'Faux',
                'Date envoi planification': this.datePipe.transform(e.dateEnvoiPlanification, 'dd/MM/yyyy hh:mm'),
                'From planification': e.fromPlanification,
                'To planification': e.toPlanification,
                'Date appel replanification': this.datePipe.transform(e.dateAppelReplanification, 'dd/MM/yyyy hh:mm'),
                'Template email report': e.templateEmailReportVo?.libelle,
                'Objet report': e.objetReport,
                'Corps report': e.corpsReport,
                'Envoye report': e.envoyeReport ? 'Vrai' : 'Faux',
                'Date envoi report': this.datePipe.transform(e.dateEnvoiReport, 'dd/MM/yyyy hh:mm'),
                'Template email replanification': e.templateEmailReplanificationVo?.libelle,
                'Objet replanification': e.objetReplanification,
                'Corps replanification': e.corpsReplanification,
                'Envoye replanification': e.envoyeReplanification ? 'Vrai' : 'Faux',
                'Date envoi replanification': this.datePipe.transform(e.dateEnvoiReplanification, 'dd/MM/yyyy hh:mm'),
                'Template email refus': e.templateEmailRefusVo?.libelle,
                'Objet refus': e.objetRefus,
                'Corps refus': e.corpsRefus,
                'From refus': e.fromRefus,
                'To refus': e.toRefus,
                'Envoye refus': e.envoyeRefus ? 'Vrai' : 'Faux',
                'Date envoi refus': this.datePipe.transform(e.dateEnvoiRefus, 'dd/MM/yyyy hh:mm'),
                'Template email mauvais contact': e.templateEmailMauvaisContactVo?.libelle,
                'Objet mauvais contact': e.objetMauvaisContact,
                'Corps mauvais contact': e.corpsMauvaisContact,
                'From mauvais contact': e.fromMauvaisContact,
                'To mauvais contact': e.toMauvaisContact,
                'Envoye mauvais contact': e.envoyeMauvaisContact ? 'Vrai' : 'Faux',
                'Date envoi mauvais contact': this.datePipe.transform(e.dateEnvoiMauvaisContact, 'dd/MM/yyyy hh:mm'),
                'Template email confirmation client': e.templateEmailConfirmationClientVo?.libelle,
                'Objet confirmation client': e.objetConfirmationClient,
                'Corps confirmation client': e.corpsConfirmationClient,
                'From confirmation client': e.fromConfirmationClient,
                'To confirmation client': e.toConfirmationClient,
                'Envoye confirmation client': e.envoyeConfirmationClient ? 'Vrai' : 'Faux',
                'Date envoi confirmation client': this.datePipe.transform(e.dateEnvoiConfirmationClient, 'dd/MM/yyyy hh:mm'),
                'Template email cri': e.templateEmailCriVo?.libelle,
                'Objet cri': e.objetCri,
                'Corps cri': e.corpsCri,
                'From cri': e.fromCri,
                'To cri': e.toCri,
                'Envoye cri': e.envoyeCri ? 'Vrai' : 'Faux',
                'Date envoi cri': this.datePipe.transform(e.dateEnvoiCri, 'dd/MM/yyyy hh:mm'),
                'Template email ftl': e.templateEmailFtlVo?.libelle,
                'Objet ftl': e.objetFtl,
                'Corps ftl': e.corpsFtl,
                'From ftl': e.fromFtl,
                'To ftl': e.toFtl,
                'Envoye ftl': e.envoyeFtl ? 'Vrai' : 'Faux',
                'Date envoi ftl': this.datePipe.transform(e.dateEnvoiFtl, 'dd/MM/yyyy hh:mm'),
                'Date intervention technique debut': this.datePipe.transform(e.dateInterventionTechniqueDebut, 'dd/MM/yyyy hh:mm'),
                'Date intervention technique fin': this.datePipe.transform(e.dateInterventionTechniqueFin, 'dd/MM/yyyy hh:mm'),
                'Template email client injoinable': e.templateEmailClientInjoinableVo?.libelle,
                'Objet client injoinable': e.objetClientInjoinable,
                'Corps client injoinable': e.corpsClientInjoinable,
                'From client injoinable': e.fromClientInjoinable,
                'To client injoinable': e.toClientInjoinable,
                'Envoye client injoinable': e.envoyeClientInjoinable ? 'Vrai' : 'Faux',
                'Date envoi client injoinable': this.datePipe.transform(e.dateEnvoiClientInjoinable, 'dd/MM/yyyy hh:mm'),
                'Template email client injoinable kosc': e.templateEmailClientInjoinableKoscVo?.libelle,
                'Objet client injoinable kosc': e.objetClientInjoinableKosc,
                'Corps client injoinable kosc': e.corpsClientInjoinableKosc,
                'From client injoinable kosc': e.fromClientInjoinableKosc,
                'To client injoinable kosc': e.toClientInjoinableKosc,
                'Envoye client injoinable kosc': e.envoyeClientInjoinableKosc ? 'Vrai' : 'Faux',
                'Date envoi client injoinable kosc': this.datePipe.transform(e.dateEnvoiClientInjoinableKosc, 'dd/MM/yyyy hh:mm'),
                'Commentaire technicien': e.commentaireTechnicien,
                'Commantaire cloture': e.commantaireCloture,
                'Etat demande kosc': e.etatDemandeKoscVo?.libelle,
                'Template email cloture': e.templateEmailClotureVo?.libelle,
                'Objet cloture': e.objetCloture,
                'Corps cloture': e.corpsCloture,
                'Envoye cloture': e.envoyeCloture ? 'Vrai' : 'Faux',
                'Date envoi cloture': this.datePipe.transform(e.dateEnvoiCloture, 'dd/MM/yyyy hh:mm'),
                'Email cloture piece joints': e.emailCloturePieceJoints,
                'Template suivi': e.templateSuiviVo?.libelle,
                'Objet suivi': e.objetSuivi,
                'Corps suivi': e.corpsSuivi,
                'Envoye suivi': e.envoyeSuivi ? 'Vrai' : 'Faux',
                'Date envoi suivi': this.datePipe.transform(e.dateEnvoiSuivi, 'dd/MM/yyyy hh:mm'),
                'Cause ko ok': e.causeKoOkVo?.libelle,
                'Source replanification': e.sourceReplanificationVo?.libelle,
            }
        });

        this.criteriaData = [{
            /* 'Reference': this.searchOrdreKosc.reference ? this.searchOrdreKosc.reference : environment.emptyForExport,
             'Reference work order': this.searchOrdreKosc.referenceWorkOrder ? this.searchOrdreKosc.referenceWorkOrder : environment.emptyForExport,
             'Code decharge': this.searchOrdreKosc.codeDecharge ? this.searchOrdreKosc.codeDecharge : environment.emptyForExport,
             'Delai prise rdv par heure': this.searchOrdreKosc.delaiPriseRdvParHeure ? this.searchOrdreKosc.delaiPriseRdvParHeure : environment.emptyForExport,
             'Supplier service code': this.searchOrdreKosc.supplierServiceCode ? this.searchOrdreKosc.supplierServiceCode : environment.emptyForExport,
             'Erdv': this.searchOrdreKosc.erdv ? (this.searchOrdreKosc.erdv ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Confort': this.searchOrdreKosc.confort ? (this.searchOrdreKosc.confort ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date debut traitement Min': this.searchOrdreKosc.dateDebutTraitementMin ? this.datePipe.transform(this.searchOrdreKosc.dateDebutTraitementMin, this.dateFormat) : environment.emptyForExport,
             'Date debut traitement Max': this.searchOrdreKosc.dateDebutTraitementMax ? this.datePipe.transform(this.searchOrdreKosc.dateDebutTraitementMax, this.dateFormat) : environment.emptyForExport,
             'End custumor name': this.searchOrdreKosc.endCustumorName ? this.searchOrdreKosc.endCustumorName : environment.emptyForExport,
             'End custumor siret': this.searchOrdreKosc.endCustumorSiret ? this.searchOrdreKosc.endCustumorSiret : environment.emptyForExport,
             'End custumor first name': this.searchOrdreKosc.endCustumorFirstName ? this.searchOrdreKosc.endCustumorFirstName : environment.emptyForExport,
             'End custumor last name': this.searchOrdreKosc.endCustumorLastName ? this.searchOrdreKosc.endCustumorLastName : environment.emptyForExport,
             'End custumor zipcode': this.searchOrdreKosc.endCustumorZipcode ? this.searchOrdreKosc.endCustumorZipcode : environment.emptyForExport,
             'End custumor street name': this.searchOrdreKosc.endCustumorStreetName ? this.searchOrdreKosc.endCustumorStreetName : environment.emptyForExport,
             'End custumor street number': this.searchOrdreKosc.endCustumorStreetNumber ? this.searchOrdreKosc.endCustumorStreetNumber : environment.emptyForExport,
             'End custumor city': this.searchOrdreKosc.endCustumorCity ? this.searchOrdreKosc.endCustumorCity : environment.emptyForExport,
             'End custumor building': this.searchOrdreKosc.endCustumorBuilding ? this.searchOrdreKosc.endCustumorBuilding : environment.emptyForExport,
             'End custumor stairs': this.searchOrdreKosc.endCustumorStairs ? this.searchOrdreKosc.endCustumorStairs : environment.emptyForExport,
             'End custumor floor': this.searchOrdreKosc.endCustumorFloor ? this.searchOrdreKosc.endCustumorFloor : environment.emptyForExport,
             'End custumor contact first name': this.searchOrdreKosc.endCustumorContactFirstName ? this.searchOrdreKosc.endCustumorContactFirstName : environment.emptyForExport,
             'End custumor contact last name': this.searchOrdreKosc.endCustumorContactLastName ? this.searchOrdreKosc.endCustumorContactLastName : environment.emptyForExport,
             'End custumor contact phone': this.searchOrdreKosc.endCustumorContactPhone ? this.searchOrdreKosc.endCustumorContactPhone : environment.emptyForExport,
             'End custumor contact cell phone': this.searchOrdreKosc.endCustumorContactCellPhone ? this.searchOrdreKosc.endCustumorContactCellPhone : environment.emptyForExport,
             'End custumor contact email': this.searchOrdreKosc.endCustumorContactEmail ? this.searchOrdreKosc.endCustumorContactEmail : environment.emptyForExport,
             'Operator': this.searchOrdreKosc.operatorVo?.libelle ? this.searchOrdreKosc.operatorVo?.libelle : environment.emptyForExport,
             'Company': this.searchOrdreKosc.company ? this.searchOrdreKosc.company : environment.emptyForExport,
             'Referen dossier': this.searchOrdreKosc.referenDossier ? this.searchOrdreKosc.referenDossier : environment.emptyForExport,
             'Submission date Min': this.searchOrdreKosc.submissionDateMin ? this.datePipe.transform(this.searchOrdreKosc.submissionDateMin, this.dateFormat) : environment.emptyForExport,
             'Submission date Max': this.searchOrdreKosc.submissionDateMax ? this.datePipe.transform(this.searchOrdreKosc.submissionDateMax, this.dateFormat) : environment.emptyForExport,
             'Coordonne pbo y': this.searchOrdreKosc.coordonnePboY ? this.searchOrdreKosc.coordonnePboY : environment.emptyForExport,
             'Hauteur pbo': this.searchOrdreKosc.hauteurPbo ? this.searchOrdreKosc.hauteurPbo : environment.emptyForExport,
             'Type materiel pbo': this.searchOrdreKosc.typeMaterielPbo ? this.searchOrdreKosc.typeMaterielPbo : environment.emptyForExport,
             'Type pbo': this.searchOrdreKosc.typePbo ? this.searchOrdreKosc.typePbo : environment.emptyForExport,
             'Condition syndics': this.searchOrdreKosc.conditionSyndics ? this.searchOrdreKosc.conditionSyndics : environment.emptyForExport,
             'Type racordement pbo pto': this.searchOrdreKosc.typeRacordementPboPto ? this.searchOrdreKosc.typeRacordementPboPto : environment.emptyForExport,
             'Autre infos pbo pto': this.searchOrdreKosc.autreInfosPboPto ? this.searchOrdreKosc.autreInfosPboPto : environment.emptyForExport,
             'Code acces immeuble': this.searchOrdreKosc.codeAccesImmeuble ? this.searchOrdreKosc.codeAccesImmeuble : environment.emptyForExport,
             'Contacte immeuble': this.searchOrdreKosc.contacteImmeuble ? this.searchOrdreKosc.contacteImmeuble : environment.emptyForExport,
             'Pma accessible': this.searchOrdreKosc.pmaAccessible ? this.searchOrdreKosc.pmaAccessible : environment.emptyForExport,
             'Info obtention cle': this.searchOrdreKosc.infoObtentionCle ? this.searchOrdreKosc.infoObtentionCle : environment.emptyForExport,
             'Locale ipm': this.searchOrdreKosc.localeIpm ? this.searchOrdreKosc.localeIpm : environment.emptyForExport,
             'Contacts syndic': this.searchOrdreKosc.contactsSyndic ? this.searchOrdreKosc.contactsSyndic : environment.emptyForExport,
             'Racordement long': this.searchOrdreKosc.racordementLong ? (this.searchOrdreKosc.racordementLong ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Oc1': this.searchOrdreKosc.oc1 ? this.searchOrdreKosc.oc1 : environment.emptyForExport,
             'Nom module pm1': this.searchOrdreKosc.nomModulePm1 ? this.searchOrdreKosc.nomModulePm1 : environment.emptyForExport,
             'Position module pm1': this.searchOrdreKosc.positionModulePm1 ? this.searchOrdreKosc.positionModulePm1 : environment.emptyForExport,
             'Reference cable module pm1': this.searchOrdreKosc.referenceCableModulePm1 ? this.searchOrdreKosc.referenceCableModulePm1 : environment.emptyForExport,
             'Reference tube module pm1': this.searchOrdreKosc.referenceTubeModulePm1 ? this.searchOrdreKosc.referenceTubeModulePm1 : environment.emptyForExport,
             'Information fibre module pm1': this.searchOrdreKosc.informationFibreModulePm1 ? this.searchOrdreKosc.informationFibreModulePm1 : environment.emptyForExport,
             'Reference cable pbo1': this.searchOrdreKosc.referenceCablePbo1 ? this.searchOrdreKosc.referenceCablePbo1 : environment.emptyForExport,
             'Information tube pbo1': this.searchOrdreKosc.informationTubePbo1 ? this.searchOrdreKosc.informationTubePbo1 : environment.emptyForExport,
             'Information fibre pbo1': this.searchOrdreKosc.informationFibrePbo1 ? this.searchOrdreKosc.informationFibrePbo1 : environment.emptyForExport,
             'Connecteur prise numero1': this.searchOrdreKosc.connecteurPriseNumero1 ? this.searchOrdreKosc.connecteurPriseNumero1 : environment.emptyForExport,
             'Connecteur prise couleur1': this.searchOrdreKosc.connecteurPriseCouleur1 ? this.searchOrdreKosc.connecteurPriseCouleur1 : environment.emptyForExport,
             'Reserve1': this.searchOrdreKosc.reserve1 ? this.searchOrdreKosc.reserve1 : environment.emptyForExport,
             'Oc2': this.searchOrdreKosc.oc2 ? this.searchOrdreKosc.oc2 : environment.emptyForExport,
             'Nom module pm2': this.searchOrdreKosc.nomModulePm2 ? this.searchOrdreKosc.nomModulePm2 : environment.emptyForExport,
             'Position module pm2': this.searchOrdreKosc.positionModulePm2 ? this.searchOrdreKosc.positionModulePm2 : environment.emptyForExport,
             'Reference cable module pm2': this.searchOrdreKosc.referenceCableModulePm2 ? this.searchOrdreKosc.referenceCableModulePm2 : environment.emptyForExport,
             'Reference tube module pm2': this.searchOrdreKosc.referenceTubeModulePm2 ? this.searchOrdreKosc.referenceTubeModulePm2 : environment.emptyForExport,
             'Information fibre module pm2': this.searchOrdreKosc.informationFibreModulePm2 ? this.searchOrdreKosc.informationFibreModulePm2 : environment.emptyForExport,
             'Reference cable pbo2': this.searchOrdreKosc.referenceCablePbo2 ? this.searchOrdreKosc.referenceCablePbo2 : environment.emptyForExport,
             'Information tube pbo2': this.searchOrdreKosc.informationTubePbo2 ? this.searchOrdreKosc.informationTubePbo2 : environment.emptyForExport,
             'Information fibre pbo2': this.searchOrdreKosc.informationFibrePbo2 ? this.searchOrdreKosc.informationFibrePbo2 : environment.emptyForExport,
             'Connecteur prise numero2': this.searchOrdreKosc.connecteurPriseNumero2 ? this.searchOrdreKosc.connecteurPriseNumero2 : environment.emptyForExport,
             'Connecteur prise couleur2': this.searchOrdreKosc.connecteurPriseCouleur2 ? this.searchOrdreKosc.connecteurPriseCouleur2 : environment.emptyForExport,
             'Reserve2': this.searchOrdreKosc.reserve2 ? this.searchOrdreKosc.reserve2 : environment.emptyForExport,
             'Oc3': this.searchOrdreKosc.oc3 ? this.searchOrdreKosc.oc3 : environment.emptyForExport,
             'Nom module pm3': this.searchOrdreKosc.nomModulePm3 ? this.searchOrdreKosc.nomModulePm3 : environment.emptyForExport,
             'Position module pm3': this.searchOrdreKosc.positionModulePm3 ? this.searchOrdreKosc.positionModulePm3 : environment.emptyForExport,
             'Reference cable module pm3': this.searchOrdreKosc.referenceCableModulePm3 ? this.searchOrdreKosc.referenceCableModulePm3 : environment.emptyForExport,
             'Reference tube module pm3': this.searchOrdreKosc.referenceTubeModulePm3 ? this.searchOrdreKosc.referenceTubeModulePm3 : environment.emptyForExport,
             'Information fibre module pm3': this.searchOrdreKosc.informationFibreModulePm3 ? this.searchOrdreKosc.informationFibreModulePm3 : environment.emptyForExport,
             'Reference cable pbo3': this.searchOrdreKosc.referenceCablePbo3 ? this.searchOrdreKosc.referenceCablePbo3 : environment.emptyForExport,
             'Information tube pbo3': this.searchOrdreKosc.informationTubePbo3 ? this.searchOrdreKosc.informationTubePbo3 : environment.emptyForExport,
             'Information fibre pbo3': this.searchOrdreKosc.informationFibrePbo3 ? this.searchOrdreKosc.informationFibrePbo3 : environment.emptyForExport,
             'Connecteur prise numero3': this.searchOrdreKosc.connecteurPriseNumero3 ? this.searchOrdreKosc.connecteurPriseNumero3 : environment.emptyForExport,
             'Connecteur prise couleur3': this.searchOrdreKosc.connecteurPriseCouleur3 ? this.searchOrdreKosc.connecteurPriseCouleur3 : environment.emptyForExport,
             'Reserve3': this.searchOrdreKosc.reserve3 ? this.searchOrdreKosc.reserve3 : environment.emptyForExport,
             'Oc4': this.searchOrdreKosc.oc4 ? this.searchOrdreKosc.oc4 : environment.emptyForExport,
             'Nom module pm4': this.searchOrdreKosc.nomModulePm4 ? this.searchOrdreKosc.nomModulePm4 : environment.emptyForExport,
             'Position module pm4': this.searchOrdreKosc.positionModulePm4 ? this.searchOrdreKosc.positionModulePm4 : environment.emptyForExport,
             'Reference cable module pm4': this.searchOrdreKosc.referenceCableModulePm4 ? this.searchOrdreKosc.referenceCableModulePm4 : environment.emptyForExport,
             'Reference tube module pm4': this.searchOrdreKosc.referenceTubeModulePm4 ? this.searchOrdreKosc.referenceTubeModulePm4 : environment.emptyForExport,
             'Information fibre module pm4': this.searchOrdreKosc.informationFibreModulePm4 ? this.searchOrdreKosc.informationFibreModulePm4 : environment.emptyForExport,
             'Reference cable pbo4': this.searchOrdreKosc.referenceCablePbo4 ? this.searchOrdreKosc.referenceCablePbo4 : environment.emptyForExport,
             'Information tube pbo4': this.searchOrdreKosc.informationTubePbo4 ? this.searchOrdreKosc.informationTubePbo4 : environment.emptyForExport,
             'Information fibre pbo4': this.searchOrdreKosc.informationFibrePbo4 ? this.searchOrdreKosc.informationFibrePbo4 : environment.emptyForExport,
             'Connecteur prise numero4': this.searchOrdreKosc.connecteurPriseNumero4 ? this.searchOrdreKosc.connecteurPriseNumero4 : environment.emptyForExport,
             'Connecteur prise couleur4': this.searchOrdreKosc.connecteurPriseCouleur4 ? this.searchOrdreKosc.connecteurPriseCouleur4 : environment.emptyForExport,
             'Reserve4': this.searchOrdreKosc.reserve4 ? this.searchOrdreKosc.reserve4 : environment.emptyForExport,
             'Departement': this.searchOrdreKosc.departementVo?.libelle ? this.searchOrdreKosc.departementVo?.libelle : environment.emptyForExport,
             'Technicien': this.searchOrdreKosc.technicienVo?.identifiant ? this.searchOrdreKosc.technicienVo?.identifiant : environment.emptyForExport,
             'Pbo reel': this.searchOrdreKosc.pboReel ? this.searchOrdreKosc.pboReel : environment.emptyForExport,
             'Numero serie ont': this.searchOrdreKosc.numeroSerieOnt ? this.searchOrdreKosc.numeroSerieOnt : environment.emptyForExport,
             'Hotline': this.searchOrdreKosc.hotline ? this.searchOrdreKosc.hotline : environment.emptyForExport,
             'Mutation pbo': this.searchOrdreKosc.mutationPbo ? this.searchOrdreKosc.mutationPbo : environment.emptyForExport,
             'Work order type': this.searchOrdreKosc.workOrderType ? this.searchOrdreKosc.workOrderType : environment.emptyForExport,
             'Product': this.searchOrdreKosc.product ? this.searchOrdreKosc.product : environment.emptyForExport,
             'Provider': this.searchOrdreKosc.provider ? this.searchOrdreKosc.provider : environment.emptyForExport,
             'Provider file type': this.searchOrdreKosc.providerFileType ? this.searchOrdreKosc.providerFileType : environment.emptyForExport,
             'Spliter': this.searchOrdreKosc.spliter ? this.searchOrdreKosc.spliter : environment.emptyForExport,
             'Existing otp': this.searchOrdreKosc.existingOtp ? (this.searchOrdreKosc.existingOtp ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Profile': this.searchOrdreKosc.profile ? this.searchOrdreKosc.profile : environment.emptyForExport,
             'Provider sl id': this.searchOrdreKosc.providerSlId ? this.searchOrdreKosc.providerSlId : environment.emptyForExport,
             'Reference prestation prise': this.searchOrdreKosc.referencePrestationPrise ? this.searchOrdreKosc.referencePrestationPrise : environment.emptyForExport,
             'Reference pm': this.searchOrdreKosc.referencePm ? this.searchOrdreKosc.referencePm : environment.emptyForExport,
             'Reference pm technique': this.searchOrdreKosc.referencePmTechnique ? this.searchOrdreKosc.referencePmTechnique : environment.emptyForExport,
             'Localisation pm': this.searchOrdreKosc.localisationPm ? this.searchOrdreKosc.localisationPm : environment.emptyForExport,
             'Provider product': this.searchOrdreKosc.providerProduct ? this.searchOrdreKosc.providerProduct : environment.emptyForExport,
             'Reference pbo': this.searchOrdreKosc.referencePbo ? this.searchOrdreKosc.referencePbo : environment.emptyForExport,
             'Localisation pbo': this.searchOrdreKosc.localisationPbo ? this.searchOrdreKosc.localisationPbo : environment.emptyForExport,
             'Reference prise': this.searchOrdreKosc.referencePrise ? this.searchOrdreKosc.referencePrise : environment.emptyForExport,
             'Date premier appel Min': this.searchOrdreKosc.datePremierAppelMin ? this.datePipe.transform(this.searchOrdreKosc.datePremierAppelMin, this.dateFormat) : environment.emptyForExport,
             'Date premier appel Max': this.searchOrdreKosc.datePremierAppelMax ? this.datePipe.transform(this.searchOrdreKosc.datePremierAppelMax, this.dateFormat) : environment.emptyForExport,
             'Date deuxieme appel Min': this.searchOrdreKosc.dateDeuxiemeAppelMin ? this.datePipe.transform(this.searchOrdreKosc.dateDeuxiemeAppelMin, this.dateFormat) : environment.emptyForExport,
             'Date deuxieme appel Max': this.searchOrdreKosc.dateDeuxiemeAppelMax ? this.datePipe.transform(this.searchOrdreKosc.dateDeuxiemeAppelMax, this.dateFormat) : environment.emptyForExport,
             'Date troisieme appel Min': this.searchOrdreKosc.dateTroisiemeAppelMin ? this.datePipe.transform(this.searchOrdreKosc.dateTroisiemeAppelMin, this.dateFormat) : environment.emptyForExport,
             'Date troisieme appel Max': this.searchOrdreKosc.dateTroisiemeAppelMax ? this.datePipe.transform(this.searchOrdreKosc.dateTroisiemeAppelMax, this.dateFormat) : environment.emptyForExport,
             'Date prise rdv Min': this.searchOrdreKosc.datePriseRdvMin ? this.datePipe.transform(this.searchOrdreKosc.datePriseRdvMin, this.dateFormat) : environment.emptyForExport,
             'Date prise rdv Max': this.searchOrdreKosc.datePriseRdvMax ? this.datePipe.transform(this.searchOrdreKosc.datePriseRdvMax, this.dateFormat) : environment.emptyForExport,
             'Date rdv Min': this.searchOrdreKosc.dateRdvMin ? this.datePipe.transform(this.searchOrdreKosc.dateRdvMin, this.dateFormat) : environment.emptyForExport,
             'Date rdv Max': this.searchOrdreKosc.dateRdvMax ? this.datePipe.transform(this.searchOrdreKosc.dateRdvMax, this.dateFormat) : environment.emptyForExport,
             'Date ouverture Min': this.searchOrdreKosc.dateOuvertureMin ? this.datePipe.transform(this.searchOrdreKosc.dateOuvertureMin, this.dateFormat) : environment.emptyForExport,
             'Date ouverture Max': this.searchOrdreKosc.dateOuvertureMax ? this.datePipe.transform(this.searchOrdreKosc.dateOuvertureMax, this.dateFormat) : environment.emptyForExport,
             'Commentaire client': this.searchOrdreKosc.commentaireClient ? this.searchOrdreKosc.commentaireClient : environment.emptyForExport,
             'Commentaire kosc': this.searchOrdreKosc.commentaireKosc ? this.searchOrdreKosc.commentaireKosc : environment.emptyForExport,
             'Template email planification': this.searchOrdreKosc.templateEmailPlanificationVo?.libelle ? this.searchOrdreKosc.templateEmailPlanificationVo?.libelle : environment.emptyForExport,
             'Objet planification': this.searchOrdreKosc.objetPlanification ? this.searchOrdreKosc.objetPlanification : environment.emptyForExport,
             'Corps planification': this.searchOrdreKosc.corpsPlanification ? this.searchOrdreKosc.corpsPlanification : environment.emptyForExport,
             'Envoye planification': this.searchOrdreKosc.envoyePlanification ? (this.searchOrdreKosc.envoyePlanification ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi planification Min': this.searchOrdreKosc.dateEnvoiPlanificationMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiPlanificationMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi planification Max': this.searchOrdreKosc.dateEnvoiPlanificationMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiPlanificationMax, this.dateFormat) : environment.emptyForExport,
             'From planification': this.searchOrdreKosc.fromPlanification ? this.searchOrdreKosc.fromPlanification : environment.emptyForExport,
             'To planification': this.searchOrdreKosc.toPlanification ? this.searchOrdreKosc.toPlanification : environment.emptyForExport,
             'Date appel replanification Min': this.searchOrdreKosc.dateAppelReplanificationMin ? this.datePipe.transform(this.searchOrdreKosc.dateAppelReplanificationMin, this.dateFormat) : environment.emptyForExport,
             'Date appel replanification Max': this.searchOrdreKosc.dateAppelReplanificationMax ? this.datePipe.transform(this.searchOrdreKosc.dateAppelReplanificationMax, this.dateFormat) : environment.emptyForExport,
             'Template email report': this.searchOrdreKosc.templateEmailReportVo?.libelle ? this.searchOrdreKosc.templateEmailReportVo?.libelle : environment.emptyForExport,
             'Objet report': this.searchOrdreKosc.objetReport ? this.searchOrdreKosc.objetReport : environment.emptyForExport,
             'Corps report': this.searchOrdreKosc.corpsReport ? this.searchOrdreKosc.corpsReport : environment.emptyForExport,
             'Envoye report': this.searchOrdreKosc.envoyeReport ? (this.searchOrdreKosc.envoyeReport ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi report Min': this.searchOrdreKosc.dateEnvoiReportMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiReportMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi report Max': this.searchOrdreKosc.dateEnvoiReportMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiReportMax, this.dateFormat) : environment.emptyForExport,
             'Template email replanification': this.searchOrdreKosc.templateEmailReplanificationVo?.libelle ? this.searchOrdreKosc.templateEmailReplanificationVo?.libelle : environment.emptyForExport,
             'Objet replanification': this.searchOrdreKosc.objetReplanification ? this.searchOrdreKosc.objetReplanification : environment.emptyForExport,
             'Corps replanification': this.searchOrdreKosc.corpsReplanification ? this.searchOrdreKosc.corpsReplanification : environment.emptyForExport,
             'Envoye replanification': this.searchOrdreKosc.envoyeReplanification ? (this.searchOrdreKosc.envoyeReplanification ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi replanification Min': this.searchOrdreKosc.dateEnvoiReplanificationMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiReplanificationMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi replanification Max': this.searchOrdreKosc.dateEnvoiReplanificationMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiReplanificationMax, this.dateFormat) : environment.emptyForExport,
             'Template email refus': this.searchOrdreKosc.templateEmailRefusVo?.libelle ? this.searchOrdreKosc.templateEmailRefusVo?.libelle : environment.emptyForExport,
             'Objet refus': this.searchOrdreKosc.objetRefus ? this.searchOrdreKosc.objetRefus : environment.emptyForExport,
             'Corps refus': this.searchOrdreKosc.corpsRefus ? this.searchOrdreKosc.corpsRefus : environment.emptyForExport,
             'From refus': this.searchOrdreKosc.fromRefus ? this.searchOrdreKosc.fromRefus : environment.emptyForExport,
             'To refus': this.searchOrdreKosc.toRefus ? this.searchOrdreKosc.toRefus : environment.emptyForExport,
             'Envoye refus': this.searchOrdreKosc.envoyeRefus ? (this.searchOrdreKosc.envoyeRefus ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi refus Min': this.searchOrdreKosc.dateEnvoiRefusMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiRefusMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi refus Max': this.searchOrdreKosc.dateEnvoiRefusMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiRefusMax, this.dateFormat) : environment.emptyForExport,
             'Template email mauvais contact': this.searchOrdreKosc.templateEmailMauvaisContactVo?.libelle ? this.searchOrdreKosc.templateEmailMauvaisContactVo?.libelle : environment.emptyForExport,
             'Objet mauvais contact': this.searchOrdreKosc.objetMauvaisContact ? this.searchOrdreKosc.objetMauvaisContact : environment.emptyForExport,
             'Corps mauvais contact': this.searchOrdreKosc.corpsMauvaisContact ? this.searchOrdreKosc.corpsMauvaisContact : environment.emptyForExport,
             'From mauvais contact': this.searchOrdreKosc.fromMauvaisContact ? this.searchOrdreKosc.fromMauvaisContact : environment.emptyForExport,
             'To mauvais contact': this.searchOrdreKosc.toMauvaisContact ? this.searchOrdreKosc.toMauvaisContact : environment.emptyForExport,
             'Envoye mauvais contact': this.searchOrdreKosc.envoyeMauvaisContact ? (this.searchOrdreKosc.envoyeMauvaisContact ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi mauvais contact Min': this.searchOrdreKosc.dateEnvoiMauvaisContactMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiMauvaisContactMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi mauvais contact Max': this.searchOrdreKosc.dateEnvoiMauvaisContactMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiMauvaisContactMax, this.dateFormat) : environment.emptyForExport,
             'Template email confirmation client': this.searchOrdreKosc.templateEmailConfirmationClientVo?.libelle ? this.searchOrdreKosc.templateEmailConfirmationClientVo?.libelle : environment.emptyForExport,
             'Objet confirmation client': this.searchOrdreKosc.objetConfirmationClient ? this.searchOrdreKosc.objetConfirmationClient : environment.emptyForExport,
             'Corps confirmation client': this.searchOrdreKosc.corpsConfirmationClient ? this.searchOrdreKosc.corpsConfirmationClient : environment.emptyForExport,
             'From confirmation client': this.searchOrdreKosc.fromConfirmationClient ? this.searchOrdreKosc.fromConfirmationClient : environment.emptyForExport,
             'To confirmation client': this.searchOrdreKosc.toConfirmationClient ? this.searchOrdreKosc.toConfirmationClient : environment.emptyForExport,
             'Envoye confirmation client': this.searchOrdreKosc.envoyeConfirmationClient ? (this.searchOrdreKosc.envoyeConfirmationClient ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi confirmation client Min': this.searchOrdreKosc.dateEnvoiConfirmationClientMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiConfirmationClientMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi confirmation client Max': this.searchOrdreKosc.dateEnvoiConfirmationClientMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiConfirmationClientMax, this.dateFormat) : environment.emptyForExport,
             'Template email cri': this.searchOrdreKosc.templateEmailCriVo?.libelle ? this.searchOrdreKosc.templateEmailCriVo?.libelle : environment.emptyForExport,
             'Objet cri': this.searchOrdreKosc.objetCri ? this.searchOrdreKosc.objetCri : environment.emptyForExport,
             'Corps cri': this.searchOrdreKosc.corpsCri ? this.searchOrdreKosc.corpsCri : environment.emptyForExport,
             'From cri': this.searchOrdreKosc.fromCri ? this.searchOrdreKosc.fromCri : environment.emptyForExport,
             'To cri': this.searchOrdreKosc.toCri ? this.searchOrdreKosc.toCri : environment.emptyForExport,
             'Envoye cri': this.searchOrdreKosc.envoyeCri ? (this.searchOrdreKosc.envoyeCri ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi cri Min': this.searchOrdreKosc.dateEnvoiCriMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiCriMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi cri Max': this.searchOrdreKosc.dateEnvoiCriMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiCriMax, this.dateFormat) : environment.emptyForExport,
             'Template email ftl': this.searchOrdreKosc.templateEmailFtlVo?.libelle ? this.searchOrdreKosc.templateEmailFtlVo?.libelle : environment.emptyForExport,
             'Objet ftl': this.searchOrdreKosc.objetFtl ? this.searchOrdreKosc.objetFtl : environment.emptyForExport,
             'Corps ftl': this.searchOrdreKosc.corpsFtl ? this.searchOrdreKosc.corpsFtl : environment.emptyForExport,
             'From ftl': this.searchOrdreKosc.fromFtl ? this.searchOrdreKosc.fromFtl : environment.emptyForExport,
             'To ftl': this.searchOrdreKosc.toFtl ? this.searchOrdreKosc.toFtl : environment.emptyForExport,
             'Envoye ftl': this.searchOrdreKosc.envoyeFtl ? (this.searchOrdreKosc.envoyeFtl ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi ftl Min': this.searchOrdreKosc.dateEnvoiFtlMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiFtlMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi ftl Max': this.searchOrdreKosc.dateEnvoiFtlMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiFtlMax, this.dateFormat) : environment.emptyForExport,
             'Date intervention technique debut Min': this.searchOrdreKosc.dateInterventionTechniqueDebutMin ? this.datePipe.transform(this.searchOrdreKosc.dateInterventionTechniqueDebutMin, this.dateFormat) : environment.emptyForExport,
             'Date intervention technique debut Max': this.searchOrdreKosc.dateInterventionTechniqueDebutMax ? this.datePipe.transform(this.searchOrdreKosc.dateInterventionTechniqueDebutMax, this.dateFormat) : environment.emptyForExport,
             'Date intervention technique fin Min': this.searchOrdreKosc.dateInterventionTechniqueFinMin ? this.datePipe.transform(this.searchOrdreKosc.dateInterventionTechniqueFinMin, this.dateFormat) : environment.emptyForExport,
             'Date intervention technique fin Max': this.searchOrdreKosc.dateInterventionTechniqueFinMax ? this.datePipe.transform(this.searchOrdreKosc.dateInterventionTechniqueFinMax, this.dateFormat) : environment.emptyForExport,
             'Template email client injoinable': this.searchOrdreKosc.templateEmailClientInjoinableVo?.libelle ? this.searchOrdreKosc.templateEmailClientInjoinableVo?.libelle : environment.emptyForExport,
             'Objet client injoinable': this.searchOrdreKosc.objetClientInjoinable ? this.searchOrdreKosc.objetClientInjoinable : environment.emptyForExport,
             'Corps client injoinable': this.searchOrdreKosc.corpsClientInjoinable ? this.searchOrdreKosc.corpsClientInjoinable : environment.emptyForExport,
             'From client injoinable': this.searchOrdreKosc.fromClientInjoinable ? this.searchOrdreKosc.fromClientInjoinable : environment.emptyForExport,
             'To client injoinable': this.searchOrdreKosc.toClientInjoinable ? this.searchOrdreKosc.toClientInjoinable : environment.emptyForExport,
             'Envoye client injoinable': this.searchOrdreKosc.envoyeClientInjoinable ? (this.searchOrdreKosc.envoyeClientInjoinable ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi client injoinable Min': this.searchOrdreKosc.dateEnvoiClientInjoinableMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiClientInjoinableMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi client injoinable Max': this.searchOrdreKosc.dateEnvoiClientInjoinableMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiClientInjoinableMax, this.dateFormat) : environment.emptyForExport,
             'Template email client injoinable kosc': this.searchOrdreKosc.templateEmailClientInjoinableKoscVo?.libelle ? this.searchOrdreKosc.templateEmailClientInjoinableKoscVo?.libelle : environment.emptyForExport,
             'Objet client injoinable kosc': this.searchOrdreKosc.objetClientInjoinableKosc ? this.searchOrdreKosc.objetClientInjoinableKosc : environment.emptyForExport,
             'Corps client injoinable kosc': this.searchOrdreKosc.corpsClientInjoinableKosc ? this.searchOrdreKosc.corpsClientInjoinableKosc : environment.emptyForExport,
             'From client injoinable kosc': this.searchOrdreKosc.fromClientInjoinableKosc ? this.searchOrdreKosc.fromClientInjoinableKosc : environment.emptyForExport,
             'To client injoinable kosc': this.searchOrdreKosc.toClientInjoinableKosc ? this.searchOrdreKosc.toClientInjoinableKosc : environment.emptyForExport,
             'Envoye client injoinable kosc': this.searchOrdreKosc.envoyeClientInjoinableKosc ? (this.searchOrdreKosc.envoyeClientInjoinableKosc ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi client injoinable kosc Min': this.searchOrdreKosc.dateEnvoiClientInjoinableKoscMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiClientInjoinableKoscMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi client injoinable kosc Max': this.searchOrdreKosc.dateEnvoiClientInjoinableKoscMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiClientInjoinableKoscMax, this.dateFormat) : environment.emptyForExport,
             'Commentaire technicien': this.searchOrdreKosc.commentaireTechnicien ? this.searchOrdreKosc.commentaireTechnicien : environment.emptyForExport,
             'Commantaire cloture': this.searchOrdreKosc.commantaireCloture ? this.searchOrdreKosc.commantaireCloture : environment.emptyForExport,
             'Etat demande kosc': this.searchOrdreKosc.etatDemandeKoscVo?.libelle ? this.searchOrdreKosc.etatDemandeKoscVo?.libelle : environment.emptyForExport,
             'Template email cloture': this.searchOrdreKosc.templateEmailClotureVo?.libelle ? this.searchOrdreKosc.templateEmailClotureVo?.libelle : environment.emptyForExport,
             'Objet cloture': this.searchOrdreKosc.objetCloture ? this.searchOrdreKosc.objetCloture : environment.emptyForExport,
             'Corps cloture': this.searchOrdreKosc.corpsCloture ? this.searchOrdreKosc.corpsCloture : environment.emptyForExport,
             'Envoye cloture': this.searchOrdreKosc.envoyeCloture ? (this.searchOrdreKosc.envoyeCloture ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi cloture Min': this.searchOrdreKosc.dateEnvoiClotureMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiClotureMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi cloture Max': this.searchOrdreKosc.dateEnvoiClotureMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiClotureMax, this.dateFormat) : environment.emptyForExport,
             'Email cloture piece joints': this.searchOrdreKosc.emailCloturePieceJoints ? this.searchOrdreKosc.emailCloturePieceJoints : environment.emptyForExport,
             'Template suivi': this.searchOrdreKosc.templateSuiviVo?.libelle ? this.searchOrdreKosc.templateSuiviVo?.libelle : environment.emptyForExport,
             'Objet suivi': this.searchOrdreKosc.objetSuivi ? this.searchOrdreKosc.objetSuivi : environment.emptyForExport,
             'Corps suivi': this.searchOrdreKosc.corpsSuivi ? this.searchOrdreKosc.corpsSuivi : environment.emptyForExport,
             'Envoye suivi': this.searchOrdreKosc.envoyeSuivi ? (this.searchOrdreKosc.envoyeSuivi ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
             'Date envoi suivi Min': this.searchOrdreKosc.dateEnvoiSuiviMin ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiSuiviMin, this.dateFormat) : environment.emptyForExport,
             'Date envoi suivi Max': this.searchOrdreKosc.dateEnvoiSuiviMax ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoiSuiviMax, this.dateFormat) : environment.emptyForExport,
             'Cause ko ok': this.searchOrdreKosc.causeKoOkVo?.libelle ? this.searchOrdreKosc.causeKoOkVo?.libelle : environment.emptyForExport,
             'Source replanification': this.searchOrdreKosc.sourceReplanificationVo?.libelle ? this.searchOrdreKosc.sourceReplanificationVo?.libelle : environment.emptyForExport,*/
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'referenceWorkOrder', header: 'Reference work order'},
            {field: 'codeDecharge', header: 'Code decharge'},
            {field: 'erdv', header: 'Erdv'},
            {field: 'confort', header: 'Confort'},
            {field: 'delaiPriseRdvParHeure', header: 'Delai prise rdv par heure'},
            {field: 'supplierServiceCode', header: 'Supplier service code'},
            {field: 'dateDebutTraitement', header: 'Date debut traitement'},
            {field: 'endCustumorName', header: 'End custumor name'},
            {field: 'endCustumorSiret', header: 'End custumor siret'},
            {field: 'endCustumorFirstName', header: 'End custumor first name'},
            {field: 'endCustumorLastName', header: 'End custumor last name'},
            {field: 'endCustumorZipcode', header: 'End custumor zipcode'},
            {field: 'endCustumorStreetName', header: 'End custumor street name'},
            {field: 'endCustumorStreetNumber', header: 'End custumor street number'},
            {field: 'endCustumorCity', header: 'End custumor city'},
            {field: 'endCustumorBuilding', header: 'End custumor building'},
            {field: 'endCustumorStairs', header: 'End custumor stairs'},
            {field: 'endCustumorFloor', header: 'End custumor floor'},
            {field: 'endCustumorContactFirstName', header: 'End custumor contact first name'},
            {field: 'endCustumorContactLastName', header: 'End custumor contact last name'},
            {field: 'endCustumorContactPhone', header: 'End custumor contact phone'},
            {field: 'endCustumorContactCellPhone', header: 'End custumor contact cell phone'},
            {field: 'endCustumorContactEmail', header: 'End custumor contact email'},
            {field: 'operator?.libelle', header: 'Operator'},
            {field: 'company', header: 'Company'},
            {field: 'referenDossier', header: 'Referen dossier'},
            {field: 'submissionDate', header: 'Submission date'},
            {field: 'coordonnePboY', header: 'Coordonne pbo y'},
            {field: 'hauteurPbo', header: 'Hauteur pbo'},
            {field: 'typeMaterielPbo', header: 'Type materiel pbo'},
            {field: 'typePbo', header: 'Type pbo'},
            {field: 'conditionSyndics', header: 'Condition syndics'},
            {field: 'typeRacordementPboPto', header: 'Type racordement pbo pto'},
            {field: 'codeAccesImmeuble', header: 'Code acces immeuble'},
            {field: 'contacteImmeuble', header: 'Contacte immeuble'},
            {field: 'pmaAccessible', header: 'Pma accessible'},
            {field: 'infoObtentionCle', header: 'Info obtention cle'},
            {field: 'localeIpm', header: 'Locale ipm'},
            {field: 'contactsSyndic', header: 'Contacts syndic'},
            {field: 'racordementLong', header: 'Racordement long'},
            {field: 'oc1', header: 'Oc1'},
            {field: 'nomModulePm1', header: 'Nom module pm1'},
            {field: 'positionModulePm1', header: 'Position module pm1'},
            {field: 'referenceCableModulePm1', header: 'Reference cable module pm1'},
            {field: 'referenceTubeModulePm1', header: 'Reference tube module pm1'},
            {field: 'informationFibreModulePm1', header: 'Information fibre module pm1'},
            {field: 'referenceCablePbo1', header: 'Reference cable pbo1'},
            {field: 'informationTubePbo1', header: 'Information tube pbo1'},
            {field: 'informationFibrePbo1', header: 'Information fibre pbo1'},
            {field: 'connecteurPriseNumero1', header: 'Connecteur prise numero1'},
            {field: 'connecteurPriseCouleur1', header: 'Connecteur prise couleur1'},
            {field: 'oc2', header: 'Oc2'},
            {field: 'nomModulePm2', header: 'Nom module pm2'},
            {field: 'positionModulePm2', header: 'Position module pm2'},
            {field: 'referenceCableModulePm2', header: 'Reference cable module pm2'},
            {field: 'referenceTubeModulePm2', header: 'Reference tube module pm2'},
            {field: 'informationFibreModulePm2', header: 'Information fibre module pm2'},
            {field: 'referenceCablePbo2', header: 'Reference cable pbo2'},
            {field: 'informationTubePbo2', header: 'Information tube pbo2'},
            {field: 'informationFibrePbo2', header: 'Information fibre pbo2'},
            {field: 'connecteurPriseNumero2', header: 'Connecteur prise numero2'},
            {field: 'connecteurPriseCouleur2', header: 'Connecteur prise couleur2'},
            {field: 'oc3', header: 'Oc3'},
            {field: 'nomModulePm3', header: 'Nom module pm3'},
            {field: 'positionModulePm3', header: 'Position module pm3'},
            {field: 'referenceCableModulePm3', header: 'Reference cable module pm3'},
            {field: 'referenceTubeModulePm3', header: 'Reference tube module pm3'},
            {field: 'informationFibreModulePm3', header: 'Information fibre module pm3'},
            {field: 'referenceCablePbo3', header: 'Reference cable pbo3'},
            {field: 'informationTubePbo3', header: 'Information tube pbo3'},
            {field: 'informationFibrePbo3', header: 'Information fibre pbo3'},
            {field: 'connecteurPriseNumero3', header: 'Connecteur prise numero3'},
            {field: 'connecteurPriseCouleur3', header: 'Connecteur prise couleur3'},
            {field: 'oc4', header: 'Oc4'},
            {field: 'nomModulePm4', header: 'Nom module pm4'},
            {field: 'positionModulePm4', header: 'Position module pm4'},
            {field: 'referenceCableModulePm4', header: 'Reference cable module pm4'},
            {field: 'referenceTubeModulePm4', header: 'Reference tube module pm4'},
            {field: 'informationFibreModulePm4', header: 'Information fibre module pm4'},
            {field: 'referenceCablePbo4', header: 'Reference cable pbo4'},
            {field: 'informationTubePbo4', header: 'Information tube pbo4'},
            {field: 'informationFibrePbo4', header: 'Information fibre pbo4'},
            {field: 'connecteurPriseNumero4', header: 'Connecteur prise numero4'},
            {field: 'connecteurPriseCouleur4', header: 'Connecteur prise couleur4'},
            {field: 'departement?.libelle', header: 'Departement'},
            {field: 'technicien?.identifiant', header: 'Technicien'},
            {field: 'pboReel', header: 'Pbo reel'},
            {field: 'numeroSerieOnt', header: 'Numero serie ont'},
            {field: 'hotline', header: 'Hotline'},
            {field: 'mutationPbo', header: 'Mutation pbo'},
            {field: 'workOrderType', header: 'Work order type'},
            {field: 'product', header: 'Product'},
            {field: 'provider', header: 'Provider'},
            {field: 'providerFileType', header: 'Provider file type'},
            {field: 'spliter', header: 'Spliter'},
            {field: 'existingOtp', header: 'Existing otp'},
            {field: 'profile', header: 'Profile'},
            {field: 'providerSlId', header: 'Provider sl id'},
            {field: 'referencePrestationPrise', header: 'Reference prestation prise'},
            {field: 'referencePm', header: 'Reference pm'},
            {field: 'referencePmTechnique', header: 'Reference pm technique'},
            {field: 'localisationPm', header: 'Localisation pm'},
            {field: 'providerProduct', header: 'Provider product'},
            {field: 'referencePbo', header: 'Reference pbo'},
            {field: 'localisationPbo', header: 'Localisation pbo'},
            {field: 'referencePrise', header: 'Reference prise'},
            {field: 'datePremierAppel', header: 'Date premier appel'},
            {field: 'dateDeuxiemeAppel', header: 'Date deuxieme appel'},
            {field: 'dateTroisiemeAppel', header: 'Date troisieme appel'},
            {field: 'datePriseRdv', header: 'Date prise rdv'},
            {field: 'dateRdv', header: 'Date rdv'},
            {field: 'dateOuverture', header: 'Date ouverture'},
            {field: 'templateEmailPlanification?.libelle', header: 'Template email planification'},
            {field: 'objetPlanification', header: 'Objet planification'},
            {field: 'envoyePlanification', header: 'Envoye planification'},
            {field: 'dateEnvoiPlanification', header: 'Date envoi planification'},
            {field: 'fromPlanification', header: 'From planification'},
            {field: 'toPlanification', header: 'To planification'},
            {field: 'dateAppelReplanification', header: 'Date appel replanification'},
            {field: 'templateEmailReport?.libelle', header: 'Template email report'},
            {field: 'objetReport', header: 'Objet report'},
            {field: 'envoyeReport', header: 'Envoye report'},
            {field: 'dateEnvoiReport', header: 'Date envoi report'},
            {field: 'templateEmailReplanification?.libelle', header: 'Template email replanification'},
            {field: 'objetReplanification', header: 'Objet replanification'},
            {field: 'envoyeReplanification', header: 'Envoye replanification'},
            {field: 'dateEnvoiReplanification', header: 'Date envoi replanification'},
            {field: 'templateEmailRefus?.libelle', header: 'Template email refus'},
            {field: 'objetRefus', header: 'Objet refus'},
            {field: 'fromRefus', header: 'From refus'},
            {field: 'toRefus', header: 'To refus'},
            {field: 'envoyeRefus', header: 'Envoye refus'},
            {field: 'dateEnvoiRefus', header: 'Date envoi refus'},
            {field: 'templateEmailMauvaisContact?.libelle', header: 'Template email mauvais contact'},
            {field: 'objetMauvaisContact', header: 'Objet mauvais contact'},
            {field: 'fromMauvaisContact', header: 'From mauvais contact'},
            {field: 'toMauvaisContact', header: 'To mauvais contact'},
            {field: 'envoyeMauvaisContact', header: 'Envoye mauvais contact'},
            {field: 'dateEnvoiMauvaisContact', header: 'Date envoi mauvais contact'},
            {field: 'templateEmailConfirmationClient?.libelle', header: 'Template email confirmation client'},
            {field: 'objetConfirmationClient', header: 'Objet confirmation client'},
            {field: 'fromConfirmationClient', header: 'From confirmation client'},
            {field: 'toConfirmationClient', header: 'To confirmation client'},
            {field: 'envoyeConfirmationClient', header: 'Envoye confirmation client'},
            {field: 'dateEnvoiConfirmationClient', header: 'Date envoi confirmation client'},
            {field: 'templateEmailCri?.libelle', header: 'Template email cri'},
            {field: 'objetCri', header: 'Objet cri'},
            {field: 'fromCri', header: 'From cri'},
            {field: 'toCri', header: 'To cri'},
            {field: 'envoyeCri', header: 'Envoye cri'},
            {field: 'dateEnvoiCri', header: 'Date envoi cri'},
            {field: 'templateEmailFtl?.libelle', header: 'Template email ftl'},
            {field: 'objetFtl', header: 'Objet ftl'},
            {field: 'fromFtl', header: 'From ftl'},
            {field: 'toFtl', header: 'To ftl'},
            {field: 'envoyeFtl', header: 'Envoye ftl'},
            {field: 'dateEnvoiFtl', header: 'Date envoi ftl'},
            {field: 'dateInterventionTechniqueDebut', header: 'Date intervention technique debut'},
            {field: 'dateInterventionTechniqueFin', header: 'Date intervention technique fin'},
            {field: 'templateEmailClientInjoinable?.libelle', header: 'Template email client injoinable'},
            {field: 'objetClientInjoinable', header: 'Objet client injoinable'},
            {field: 'fromClientInjoinable', header: 'From client injoinable'},
            {field: 'toClientInjoinable', header: 'To client injoinable'},
            {field: 'envoyeClientInjoinable', header: 'Envoye client injoinable'},
            {field: 'dateEnvoiClientInjoinable', header: 'Date envoi client injoinable'},
            {field: 'templateEmailClientInjoinableKosc?.libelle', header: 'Template email client injoinable kosc'},
            {field: 'objetClientInjoinableKosc', header: 'Objet client injoinable kosc'},
            {field: 'fromClientInjoinableKosc', header: 'From client injoinable kosc'},
            {field: 'toClientInjoinableKosc', header: 'To client injoinable kosc'},
            {field: 'envoyeClientInjoinableKosc', header: 'Envoye client injoinable kosc'},
            {field: 'dateEnvoiClientInjoinableKosc', header: 'Date envoi client injoinable kosc'},
            {field: 'etatDemandeKosc?.libelle', header: 'Etat demande kosc'},
            {field: 'templateEmailCloture?.libelle', header: 'Template email cloture'},
            {field: 'objetCloture', header: 'Objet cloture'},
            {field: 'envoyeCloture', header: 'Envoye cloture'},
            {field: 'dateEnvoiCloture', header: 'Date envoi cloture'},
            {field: 'emailCloturePieceJoints', header: 'Email cloture piece joints'},
            {field: 'templateSuivi?.libelle', header: 'Template suivi'},
            {field: 'objetSuivi', header: 'Objet suivi'},
            {field: 'envoyeSuivi', header: 'Envoye suivi'},
            {field: 'dateEnvoiSuivi', header: 'Date envoi suivi'},
            {field: 'causeKoOk?.libelle', header: 'Cause ko ok'},
            {field: 'sourceReplanification?.libelle', header: 'Source replanification'},
        ];
    }

    stylefyConfort(ordreKosc: OrdreKoscVo): string {
        return ordreKosc.confort?'color:red;':'color:black;';

    }
    erdvAndConfort(ordreKoscVo : OrdreKoscVo){
        if( this.isErdvAndReferencWorkOrdereEmpty && ordreKoscVo.confort)
            return true
        else
            return false
    }

    get ordreKoscs(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscs;
    }

    set ordreKoscs(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscs = value;
    }

    get ordreKoscSelections(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscSelections;
    }

    set ordreKoscSelections(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscSelections = value;
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

    get editOrdreKoscDialog(): boolean {
        return this.ordreKoscService.editOrdreKoscDialog;
    }

    set editOrdreKoscDialog(value: boolean) {
        this.ordreKoscService.editOrdreKoscDialog = value;
    }

    get viewOrdreKoscDialog(): boolean {
        return this.ordreKoscService.viewOrdreKoscDialog;
    }

    set viewOrdreKoscDialog(value: boolean) {
        this.ordreKoscService.viewOrdreKoscDialog = value;
    }

    get searchOrdreKosc(): OrdreKoscVo {
        return this.ordreKoscService.searchOrdreKosc;
    }

    set searchOrdreKosc(value: OrdreKoscVo) {
        this.ordreKoscService.searchOrdreKosc = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }


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
    get indexEdit(): number {
        return this.ordreKoscService.indexEdit;
    }

    set indexEdit(value: number) {
        this.ordreKoscService.indexEdit = value;
    }


}
