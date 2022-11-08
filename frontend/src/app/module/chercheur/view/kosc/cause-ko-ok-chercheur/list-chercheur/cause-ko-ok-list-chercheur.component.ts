import {Component, OnInit} from '@angular/core';
import {CauseKoOkService} from 'src/app/controller/service/CauseKoOk.service';
import {CauseKoOkVo} from 'src/app/controller/model/CauseKoOk.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
    selector: 'app-cause-ko-ok-list-chercheur',
    templateUrl: './cause-ko-ok-list-chercheur.component.html',
    styleUrls: ['./cause-ko-ok-list-chercheur.component.css']
})
export class CauseKoOkListChercheurComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'CauseKoOk';


    constructor(private datePipe: DatePipe, private causeKoOkService: CauseKoOkService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
    ) {
    }

    get causeKoOks(): Array<CauseKoOkVo> {
        return this.causeKoOkService.causeKoOks;
    }

    set causeKoOks(value: Array<CauseKoOkVo>) {
        this.causeKoOkService.causeKoOks = value;
    }

    get causeKoOkSelections(): Array<CauseKoOkVo> {
        return this.causeKoOkService.causeKoOkSelections;
    }

    set causeKoOkSelections(value: Array<CauseKoOkVo>) {
        this.causeKoOkService.causeKoOkSelections = value;
    }

    get selectedCauseKoOk(): CauseKoOkVo {
        return this.causeKoOkService.selectedCauseKoOk;
    }

    set selectedCauseKoOk(value: CauseKoOkVo) {
        this.causeKoOkService.selectedCauseKoOk = value;
    }

    get createCauseKoOkDialog(): boolean {
        return this.causeKoOkService.createCauseKoOkDialog;
    }

    set createCauseKoOkDialog(value: boolean) {
        this.causeKoOkService.createCauseKoOkDialog = value;
    }

    get editCauseKoOkDialog(): boolean {
        return this.causeKoOkService.editCauseKoOkDialog;
    }

    set editCauseKoOkDialog(value: boolean) {
        this.causeKoOkService.editCauseKoOkDialog = value;
    }

    get viewCauseKoOkDialog(): boolean {
        return this.causeKoOkService.viewCauseKoOkDialog;
    }

    set viewCauseKoOkDialog(value: boolean) {
        this.causeKoOkService.viewCauseKoOkDialog = value;
    }

    // getters and setters

    get searchCauseKoOk(): CauseKoOkVo {
        return this.causeKoOkService.searchCauseKoOk;
    }

    set searchCauseKoOk(value: CauseKoOkVo) {
        this.causeKoOkService.searchCauseKoOk = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }

    ngOnInit(): void {
        this.loadCauseKoOks();
        this.initExport();
        this.initCol();
    }

    // methods
    public async loadCauseKoOks() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CauseKoOk', 'list');
        isPermistted ? this.causeKoOkService.findAll().subscribe(causeKoOks => this.causeKoOks = causeKoOks, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.causeKoOkService.findByCriteria(this.searchCauseKoOk).subscribe(causeKoOks => {

            this.causeKoOks = causeKoOks;
            // this.searchCauseKoOk = new CauseKoOkVo();
        }, error => console.log(error));
    }

    public async editCauseKoOk(causeKoOk: CauseKoOkVo) {
        const isPermistted = await this.roleService.isPermitted('CauseKoOk', 'edit');
        if (isPermistted) {
            this.causeKoOkService.findByIdWithAssociatedList(causeKoOk).subscribe(res => {
                this.selectedCauseKoOk = res;

                this.editCauseKoOkDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewCauseKoOk(causeKoOk: CauseKoOkVo) {
        const isPermistted = await this.roleService.isPermitted('CauseKoOk', 'view');
        if (isPermistted) {
            this.causeKoOkService.findByIdWithAssociatedList(causeKoOk).subscribe(res => {
                this.selectedCauseKoOk = res;

                this.viewCauseKoOkDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateCauseKoOk(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedCauseKoOk = new CauseKoOkVo();
            this.createCauseKoOkDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteCauseKoOk(causeKoOk: CauseKoOkVo) {
        const isPermistted = await this.roleService.isPermitted('CauseKoOk', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Cause ko ok) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.causeKoOkService.delete(causeKoOk).subscribe(status => {
                        if (status > 0) {
                            const position = this.causeKoOks.indexOf(causeKoOk);
                            position > -1 ? this.causeKoOks.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Cause ko ok Supprimé',
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

    public async duplicateCauseKoOk(causeKoOk: CauseKoOkVo) {

        this.causeKoOkService.findByIdWithAssociatedList(causeKoOk).subscribe(
            res => {
                this.initDuplicateCauseKoOk(res);
                this.selectedCauseKoOk = res;
                this.selectedCauseKoOk.id = null;


                this.createCauseKoOkDialog = true;

            });

    }

    initDuplicateCauseKoOk(res: CauseKoOkVo) {


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
        this.exportData = this.causeKoOks.map(e => {
            return {
                'Code': e.code,
                'Libelle': e.libelle,
            }
        });

        this.criteriaData = [{
            'Code': this.searchCauseKoOk.code ? this.searchCauseKoOk.code : environment.emptyForExport,
            'Libelle': this.searchCauseKoOk.libelle ? this.searchCauseKoOk.libelle : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }


}
