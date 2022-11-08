import {Component, OnInit} from '@angular/core';
import {SourceReplanificationService} from 'src/app/controller/service/SourceReplanification.service';
import {SourceReplanificationVo} from 'src/app/controller/model/SourceReplanification.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
    selector: 'app-source-replanification-list-chercheur',
    templateUrl: './source-replanification-list-chercheur.component.html',
    styleUrls: ['./source-replanification-list-chercheur.component.css']
})
export class SourceReplanificationListChercheurComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'SourceReplanification';


    constructor(private datePipe: DatePipe, private sourceReplanificationService: SourceReplanificationService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
    ) {
    }

    get sourceReplanifications(): Array<SourceReplanificationVo> {
        return this.sourceReplanificationService.sourceReplanifications;
    }

    set sourceReplanifications(value: Array<SourceReplanificationVo>) {
        this.sourceReplanificationService.sourceReplanifications = value;
    }

    get sourceReplanificationSelections(): Array<SourceReplanificationVo> {
        return this.sourceReplanificationService.sourceReplanificationSelections;
    }

    set sourceReplanificationSelections(value: Array<SourceReplanificationVo>) {
        this.sourceReplanificationService.sourceReplanificationSelections = value;
    }

    get selectedSourceReplanification(): SourceReplanificationVo {
        return this.sourceReplanificationService.selectedSourceReplanification;
    }

    set selectedSourceReplanification(value: SourceReplanificationVo) {
        this.sourceReplanificationService.selectedSourceReplanification = value;
    }

    get createSourceReplanificationDialog(): boolean {
        return this.sourceReplanificationService.createSourceReplanificationDialog;
    }

    set createSourceReplanificationDialog(value: boolean) {
        this.sourceReplanificationService.createSourceReplanificationDialog = value;
    }

    get editSourceReplanificationDialog(): boolean {
        return this.sourceReplanificationService.editSourceReplanificationDialog;
    }

    set editSourceReplanificationDialog(value: boolean) {
        this.sourceReplanificationService.editSourceReplanificationDialog = value;
    }

    get viewSourceReplanificationDialog(): boolean {
        return this.sourceReplanificationService.viewSourceReplanificationDialog;
    }

    set viewSourceReplanificationDialog(value: boolean) {
        this.sourceReplanificationService.viewSourceReplanificationDialog = value;
    }

    // getters and setters

    get searchSourceReplanification(): SourceReplanificationVo {
        return this.sourceReplanificationService.searchSourceReplanification;
    }

    set searchSourceReplanification(value: SourceReplanificationVo) {
        this.sourceReplanificationService.searchSourceReplanification = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }

    ngOnInit(): void {
        this.loadSourceReplanifications();
        this.initExport();
        this.initCol();
    }

    // methods
    public async loadSourceReplanifications() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SourceReplanification', 'list');
        isPermistted ? this.sourceReplanificationService.findAll().subscribe(sourceReplanifications => this.sourceReplanifications = sourceReplanifications, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.sourceReplanificationService.findByCriteria(this.searchSourceReplanification).subscribe(sourceReplanifications => {

            this.sourceReplanifications = sourceReplanifications;
            // this.searchSourceReplanification = new SourceReplanificationVo();
        }, error => console.log(error));
    }

    public async editSourceReplanification(sourceReplanification: SourceReplanificationVo) {
        const isPermistted = await this.roleService.isPermitted('SourceReplanification', 'edit');
        if (isPermistted) {
            this.sourceReplanificationService.findByIdWithAssociatedList(sourceReplanification).subscribe(res => {
                this.selectedSourceReplanification = res;

                this.editSourceReplanificationDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewSourceReplanification(sourceReplanification: SourceReplanificationVo) {
        const isPermistted = await this.roleService.isPermitted('SourceReplanification', 'view');
        if (isPermistted) {
            this.sourceReplanificationService.findByIdWithAssociatedList(sourceReplanification).subscribe(res => {
                this.selectedSourceReplanification = res;

                this.viewSourceReplanificationDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateSourceReplanification(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedSourceReplanification = new SourceReplanificationVo();
            this.createSourceReplanificationDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteSourceReplanification(sourceReplanification: SourceReplanificationVo) {
        const isPermistted = await this.roleService.isPermitted('SourceReplanification', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Source replanification) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.sourceReplanificationService.delete(sourceReplanification).subscribe(status => {
                        if (status > 0) {
                            const position = this.sourceReplanifications.indexOf(sourceReplanification);
                            position > -1 ? this.sourceReplanifications.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Source replanification Supprimé',
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

    public async duplicateSourceReplanification(sourceReplanification: SourceReplanificationVo) {

        this.sourceReplanificationService.findByIdWithAssociatedList(sourceReplanification).subscribe(
            res => {
                this.initDuplicateSourceReplanification(res);
                this.selectedSourceReplanification = res;
                this.selectedSourceReplanification.id = null;


                this.createSourceReplanificationDialog = true;

            });

    }

    initDuplicateSourceReplanification(res: SourceReplanificationVo) {


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
        this.exportData = this.sourceReplanifications.map(e => {
            return {
                'Code': e.code,
                'Libelle': e.libelle,
            }
        });

        this.criteriaData = [{
            'Code': this.searchSourceReplanification.code ? this.searchSourceReplanification.code : environment.emptyForExport,
            'Libelle': this.searchSourceReplanification.libelle ? this.searchSourceReplanification.libelle : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }


}
