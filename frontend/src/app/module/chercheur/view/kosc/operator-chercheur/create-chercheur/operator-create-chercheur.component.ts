import {Component, OnInit} from '@angular/core';
import {OperatorService} from 'src/app/controller/service/Operator.service';
import {OperatorVo} from 'src/app/controller/model/Operator.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


@Component({
    selector: 'app-operator-create-chercheur',
    templateUrl: './operator-create-chercheur.component.html',
    styleUrls: ['./operator-create-chercheur.component.css']
})
export class OperatorCreateChercheurComponent implements OnInit {

    constructor(private datePipe: DatePipe, private operatorService: OperatorService
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

    _validOperatorReference = true;

    get validOperatorReference(): boolean {
        return this._validOperatorReference;
    }

    set validOperatorReference(value: boolean) {
        this._validOperatorReference = value;
    }

    _validOperatorLibelle = true;

    get validOperatorLibelle(): boolean {
        return this._validOperatorLibelle;
    }

    set validOperatorLibelle(value: boolean) {
        this._validOperatorLibelle = value;
    }

    get operators(): Array<OperatorVo> {
        return this.operatorService.operators;
    }

    set operators(value: Array<OperatorVo>) {
        this.operatorService.operators = value;
    }

    get selectedOperator(): OperatorVo {
        return this.operatorService.selectedOperator;
    }

    set selectedOperator(value: OperatorVo) {
        this.operatorService.selectedOperator = value;
    }

    get createOperatorDialog(): boolean {
        return this.operatorService.createOperatorDialog;

    }

    set createOperatorDialog(value: boolean) {
        this.operatorService.createOperatorDialog = value;
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
        this.operatorService.save().subscribe(operator => {
            if (operator != null) {
                this.operators.push({...operator});
                this.createOperatorDialog = false;
                this.submitted = false;
                this.selectedOperator = new OperatorVo();

            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Operator existe déjà'});
            }

        }, error => {
            console.log(error);
        });
    }

    hideCreateDialog() {
        this.createOperatorDialog = false;
        this.setValidation(true);
    }

    private setValidation(value: boolean) {
        this.validOperatorReference = value;
        this.validOperatorLibelle = value;
    }

    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateOperatorReference();
        this.validateOperatorLibelle();

    }

    private validateOperatorReference() {
        if (this.stringUtilService.isEmpty(this.selectedOperator.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validOperatorReference = false;
        } else {
            this.validOperatorReference = true;
        }
    }

    private validateOperatorLibelle() {
        if (this.stringUtilService.isEmpty(this.selectedOperator.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validOperatorLibelle = false;
        } else {
            this.validOperatorLibelle = true;
        }
    }


}
