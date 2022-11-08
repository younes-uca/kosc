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
    selector: 'app-raison-arret-travail-create-admin',
    templateUrl: './raison-arret-travail-create-admin.component.html',
    styleUrls: ['./raison-arret-travail-create-admin.component.css']
})
export class RaisonArretTravailCreateAdminComponent implements OnInit {

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

    set validRaisonArretTravailCode(value: boolean) {
        this._validRaisonArretTravailCode = value;
    }

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

    get createRaisonArretTravailDialog(): boolean {
        return this.raisonArretTravailService.createRaisonArretTravailDialog;

    }

    set createRaisonArretTravailDialog(value: boolean) {
        this.raisonArretTravailService.createRaisonArretTravailDialog = value;
    }


    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    ngOnInit(): void {

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
        this.raisonArretTravailService.save().subscribe(raisonArretTravail => {
            if (raisonArretTravail != null) {
                this.raisonArretTravails.push({...raisonArretTravail});
                this.createRaisonArretTravailDialog = false;
                this.submitted = false;
                this.selectedRaisonArretTravail = new RaisonArretTravailVo();

            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Raison arret travail existe déjà'
                });
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createRaisonArretTravailDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validRaisonArretTravailLibelle = value;
        this.validRaisonArretTravailCode = value;
    }

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
