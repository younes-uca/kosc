import {Component, OnInit} from '@angular/core';
import {TechnicienService} from 'src/app/controller/service/Technicien.service';
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {RoleService} from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';


import {EntrepriseService} from 'src/app/controller/service/Entreprise.service';

import {EntrepriseVo} from 'src/app/controller/model/Entreprise.model';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import {ExportService} from 'src/app/controller/service/Export.service';

@Component({
    selector: 'app-technicien-list-chercheur',
    templateUrl: './technicien-list-chercheur.component.html',
    styleUrls: ['./technicien-list-chercheur.component.css']
})
export class TechnicienListChercheurComponent implements OnInit {
    // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Technicien';
    yesOrNoCredentialsNonExpired: any[] = [];
    yesOrNoEnabled: any[] = [];
    yesOrNoAccountNonExpired: any[] = [];
    yesOrNoAccountNonLocked: any[] = [];
    yesOrNoPasswordChanged: any[] = [];
    entreprises: Array<EntrepriseVo>;


    constructor(private datePipe: DatePipe, private technicienService: TechnicienService, private messageService: MessageService, private confirmationService: ConfirmationService, private roleService: RoleService, private router: Router, private authService: AuthService, private exportService: ExportService
        , private entrepriseService: EntrepriseService
    ) {
    }

    get techniciens(): Array<TechnicienVo> {
        return this.technicienService.techniciens;
    }

    set techniciens(value: Array<TechnicienVo>) {
        this.technicienService.techniciens = value;
    }

    get technicienSelections(): Array<TechnicienVo> {
        return this.technicienService.technicienSelections;
    }

    set technicienSelections(value: Array<TechnicienVo>) {
        this.technicienService.technicienSelections = value;
    }

    get selectedTechnicien(): TechnicienVo {
        return this.technicienService.selectedTechnicien;
    }

    set selectedTechnicien(value: TechnicienVo) {
        this.technicienService.selectedTechnicien = value;
    }

    get createTechnicienDialog(): boolean {
        return this.technicienService.createTechnicienDialog;
    }

    set createTechnicienDialog(value: boolean) {
        this.technicienService.createTechnicienDialog = value;
    }

    get editTechnicienDialog(): boolean {
        return this.technicienService.editTechnicienDialog;
    }

    set editTechnicienDialog(value: boolean) {
        this.technicienService.editTechnicienDialog = value;
    }

    get viewTechnicienDialog(): boolean {
        return this.technicienService.viewTechnicienDialog;
    }

    set viewTechnicienDialog(value: boolean) {
        this.technicienService.viewTechnicienDialog = value;
    }

    get searchTechnicien(): TechnicienVo {
        return this.technicienService.searchTechnicien;
    }

    // getters and setters

    set searchTechnicien(value: TechnicienVo) {
        this.technicienService.searchTechnicien = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }

