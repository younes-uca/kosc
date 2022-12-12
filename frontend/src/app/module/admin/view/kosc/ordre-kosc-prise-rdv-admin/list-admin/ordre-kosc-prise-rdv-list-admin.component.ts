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

import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';
import {EtatDemandeKoscService} from 'src/app/controller/service/EtatDemandeKosc.service';
import {TemplateEmailClotureService} from 'src/app/controller/service/TemplateEmailCloture.service';
import {TemplateSuiviService} from 'src/app/controller/service/TemplateSuivi.service';

import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {EtatDemandeKoscVo} from 'src/app/controller/model/EtatDemandeKosc.model';
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {TemplateEmailClotureVo} from 'src/app/controller/model/TemplateEmailCloture.model';
import {TemplateSuiviVo} from 'src/app/controller/model/TemplateSuivi.model';
import {OperatorVo} from 'src/app/controller/model/Operator.model';
import {DepartementVo} from 'src/app/controller/model/Departement.model';
import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';

import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';
import {
    TemplateEmailClientInjoinableKoscService
} from "../../../../../../controller/service/TemplateEmailClientInjoinableKosc.service";
import {DefaultTemplateConfigurationVo} from "../../../../../../controller/model/DefaultTemplateConfiguration.model";
import {
    DefaultTemplateConfigurationService
} from "../../../../../../controller/service/DefaultTemplateConfiguration.service";
import {DateUtils} from "../../../../../../utils/DateUtils";
import {PromiseType} from "protractor/built/plugins";


