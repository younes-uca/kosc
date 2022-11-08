import {Component, OnInit} from '@angular/core';
import {SourceReplanificationService} from 'src/app/controller/service/SourceReplanification.service';
import {SourceReplanificationVo} from 'src/app/controller/model/SourceReplanification.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-source-replanification-edit-chercheur',
    templateUrl: './source-replanification-edit-chercheur.component.html',
    styleUrls: ['./source-replanification-edit-chercheur.component.css']
})
export class SourceReplanificationEditChercheurComponent implements OnInit {

    constructor(private datePipe: DatePipe, private sourceReplanificationService: SourceReplanificationService
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

    _validSourceReplanificationCode = true;

    get validSourceReplanificationCode(): boolean {
        return this._validSourceReplanificationCode;
    }

    set validSourceReplanificationCode(value: boolean) {
        this._validSourceReplanificationCode = value;
    }

    _validSourceReplanificationLibelle = true;

    get validSourceReplanificationLibelle(): boolean {
        return this._validSourceReplanificationLibelle;
    }


//openPopup
// methods

    set validSourceReplanificationLibelle(value: boolean) {
        this._validSourceReplanificationLibelle = value;
    }

// getters and setters

    get sourceReplanifications(): Array<SourceReplanificationVo> {
        return this.sourceReplanificationService.sourceReplanifications;
    }

    set sourceReplanifications(value: Array<SourceReplanificationVo>) {
        this.sourceReplanificationService.sourceReplanifications = value;
    }

    get selectedSourceReplanification(): SourceReplanificationVo {
        return this.sourceReplanificationService.selectedSourceReplanification;
    }

    set selectedSourceReplanification(value: SourceReplanificationVo) {
        this.sourceReplanificationService.selectedSourceReplanification = value;
    }

    get editSourceReplanificationDialog(): boolean {
        return this.sourceReplanificationService.editSourceReplanificationDialog;

    }

    set editSourceReplanificationDialog(value: boolean) {
        this.sourceReplanificationService.editSourceReplanificationDialog = value;
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
        this.sourceReplanificationService.edit().subscribe(sourceReplanification => {
            const myIndex = this.sourceReplanifications.findIndex(e => e.id === this.selectedSourceReplanification.id);
            this.sourceReplanifications[myIndex] = sourceReplanification;
            this.editSourceReplanificationDialog = false;
            this.submitted = false;
            this.selectedSourceReplanification = new SourceReplanificationVo();


        }, error => {
            console.log(error);
        });

    }

    hideEditDialog() {
        this.editSourceReplanificationDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validSourceReplanificationCode = value;
        this.validSourceReplanificationLibelle = value;
    }

//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateSourceReplanificationCode();
        this.validateSourceReplanificationLibelle();

    }

    private validateSourceReplanificationCode() {
        if (this.stringUtilService.isEmpty(this.selectedSourceReplanification.code)) {
            this.errorMessages.push('Code non valide');
            this.validSourceReplanificationCode = false;
        } else {
            this.validSourceReplanificationCode = true;
        }
    }

    private validateSourceReplanificationLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedSourceReplanification.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validSourceReplanificationLibelle = false;
        } else {
            this.validSourceReplanificationLibelle = true;
        }
    }

}
