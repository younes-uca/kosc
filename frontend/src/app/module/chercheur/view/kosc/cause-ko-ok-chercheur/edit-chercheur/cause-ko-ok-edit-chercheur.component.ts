import {Component, OnInit} from '@angular/core';
import {CauseKoOkService} from 'src/app/controller/service/CauseKoOk.service';
import {CauseKoOkVo} from 'src/app/controller/model/CauseKoOk.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-cause-ko-ok-edit-chercheur',
    templateUrl: './cause-ko-ok-edit-chercheur.component.html',
    styleUrls: ['./cause-ko-ok-edit-chercheur.component.css']
})
export class CauseKoOkEditChercheurComponent implements OnInit {

    constructor(private datePipe: DatePipe, private causeKoOkService: CauseKoOkService
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

    _validCauseKoOkCode = true;

    get validCauseKoOkCode(): boolean {
        return this._validCauseKoOkCode;
    }

    set validCauseKoOkCode(value: boolean) {
        this._validCauseKoOkCode = value;
    }

    _validCauseKoOkLibelle = true;

    get validCauseKoOkLibelle(): boolean {
        return this._validCauseKoOkLibelle;
    }


//openPopup
// methods

    set validCauseKoOkLibelle(value: boolean) {
        this._validCauseKoOkLibelle = value;
    }

// getters and setters

    get causeKoOks(): Array<CauseKoOkVo> {
        return this.causeKoOkService.causeKoOks;
    }

    set causeKoOks(value: Array<CauseKoOkVo>) {
        this.causeKoOkService.causeKoOks = value;
    }

    get selectedCauseKoOk(): CauseKoOkVo {
        return this.causeKoOkService.selectedCauseKoOk;
    }

    set selectedCauseKoOk(value: CauseKoOkVo) {
        this.causeKoOkService.selectedCauseKoOk = value;
    }

    get editCauseKoOkDialog(): boolean {
        return this.causeKoOkService.editCauseKoOkDialog;

    }

    set editCauseKoOkDialog(value: boolean) {
        this.causeKoOkService.editCauseKoOkDialog = value;
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
        this.causeKoOkService.edit().subscribe(causeKoOk => {
            const myIndex = this.causeKoOks.findIndex(e => e.id === this.selectedCauseKoOk.id);
            this.causeKoOks[myIndex] = causeKoOk;
            this.editCauseKoOkDialog = false;
            this.submitted = false;
            this.selectedCauseKoOk = new CauseKoOkVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editCauseKoOkDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validCauseKoOkCode = value;
        this.validCauseKoOkLibelle = value;
    }

//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateCauseKoOkCode();
        this.validateCauseKoOkLibelle();

    }

    private validateCauseKoOkCode() {
        if (this.stringUtilService.isEmpty(this.selectedCauseKoOk.code)) {
            this.errorMessages.push('Code non valide');
            this.validCauseKoOkCode = false;
        } else {
            this.validCauseKoOkCode = true;
        }
    }

    private validateCauseKoOkLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedCauseKoOk.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCauseKoOkLibelle = false;
        } else {
            this.validCauseKoOkLibelle = true;
        }
    }

}
