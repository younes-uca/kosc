import {Component, OnInit} from '@angular/core';
import {OrdreKoscService} from 'src/app/controller/service/OrdreKosc.service';
import {OrdreKoscVo} from 'src/app/controller/model/OrdreKosc.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {TechnicienService} from 'src/app/controller/service/Technicien.service';
import {OperatorVo} from 'src/app/controller/model/Operator.model';
import {OperatorService} from 'src/app/controller/service/Operator.service';
import {DepartementVo} from 'src/app/controller/model/Departement.model';
import {DepartementService} from 'src/app/controller/service/Departement.service';
import {EtatDemandeKoscService} from "../../../../../../controller/service/EtatDemandeKosc.service";
import {EtatDemandeKoscVo} from "../../../../../../controller/model/EtatDemandeKosc.model";
import * as moment from "moment/moment";
import {DefaultTemplateConfigurationVo} from "../../../../../../controller/model/DefaultTemplateConfiguration.model";
import {
    DefaultTemplateConfigurationService
} from "../../../../../../controller/service/DefaultTemplateConfiguration.service";
import {AuthService} from "../../../../../../controller/service/Auth.service";
import {CauseKoOkVo} from "../../../../../../controller/model/CauseKoOk.model";
import {CauseKoOkService} from "../../../../../../controller/service/CauseKoOk.service";

@Component({
    selector: 'app-ordre-kosc-suivi-historique-edit-admin',
    templateUrl: './ordre-kosc-suivi-historique-edit-admin.component.html',
    styleUrls: ['./ordre-kosc-suivi-historique-edit-admin.component.css']
})
export class OrdreKoscSuiviHistoriqueEditAdminComponent implements OnInit {

    private _errorMessages = new Array<string>();
    private _validOrdreKoscCodeDecharge = true;
    private _validOrdreKoscMontantDevis = true;
    private _validOrdreKoscEtatDemandeKosc = true;
    private _validOrdreKoscDateCri = true;
    _validOrdreKoscObjetCri = true;
    _validOrdreKoscCorpsCri = true;
    _validOrdreKoscFromCri = true;
    submitted = false;
    showSpinner = false;
    blocked = false;
    showCauseKo = false;
    _validOrdreKoscReferenceWorkOrder = true;
    _validOperatorReference = true;
    _validOperatorLibelle = true;
    _validDepartementLibelle = true;
    _validDepartementCode = true;
    _validDepartementRegion = true;
    _validTemplateEmailPlanificationLibelle = true;
    _validOrdreKoscToCri = true;
    _validTechnicienIdentifiant = true;

    constructor(private datePipe: DatePipe, private ordreKoscService: OrdreKoscService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private etatDemandeKoscService: EtatDemandeKoscService
        , private technicienService: TechnicienService
        , private operatorService: OperatorService
        , private departementService: DepartementService
        , private defaultTemplateConfigurationService: DefaultTemplateConfigurationService
        , private causeKoOkService: CauseKoOkService) {

    }

    public changeEtatKoscOrdre() {
        let etat = this.selectedOrdreKosc.etatDemandeKoscVo;
        if (etat != null && etat.code == 'ok') {
            this.genereCodeDecharge();
            this.selectedOrdreKosc.causeKoOkVo = null;
            this.showCauseKo = false;
        } else if (etat != null && etat.code == 'ko') {
            this.selectedOrdreKosc.codeDecharge = null;
            this.showCauseKo = true;
        }
    }

    private genereCodeDecharge() {
        let now = new Date();
        let codeDecharge = 'D' + moment(now).format('yyMMDD').slice(-6) + '-MN' + this.selectedOrdreKosc.id;
        this.selectedOrdreKosc.codeDecharge = codeDecharge;
    }

// methods
    ngOnInit(): void {
        this.loadCauseKoOks()

        this.selectedOperator = new OperatorVo();
        this.operatorService.findAll().subscribe((data) => this.operators = data);
        this.selectedDepartement = new DepartementVo();
        this.departementService.findAll().subscribe((data) => this.departements = data);
        this.selectedTechnicien = new TechnicienVo();
        this.technicienService.findAll().subscribe((data) => this.techniciens = data);

    }