@Component({
    selector: 'app-ordre-kosc-prise-rdv-list-admin',
    templateUrl: './ordre-kosc-prise-rdv-list-admin.component.html',
    styleUrls: ['./ordre-kosc-prise-rdv-list-admin.component.css']
})
export class OrdreKoscPriseRdvListAdminComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    dateButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'OrdreKosc';
    yesOrNoEnvoiMailClient: any[] = [];
    yesOrNoEnvoiMailKosc: any[] = [];
    yesOrNoRacordementLong: any[] = [];
    yesOrNoExistingOtp: any[] = [];
    yesOrNoEnvoyeClient: any[] = [];
    yesOrNoEnvoyeKosc: any[] = [];
    yesOrNoEnvoyePlanification: any[] = [];
    yesOrNoEnvoyeReplanification: any[] = [];
    yesOrNoEnvoyeReport: any[] = [];
    yesOrNoEnvoyeCloture: any[] = [];
    yesOrNoEnvoyeSuivi: any[] = [];
    operators: Array<OperatorVo>;
    departements: Array<DepartementVo>;
    techniciens: Array<TechnicienVo>;
    dateRdvs: any[];
    yesOrNoErdv: any[] = [];
    yesOrNoConfort: any[] = [];

    items: MenuItem[];

    home: MenuItem;

    templateEmailClientInjoinables: Array<TemplateEmailClientInjoinableVo>;
    templateEmailClientInjoinableKoscs: Array<TemplateEmailClientInjoinableKoscVo>;
    templateEmailPlanifications: Array<TemplateEmailPlanificationVo>;
    templateEmailReplanifications: Array<TemplateEmailReplanificationVo>;
    etatDemandeKoscs: Array<EtatDemandeKoscVo>;
    templateEmailClotures: Array<TemplateEmailClotureVo>;
    templateSuivis: Array<TemplateSuiviVo>;



    constructor(private datePipe: DatePipe
        , private ordreKoscService: OrdreKoscService
        , private messageService: MessageService
        , private confirmationService: ConfirmationService
        , private roleService: RoleService
        , private router: Router
        , private authService: AuthService
        , private exportService: ExportService
        , private operatorService: OperatorService
        , private departementService: DepartementService
        , private technicienService: TechnicienService
        , private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
        , private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
        , private templateEmailPlanificationService: TemplateEmailPlanificationService
        , private templateEmailReplanificationService: TemplateEmailReplanificationService
        , private etatDemandeKoscService: EtatDemandeKoscService
        , private templateEmailClotureService: TemplateEmailClotureService
        , private templateSuiviService: TemplateSuiviService
        , private defaultTemplateConfigurationService: DefaultTemplateConfigurationService
    ) {
    }

    ngOnInit(): void {

        this.items = [
            {label: 'Prise Rendez-vous', routerLink: '/app/admin/kosc/ordre-kosc-prise-rdv/list'},

        ];

        this.home = {icon: 'pi pi-home', routerLink: '/'};

        this.loadEtatDemandeKoscIncluding(['initialisation-wo', 'initialisation-erdv']);


        // this.loadOrdreKoscs();
        this.initExport();
        this.initFilter();
        this.initCol();
        this.loadOperator();
        this.loadDepartement();
        this.loadTechnicien();

        this.loadTemplateEmailClientInjoinable();
        this.loadTemplateEmailClientInjoinableKosc();
        this.loadTemplateEmailPlanification();
        this.loadTemplateEmailReplanification();
        // this.loadEtatDemandeKosc();
        this.loadTemplateEmailCloture();
        this.loadTemplateSuivi();
        this.yesOrNoEnvoiMailClient = [{label: 'EnvoiMailClient', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoEnvoiMailKosc = [{label: 'EnvoiMailKosc', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoRacordementLong = [{label: 'RacordementLong', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoExistingOtp = [{label: 'ExistingOtp', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoEnvoyeClient = [{label: 'EnvoyeClient', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoEnvoyeKosc = [{label: 'EnvoyeKosc', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.yesOrNoEnvoyePlanification = [{label: 'EnvoyePlanification', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this.yesOrNoEnvoyeReplanification = [{label: 'EnvoyeReplanification', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this.yesOrNoEnvoyeReport = [{label: 'EnvoyeReport', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
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

        this.searchRequestPriseRdv();
    }

    private setValidation(value: boolean) {
        this.validOrdreKoscReferenceWorkOrder = value;
    }


    erdvAndConfort(ordreKoscVo : OrdreKoscVo){
        if( ordreKoscVo.erdv == true && ordreKoscVo.confort == true){
            return true
        }
        else
            return false
    }






    activeState: boolean[] = [true, false, false];

    toggle(index: number) {
        this.activeState[index] = !this.activeState[index];
    }

    public plusDay(day: number) {
        const today = new Date()

        let resultat = new Date()
        resultat.setDate(today.getDate() + day);
        return resultat;
    }

    public moinDay(day: number) {
        const today = new Date()

        let resultat = new Date()
        resultat.setDate(today.getDate() - day);
        return resultat;
    }

    public convertDate(inputFormat) {
        function pad(s) {
            return (s < 10) ? '0' + s : s;
        }

        var d = new Date(inputFormat)
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
    }

    public searchBetweenHour(nbrHeureMin:number, nbrHeureMax:number) {
        this.searchOrdreKosc.nbrHeureDateSubmissionAndNowMin = nbrHeureMin;
        this.searchOrdreKosc.nbrHeureDateSubmissionAndNowMax = nbrHeureMax;
    }


    public afficherAll() {
        this.searchOrdreKosc.nbrHeureDateSubmissionAndNowMin = null;
        this.searchOrdreKosc.nbrHeureDateSubmissionAndNowMax = null;
    }



    // methods
    isEtatNotEmpty(ordreKoscVo: OrdreKoscVo) {

        if (ordreKoscVo.etatDemandeKoscVo !== null) {
            return true;
        } else {
            return false;
        }
    }

    public async loadOrdreKoscs() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.ordreKoscService.findAll().subscribe(ordreKoscs => this.ordreKoscsPriseRdv = ordreKoscs, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public searchRequestPriseRdv() {

        this.ordreKoscService.findByCriteriaPriseRdv(this.searchOrdreKosc).subscribe(ordreKoscs => {
            this.ordreKoscsPriseRdv = ordreKoscs;
        }, error => console.log(error));

        return this.ordreKoscsPriseRdv;
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
                this.selectedOrdreKosc.dateAppelReplanification = DateUtils.toDate(ordreKosc.dateAppelReplanification);
                this.selectedOrdreKosc.dateInterventionTechniqueDebut = DateUtils.toDate(ordreKosc.dateInterventionTechniqueDebut);
                this.selectedOrdreKosc.dateInterventionTechniqueFin = DateUtils.toDate(ordreKosc.dateInterventionTechniqueFin);
                this.selectedOrdreKosc.dateOuverture = new Date(ordreKosc.dateOuverture);
                this.selectedOrdreKosc.dateEnvoiCri = new Date(ordreKosc.dateEnvoiCri);
                this.selectedOrdreKosc.dateInterventionTechniqueDebut = DateUtils.toDate(ordreKosc.dateInterventionTechniqueDebut);
                this.selectedOrdreKosc.dateInterventionTechniqueFin = DateUtils.toDate(ordreKosc.dateInterventionTechniqueFin);
                this.selectedOrdreKosc.dateDernierAppel = DateUtils.toDate(ordreKosc.dateDernierAppel);

                this.selectedOrdreKosc.dateEnvoiPlanification = DateUtils.toDate(ordreKosc.dateEnvoiPlanification);
                this.selectedOrdreKosc.dateEnvoiReplanification = DateUtils.toDate(ordreKosc.dateEnvoiReplanification);
                this.selectedOrdreKosc.dateEnvoiCloture = DateUtils.toDate(ordreKosc.dateEnvoiCloture);
                this.selectedOrdreKosc.dateEnvoiSuivi = DateUtils.toDate(ordreKosc.dateEnvoiSuivi);


                this.editOrdreKoscDialog = true;

            });


        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }


    nbrHeureDateSubmissionAndNowSeverityStyle(ordreKosc: OrdreKoscVo) {
        return (ordreKosc.nbrHeureDateSubmissionAndNow > 48 && ordreKosc.nbrHeureDateSubmissionAndNow <= 72) ? 'danger' : (ordreKosc.nbrHeureDateSubmissionAndNow > 24 && ordreKosc.nbrHeureDateSubmissionAndNow <= 48) ? 'warning' : ordreKosc.nbrHeureDateSubmissionAndNow <= 24 ? 'success' : 'info';

    }

    public async viewOrdreKosc(ordreKosc: OrdreKoscVo) {
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'view');
        if (isPermistted) {
            this.ordreKoscService.findByIdWithAssociatedList(ordreKosc).subscribe(res => {
                this.selectedOrdreKosc = res;
                this.selectedOrdreKosc.dateDebutTraitement = DateUtils.toDate(ordreKosc.dateDebutTraitement);
                this.selectedOrdreKosc.submissionDate = DateUtils.toDate(ordreKosc.submissionDate);
                this.selectedOrdreKosc.datePremierAppel = DateUtils.toDate(ordreKosc.datePremierAppel);
                this.selectedOrdreKosc.dateDeuxiemeAppel = DateUtils.toDate(ordreKosc.dateDeuxiemeAppel);
                this.selectedOrdreKosc.dateTroisiemeAppel = DateUtils.toDate(ordreKosc.dateTroisiemeAppel);
                this.selectedOrdreKosc.datePriseRdv = DateUtils.toDate(ordreKosc.datePriseRdv);
                this.selectedOrdreKosc.dateDernierAppel = DateUtils.toDate(ordreKosc.dateDernierAppel);
                this.selectedOrdreKosc.dateRdv = DateUtils.toDate(ordreKosc.dateRdv);
                this.selectedOrdreKosc.dateAppelReplanification = DateUtils.toDate(ordreKosc.dateAppelReplanification);
                this.selectedOrdreKosc.dateInterventionTechniqueDebut = DateUtils.toDate(ordreKosc.dateInterventionTechniqueDebut);
                this.selectedOrdreKosc.dateInterventionTechniqueFin = DateUtils.toDate(ordreKosc.dateInterventionTechniqueFin);
                this.selectedOrdreKosc.dateOuverture = DateUtils.toDate(ordreKosc.dateOuverture);
                this.selectedOrdreKosc.dateEnvoiCri = DateUtils.toDate(ordreKosc.dateEnvoiCri);
                this.selectedOrdreKosc.dateInterventionTechniqueDebut = DateUtils.toDate(ordreKosc.dateInterventionTechniqueDebut);
                this.selectedOrdreKosc.dateInterventionTechniqueFin = DateUtils.toDate(ordreKosc.dateInterventionTechniqueFin);
                this.selectedOrdreKosc.dateEnvoiPlanification = DateUtils.toDate(ordreKosc.dateEnvoiPlanification);
                this.selectedOrdreKosc.dateEnvoiReplanification = DateUtils.toDate(ordreKosc.dateEnvoiReplanification);
                this.selectedOrdreKosc.dateEnvoiCloture = DateUtils.toDate(ordreKosc.dateEnvoiCloture);
                this.selectedOrdreKosc.dateEnvoiSuivi = DateUtils.toDate(ordreKosc.dateEnvoiSuivi);
                this.viewOrdreKoscDialog = true;
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
                            const position = this.ordreKoscsPriseRdv.indexOf(ordreKosc);
                            position > -1 ? this.ordreKoscsPriseRdv.splice(position, 1) : false;
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

    // getters and setters


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

    public async loadTemplateEmailPlanification() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailPlanificationService.findAll().subscribe(templateEmailPlanifications => this.templateEmailPlanifications = templateEmailPlanifications, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTemplateEmailReplanification() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.templateEmailReplanificationService.findAll().subscribe(templateEmailReplanifications => this.templateEmailReplanifications = templateEmailReplanifications, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }



    public async loadEtatDemandeKosc() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.etatDemandeKoscService.findAll().subscribe(etatDemandeKoscs => this.etatDemandeKoscs = etatDemandeKoscs, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadEtatDemandeKoscIncluding(etatNonDesire: Array<String>) {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.etatDemandeKoscService.findAll().subscribe(etatDemandeKoscs => {
                this.etatDemandeKoscs = etatDemandeKoscs;
                this.searchOrdreKosc.etatDemandeKoscVos = this.etatDemandeKoscs.filter(e => etatNonDesire.indexOf(e.code) != -1);
                // console.log( this.searchOrdreKosc.etatDemandeKoscVos);
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

    initFilter(): void {
        this.dateButons = [
            {
                label: '24h', icon: 'pi pi-check', command: () => {
                    this.searchBetweenHour(0,24);
                }
            }, {
                label: '48h', icon: 'pi pi-check', command: () => {
                    this.searchBetweenHour(24,48);
                }
            }, {
                label: '72h', icon: 'pi pi-check', command: () => {
                    this.searchBetweenHour(48,72);

                },
            }, {
                label: 'Tous', icon: 'pi pi-check', command: () => {
                    this.afficherAll();

                },
            }
        ];
    }

    private async exporter() {
        this.prepareColumnExport();
        this.exportService.exporterExcel(this.criteriaData, this.exportData, this.fileName);
    }

    initExport(): void {
        this.excelPdfButons = [
            // {
            //     label: 'CSV', icon: 'pi pi-file', command: () => {
            //         this.prepareColumnExport();
            //         this.exportService.exporterCSV(this.criteriaData, this.exportData, this.fileName);
            //     }
            // },
            {
                label: 'Export Kizeo 24', icon: 'pi pi-file-excel', command: async () => {
                    this.searchBetweenHour(0,24);
                    this.searchRequestPriseRdv();
                   // await this.exporter();
                }
            },
            {
                label: 'Export Kizeo 48', icon: 'pi pi-file-excel', command: async () => {
                    this.searchBetweenHour(0,48);
                    this.searchRequestPriseRdv();
                   // console.log(this.ordreKoscsPriseRdv);
                   // await this.exporter();


                }
            },
            {
                label: 'Export Kizeo 72', icon: 'pi pi-file-excel', command: () => {
                    this.searchBetweenHour(0,72);
                    this.searchRequestPriseRdv();
                    console.log(this.ordreKoscsPriseRdv);
                    // await this.exporter();


                }
            },

            // {
            //     label: 'PDF', icon: 'pi pi-file-pdf', command: () => {
            //         this.prepareColumnExport();
            //         this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName);
            //     }
            // }
        ];
    }

    prepareColumnExport(): void {
        this.exportData = this.ordreKoscsPriseRdv.map(e => {
            return {
                'date début':null,
                'date fin':null,
                'Utilisateurs':null,
                'Reference': e.reference,
                'Reference work order': e.referenceWorkOrder,
                'Numero Via':null,
                'Operateur': e.operatorVo?.libelle,
                'Date et heure du rendez-vous planifié ': this.datePipe.transform(e.dateRdv, 'dd/MM/yyyy hh:mm'),
                'Nom de la société': e.company,
                'N°':null,
                'Rue': e.endCustumorStreetName,
                'Code Postal': e.endCustumorZipcode,
                'Ville': e.endCustumorCity,
                'Nom': e.endCustumorContactLastName,
                'Prénom': e.endCustumorContactFirstName,
                'Téléphone': e.endCustumorContactPhone,
                'Numéro PM': e.referencePm,
                'Numéro PT':null,
                'Adress fourni par orange':null,
                'Offre':null,
                'Offre active (tiroir Orange)' :null,
                'Offre passive (tiroir KOSC)':null,
                'Ref tiroir orange':null,
                'N° connecteur':null,
                'Référence PT PBO':null,
                'Adresse PBO communiquée Orange':null,
                'Hauteur Pbo': e.hauteurPbo,
                'Type Pbo': e.typePbo,
                'Type Materiel Pbo': e.typeMaterielPbo,
                'Cable':null,
                'Tube':null,
                'Fibre':null,
                'Numero Prise Connecteur':null,
                'Couleur prise connecteur':null,
                'Ref PTO':null,
                'Type Racco demandé':null,
                'Mode de pose PBO':null,
                'SLID': e.slid,
                'Commentaire Operateur':e.operatorComment
            }
        });


    }

    private initCol() {
        this.cols = [
            {field: 'date debut', header: 'date debut'},
            {field: 'date fin', header: 'date fin'},
            {field: 'user', header: 'user'},
            {field: 'reference', header: 'Reference'},
            {field: 'referenceWorkOrder', header: 'Reference work order'},
            {field: 'Numero via', header: 'Numero via'},
            {field: 'operator?.libelle', header: 'Operator'},
            {field: 'dateRdv', header: 'Date rdv'},
            {field: 'company', header: 'Nom de la societe'},
            {field: 'N', header: 'N°'},
            {field: 'endCustumorStreetName', header: 'End custumor street name'},
            {field: 'endCustumorZipcode', header: 'End custumor zipcode'},
            {field: 'endCustumorCity', header: 'End custumor city'},
            {field: 'endCustumorContactFirstName', header: 'End custumor contact first name'},
            {field: 'endCustumorContactLastName', header: 'End custumor contact last name'},
            {field: 'endCustumorContactPhone', header: 'End custumor contact phone'},
            {field: 'Numéro PM', header: 'reference Pm'},
            {field: 'numero pt', header: 'numero pt'},
            {field: 'adress fourni par orange', header: 'adress fourni par orange'},
            {field: 'offre', header: 'offre'},
            {field: 'offre active', header: 'offre active'},
            {field: 'offre passive', header: 'offre passive'},
            {field: 'ref tiroir orange', header: 'ref tiroir orange'},
            {field: 'num connecteur', header: 'num connecteur'},
            {field: 'Référence PT PBO', header: 'Référence PT PBO'},
            {field: 'Adresse PBO communiquée Orange', header: 'Adresse PBO communiquée Orange'},
            {field: 'hauteurPbo', header: 'Hauteur pbo'},
            {field: 'typePbo', header: 'Type pbo'},
            {field: 'typeMaterielPbo', header: 'Type materiel pbo'},
            {field: 'Mode de pose PBO', header: 'Mode de pose PBO'},
            {field: 'cable', header: 'cable'},
            {field: 'tube', header: 'tube'},
            {field: 'fibre', header: 'fibre'},
            {field: 'numero Prise Connecteur', header: 'numero Prise Connecteur'},
            {field: 'Couleur prise connecteur', header: 'Couleur prise connecteur'},
            {field: 'Ref PTO ', header: 'Ref PTO'},
            {field: 'Type Racco demandé', header: 'Type Racco demandé'},
            {field: 'Mode de pose PBO', header: 'Mode de pose PBO'},
            {field: 'Commentaire Operateur', header: 'Commentaire Operateur'},
            {field: 'SLID', header: 'SLID'},
        ];
    }

    stylefyConfort(ordreKosc: OrdreKoscVo): string {
        return ordreKosc.confort ? 'color:red;' : 'color:black;';

    }

    isErdvAndReferenceEmpty(ordreKoscVo: OrdreKoscVo) {
        if (ordreKoscVo.erdv == true && ordreKoscVo.reference != null) {
            return true;
        } else {
            return false;
        }
    }

    isErdvAndReferencWorkOrdereEmpty(ordreKoscVo: OrdreKoscVo) {
        if (ordreKoscVo.erdv == true && ordreKoscVo.referenceWorkOrder != null) {
            return true;
        } else {
            return false;
        }
    }


    get ordreKoscsPriseRdv(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscsPriseRdv;
    }

    set ordreKoscsPriseRdv(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscsPriseRdv = value;
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

    get dateFormatOui() {
        return environment.dateFormatEdit;
    }



    get selectedDefaultTemplateConfiguration(): DefaultTemplateConfigurationVo {

        return this.defaultTemplateConfigurationService.selectedDefaultTemplateConfiguration;
    }

    set selectedDefaultTemplateConfiguration(value: DefaultTemplateConfigurationVo) {
        this.defaultTemplateConfigurationService.selectedDefaultTemplateConfiguration = value;
    }

    private _errorMessages = new Array<string>();

    get errorMessages(): string[] {
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    _submitted = false;

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get ordreKoscs(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscsPriseRdv;
    }

    set ordreKoscs(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscsPriseRdv = value;
    }

    _validOrdreKoscReferenceWorkOrder = true;

    get validOrdreKoscReferenceWorkOrder(): boolean {
        return this._validOrdreKoscReferenceWorkOrder;
    }

    set validOrdreKoscReferenceWorkOrder(value: boolean) {
        this._validOrdreKoscReferenceWorkOrder = value;
    }


    get indexEdit(): number {
        return this.ordreKoscService.indexEdit;
    }

    set indexEdit(value: number) {
        this.ordreKoscService.indexEdit = value;
    }

    _validOrdreKoscDateAppel = true;

    get validOrdreKoscDateAppel(): boolean {
        return this._validOrdreKoscDateAppel;
    }

    set validOrdreKoscDateAppel(value: boolean) {
        this._validOrdreKoscDateAppel = value;
    }


}
