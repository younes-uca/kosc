import {Component, OnInit} from '@angular/core';
import {DepartementService} from 'src/app/controller/service/Departement.service';
import {DepartementVo} from 'src/app/controller/model/Departement.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {RegionVo} from 'src/app/controller/model/Region.model';
import {RegionService} from 'src/app/controller/service/Region.service';

@Component({
    selector: 'app-departement-edit-chercheur',
    templateUrl: './departement-edit-chercheur.component.html',
    styleUrls: ['./departement-edit-chercheur.component.css']
})
export class DepartementEditChercheurComponent implements OnInit {

    constructor(private datePipe: DatePipe, private departementService: DepartementService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private regionService: RegionService
    ) {

    }

    _submitted = false;

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    private _errorMessages = new Array<string>();

    get errorMessages(): string[] {
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    _validDepartementLibelle = true;

    get validDepartementLibelle(): boolean {
        return this._validDepartementLibelle;
    }

    set validDepartementLibelle(value: boolean) {
        this._validDepartementLibelle = value;
    }

    _validDepartementCode = true;

    get validDepartementCode(): boolean {
        return this._validDepartementCode;
    }

    set validDepartementCode(value: boolean) {
        this._validDepartementCode = value;
    }

    _validDepartementRegion = true;

    get validDepartementRegion(): boolean {
        return this._validDepartementRegion;
    }

    set validDepartementRegion(value: boolean) {
        this._validDepartementRegion = value;
    }

    _validRegionLibelle = true;

// methods

    get validRegionLibelle(): boolean {
        return this._validRegionLibelle;
    }

// getters and setters

    set validRegionLibelle(value: boolean) {
        this._validRegionLibelle = value;
    }

    _validRegionCode = true;

    get validRegionCode(): boolean {
        return this._validRegionCode;
    }

    set validRegionCode(value: boolean) {
        this._validRegionCode = value;
    }

    get departements(): Array<DepartementVo> {
        return this.departementService.departements;
    }

    set departements(value: Array<DepartementVo>) {
        this.departementService.departements = value;
    }

    get selectedDepartement(): DepartementVo {
        return this.departementService.selectedDepartement;
    }

    set selectedDepartement(value: DepartementVo) {
        this.departementService.selectedDepartement = value;
    }

    get editDepartementDialog(): boolean {
        return this.departementService.editDepartementDialog;

    }

    set editDepartementDialog(value: boolean) {
        this.departementService.editDepartementDialog = value;
    }

    get selectedRegion(): RegionVo {
        return this.regionService.selectedRegion;
    }

    set selectedRegion(value: RegionVo) {
        this.regionService.selectedRegion = value;
    }

    get regions(): Array<RegionVo> {
        return this.regionService.regions;
    }

    set regions(value: Array<RegionVo>) {
        this.regionService.regions = value;
    }

    get createRegionDialog(): boolean {
        return this.regionService.createRegionDialog;
    }

    set createRegionDialog(value: boolean) {
        this.regionService.createRegionDialog = value;
    }

    get dateFormat() {
        return environment.dateFormatEdit;
    }

    get dateFormatColumn() {
        return environment.dateFormatEdit;
    }

// methods
    ngOnInit(): void {

        this.selectedRegion = new RegionVo();
        this.regionService.findAll().subscribe((data) => this.regions = data);
    }

    public edit() {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.departementService.edit().subscribe(departement => {
            const myIndex = this.departements.findIndex(e => e.id === this.selectedDepartement.id);
            this.departements[myIndex] = departement;
            this.editDepartementDialog = false;
            this.submitted = false;
            this.selectedDepartement = new DepartementVo();


        }, error => {
            console.log(error);
        });

    }

//openPopup
    public async openCreateRegion(region: string) {
        const isPermistted = await this.roleService.isPermitted('Region', 'edit');
        if (isPermistted) {
            this.selectedRegion = new RegionVo();
            this.createRegionDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    hideEditDialog() {
        this.editDepartementDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validDepartementLibelle = value;
        this.validDepartementCode = value;
        this.validDepartementRegion = value;
    }

//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateDepartementLibelle();
        this.validateDepartementCode();
        this.validateDepartementRegion();

    }

    private validateDepartementLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedDepartement.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validDepartementLibelle = false;
        } else {
            this.validDepartementLibelle = true;
        }
    }

    private validateDepartementCode() {
        if (this.stringUtilService.isEmpty(this.selectedDepartement.code)) {
            this.errorMessages.push('Code non valide');
            this.validDepartementCode = false;
        } else {
            this.validDepartementCode = true;
        }
    }

    private validateDepartementRegion() {
        if (this.stringUtilService.isEmpty(this.selectedDepartement.regionVo)) {
            this.errorMessages.push('Region non valide');
            this.validDepartementRegion = false;
        } else {
            this.validDepartementRegion = true;
        }
    }
}
