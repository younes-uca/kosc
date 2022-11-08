import {Component, OnInit} from '@angular/core';
import {EtatDemandeKoscService} from 'src/app/controller/service/EtatDemandeKosc.service';
import {EtatDemandeKoscVo} from 'src/app/controller/model/EtatDemandeKosc.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-etat-demande-kosc-edit-admin',
    templateUrl: './etat-demande-kosc-edit-admin.component.html',
    styleUrls: ['./etat-demande-kosc-edit-admin.component.css']
})
export class EtatDemandeKoscEditAdminComponent implements OnInit {

    constructor(private datePipe: DatePipe, private etatDemandeKoscService: EtatDemandeKoscService
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

    _validEtatDemandeKoscCode = true;

    get validEtatDemandeKoscCode(): boolean {
        return this._validEtatDemandeKoscCode;
    }

    set validEtatDemandeKoscCode(value: boolean) {
        this._validEtatDemandeKoscCode = value;
    }

    _validEtatDemandeKoscLibelle = true;

    get validEtatDemandeKoscLibelle(): boolean {
        return this._validEtatDemandeKoscLibelle;
    }


//openPopup
// methods

    set validEtatDemandeKoscLibelle(value: boolean) {
        this._validEtatDemandeKoscLibelle = value;
    }

// getters and setters

    private _validEtatDemandeKoscStyle = true;


    get validEtatDemandeKoscStyle(): boolean {
        return this._validEtatDemandeKoscStyle;
    }

    set validEtatDemandeKoscStyle(value: boolean) {
        this._validEtatDemandeKoscStyle = value;
    }

    get etatDemandeKoscs(): Array<EtatDemandeKoscVo> {
        return this.etatDemandeKoscService.etatDemandeKoscs;
    }

    set etatDemandeKoscs(value: Array<EtatDemandeKoscVo>) {
        this.etatDemandeKoscService.etatDemandeKoscs = value;
    }

    get selectedEtatDemandeKosc(): EtatDemandeKoscVo {
        return this.etatDemandeKoscService.selectedEtatDemandeKosc;
    }

    set selectedEtatDemandeKosc(value: EtatDemandeKoscVo) {
        this.etatDemandeKoscService.selectedEtatDemandeKosc = value;
    }

    get editEtatDemandeKoscDialog(): boolean {
        return this.etatDemandeKoscService.editEtatDemandeKoscDialog;

    }

    set editEtatDemandeKoscDialog(value: boolean) {
        this.etatDemandeKoscService.editEtatDemandeKoscDialog = value;
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
        this.etatDemandeKoscService.edit().subscribe(etatDemandeKosc => {
            const myIndex = this.etatDemandeKoscs.findIndex(e => e.id === this.selectedEtatDemandeKosc.id);
            this.etatDemandeKoscs[myIndex] = etatDemandeKosc;
            this.editEtatDemandeKoscDialog = false;
            this.submitted = false;
            this.selectedEtatDemandeKosc = new EtatDemandeKoscVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editEtatDemandeKoscDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validEtatDemandeKoscCode = value;
        this.validEtatDemandeKoscLibelle = value;
    }

//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateEtatDemandeKoscCode();
        this.validateEtatDemandeKoscLibelle();

    }

    private validateEtatDemandeKoscCode() {
        if (this.stringUtilService.isEmpty(this.selectedEtatDemandeKosc.code)) {
            this.errorMessages.push('Code non valide');
            this.validEtatDemandeKoscCode = false;
        } else {
            this.validEtatDemandeKoscCode = true;
        }
    }

    private validateEtatDemandeKoscLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedEtatDemandeKosc.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEtatDemandeKoscLibelle = false;
        } else {
            this.validEtatDemandeKoscLibelle = true;
        }
    }

}
