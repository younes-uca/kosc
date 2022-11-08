import {Component, OnInit} from '@angular/core';
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
    selector: 'app-template-email-client-injoinable-kosc-list-chercheur',
    templateUrl: './template-email-client-injoinable-kosc-list-chercheur.component.html',
    styleUrls: ['./template-email-client-injoinable-kosc-list-chercheur.component.css']
})
export class TemplateEmailClientInjoinableKoscListChercheurComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailClientInjoinableKosc';


    constructor(private datePipe: DatePipe, private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
    ) {
    }

    get templateEmailClientInjoinableKoscs(): Array<TemplateEmailClientInjoinableKoscVo> {
        return this.templateEmailClientInjoinableKoscService.templateEmailClientInjoinableKoscs;
    }

    set templateEmailClientInjoinableKoscs(value: Array<TemplateEmailClientInjoinableKoscVo>) {
        this.templateEmailClientInjoinableKoscService.templateEmailClientInjoinableKoscs = value;
    }

    get templateEmailClientInjoinableKoscSelections(): Array<TemplateEmailClientInjoinableKoscVo> {
        return this.templateEmailClientInjoinableKoscService.templateEmailClientInjoinableKoscSelections;
    }

    set templateEmailClientInjoinableKoscSelections(value: Array<TemplateEmailClientInjoinableKoscVo>) {
        this.templateEmailClientInjoinableKoscService.templateEmailClientInjoinableKoscSelections = value;
    }

    get selectedTemplateEmailClientInjoinableKosc(): TemplateEmailClientInjoinableKoscVo {
        return this.templateEmailClientInjoinableKoscService.selectedTemplateEmailClientInjoinableKosc;
    }

    set selectedTemplateEmailClientInjoinableKosc(value: TemplateEmailClientInjoinableKoscVo) {
        this.templateEmailClientInjoinableKoscService.selectedTemplateEmailClientInjoinableKosc = value;
    }

    get createTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this.templateEmailClientInjoinableKoscService.createTemplateEmailClientInjoinableKoscDialog;
    }

    set createTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this.templateEmailClientInjoinableKoscService.createTemplateEmailClientInjoinableKoscDialog = value;
    }

    get editTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this.templateEmailClientInjoinableKoscService.editTemplateEmailClientInjoinableKoscDialog;
    }

    set editTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this.templateEmailClientInjoinableKoscService.editTemplateEmailClientInjoinableKoscDialog = value;
    }

    get viewTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this.templateEmailClientInjoinableKoscService.viewTemplateEmailClientInjoinableKoscDialog;
    }

    set viewTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this.templateEmailClientInjoinableKoscService.viewTemplateEmailClientInjoinableKoscDialog = value;
    }

    // getters and setters

    get searchTemplateEmailClientInjoinableKosc(): TemplateEmailClientInjoinableKoscVo {
        return this.templateEmailClientInjoinableKoscService.searchTemplateEmailClientInjoinableKosc;
    }

    set searchTemplateEmailClientInjoinableKosc(value: TemplateEmailClientInjoinableKoscVo) {
        this.templateEmailClientInjoinableKoscService.searchTemplateEmailClientInjoinableKosc = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }

    ngOnInit(): void {
        this.loadTemplateEmailClientInjoinableKoscs();
        this.initExport();
        this.initCol();
    }

    // methods
    public async loadTemplateEmailClientInjoinableKoscs() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailClientInjoinableKosc', 'list');
        isPermistted ? this.templateEmailClientInjoinableKoscService.findAll().subscribe(templateEmailClientInjoinableKoscs => this.templateEmailClientInjoinableKoscs = templateEmailClientInjoinableKoscs, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.templateEmailClientInjoinableKoscService.findByCriteria(this.searchTemplateEmailClientInjoinableKosc).subscribe(templateEmailClientInjoinableKoscs => {

            this.templateEmailClientInjoinableKoscs = templateEmailClientInjoinableKoscs;
            // this.searchTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();
        }, error => console.log(error));
    }

    public async editTemplateEmailClientInjoinableKosc(templateEmailClientInjoinableKosc: TemplateEmailClientInjoinableKoscVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailClientInjoinableKosc', 'edit');
        if (isPermistted) {
            this.templateEmailClientInjoinableKoscService.findByIdWithAssociatedList(templateEmailClientInjoinableKosc).subscribe(res => {
                this.selectedTemplateEmailClientInjoinableKosc = res;

                this.editTemplateEmailClientInjoinableKoscDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewTemplateEmailClientInjoinableKosc(templateEmailClientInjoinableKosc: TemplateEmailClientInjoinableKoscVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailClientInjoinableKosc', 'view');
        if (isPermistted) {
            this.templateEmailClientInjoinableKoscService.findByIdWithAssociatedList(templateEmailClientInjoinableKosc).subscribe(res => {
                this.selectedTemplateEmailClientInjoinableKosc = res;

                this.viewTemplateEmailClientInjoinableKoscDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateTemplateEmailClientInjoinableKosc(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();
            this.createTemplateEmailClientInjoinableKoscDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteTemplateEmailClientInjoinableKosc(templateEmailClientInjoinableKosc: TemplateEmailClientInjoinableKoscVo) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailClientInjoinableKosc', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Template email client injoinable kosc) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.templateEmailClientInjoinableKoscService.delete(templateEmailClientInjoinableKosc).subscribe(status => {
                        if (status > 0) {
                            const position = this.templateEmailClientInjoinableKoscs.indexOf(templateEmailClientInjoinableKosc);
                            position > -1 ? this.templateEmailClientInjoinableKoscs.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Template email client injoinable kosc Supprimé',
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

    public async duplicateTemplateEmailClientInjoinableKosc(templateEmailClientInjoinableKosc: TemplateEmailClientInjoinableKoscVo) {

        this.templateEmailClientInjoinableKoscService.findByIdWithAssociatedList(templateEmailClientInjoinableKosc).subscribe(
            res => {
                this.initDuplicateTemplateEmailClientInjoinableKosc(res);
                this.selectedTemplateEmailClientInjoinableKosc = res;
                this.selectedTemplateEmailClientInjoinableKosc.id = null;


                this.createTemplateEmailClientInjoinableKoscDialog = true;

            });

    }

    initDuplicateTemplateEmailClientInjoinableKosc(res: TemplateEmailClientInjoinableKoscVo) {


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
        this.exportData = this.templateEmailClientInjoinableKoscs.map(e => {
            return {
                'Libelle': e.libelle,
                'Objet': e.objet,
                'Corps': e.corps,
            }
        });

        this.criteriaData = [{
            'Libelle': this.searchTemplateEmailClientInjoinableKosc.libelle ? this.searchTemplateEmailClientInjoinableKosc.libelle : environment.emptyForExport,
            'Objet': this.searchTemplateEmailClientInjoinableKosc.objet ? this.searchTemplateEmailClientInjoinableKosc.objet : environment.emptyForExport,
            'Corps': this.searchTemplateEmailClientInjoinableKosc.corps ? this.searchTemplateEmailClientInjoinableKosc.corps : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'objet', header: 'Objet'},
        ];
    }


}
