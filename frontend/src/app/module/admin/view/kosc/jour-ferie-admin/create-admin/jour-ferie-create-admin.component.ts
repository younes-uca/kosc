import {Component, OnInit} from '@angular/core';
import {JourFerieService} from 'src/app/controller/service/JourFerie.service';
import {JourFerieVo} from 'src/app/controller/model/JourFerie.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-jour-ferie-create-admin',
    templateUrl: './jour-ferie-create-admin.component.html',
    styleUrls: ['./jour-ferie-create-admin.component.css']
})
export class JourFerieCreateAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private jourFerieService: JourFerieService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router

    ) {

    }



    ngOnInit(): void {

    }

    public save() {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
            console.log(this.selectedJourFerie.dateDebut);
            console.log(this.selectedJourFerie.dateFin);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.jourFerieService.save().subscribe(jourFerie => {
            if (jourFerie != null) {
                this.jourFeries.push({...jourFerie});
                this.createJourFerieDialog = false;
                this.submitted = false;
                this.selectedJourFerie = new JourFerieVo();

            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Arret travail existe déjà'});
            }

        }, error => {
            console.log(error);
        });
    }


    hideCreateDialog() {
        this.createJourFerieDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validJourFerieDateDebut = value;
        this.validJourFerieDateFin = value;
        this.validJourFerieRaisonJourFerie = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateJourFerieDateDebut();
        this.validateJourFerieDateFin();

    }


    private validateJourFerieDateDebut() {
        if (this.stringUtilService.isEmpty(this.selectedJourFerie.dateDebut)) {
            this.errorMessages.push('Date debut non valide');
            this.validJourFerieDateDebut = false;
        } else {
            this.validJourFerieDateDebut = true;
        }
    }

    private validateJourFerieDateFin() {
        if (this.stringUtilService.isEmpty(this.selectedJourFerie.dateFin)) {
            this.errorMessages.push('Date fin non valide');
            this.validJourFerieDateFin = false;
        } else {
            this.validJourFerieDateFin = true;
        }
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


    _validJourFerieDateDebut = true;

    get validJourFerieDateDebut(): boolean {
        return this._validJourFerieDateDebut;
    }

    set validJourFerieDateDebut(value: boolean) {
        this._validJourFerieDateDebut = value;
    }

    _validJourFerieDateFin = true;

    get validJourFerieDateFin(): boolean {
        return this._validJourFerieDateFin;
    }

    set validJourFerieDateFin(value: boolean) {
        this._validJourFerieDateFin = value;
    }

    _validJourFerieRaisonJourFerie = true;

    get validJourFerieRaisonJourFerie(): boolean {
        return this._validJourFerieRaisonJourFerie;
    }

    set validJourFerieRaisonJourFerie(value: boolean) {
        this._validJourFerieRaisonJourFerie = value;
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

    _validRaisonJourFerieLibelle = true;

    get validRaisonJourFerieLibelle(): boolean {
        return this._validRaisonJourFerieLibelle;
    }

    set validRaisonJourFerieLibelle(value: boolean) {
        this._validRaisonJourFerieLibelle = value;
    }

    _validRaisonJourFerieCode = true;

    get validRaisonJourFerieCode(): boolean {
        return this._validRaisonJourFerieCode;
    }

    set validRaisonJourFerieCode(value: boolean) {
        this._validRaisonJourFerieCode = value;
    }

    get jourFeries(): Array<JourFerieVo> {
        return this.jourFerieService.jourFeries;
    }

    set jourFeries(value: Array<JourFerieVo>) {
        this.jourFerieService.jourFeries = value;
    }

    get selectedJourFerie(): JourFerieVo {
        return this.jourFerieService.selectedJourFerie;
    }

    set selectedJourFerie(value: JourFerieVo) {
        this.jourFerieService.selectedJourFerie = value;
    }

    get createJourFerieDialog(): boolean {
        return this.jourFerieService.createJourFerieDialog;

    }

    set createJourFerieDialog(value: boolean) {
        this.jourFerieService.createJourFerieDialog = value;
    }




    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

}