    ngOnInit(): void {
        this.loadTechniciens();
        this.initExport();
        this.initCol();
        this.loadEntreprise();
        this.yesOrNoCredentialsNonExpired = [{label: 'CredentialsNonExpired', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this.yesOrNoEnabled = [{label: 'Enabled', value: null}, {label: 'Oui', value: 1}, {label: 'Non', value: 0}];
        this.yesOrNoAccountNonExpired = [{label: 'AccountNonExpired', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this.yesOrNoAccountNonLocked = [{label: 'AccountNonLocked', value: null}, {
            label: 'Oui',
            value: 1
        }, {label: 'Non', value: 0}];
        this.yesOrNoPasswordChanged = [{label: 'PasswordChanged', value: null}, {label: 'Oui', value: 1}, {
            label: 'Non',
            value: 0
        }];
    }

    // methods
    public async loadTechniciens() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Technicien', 'list');
        isPermistted ? this.technicienService.findAll().subscribe(techniciens => this.techniciens = techniciens, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public searchRequest() {
        this.technicienService.findByCriteria(this.searchTechnicien).subscribe(techniciens => {

            this.techniciens = techniciens;
            // this.searchTechnicien = new TechnicienVo();
        }, error => console.log(error));
    }

    public async editTechnicien(technicien: TechnicienVo) {
        const isPermistted = await this.roleService.isPermitted('Technicien', 'edit');
        if (isPermistted) {
            this.technicienService.findByIdWithAssociatedList(technicien).subscribe(res => {
                this.selectedTechnicien = res;
                this.selectedTechnicien.createdAt = new Date(technicien.createdAt);
                this.selectedTechnicien.updatedAt = new Date(technicien.updatedAt);

                this.editTechnicienDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
        }

    }

    public async viewTechnicien(technicien: TechnicienVo) {
        const isPermistted = await this.roleService.isPermitted('Technicien', 'view');
        if (isPermistted) {
            this.technicienService.findByIdWithAssociatedList(technicien).subscribe(res => {
                this.selectedTechnicien = res;
                this.selectedTechnicien.createdAt = new Date(technicien.createdAt);
                this.selectedTechnicien.updatedAt = new Date(technicien.updatedAt);

                this.viewTechnicienDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async openCreateTechnicien(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedTechnicien = new TechnicienVo();
            this.createTechnicienDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async deleteTechnicien(technicien: TechnicienVo) {
        const isPermistted = await this.roleService.isPermitted('Technicien', 'delete');
        if (isPermistted) {
            this.confirmationService.confirm({
                message: 'Voulez-vous supprimer cet élément (Technicien) ?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.technicienService.delete(technicien).subscribe(status => {
                        if (status > 0) {
                            const position = this.techniciens.indexOf(technicien);
                            position > -1 ? this.techniciens.splice(position, 1) : false;
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'Technicien Supprimé',
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

    public async loadEntreprise() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Technicien', 'list');
        isPermistted ? this.entrepriseService.findAll().subscribe(entreprises => this.entreprises = entreprises, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async duplicateTechnicien(technicien: TechnicienVo) {

        this.technicienService.findByIdWithAssociatedList(technicien).subscribe(
            res => {
                this.initDuplicateTechnicien(res);
                this.selectedTechnicien = res;
                this.selectedTechnicien.id = null;


                this.createTechnicienDialog = true;

            });

    }

    initDuplicateTechnicien(res: TechnicienVo) {


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
        this.exportData = this.techniciens.map(e => {
            return {
                'Cell phone': e.cellPhone,
                'Email': e.email,
                'Email attachement': e.emailAttachement,
                'Entreprise': e.entrepriseVo?.libelle,
                'Identifiant': e.identifiant,
                'Mot passe': e.motPasse,
                'Adresse ont': e.adresseOnt,
                'Credentials non expired': e.credentialsNonExpired ? 'Vrai' : 'Faux',
                'Enabled': e.enabled ? 'Vrai' : 'Faux',
                'Account non expired': e.accountNonExpired ? 'Vrai' : 'Faux',
                'Account non locked': e.accountNonLocked ? 'Vrai' : 'Faux',
                'Password changed': e.passwordChanged ? 'Vrai' : 'Faux',
                'Created at': this.datePipe.transform(e.createdAt, 'dd/MM/yyyy hh:mm'),
                'Updated at': this.datePipe.transform(e.updatedAt, 'dd/MM/yyyy hh:mm'),
                'Username': e.username,
                'Password': e.password,
                'Prenom': e.prenom,
                'Nom': e.nom,
            }
        });

        this.criteriaData = [{
            'Cell phone': this.searchTechnicien.cellPhone ? this.searchTechnicien.cellPhone : environment.emptyForExport,
            'Email': this.searchTechnicien.email ? this.searchTechnicien.email : environment.emptyForExport,
            'Email attachement': this.searchTechnicien.emailAttachement ? this.searchTechnicien.emailAttachement : environment.emptyForExport,
            'Entreprise': this.searchTechnicien.entrepriseVo?.libelle ? this.searchTechnicien.entrepriseVo?.libelle : environment.emptyForExport,
            'Identifiant': this.searchTechnicien.identifiant ? this.searchTechnicien.identifiant : environment.emptyForExport,
            'Mot passe': this.searchTechnicien.motPasse ? this.searchTechnicien.motPasse : environment.emptyForExport,
            'Adresse ont': this.searchTechnicien.adresseOnt ? this.searchTechnicien.adresseOnt : environment.emptyForExport,
            'Credentials non expired': this.searchTechnicien.credentialsNonExpired ? (this.searchTechnicien.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
            'Enabled': this.searchTechnicien.enabled ? (this.searchTechnicien.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
            'Account non expired': this.searchTechnicien.accountNonExpired ? (this.searchTechnicien.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
            'Account non locked': this.searchTechnicien.accountNonLocked ? (this.searchTechnicien.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
            'Password changed': this.searchTechnicien.passwordChanged ? (this.searchTechnicien.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport,
            'Created at Min': this.searchTechnicien.createdAtMin ? this.datePipe.transform(this.searchTechnicien.createdAtMin, this.dateFormat) : environment.emptyForExport,
            'Created at Max': this.searchTechnicien.createdAtMax ? this.datePipe.transform(this.searchTechnicien.createdAtMax, this.dateFormat) : environment.emptyForExport,
            'Updated at Min': this.searchTechnicien.updatedAtMin ? this.datePipe.transform(this.searchTechnicien.updatedAtMin, this.dateFormat) : environment.emptyForExport,
            'Updated at Max': this.searchTechnicien.updatedAtMax ? this.datePipe.transform(this.searchTechnicien.updatedAtMax, this.dateFormat) : environment.emptyForExport,
            'Username': this.searchTechnicien.username ? this.searchTechnicien.username : environment.emptyForExport,
            'Password': this.searchTechnicien.password ? this.searchTechnicien.password : environment.emptyForExport,
            'Prenom': this.searchTechnicien.prenom ? this.searchTechnicien.prenom : environment.emptyForExport,
            'Nom': this.searchTechnicien.nom ? this.searchTechnicien.nom : environment.emptyForExport,
        }];

    }

    private initCol() {
        this.cols = [
            {field: 'cellPhone', header: 'Cell phone'},
            {field: 'email', header: 'Email'},
            {field: 'emailAttachement', header: 'Email attachement'},
            {field: 'entreprise?.libelle', header: 'Entreprise'},
            {field: 'identifiant', header: 'Identifiant'},
            {field: 'motPasse', header: 'Mot passe'},
            {field: 'credentialsNonExpired', header: 'Credentials non expired'},
            {field: 'enabled', header: 'Enabled'},
            {field: 'accountNonExpired', header: 'Account non expired'},
            {field: 'accountNonLocked', header: 'Account non locked'},
            {field: 'passwordChanged', header: 'Password changed'},
            {field: 'createdAt', header: 'Created at'},
            {field: 'updatedAt', header: 'Updated at'},
            {field: 'username', header: 'Username'},
            {field: 'password', header: 'Password'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'nom', header: 'Nom'},
        ];
    }


}
