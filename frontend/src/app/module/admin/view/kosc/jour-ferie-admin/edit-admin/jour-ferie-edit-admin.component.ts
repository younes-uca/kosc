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
    selector: 'app-jour-ferie-edit-admin',
    templateUrl: './jour-ferie-edit-admin.component.html',
    styleUrls: ['./jour-ferie-edit-admin.component.css']
})
export class JourFerieEditAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private jourFerieService: JourFerieService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {

    }

    _submitted = false;
    _validJourFerieDateDebut = true;
    private _errorMessages = new Array<string>();
    _validJourFerieDateFin = true;

    // methods
    ngOnInit(): void {

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
        this.jourFerieService.edit().subscribe(jourFerie => {
            const myIndex = this.jourFeries.findIndex(e => e.id === this.selectedJourFerie.id);
            this.jourFeries[myIndex] = jourFerie;
            this.editJourFerieDialog = false;
            this.submitted = false;
            this.selectedJourFerie = new JourFerieVo();


        }, error => {
            console.log(error);
        });

    }

//openPopup


    hideEditDialog() {
        this.editJourFerieDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validJourFerieDateDebut = value;
        this.validJourFerieDateFin = value;
    }

//validation methods
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

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }


    get errorMessages(): string[] {
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    

    get validJourFerieDateDebut(): boolean {
        return this._validJourFerieDateDebut;
    }

    set validJourFerieDateDebut(value: boolean) {
        this._validJourFerieDateDebut = value;
    }


    get validJourFerieDateFin(): boolean {
        return this._validJourFerieDateFin;
    }

    set validJourFerieDateFin(value: boolean) {
        this._validJourFerieDateFin = value;
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

    get editJourFerieDialog(): boolean {
        return this.jourFerieService.editJourFerieDialog;

    }

    set editJourFerieDialog(value: boolean) {
        this.jourFerieService.editJourFerieDialog = value;
    }
    

    get dateFormat() {
        return environment.dateFormatEdit;
    }

    get dateFormatColumn() {
        return environment.dateFormatEdit;
    }

    
}
