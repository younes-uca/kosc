import {Component, OnInit} from '@angular/core';
import {JourFerieService} from 'src/app/controller/service/JourFerie.service';
import {JourFerieVo} from 'src/app/controller/model/JourFerie.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';



import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
    selector: 'app-jour-ferie-list-admin',
    templateUrl: './jour-ferie-list-admin.component.html',
    styleUrls: ['./jour-ferie-list-admin.component.css']
})
export class JourFerieListAdminComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'JourFerie';

    items: MenuItem[];

    home: MenuItem;


    constructor(private datePipe: DatePipe, private jourFerieService: JourFerieService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService

    ) {
    }

    get jourFeries(): Array<JourFerieVo> {
        return this.jourFerieService.jourFeries;
    }

    set jourFeries(value: Array<JourFerieVo>) {
        this.jourFerieService.jourFeries = value;
    }

    get jourFerieSelections(): Array<JourFerieVo> {
        return this.jourFerieService.jourFerieSelections;
    }

    set jourFerieSelections(value: Array<JourFerieVo>) {
        this.jourFerieService.jourFerieSelections = value;
    }

    get selectedJourFerie(): JourFerieVo {
        return this.jourFerieService.selectedJourFerie;
    }

    set selectedJourFerie(value: JourFerieVo) {
        this.jourFerieService.selectedJourFerie = value;
    }

    get createJourFerieDialog(): boolean {
        return this.jourFerieService.createJourFerieDialog;
    }

    set createJourFerieDialog(value: boolean) {
        this.jourFerieService.createJourFerieDialog = value;
    }

    get editJourFerieDialog(): boolean {
        return this.jourFerieService.editJourFerieDialog;
    }

    set editJourFerieDialog(value: boolean) {
        this.jourFerieService.editJourFerieDialog = value;
    }

    get viewJourFerieDialog(): boolean {
        return this.jourFerieService.viewJourFerieDialog;
    }

    set viewJourFerieDialog(value: boolean) {
        this.jourFerieService.viewJourFerieDialog = value;
    }

    get searchJourFerie(): JourFerieVo {
        return this.jourFerieService.searchJourFerie;
    }

    set searchJourFerie(value: JourFerieVo) {
        this.jourFerieService.searchJourFerie = value;
    }

    // getters and setters

    get dateFormat() {
        return environment.dateFormatList;
    }

    ngOnInit(): void {
        this.loadJourFeries();
        this.initExport();
        this.initCol();

        this.items = [
            {label: 'Jour F\éri\é', routerLink: '/app/admin/kosc/jour-ferie/list'},

        ];

        this.home = {icon: 'pi pi-home', routerLink: '/'};

    }

    // methods
    public async loadJourFeries() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('JourFerie', 'list');
        isPermistted ? this.jourFerieService.findAll().subscribe(jourFeries => this.jourFeries = jourFeries, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.jourFerieService.findByCriteria(this.searchJourFerie).subscribe(jourFeries => {

            this.jourFeries = jourFeries;
            // this.searchJourFerie = new JourFerieVo();
        }, error => console.log(error));
    }

    public async editJourFerie(jourFerie: JourFerieVo) {
        const isPermistted = await this.roleService.isPermitted('JourFerie', 'edit');
        if (isPermistted) {
            this.jourFerieService.findByIdWithAssociatedList(jourFerie).subscribe(res => {
                this.selectedJourFerie = res;
                this.selectedJourFerie.dateDebut = new Date(jourFerie.dateDebut);
                this.selectedJourFerie.dateFin = new Date(jourFerie.dateFin);

                this.editJourFerieDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewJourFerie(jourFerie: JourFerieVo) {
        const isPermistted = await this.roleService.isPermitted('JourFerie', 'view');
        if (isPermistted) {
            this.jourFerieService.findByIdWithAssociatedList(jourFerie).subscribe(res => {
                this.selectedJourFerie = res;
                this.selectedJourFerie.dateDebut = new Date(jourFerie.dateDebut);
                this.selectedJourFerie.dateFin = new Date(jourFerie.dateFin);

                this.viewJourFerieDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateJourFerie(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedJourFerie = new JourFerieVo();
            this.createJourFerieDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteJourFerie(jourFerie: JourFerieVo) {
        const isPermistted = await this.roleService.isPermitted('JourFerie', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Arret travail) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.jourFerieService.delete(jourFerie).subscribe(status => {
                        if (status > 0) {
                            const position = this.jourFeries.indexOf(jourFerie);
                            position > -1 ? this.jourFeries.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Arret travail Supprimé',
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


    public async duplicateJourFerie(jourFerie: JourFerieVo) {

        this.jourFerieService.findByIdWithAssociatedList(jourFerie).subscribe(
            res => {
                this.initDuplicateJourFerie(res);
                this.selectedJourFerie = res;
                this.selectedJourFerie.id = null;


                this.createJourFerieDialog = true;

            });

    }

    initDuplicateJourFerie(res: JourFerieVo) {


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
        this.exportData = this.jourFeries.map(e => {
            return {
                'Date debut': this.datePipe.transform(e.dateDebut, 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin, 'dd/MM/yyyy hh:mm'),
                'Libelle': e.libelle,
            }
        });

        this.criteriaData = [{
            'Date debut Min': this.searchJourFerie.dateDebutMin ? this.datePipe.transform(this.searchJourFerie.dateDebutMin, this.dateFormat) : environment.emptyForExport,
            'Date debut Max': this.searchJourFerie.dateDebutMax ? this.datePipe.transform(this.searchJourFerie.dateDebutMax, this.dateFormat) : environment.emptyForExport,
            'Date fin Min': this.searchJourFerie.dateFinMin ? this.datePipe.transform(this.searchJourFerie.dateFinMin, this.dateFormat) : environment.emptyForExport,
            'Date fin Max': this.searchJourFerie.dateFinMax ? this.datePipe.transform(this.searchJourFerie.dateFinMax, this.dateFormat) : environment.emptyForExport,
            'Libelle': this.searchJourFerie.libelle ? this.searchJourFerie.libelle : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'Libelle', header: 'Libelle'},
        ];
    }


}