    public async loadCauseKoOks() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CauseKoOk', 'list');
        isPermistted ? this.causeKoOkService.findAll().subscribe(causeKoOks => this.causeKoOks = causeKoOks, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }

    public edit() {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
            this.editOrdreKoscDialog = false;
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        console.log(this.selectedOrdreKosc.datePriseRdv)
        this.ordreKoscService.edit().subscribe(ordreKosc => {
            console.log('date backend :' + ordreKosc.datePriseRdv)
            const myIndex = this.ordreKoscs.findIndex(e => e.id === this.selectedOrdreKosc.id);
            this.ordreKoscs[myIndex] = ordreKosc;
            this.ordreKoscService.deleteIfEtatNotIn(this.searchOrdreKosc.etatDemandeKoscVos, this.ordreKoscs, ordreKosc);
            this.updateListe();
            this.editOrdreKoscDialog = false;
            this.submitted = false;
            this.selectedOrdreKosc = new OrdreKoscVo();

        }, error => {
            console.log(error);
        });

    }

    private deleteFromList(selectedOrdreKosc: OrdreKoscVo) {
        const position = this.ordreKoscs.indexOf(selectedOrdreKosc);
        position > -1 ? this.ordreKoscs.splice(position, 1) : false;
    }

//openPopup
    public async openCreateDepartement(departement: string) {
        const isPermistted = await this.roleService.isPermitted('Departement', 'edit');
        if (isPermistted) {
            this.selectedDepartement = new DepartementVo();
            this.createDepartementDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateTechnicien(technicien: string) {
        const isPermistted = await this.roleService.isPermitted('Technicien', 'edit');
        if (isPermistted) {
            this.selectedTechnicien = new TechnicienVo();
            this.createTechnicienDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    public async openCreateOperator(operator: string) {
        const isPermistted = await this.roleService.isPermitted('Operator', 'edit');
        if (isPermistted) {
            this.selectedOperator = new OperatorVo();
            this.createOperatorDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    hideEditDialog() {
        this.editOrdreKoscDialog = false;
        this.setValidation(true);
    }
    private updateListe() {
        this.ordreKoscs = this.ordreKoscs.filter(e => e.codeDecharge != null);
        console.log("after update :" + this.ordreKoscs);
    }

    sendMailCri() {
        this.validateFormCri();
        if (this.errorMessages.length === 0) {
            this.showSpinner = true;
            this.blocked = true;

            this.ordreKoscService.sendMailCri().subscribe(data => {
                    this.deleteFromList(this.selectedOrdreKosc);

                    if (data.envoyeCri == true) {

                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Email envoyé avec succès'
                        });
                        this.editOrdreKoscDialog = false;
                    } else {
                        this.messageService.add({
                            severity: 'warn',
                            summary: 'Warning', detail: 'mise à jour avec succes et échec d\'envoi'
                        });

                    }
                    this.showSpinner = false;
                    this.blocked = false;
                }
            );
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }

    }



//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        //this.validateOrdreKoscReferenceWorkOrder();

    }
    private setValidation(value: boolean) {
        this.validOrdreKoscReferenceWorkOrder = value;
    }
    private validateOrdreKoscObjetCri() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.objetCri)) {
            this.errorMessages.push('Objet cri non valide');
            this.validOrdreKoscObjetCri = false;
        } else {
            this.validOrdreKoscObjetCri = true;
        }
    }

