import {Component, OnInit} from '@angular/core';
import {
    TemplateEmailConfirmationClientService
} from 'src/app/controller/service/TemplateEmailConfirmationClient.service';
import {TemplateEmailConfirmationClientVo} from 'src/app/controller/model/TemplateEmailConfirmationClient.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
    selector: 'app-template-email-confirmation-client-list-admin',
    templateUrl: './template-email-confirmation-client-list-admin.component.html',
    styleUrls: ['./template-email-confirmation-client-list-admin.component.css']
})
export class TemplateEmailConfirmationClientListAdminComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailConfirmationClient';


    constructor(private datePipe: DatePipe, private templateEmailConfirmationClientService: TemplateEmailConfirmationClientService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
    ) {
    }

    get templateEmailConfirmationClients(): Array<TemplateEmailConfirmationClientVo> {
        return this.templateEmailConfirmationClientService.templateEmailConfirmationClients;
    }

    set templateEmailConfirmationClients(value: Array<TemplateEmailConfirmationClientVo>) {
        this.templateEmailConfirmationClientService.templateEmailConfirmationClients = value;
    }

    get templateEmailConfirmationClientSelections(): Array<TemplateEmailConfirmationClientVo> {
        return this.templateEmailConfirmationClientService.templateEmailConfirmationClientSelections;
    }

    set templateEmailConfirmationClientSelections(value: Array<TemplateEmailConfirmationClientVo>) {
        this.templateEmailConfirmationClientService.templateEmailConfirmationClientSelections = value;
    }

    get selectedTemplateEmailConfirmationClient(): TemplateEmailConfirmationClientVo {
        return this.templateEmailConfirmationClientService.selectedTemplateEmailConfirmationClient;
    }

    set selectedTemplateEmailConfirmationClient(value: TemplateEmailConfirmationClientVo) {
        this.templateEmailConfirmationClientService.selectedTemplateEmailConfirmationClient = value;
    }

    get createTemplateEmailConfirmationClientDialog(): boolean {
        return this.templateEmailConfirmationClientService.createTemplateEmailConfirmationClientDialog;
    }

    set createTemplateEmailConfirmationClientDialog(value: boolean) {
        this.templateEmailConfirmationClientService.createTemplateEmailConfirmationClientDialog = value;
    }

    get editTemplateEmailConfirmationClientDialog(): boolean {
        return this.templateEmailConfirmationClientService.editTemplateEmailConfirmationClientDialog;
    }

    set editTemplateEmailConfirmationClientDialog(value: boolean) {
        this.templateEmailConfirmationClientService.editTemplateEmailConfirmationClientDialog = value;
    }

    get viewTemplateEmailConfirmationClientDialog(): boolean {
        return this.templateEmailConfirmationClientService.viewTemplateEmailConfirmationClientDialog;
    }

    set viewTemplateEmailConfirmationClientDialog(value: boolean) {
        this.templateEmailConfirmationClientService.viewTemplateEmailConfirmationClientDialog = value;
    }

    // getters and setters

    get searchTemplateEmailConfirmationClient(): TemplateEmailConfirmationClientVo {
        return this.templateEmailConfirmationClientService.searchTemplateEmailConfirmationClient;
    }

    set searchTemplateEmailConfirmationClient(value: TemplateEmailConfirmationClientVo) {
        this.templateEmailConfirmationClientService.searchTemplateEmailConfirmationClient = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }

    ngOnInit(): void {
        this.loadTemplateEmailConfirmationClients();
        this.initExport();
        this.initCol();
    }

    // methods
    public async loadTemplateEmailConfirmationClients() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailConfirmationClient', 'list');
        isPermistted ? this.templateEmailConfirmationClientService.findAll().subscribe(templateEmailConfirmationClients => this.templateEmailConfirmationClients = templateEmailConfirmationClients, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.templateEmailConfirmationClientService.findByCriteria(this.searchTemplateEmailConfirmationClient).subscribe(templateEmailConfirmationClients => {

            this.templateEmailConfirmationClients = templateEmailConfirmationClients;
            // this.searchTemplateEmailConfirmationClient = new TemplateEmailConfirmationClientVo();
        }, error => console.log(error));
    }

    public async editTemplateEmailConfirmationClient(templateEmailConfirmationClient: TemplateEmailConfirmationClientVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailConfirmationClient', 'edit');
        if (isPermistted) {
            this.templateEmailConfirmationClientService.findByIdWithAssociatedList(templateEmailConfirmationClient).subscribe(res => {
                this.selectedTemplateEmailConfirmationClient = res;

                this.editTemplateEmailConfirmationClientDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewTemplateEmailConfirmationClient(templateEmailConfirmationClient: TemplateEmailConfirmationClientVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailConfirmationClient', 'view');
        if (isPermistted) {
            this.templateEmailConfirmationClientService.findByIdWithAssociatedList(templateEmailConfirmationClient).subscribe(res => {
                this.selectedTemplateEmailConfirmationClient = res;

                this.viewTemplateEmailConfirmationClientDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateTemplateEmailConfirmationClient(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedTemplateEmailConfirmationClient = new TemplateEmailConfirmationClientVo();
            this.createTemplateEmailConfirmationClientDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteTemplateEmailConfirmationClient(templateEmailConfirmationClient: TemplateEmailConfirmationClientVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailConfirmationClient', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Template email confirmation client) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.templateEmailConfirmationClientService.delete(templateEmailConfirmationClient).subscribe(status => {
                        if (status > 0) {
                            const position = this.templateEmailConfirmationClients.indexOf(templateEmailConfirmationClient);
                            position > -1 ? this.templateEmailConfirmationClients.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Template email confirmation client Supprimé',
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

    public async duplicateTemplateEmailConfirmationClient(templateEmailConfirmationClient: TemplateEmailConfirmationClientVo) {

        this.templateEmailConfirmationClientService.findByIdWithAssociatedList(templateEmailConfirmationClient).subscribe(
            res => {
                this.initDuplicateTemplateEmailConfirmationClient(res);
                this.selectedTemplateEmailConfirmationClient = res;
                this.selectedTemplateEmailConfirmationClient.id = null;


                this.createTemplateEmailConfirmationClientDialog = true;

            });

    }

    initDuplicateTemplateEmailConfirmationClient(res: TemplateEmailConfirmationClientVo) {


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
        this.exportData = this.templateEmailConfirmationClients.map(e => {
            return {
                'Libelle': e.libelle,
                'Objet': e.objet,
                'Corps': e.corps,
            }
        });

        this.criteriaData = [{
            'Libelle': this.searchTemplateEmailConfirmationClient.libelle ? this.searchTemplateEmailConfirmationClient.libelle : environment.emptyForExport,
            'Objet': this.searchTemplateEmailConfirmationClient.objet ? this.searchTemplateEmailConfirmationClient.objet : environment.emptyForExport,
            'Corps': this.searchTemplateEmailConfirmationClient.corps ? this.searchTemplateEmailConfirmationClient.corps : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'objet', header: 'Objet'},
        ];
    }


}
