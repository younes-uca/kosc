import {Component, OnInit} from '@angular/core';
import {TechnicienService} from 'src/app/controller/service/Technicien.service';
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {EntrepriseVo} from 'src/app/controller/model/Entreprise.model';
import {EntrepriseService} from 'src/app/controller/service/Entreprise.service';

@Component({
    selector: 'app-technicien-create-chercheur',
    templateUrl: './technicien-create-chercheur.component.html',
    styleUrls: ['./technicien-create-chercheur.component.css']
})
export class TechnicienCreateChercheurComponent implements OnInit {

    constructor(private datePipe: DatePipe, private technicienService: TechnicienService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private entrepriseService: EntrepriseService
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

    _validTechnicienCellPhone = true;

    get validTechnicienCellPhone(): boolean {
        return this._validTechnicienCellPhone;
    }

    set validTechnicienCellPhone(value: boolean) {
        this._validTechnicienCellPhone = value;
    }

    _validTechnicienEmail = true;

    get validTechnicienEmail(): boolean {
        return this._validTechnicienEmail;
    }

    set validTechnicienEmail(value: boolean) {
        this._validTechnicienEmail = value;
    }

    _validTechnicienIdentifiant = true;

    get validTechnicienIdentifiant(): boolean {
        return this._validTechnicienIdentifiant;
    }

    set validTechnicienIdentifiant(value: boolean) {
        this._validTechnicienIdentifiant = value;
    }

    _validEntrepriseLibelle = true;

    get validEntrepriseLibelle(): boolean {
        return this._validEntrepriseLibelle;
    }

    set validEntrepriseLibelle(value: boolean) {
        this._validEntrepriseLibelle = value;
    }

    _validEntrepriseCode = true;

    get validEntrepriseCode(): boolean {
        return this._validEntrepriseCode;
    }

    set validEntrepriseCode(value: boolean) {
        this._validEntrepriseCode = value;
    }

    get techniciens(): Array<TechnicienVo> {
        return this.technicienService.techniciens;
    }

    set techniciens(value: Array<TechnicienVo>) {
        this.technicienService.techniciens = value;
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

    get selectedEntreprise(): EntrepriseVo {
        return this.entrepriseService.selectedEntreprise;
    }

    set selectedEntreprise(value: EntrepriseVo) {
        this.entrepriseService.selectedEntreprise = value;
    }

    get entreprises(): Array<EntrepriseVo> {
        return this.entrepriseService.entreprises;
    }

    set entreprises(value: Array<EntrepriseVo>) {
        this.entrepriseService.entreprises = value;
    }

    get createEntrepriseDialog(): boolean {
        return this.entrepriseService.createEntrepriseDialog;
    }

    set createEntrepriseDialog(value: boolean) {
        this.entrepriseService.createEntrepriseDialog = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    ngOnInit(): void {

        this.selectedEntreprise = new EntrepriseVo();
        this.entrepriseService.findAll().subscribe((data) => this.entreprises = data);
    }

    public save() {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.technicienService.save().subscribe(technicien => {
            if (technicien != null) {
                this.techniciens.push({...technicien});
                this.createTechnicienDialog = false;
                this.submitted = false;
                this.selectedTechnicien = new TechnicienVo();

            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Technicien existe déjà'});
            }

        }, error => {
            console.log(error);
        });
    }

    public async openCreateEntreprise(entreprise: string) {
        const isPermistted = await this.roleService.isPermitted('Entreprise', 'add');
        if (isPermistted) {
            this.selectedEntreprise = new EntrepriseVo();
            this.createEntrepriseDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    hideCreateDialog() {
        this.createTechnicienDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validTechnicienCellPhone = value;
        this.validTechnicienEmail = value;
        this.validTechnicienIdentifiant = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateTechnicienCellPhone();
        this.validateTechnicienEmail();
        this.validateTechnicienIdentifiant();

    }

    private validateTechnicienCellPhone() {
        if (this.stringUtilService.isEmpty(this.selectedTechnicien.cellPhone)) {
            this.errorMessages.push('Cell phone non valide');
            this.validTechnicienCellPhone = false;
        } else {
            this.validTechnicienCellPhone = true;
        }
    }

    private validateTechnicienEmail() {
        if (this.stringUtilService.isEmpty(this.selectedTechnicien.email)) {
            this.errorMessages.push('Email non valide');
            this.validTechnicienEmail = false;
        } else {
            this.validTechnicienEmail = true;
        }
    }

    private validateTechnicienIdentifiant() {
        if (this.stringUtilService.isEmpty(this.selectedTechnicien.identifiant)) {
            this.errorMessages.push('Identifiant non valide');
            this.validTechnicienIdentifiant = false;
        } else {
            this.validTechnicienIdentifiant = true;
        }
    }

}
