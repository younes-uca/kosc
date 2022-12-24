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
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
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
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';
import {error} from "protractor";
import {DateUtils} from "../../../../../../utils/DateUtils";
import {Calendar} from "primeng/calendar/calendar";
import {User} from "../../../../../../controller/model/User.model";
import {UserService} from "../../../../../../controller/service/user.service";

@Component({
    selector: 'app-emailing-list-admin',
    templateUrl: './emailing-list-admin.component.html',
    styleUrls: ['./emailing-list-admin.component.css']
})
export class EmailingListAdminComponent implements OnInit {
    // declarations

    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'OrdreKosc';

    yesOrNoEnvoi: any[] = [];
    departements: Array<DepartementVo>;
    // users: Array<User>;
    items: MenuItem[];

    home: MenuItem;

    constructor(private datePipe: DatePipe, private ordreKoscService: OrdreKoscService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
        , private departementService: DepartementService
        , private userService: UserService
        , private etatDemandeKoscService: EtatDemandeKoscService
    ) {
    }

    ngOnInit(): void {

        this.items = [
            {label: 'Emailing', routerLink: '/app/admin/kosc/emailing/list'},

        ];
        this.home = {icon: 'pi pi-home', routerLink: '/'};

        //this.searchOrdreKosc.dateEnvoiCri = new Date();
        this.initExport();
        this.initCol();
        this.loadDepartement();
        this.yesOrNoEnvoi = [{label: 'Envoi', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
        this.searchRequestSuiviRdv();
        // this.searchRequestEmail();
    }

    public async loadOrdreKoscs() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.ordreKoscService.findSuivi().subscribe(ordreKoscs => this.ordreKoscs = ordreKoscs, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }



    public async editOrdreKosc(ordreKosc: OrdreKoscVo) {

        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'edit');
        if (isPermistted) {
            this.ordreKoscService.findByIdWithAssociatedList(ordreKosc).subscribe(res => {
                this.selectedOrdreKosc = res;
                this.selectedOrdreKosc.dateEnvoi = DateUtils.toDate(ordreKosc.dateEnvoi);
                this.editOrdreKoscDialog = true;
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
                this.selectedOrdreKosc.dateEnvoi = DateUtils.toDate(ordreKosc.dateEnvoi);
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


    // getters and setters


    public async loadDepartement() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.departementService.findAll().subscribe(departements => this.departements = departements, error => console.log(error))
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
            {
                label: 'XLS', icon: 'pi pi-file-excel', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterExcel(this.criteriaData, this.exportData, this.fileName);
                }
            },
            {
                label: 'PDF', icon: 'pi pi-file-pdf', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName);
                }
            }
        ];
    }

    prepareColumnExport(): void {
        this.exportData = this.ordreKoscs.map(e => {
            return {
                'Object': e.object,
                'User Envoi': e.userEnvoi?.username,
                'Date Envoi': this.datePipe.transform(e.dateEnvoi, 'dd/MM/yyyy hh:mm'),
                'From': e.from,
                'To': e.to,
                'Envoi': e.envoi,
            }
        });

        this.criteriaData = [{
            'Object': this.searchOrdreKosc.object ? this.searchOrdreKosc.object : environment.emptyForExport,
            'User Envoi': this.searchOrdreKosc.userEnvoi?.username ? this.searchOrdreKosc.userEnvoi?.username : environment.emptyForExport,
            'Date Envoi': this.searchOrdreKosc.dateEnvoi ? this.datePipe.transform(this.searchOrdreKosc.dateEnvoi, this.dateFormat) : environment.emptyForExport,
            'From': this.searchOrdreKosc.from ? this.searchOrdreKosc.from : environment.emptyForExport,
            'To': this.searchOrdreKosc.to ? this.searchOrdreKosc.to : environment.emptyForExport,
            'Envoi': this.searchOrdreKosc.envoi ? this.searchOrdreKosc.envoi : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'object', header: 'Object'},
            {field: 'userEnvoi', header: 'User Envoi'},
            {field: 'dateEnvoi', header: 'Date Envoi'},
            {field: 'from', header: 'From'},
            {field: 'to', header: 'To'},
            {field: 'envoi', header: 'Envoi'},
        ];
    }
    public searchRequest() {
        this.ordreKoscService.findSuiviByCriteria(this.searchOrdreKosc).subscribe(ordreKoscs => {

            this.ordreKoscs = ordreKoscs;

        }, error => console.log(error));
    }

    public searchRequestSuiviRdv() {
        // console.log(" this.searchOrdreKosc :" + this.searchOrdreKosc.etatDemandeKoscVos);
        this.ordreKoscService.findByCriteriaSuiviRdv(this.searchOrdreKosc).subscribe(ordreKoscs => {
            this.ordreKoscs = ordreKoscs;

        }, error => console.log(error));
    }

    public searchRequestEmail() {
        // console.log(" this.searchOrdreKosc :" + this.searchOrdreKosc.etatDemandeKoscVos);
        this.ordreKoscService.findEmail(this.searchOrdreKosc).subscribe(ordreKoscs => {
            this.ordreKoscs = ordreKoscs;

        }, error => console.log(error));
    }


    get ordreKoscs(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscs;
    }

    set ordreKoscs(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscs = value;
    }

    get users(): Array<User> {
        return this.userService.users;
    }

    set users(value: Array<User>) {
        this.userService.users = value;
    }

    get etaDemandeKoscs(): Array<EtatDemandeKoscVo> {
        return this.etatDemandeKoscService.etatDemandeKoscs;
    }

    set etaDemandeKoscs(value: Array<EtatDemandeKoscVo>) {
        this.etatDemandeKoscService.etatDemandeKoscs = value;
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


}