    private validateOrdreKoscCorpsCri() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.corpsCri)) {
            this.errorMessages.push('Corps cri non valide');
            this.validOrdreKoscCorpsCri = false;
        } else {
            this.validOrdreKoscCorpsCri = true;
        }
    }

    private validateOrdreKoscFromCri() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.fromCri)) {
            this.errorMessages.push('De cri non valide');
            this.validOrdreKoscFromCri = false;
        } else {
            this.validOrdreKoscFromCri = true;
        }
    }

    private validateOrdreKoscToCri() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.toCri)) {
            this.errorMessages.push('A cri non valide');
            this.validOrdreKoscToCri = false;
        } else {
            this.validOrdreKoscToCri = true;
        }
    }

    private validateOrdreKoscDateCri() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.dateCri)) {
            this.errorMessages.push('date cri non valide');
            this.validOrdreKoscDateCri = false;
        } else {
            this.validOrdreKoscDateCri = true;
        }
    }

    private validateOrdreKoscCodeDecharge() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.codeDecharge)) {
            this.errorMessages.push('code decharge non valide');
            this.validOrdreKoscCodeDecharge = false;
        } else {
            this.validOrdreKoscCodeDecharge = true;
        }
    }

    private validateOrdreKoscEtatDemandeKosc() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.etatDemandeKoscVo.libelle)) {
            this.errorMessages.push('etat demande non valide');
            this.validOrdreKoscEtatDemandeKosc = false;
        } else {
            this.validOrdreKoscEtatDemandeKosc = true;
        }
    }

    private validateOrdreKoscMontantDevis() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.montantDevis)) {
            this.errorMessages.push('montant devis non valide');
            this.validOrdreKoscMontantDevis = false;
        } else {
            this.validOrdreKoscMontantDevis = true;
        }
    }

    private validateFormCri(): void {
        this.errorMessages = new Array<string>();
        this.validateOrdreKoscEtatDemandeKosc();
        this.validateOrdreKoscMontantDevis();
        this.validateOrdreKoscCodeDecharge();
        this.validateOrdreKoscDateCri();
        this.validateOrdreKoscObjetCri();
        this.validateOrdreKoscCorpsCri();
        this.validateOrdreKoscFromCri();
        this.validateOrdreKoscToCri();

    }


    private validateOrdreKoscReferenceWorkOrder() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.referenceWorkOrder)) {
            this.errorMessages.push('Reference work order non valide');
            this.validOrdreKoscReferenceWorkOrder = false;
        } else {
            this.validOrdreKoscReferenceWorkOrder = true;
        }
    }

