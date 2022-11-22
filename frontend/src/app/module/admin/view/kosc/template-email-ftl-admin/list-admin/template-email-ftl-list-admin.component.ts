import {Component, OnInit} from '@angular/core';
import {TemplateEmailFtlService} from 'src/app/controller/service/TemplateEmailFtl.service';
import {TemplateEmailFtlVo} from 'src/app/controller/model/TemplateEmailFtl.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
    selector: 'app-template-email-ftl-list-admin',
    templateUrl: './template-email-ftl-list-admin.component.html',
    styleUrls: ['./template-email-ftl-list-admin.component.css']
})
export class TemplateEmailFtlListAdminComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailFtl';

    items: MenuItem[];

    home: MenuItem;
    constructor(private datePipe: DatePipe, private templateEmailFtlService: TemplateEmailFtlService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
    ) {
    }

    get templateEmailFtls(): Array<TemplateEmailFtlVo> {
        return this.templateEmailFtlService.templateEmailFtls;
    }

    set templateEmailFtls(value: Array<TemplateEmailFtlVo>) {
        this.templateEmailFtlService.templateEmailFtls = value;
    }

    get templateEmailFtlSelections(): Array<TemplateEmailFtlVo> {
        return this.templateEmailFtlService.templateEmailFtlSelections;
    }

    set templateEmailFtlSelections(value: Array<TemplateEmailFtlVo>) {
        this.templateEmailFtlService.templateEmailFtlSelections = value;
    }

    get selectedTemplateEmailFtl(): TemplateEmailFtlVo {
        return this.templateEmailFtlService.selectedTemplateEmailFtl;
    }

    set selectedTemplateEmailFtl(value: TemplateEmailFtlVo) {
        this.templateEmailFtlService.selectedTemplateEmailFtl = value;
    }

    get createTemplateEmailFtlDialog(): boolean {
        return this.templateEmailFtlService.createTemplateEmailFtlDialog;
    }

    set createTemplateEmailFtlDialog(value: boolean) {
        this.templateEmailFtlService.createTemplateEmailFtlDialog = value;
    }

    get editTemplateEmailFtlDialog(): boolean {
        return this.templateEmailFtlService.editTemplateEmailFtlDialog;
    }

    set editTemplateEmailFtlDialog(value: boolean) {
        this.templateEmailFtlService.editTemplateEmailFtlDialog = value;
    }

    get viewTemplateEmailFtlDialog(): boolean {
        return this.templateEmailFtlService.viewTemplateEmailFtlDialog;
    }

    set viewTemplateEmailFtlDialog(value: boolean) {
        this.templateEmailFtlService.viewTemplateEmailFtlDialog = value;
    }

    // getters and setters

    get searchTemplateEmailFtl(): TemplateEmailFtlVo {
        return this.templateEmailFtlService.searchTemplateEmailFtl;
    }

    set searchTemplateEmailFtl(value: TemplateEmailFtlVo) {
        this.templateEmailFtlService.searchTemplateEmailFtl = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }

    ngOnInit(): void {
        this.loadTemplateEmailFtls();
        this.initExport();
        this.initCol();

        this.items = [
            {label: 'Email FTL', routerLink: '/app/admin/kosc/template-email-ftl/list'},

        ];
        this.home = {icon: 'pi pi-home', routerLink: '/'};

    }

    // methods
    public async loadTemplateEmailFtls() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailFtl', 'list');
        isPermistted ? this.templateEmailFtlService.findAll().subscribe(templateEmailFtls => this.templateEmailFtls = templateEmailFtls, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.templateEmailFtlService.findByCriteria(this.searchTemplateEmailFtl).subscribe(templateEmailFtls => {

            this.templateEmailFtls = templateEmailFtls;
            // this.searchTemplateEmailFtl = new TemplateEmailFtlVo();
        }, error => console.log(error));
    }

    public async editTemplateEmailFtl(templateEmailFtl: TemplateEmailFtlVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailFtl', 'edit');
        if (isPermistted) {
            this.templateEmailFtlService.findByIdWithAssociatedList(templateEmailFtl).subscribe(res => {
                this.selectedTemplateEmailFtl = res;

                this.editTemplateEmailFtlDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewTemplateEmailFtl(templateEmailFtl: TemplateEmailFtlVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailFtl', 'view');
        if (isPermistted) {
            this.templateEmailFtlService.findByIdWithAssociatedList(templateEmailFtl).subscribe(res => {
                this.selectedTemplateEmailFtl = res;

                this.viewTemplateEmailFtlDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateTemplateEmailFtl(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedTemplateEmailFtl = new TemplateEmailFtlVo();
            this.createTemplateEmailFtlDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteTemplateEmailFtl(templateEmailFtl: TemplateEmailFtlVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailFtl', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Template email ftl) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.templateEmailFtlService.delete(templateEmailFtl).subscribe(status => {
                        if (status > 0) {
                            const position = this.templateEmailFtls.indexOf(templateEmailFtl);
                            position > -1 ? this.templateEmailFtls.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Template email ftl Supprimé',
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

    public async duplicateTemplateEmailFtl(templateEmailFtl: TemplateEmailFtlVo) {

        this.templateEmailFtlService.findByIdWithAssociatedList(templateEmailFtl).subscribe(
            res => {
                this.initDuplicateTemplateEmailFtl(res);
                this.selectedTemplateEmailFtl = res;
                this.selectedTemplateEmailFtl.id = null;


                this.createTemplateEmailFtlDialog = true;

            });

    }

    initDuplicateTemplateEmailFtl(res: TemplateEmailFtlVo) {


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
        this.exportData = this.templateEmailFtls.map(e => {
            return {
                'Libelle': e.libelle,
                'Objet': e.objet,
                'Corps': e.corps,
            }
        });

        this.criteriaData = [{
            'Libelle': this.searchTemplateEmailFtl.libelle ? this.searchTemplateEmailFtl.libelle : environment.emptyForExport,
            'Objet': this.searchTemplateEmailFtl.objet ? this.searchTemplateEmailFtl.objet : environment.emptyForExport,
            'Corps': this.searchTemplateEmailFtl.corps ? this.searchTemplateEmailFtl.corps : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'objet', header: 'Objet'},
        ];
    }


}
