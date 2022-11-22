import {Component, OnInit} from '@angular/core';
import {TemplateEmailCriService} from 'src/app/controller/service/TemplateEmailCri.service';
import {TemplateEmailCriVo} from 'src/app/controller/model/TemplateEmailCri.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
    selector: 'app-template-email-cri-list-admin',
    templateUrl: './template-email-cri-list-admin.component.html',
    styleUrls: ['./template-email-cri-list-admin.component.css']
})
export class TemplateEmailCriListAdminComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailCri';

    items: MenuItem[];

    home: MenuItem;
    constructor(private datePipe: DatePipe, private templateEmailCriService: TemplateEmailCriService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
    ) {
    }

    get templateEmailCris(): Array<TemplateEmailCriVo> {
        return this.templateEmailCriService.templateEmailCris;
    }

    set templateEmailCris(value: Array<TemplateEmailCriVo>) {
        this.templateEmailCriService.templateEmailCris = value;
    }

    get templateEmailCriSelections(): Array<TemplateEmailCriVo> {
        return this.templateEmailCriService.templateEmailCriSelections;
    }

    set templateEmailCriSelections(value: Array<TemplateEmailCriVo>) {
        this.templateEmailCriService.templateEmailCriSelections = value;
    }

    get selectedTemplateEmailCri(): TemplateEmailCriVo {
        return this.templateEmailCriService.selectedTemplateEmailCri;
    }

    set selectedTemplateEmailCri(value: TemplateEmailCriVo) {
        this.templateEmailCriService.selectedTemplateEmailCri = value;
    }

    get createTemplateEmailCriDialog(): boolean {
        return this.templateEmailCriService.createTemplateEmailCriDialog;
    }

    set createTemplateEmailCriDialog(value: boolean) {
        this.templateEmailCriService.createTemplateEmailCriDialog = value;
    }

    get editTemplateEmailCriDialog(): boolean {
        return this.templateEmailCriService.editTemplateEmailCriDialog;
    }

    set editTemplateEmailCriDialog(value: boolean) {
        this.templateEmailCriService.editTemplateEmailCriDialog = value;
    }

    get viewTemplateEmailCriDialog(): boolean {
        return this.templateEmailCriService.viewTemplateEmailCriDialog;
    }

    set viewTemplateEmailCriDialog(value: boolean) {
        this.templateEmailCriService.viewTemplateEmailCriDialog = value;
    }

    // getters and setters

    get searchTemplateEmailCri(): TemplateEmailCriVo {
        return this.templateEmailCriService.searchTemplateEmailCri;
    }

    set searchTemplateEmailCri(value: TemplateEmailCriVo) {
        this.templateEmailCriService.searchTemplateEmailCri = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }

    ngOnInit(): void {
        this.loadTemplateEmailCris();
        this.initExport();
        this.initCol();

        this.items = [
            {label: 'Email CRI', routerLink: '/app/admin/kosc/template-email-cri/list'},

        ];
        this.home = {icon: 'pi pi-home', routerLink: '/'};

    }

    // methods
    public async loadTemplateEmailCris() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailCri', 'list');
        isPermistted ? this.templateEmailCriService.findAll().subscribe(templateEmailCris => this.templateEmailCris = templateEmailCris, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.templateEmailCriService.findByCriteria(this.searchTemplateEmailCri).subscribe(templateEmailCris => {

            this.templateEmailCris = templateEmailCris;
            // this.searchTemplateEmailCri = new TemplateEmailCriVo();
        }, error => console.log(error));
    }

    public async editTemplateEmailCri(templateEmailCri: TemplateEmailCriVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailCri', 'edit');
        if (isPermistted) {
            this.templateEmailCriService.findByIdWithAssociatedList(templateEmailCri).subscribe(res => {
                this.selectedTemplateEmailCri = res;

                this.editTemplateEmailCriDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewTemplateEmailCri(templateEmailCri: TemplateEmailCriVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailCri', 'view');
        if (isPermistted) {
            this.templateEmailCriService.findByIdWithAssociatedList(templateEmailCri).subscribe(res => {
                this.selectedTemplateEmailCri = res;

                this.viewTemplateEmailCriDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateTemplateEmailCri(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedTemplateEmailCri = new TemplateEmailCriVo();
            this.createTemplateEmailCriDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteTemplateEmailCri(templateEmailCri: TemplateEmailCriVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailCri', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Template email cri) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.templateEmailCriService.delete(templateEmailCri).subscribe(status => {
                        if (status > 0) {
                            const position = this.templateEmailCris.indexOf(templateEmailCri);
                            position > -1 ? this.templateEmailCris.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Template email cri Supprimé',
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

    public async duplicateTemplateEmailCri(templateEmailCri: TemplateEmailCriVo) {

        this.templateEmailCriService.findByIdWithAssociatedList(templateEmailCri).subscribe(
            res => {
                this.initDuplicateTemplateEmailCri(res);
                this.selectedTemplateEmailCri = res;
                this.selectedTemplateEmailCri.id = null;


                this.createTemplateEmailCriDialog = true;

            });

    }

    initDuplicateTemplateEmailCri(res: TemplateEmailCriVo) {


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
        this.exportData = this.templateEmailCris.map(e => {
            return {
                'Libelle': e.libelle,
                'Objet': e.objet,
                'Corps': e.corps,
            }
        });

        this.criteriaData = [{
            'Libelle': this.searchTemplateEmailCri.libelle ? this.searchTemplateEmailCri.libelle : environment.emptyForExport,
            'Objet': this.searchTemplateEmailCri.objet ? this.searchTemplateEmailCri.objet : environment.emptyForExport,
            'Corps': this.searchTemplateEmailCri.corps ? this.searchTemplateEmailCri.corps : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'objet', header: 'Objet'},
        ];
    }


}
