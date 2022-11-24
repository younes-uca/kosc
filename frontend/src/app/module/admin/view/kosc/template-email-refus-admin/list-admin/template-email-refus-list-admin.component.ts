import {Component, OnInit} from '@angular/core';
import {TemplateEmailRefusService} from 'src/app/controller/service/TemplateEmailRefus.service';
import {TemplateEmailRefusVo} from 'src/app/controller/model/TemplateEmailRefus.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
    selector: 'app-template-email-refus-list-admin',
    templateUrl: './template-email-refus-list-admin.component.html',
    styleUrls: ['./template-email-refus-list-admin.component.css']
})
export class TemplateEmailRefusListAdminComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailRefus';
    items: MenuItem[];

    home: MenuItem;

    constructor(private datePipe: DatePipe, private templateEmailRefusService: TemplateEmailRefusService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
    ) {
    }

    get templateEmailRefuss(): Array<TemplateEmailRefusVo> {
        return this.templateEmailRefusService.templateEmailRefuss;
    }

    set templateEmailRefuss(value: Array<TemplateEmailRefusVo>) {
        this.templateEmailRefusService.templateEmailRefuss = value;
    }

    get templateEmailRefusSelections(): Array<TemplateEmailRefusVo> {
        return this.templateEmailRefusService.templateEmailRefusSelections;
    }

    set templateEmailRefusSelections(value: Array<TemplateEmailRefusVo>) {
        this.templateEmailRefusService.templateEmailRefusSelections = value;
    }

    get selectedTemplateEmailRefus(): TemplateEmailRefusVo {
        return this.templateEmailRefusService.selectedTemplateEmailRefus;
    }

    set selectedTemplateEmailRefus(value: TemplateEmailRefusVo) {
        this.templateEmailRefusService.selectedTemplateEmailRefus = value;
    }

    get createTemplateEmailRefusDialog(): boolean {
        return this.templateEmailRefusService.createTemplateEmailRefusDialog;
    }

    set createTemplateEmailRefusDialog(value: boolean) {
        this.templateEmailRefusService.createTemplateEmailRefusDialog = value;
    }

    get editTemplateEmailRefusDialog(): boolean {
        return this.templateEmailRefusService.editTemplateEmailRefusDialog;
    }

    set editTemplateEmailRefusDialog(value: boolean) {
        this.templateEmailRefusService.editTemplateEmailRefusDialog = value;
    }

    get viewTemplateEmailRefusDialog(): boolean {
        return this.templateEmailRefusService.viewTemplateEmailRefusDialog;
    }

    set viewTemplateEmailRefusDialog(value: boolean) {
        this.templateEmailRefusService.viewTemplateEmailRefusDialog = value;
    }

    // getters and setters

    get searchTemplateEmailRefus(): TemplateEmailRefusVo {
        return this.templateEmailRefusService.searchTemplateEmailRefus;
    }

    set searchTemplateEmailRefus(value: TemplateEmailRefusVo) {
        this.templateEmailRefusService.searchTemplateEmailRefus = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }

    ngOnInit(): void {
        this.loadTemplateEmailRefuss();
        this.initExport();
        this.initCol();

        this.items = [
            {label: 'Email Refus', routerLink: '/app/admin/kosc/template-email-refus/list'},

        ];
        this.home = {icon: 'pi pi-home', routerLink: '/'};

    }

    // methods
    public async loadTemplateEmailRefuss() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailRefus', 'list');
        isPermistted ? this.templateEmailRefusService.findAll().subscribe(templateEmailRefuss => this.templateEmailRefuss = templateEmailRefuss, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.templateEmailRefusService.findByCriteria(this.searchTemplateEmailRefus).subscribe(templateEmailRefuss => {

            this.templateEmailRefuss = templateEmailRefuss;
            // this.searchTemplateEmailRefus = new TemplateEmailRefusVo();
        }, error => console.log(error));
    }

    public async editTemplateEmailRefus(templateEmailRefus: TemplateEmailRefusVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailRefus', 'edit');
        if (isPermistted) {
            this.templateEmailRefusService.findByIdWithAssociatedList(templateEmailRefus).subscribe(res => {
                this.selectedTemplateEmailRefus = res;

                this.editTemplateEmailRefusDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewTemplateEmailRefus(templateEmailRefus: TemplateEmailRefusVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailRefus', 'view');
        if (isPermistted) {
            this.templateEmailRefusService.findByIdWithAssociatedList(templateEmailRefus).subscribe(res => {
                this.selectedTemplateEmailRefus = res;

                this.viewTemplateEmailRefusDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateTemplateEmailRefus(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedTemplateEmailRefus = new TemplateEmailRefusVo();
            this.createTemplateEmailRefusDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteTemplateEmailRefus(templateEmailRefus: TemplateEmailRefusVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailRefus', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Template email refus) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.templateEmailRefusService.delete(templateEmailRefus).subscribe(status => {
                        if (status > 0) {
                            const position = this.templateEmailRefuss.indexOf(templateEmailRefus);
                            position > -1 ? this.templateEmailRefuss.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Template email refus Supprimé',
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

    public async duplicateTemplateEmailRefus(templateEmailRefus: TemplateEmailRefusVo) {

        this.templateEmailRefusService.findByIdWithAssociatedList(templateEmailRefus).subscribe(
            res => {
                this.initDuplicateTemplateEmailRefus(res);
                this.selectedTemplateEmailRefus = res;
                this.selectedTemplateEmailRefus.id = null;


                this.createTemplateEmailRefusDialog = true;

            });

    }

    initDuplicateTemplateEmailRefus(res: TemplateEmailRefusVo) {


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
        this.exportData = this.templateEmailRefuss.map(e => {
            return {
                'Libelle': e.libelle,
                'Objet': e.objet,
                'Corps': e.corps,
            }
        });

        this.criteriaData = [{
            'Libelle': this.searchTemplateEmailRefus.libelle ? this.searchTemplateEmailRefus.libelle : environment.emptyForExport,
            'Objet': this.searchTemplateEmailRefus.objet ? this.searchTemplateEmailRefus.objet : environment.emptyForExport,
            'Corps': this.searchTemplateEmailRefus.corps ? this.searchTemplateEmailRefus.corps : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'objet', header: 'Objet'},
        ];
    }


}