// getters and setters

    get searchOrdreKosc(): OrdreKoscVo {
        return this.ordreKoscService.searchOrdreKoscSuiviCdd;
    }

    set searchordreKosc(value: OrdreKoscVo) {
        this.ordreKoscService.searchOrdreKoscSuiviCdd = value;
    }

    get ordreKoscs(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscsSuiviCdd;
    }

    set ordreKoscs(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscs = value;
    }

    get selectedOrdreKosc(): OrdreKoscVo {
        return this.ordreKoscService.selectedOrdreKosc;
    }

    set selectedOrdreKosc(value: OrdreKoscVo) {
        this.ordreKoscService.selectedOrdreKosc = value;
    }

    get editOrdreKoscDialog(): boolean {
        return this.ordreKoscService.editOrdreKoscDialog;

    }

    set editOrdreKoscDialog(value: boolean) {
        this.ordreKoscService.editOrdreKoscDialog = value;
    }


    get selectedDepartement(): DepartementVo {
        return this.departementService.selectedDepartement;
    }

    set selectedDepartement(value: DepartementVo) {
        this.departementService.selectedDepartement = value;
    }

    get departements(): Array<DepartementVo> {
        return this.departementService.departements;
    }

    set departements(value: Array<DepartementVo>) {
        this.departementService.departements = value;
    }

    get createDepartementDialog(): boolean {
        return this.departementService.createDepartementDialog;
    }

    set createDepartementDialog(value: boolean) {
        this.departementService.createDepartementDialog = value;
    }

    get selectedEtatDemandeKosc(): EtatDemandeKoscVo {
        return this.etatDemandeKoscService.selectedEtatDemandeKosc;
    }

    get etatDemandeKoscs(): Array<EtatDemandeKoscVo> {
        let etatDemandeKoscs = this.etatDemandeKoscService.etatDemandeKoscs;
        etatDemandeKoscs = etatDemandeKoscs.filter(e => e.code == 'ok' || e.code == 'ko');
        return etatDemandeKoscs;
    }

    get selectedTechnicien(): TechnicienVo {
        return this.technicienService.selectedTechnicien;
    }

    set selectedTechnicien(value: TechnicienVo) {
        this.technicienService.selectedTechnicien = value;
    }

    get techniciens(): Array<TechnicienVo> {
        return this.technicienService.techniciens;
    }

    set techniciens(value: Array<TechnicienVo>) {
        this.technicienService.techniciens = value;
    }

    get createTechnicienDialog(): boolean {
        return this.technicienService.createTechnicienDialog;
    }

    set createTechnicienDialog(value: boolean) {
        this.technicienService.createTechnicienDialog = value;
    }

    get selectedOperator(): OperatorVo {
        return this.operatorService.selectedOperator;
    }

    set selectedOperator(value: OperatorVo) {
        this.operatorService.selectedOperator = value;
    }

    get operators(): Array<OperatorVo> {
        return this.operatorService.operators;
    }

    set operators(value: Array<OperatorVo>) {
        this.operatorService.operators = value;
    }

    get createOperatorDialog(): boolean {
        return this.operatorService.createOperatorDialog;
    }

    set createOperatorDialog(value: boolean) {
        this.operatorService.createOperatorDialog = value;
    }

    get errorMessages(): string[] {
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    get validOrdreKoscReferenceWorkOrder(): boolean {
        return this._validOrdreKoscReferenceWorkOrder;
    }

    set validOrdreKoscReferenceWorkOrder(value: boolean) {
        this._validOrdreKoscReferenceWorkOrder = value;
    }

    get validOperatorReference(): boolean {
        return this._validOperatorReference;
    }

    set validOperatorReference(value: boolean) {
        this._validOperatorReference = value;
    }

    get validOperatorLibelle(): boolean {
        return this._validOperatorLibelle;
    }

    set validOperatorLibelle(value: boolean) {
        this._validOperatorLibelle = value;
    }

    get validDepartementLibelle(): boolean {
        return this._validDepartementLibelle;
    }

    set validDepartementLibelle(value: boolean) {
        this._validDepartementLibelle = value;
    }

    get validDepartementCode(): boolean {
        return this._validDepartementCode;
    }

    set validDepartementCode(value: boolean) {
        this._validDepartementCode = value;
    }

    get validDepartementRegion(): boolean {
        return this._validDepartementRegion;
    }

    set validDepartementRegion(value: boolean) {
        this._validDepartementRegion = value;
    }

    get validTechnicienIdentifiant(): boolean {
        return this._validTechnicienIdentifiant;
    }

    set validTechnicienIdentifiant(value: boolean) {
        this._validTechnicienIdentifiant = value;
    }

    get dateFormat() {
        return environment.dateFormatEdit;
    }

    get dateFormatColumn() {
        return environment.dateFormatEdit;
    }


    get validOrdreKoscEtatDemandeKosc(): boolean {
        return this._validOrdreKoscEtatDemandeKosc;
    }

    set validOrdreKoscEtatDemandeKosc(value: boolean) {
        this._validOrdreKoscEtatDemandeKosc = value;
    }

    get validOrdreKoscCodeDecharge(): boolean {
        return this._validOrdreKoscCodeDecharge;
    }

    set validOrdreKoscCodeDecharge(value: boolean) {
        this._validOrdreKoscCodeDecharge = value;
    }

    get validOrdreKoscMontantDevis(): boolean {
        return this._validOrdreKoscMontantDevis;
    }

    set validOrdreKoscMontantDevis(value: boolean) {
        this._validOrdreKoscMontantDevis = value;
    }

    get validOrdreKoscObjetCri(): boolean {
        return this._validOrdreKoscObjetCri;
    }

    set validOrdreKoscObjetCri(value: boolean) {
        this._validOrdreKoscObjetCri = value;
    }

    get validOrdreKoscCorpsCri(): boolean {
        return this._validOrdreKoscCorpsCri;
    }

    set validOrdreKoscCorpsCri(value: boolean) {
        this._validOrdreKoscCorpsCri = value;
    }

    get validOrdreKoscFromCri(): boolean {
        return this._validOrdreKoscFromCri;
    }

    set validOrdreKoscFromCri(value: boolean) {
        this._validOrdreKoscFromCri = value;
    }

    get validOrdreKoscDateCri(): boolean {
        return this._validOrdreKoscDateCri;
    }

    set validOrdreKoscDateCri(value: boolean) {
        this._validOrdreKoscDateCri = value;
    }

    get validOrdreKoscToCri(): boolean {
        return this._validOrdreKoscToCri;
    }

    set validOrdreKoscToCri(value: boolean) {
        this._validOrdreKoscToCri = value;
    }

    get causeKoOks(): Array<CauseKoOkVo> {
        return this.causeKoOkService.causeKoOks;
    }

    set causeKoOks(value: Array<CauseKoOkVo>) {
        this.causeKoOkService.causeKoOks = value;
    }


}
