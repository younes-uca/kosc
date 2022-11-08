import {Component, OnInit} from '@angular/core';
import {TemplateEmailMauvaisContactService} from 'src/app/controller/service/TemplateEmailMauvaisContact.service';
import {TemplateEmailMauvaisContactVo} from 'src/app/controller/model/TemplateEmailMauvaisContact.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
    selector: 'app-template-email-mauvais-contact-list-admin',
    templateUrl: './template-email-mauvais-contact-list-admin.component.html',
    styleUrls: ['./template-email-mauvais-contact-list-admin.component.css']
})
export class TemplateEmailMauvaisContactListAdminComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailMauvaisContact';


    constructor(private datePipe: DatePipe, private templateEmailMauvaisContactService: TemplateEmailMauvaisContactService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
    ) {
    }

    get templateEmailMauvaisContacts(): Array<TemplateEmailMauvaisContactVo> {
        return this.templateEmailMauvaisContactService.templateEmailMauvaisContacts;
    }

    set templateEmailMauvaisContacts(value: Array<TemplateEmailMauvaisContactVo>) {
        this.templateEmailMauvaisContactService.templateEmailMauvaisContacts = value;
    }

    get templateEmailMauvaisContactSelections(): Array<TemplateEmailMauvaisContactVo> {
        return this.templateEmailMauvaisContactService.templateEmailMauvaisContactSelections;
    }

    set templateEmailMauvaisContactSelections(value: Array<TemplateEmailMauvaisContactVo>) {
        this.templateEmailMauvaisContactService.templateEmailMauvaisContactSelections = value;
    }

    get selectedTemplateEmailMauvaisContact(): TemplateEmailMauvaisContactVo {
        return this.templateEmailMauvaisContactService.selectedTemplateEmailMauvaisContact;
    }

    set selectedTemplateEmailMauvaisContact(value: TemplateEmailMauvaisContactVo) {
        this.templateEmailMauvaisContactService.selectedTemplateEmailMauvaisContact = value;
    }

    get createTemplateEmailMauvaisContactDialog(): boolean {
        return this.templateEmailMauvaisContactService.createTemplateEmailMauvaisContactDialog;
    }

    set createTemplateEmailMauvaisContactDialog(value: boolean) {
        this.templateEmailMauvaisContactService.createTemplateEmailMauvaisContactDialog = value;
    }

    get editTemplateEmailMauvaisContactDialog(): boolean {
        return this.templateEmailMauvaisContactService.editTemplateEmailMauvaisContactDialog;
    }

    set editTemplateEmailMauvaisContactDialog(value: boolean) {
        this.templateEmailMauvaisContactService.editTemplateEmailMauvaisContactDialog = value;
    }

    get viewTemplateEmailMauvaisContactDialog(): boolean {
        return this.templateEmailMauvaisContactService.viewTemplateEmailMauvaisContactDialog;
    }

    set viewTemplateEmailMauvaisContactDialog(value: boolean) {
        this.templateEmailMauvaisContactService.viewTemplateEmailMauvaisContactDialog = value;
    }

    // getters and setters

    get searchTemplateEmailMauvaisContact(): TemplateEmailMauvaisContactVo {
        return this.templateEmailMauvaisContactService.searchTemplateEmailMauvaisContact;
    }

    set searchTemplateEmailMauvaisContact(value: TemplateEmailMauvaisContactVo) {
        this.templateEmailMauvaisContactService.searchTemplateEmailMauvaisContact = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }

    ngOnInit(): void {
        this.loadTemplateEmailMauvaisContacts();
        this.initExport();
        this.initCol();
    }

    // methods
    public async loadTemplateEmailMauvaisContacts() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailMauvaisContact', 'list');
        isPermistted ? this.templateEmailMauvaisContactService.findAll().subscribe(templateEmailMauvaisContacts => this.templateEmailMauvaisContacts = templateEmailMauvaisContacts, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.templateEmailMauvaisContactService.findByCriteria(this.searchTemplateEmailMauvaisContact).subscribe(templateEmailMauvaisContacts => {

            this.templateEmailMauvaisContacts = templateEmailMauvaisContacts;
            // this.searchTemplateEmailMauvaisContact = new TemplateEmailMauvaisContactVo();
        }, error => console.log(error));
    }

    public async editTemplateEmailMauvaisContact(templateEmailMauvaisContact: TemplateEmailMauvaisContactVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailMauvaisContact', 'edit');
        if (isPermistted) {
            this.templateEmailMauvaisContactService.findByIdWithAssociatedList(templateEmailMauvaisContact).subscribe(res => {
                this.selectedTemplateEmailMauvaisContact = res;

                this.editTemplateEmailMauvaisContactDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewTemplateEmailMauvaisContact(templateEmailMauvaisContact: TemplateEmailMauvaisContactVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailMauvaisContact', 'view');
        if (isPermistted) {
            this.templateEmailMauvaisContactService.findByIdWithAssociatedList(templateEmailMauvaisContact).subscribe(res => {
                this.selectedTemplateEmailMauvaisContact = res;

                this.viewTemplateEmailMauvaisContactDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateTemplateEmailMauvaisContact(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedTemplateEmailMauvaisContact = new TemplateEmailMauvaisContactVo();
            this.createTemplateEmailMauvaisContactDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteTemplateEmailMauvaisContact(templateEmailMauvaisContact: TemplateEmailMauvaisContactVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailMauvaisContact', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Template email mauvais contact) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.templateEmailMauvaisContactService.delete(templateEmailMauvaisContact).subscribe(status => {
                        if (status > 0) {
                            const position = this.templateEmailMauvaisContacts.indexOf(templateEmailMauvaisContact);
                            position > -1 ? this.templateEmailMauvaisContacts.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Template email mauvais contact Supprimé',
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

    public async duplicateTemplateEmailMauvaisContact(templateEmailMauvaisContact: TemplateEmailMauvaisContactVo) {

        this.templateEmailMauvaisContactService.findByIdWithAssociatedList(templateEmailMauvaisContact).subscribe(
            res => {
                this.initDuplicateTemplateEmailMauvaisContact(res);
                this.selectedTemplateEmailMauvaisContact = res;
                this.selectedTemplateEmailMauvaisContact.id = null;


                this.createTemplateEmailMauvaisContactDialog = true;

            });

    }

    initDuplicateTemplateEmailMauvaisContact(res: TemplateEmailMauvaisContactVo) {


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
        this.exportData = this.templateEmailMauvaisContacts.map(e => {
            return {
                'Libelle': e.libelle,
                'Objet': e.objet,
                'Corps': e.corps,
            }
        });

        this.criteriaData = [{
            'Libelle': this.searchTemplateEmailMauvaisContact.libelle ? this.searchTemplateEmailMauvaisContact.libelle : environment.emptyForExport,
            'Objet': this.searchTemplateEmailMauvaisContact.objet ? this.searchTemplateEmailMauvaisContact.objet : environment.emptyForExport,
            'Corps': this.searchTemplateEmailMauvaisContact.corps ? this.searchTemplateEmailMauvaisContact.corps : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'objet', header: 'Objet'},
        ];
    }


}
