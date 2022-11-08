import {Component, OnInit} from '@angular/core';
import {RaisonArretTravailService} from 'src/app/controller/service/RaisonArretTravail.service';
import {RaisonArretTravailVo} from 'src/app/controller/model/RaisonArretTravail.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-raison-arret-travail-edit-admin',
    templateUrl: './raison-arret-travail-edit-admin.component.html',
    styleUrls: ['./raison-arret-travail-edit-admin.component.css']
})
export class RaisonArretTravailEditAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private raisonArretTravailService: RaisonArretTravailService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
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

    _validRaisonArretTravailLibelle = true;

    get validRaisonArretTravailLibelle(): boolean {
        return this._validRaisonArretTravailLibelle;
    }

    set validRaisonArretTravailLibelle(value: boolean) {
        this._validRaisonArretTravailLibelle = value;
    }

    _validRaisonArretTravailCode = true;

    get validRaisonArretTravailCode(): boolean {
        return this._validRaisonArretTravailCode;
    }


//openPopup
// methods

    set validRaisonArretTravailCode(value: boolean) {
        this._validRaisonArretTravailCode = value;
    }

// getters and setters

    get raisonArretTravails(): Array<RaisonArretTravailVo> {
        return this.raisonArretTravailService.raisonArretTravails;
    }

    set raisonArretTravails(value: Array<RaisonArretTravailVo>) {
        this.raisonArretTravailService.raisonArretTravails = value;
    }

    get selectedRaisonArretTravail(): RaisonArretTravailVo {
        return this.raisonArretTravailService.selectedRaisonArretTravail;
    }

    set selectedRaisonArretTravail(value: RaisonArretTravailVo) {
        this.raisonArretTravailService.selectedRaisonArretTravail = value;
    }

    get editRaisonArretTravailDialog(): boolean {
        return this.raisonArretTravailService.editRaisonArretTravailDialog;

    }

    set editRaisonArretTravailDialog(value: boolean) {
        this.raisonArretTravailService.editRaisonArretTravailDialog = value;
    }


    get dateFormat() {
        return environment.dateFormatEdit;
    }

    get dateFormatColumn() {
        return environment.dateFormatEdit;
    }

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
        this.raisonArretTravailService.edit().subscribe(raisonArretTravail => {
            const myIndex = this.raisonArretTravails.findIndex(e => e.id === this.selectedRaisonArretTravail.id);
            this.raisonArretTravails[myIndex] = raisonArretTravail;
            this.editRaisonArretTravailDialog = false;
            this.submitted = false;
            this.selectedRaisonArretTravail = new RaisonArretTravailVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editRaisonArretTravailDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validRaisonArretTravailLibelle = value;
        this.validRaisonArretTravailCode = value;
    }

//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateRaisonArretTravailLibelle();
        this.validateRaisonArretTravailCode();

    }

    private validateRaisonArretTravailLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedRaisonArretTravail.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validRaisonArretTravailLibelle = false;
        } else {
            this.validRaisonArretTravailLibelle = true;
        }
    }

    private validateRaisonArretTravailCode() {
        if (this.stringUtilService.isEmpty(this.selectedRaisonArretTravail.code)) {
            this.errorMessages.push('Code non valide');
            this.validRaisonArretTravailCode = false;
        } else {
            this.validRaisonArretTravailCode = true;
        }
    }

}
