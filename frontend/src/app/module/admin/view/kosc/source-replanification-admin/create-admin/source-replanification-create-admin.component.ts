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
    selector: 'app-source-replanification-create-admin',
    templateUrl: './source-replanification-create-admin.component.html',
    styleUrls: ['./source-replanification-create-admin.component.css']
})
export class SourceReplanificationCreateAdminComponent implements OnInit {

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

    set validSourceReplanificationLibelle(value: boolean) {
        this._validSourceReplanificationLibelle = value;
    }

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

    get createSourceReplanificationDialog(): boolean {
        return this.sourceReplanificationService.createSourceReplanificationDialog;

    }

    set createSourceReplanificationDialog(value: boolean) {
        this.sourceReplanificationService.createSourceReplanificationDialog = value;
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
        this.sourceReplanificationService.save().subscribe(sourceReplanification => {
            if (sourceReplanification != null) {
                this.sourceReplanifications.push({...sourceReplanification});
                this.createSourceReplanificationDialog = false;
                this.submitted = false;
                this.selectedSourceReplanification = new SourceReplanificationVo();

            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Erreurs',
                    detail: 'Source replanification existe déjà'
                });
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createSourceReplanificationDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validSourceReplanificationCode = value;
        this.validSourceReplanificationLibelle = value;
    }

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
