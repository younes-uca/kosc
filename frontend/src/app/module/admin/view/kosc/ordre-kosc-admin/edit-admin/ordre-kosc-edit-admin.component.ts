import {Component, OnInit} from '@angular/core';
import {OrdreKoscService} from 'src/app/controller/service/OrdreKosc.service';
import {OrdreKoscVo} from 'src/app/controller/model/OrdreKosc.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MenuItem, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from 'src/app/controller/service/StringUtil.service';


import {TemplateEmailClotureVo} from 'src/app/controller/model/TemplateEmailCloture.model';
import {TemplateEmailClotureService} from 'src/app/controller/service/TemplateEmailCloture.service';
import {EtatDemandeKoscVo} from 'src/app/controller/model/EtatDemandeKosc.model';
import {EtatDemandeKoscService} from 'src/app/controller/service/EtatDemandeKosc.service';
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {TechnicienService} from 'src/app/controller/service/Technicien.service';
import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';
import {TemplateSuiviVo} from 'src/app/controller/model/TemplateSuivi.model';
import {TemplateSuiviService} from 'src/app/controller/service/TemplateSuivi.service';
import {OperatorVo} from 'src/app/controller/model/Operator.model';
import {OperatorService} from 'src/app/controller/service/Operator.service';
import {DepartementVo} from 'src/app/controller/model/Departement.model';
// import {DepartementService} from 'src/app/controller/service/Departement.service';
// import {TemplateEmailKoscVo} from 'src/app/controller/model/TemplateEmailKosc.model';
// import {TemplateEmailKoscService} from 'src/app/controller/service/TemplateEmailKosc.service';
// import {ClientVo} from 'src/app/controller/model/Client.model';
// import {ClientService} from 'src/app/controller/service/Client.service';
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {SourceReplanificationVo} from '../../../../../../controller/model/SourceReplanification.model';
import {SourceReplanificationService} from '../../../../../../controller/service/SourceReplanification.service';
import {DepartementService} from "../../../../../../controller/service/Departement.service";
import {CauseKoOkVo} from "../../../../../../controller/model/CauseKoOk.model";
import {CauseKoOkService} from "../../../../../../controller/service/CauseKoOk.service";
import {
    DefaultTemplateConfigurationService
} from "../../../../../../controller/service/DefaultTemplateConfiguration.service";
import {DefaultTemplateConfigurationVo} from "../../../../../../controller/model/DefaultTemplateConfiguration.model";
import {HttpErrorResponse, HttpEvent, HttpEventType} from "@angular/common/http";
import FileSaver from 'file-saver';

@Component({
    selector: 'app-ordre-kosc-edit-admin',
    templateUrl: './ordre-kosc-edit-admin.component.html',
    styleUrls: ['./ordre-kosc-edit-admin.component.css']
})
export class OrdreKoscEditAdminComponent implements OnInit {

    private causKoOks = ['client-injoignable', 'refus-client', 'mauvais-contact'];
    private etats = ['ko', 'initialisation', 'confirmation-client', 'planification'];

    filenames: string[] = [];
    fileStatus = {status: '', requestType: '', percent: 0};
    fileToUpload: File | null = null;
    fileName = '';
    showSpinner = false;
    blocked = false;

    constructor(private datePipe: DatePipe, private ordreKoscService: OrdreKoscService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private templateEmailClotureService: TemplateEmailClotureService
        , private etatDemandeKoscService: EtatDemandeKoscService
        , private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
        , private technicienService: TechnicienService
        , private templateEmailReplanificationService: TemplateEmailReplanificationService
        , private templateSuiviService: TemplateSuiviService
        , private operatorService: OperatorService
        , private sourceReplanificationService: SourceReplanificationService
        , private departementService: DepartementService
        , private causeKoOkService: CauseKoOkService
                // , private templateEmailKoscService: TemplateEmailKoscService
                // , private clientService: ClientService
        , private templateEmailPlanificationService: TemplateEmailPlanificationService
        , private defaultTemplateConfigurationService: DefaultTemplateConfigurationService
    ) {

    }


    onFileSelected(files: FileList) {
        this.fileToUpload = files.item(0);
        this.fileName = this.fileToUpload.name
        console.log(this.fileToUpload);
        this.ordreKoscService.uploadFile(this.fileToUpload).subscribe(
            response => console.log('Success! ', response),
            error => console.error('Error: ', error)
        );
    }


    onDownloadFile(fileName: string): void {
        this.ordreKoscService.download(fileName).subscribe(
            event => {
                console.log(event);
                this.resportProgress(event);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            }
        );
    }

    private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
        switch (httpEvent.type) {
            case HttpEventType.UploadProgress:
                this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
                break;
            case HttpEventType.DownloadProgress:
                this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
                break;
            case HttpEventType.ResponseHeader:
                console.log('Header returned', httpEvent);
                break;
            case HttpEventType.Response:
                if (httpEvent.body instanceof Array) {
                    this.fileStatus.status = 'done';
                    for (const filename of httpEvent.body) {
                        this.filenames.unshift(filename);
                        //this.fileName;
                    }
                } else {
                    FileSaver.saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!,
                        {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
                    // saveAs(new Blob([httpEvent.body!],
                    //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
                    //    httpEvent.headers.get('File-Name'));
                }
                this.fileStatus.status = 'done';
                break;
            default:
                console.log(httpEvent);
                break;

        }
    }

    private updateStatus(loaded: number, total: number, requestType: string): void {
        this.fileStatus.status = 'progress';
        this.fileStatus.requestType = requestType;
        this.fileStatus.percent = Math.round(100 * loaded / total);
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

    private _palinificationModel: MenuItem[];

    get palinificationModel(): MenuItem[] {
        return this._palinificationModel;
    }

    set palinificationModel(value: MenuItem[]) {
        this._palinificationModel = value;
    }

    private _problemeClientModel: MenuItem[];

    get problemeClientModel(): MenuItem[] {
        return this._problemeClientModel;
    }

    set problemeClientModel(value: MenuItem[]) {
        this._problemeClientModel = value;
    }

    get indexEdit(): number {
        return this.ordreKoscService.indexEdit;
    }

    set indexEdit(value: number) {
        this.ordreKoscService.indexEdit = value;
    }
    private _emailIndex = 0;

    get emailIndex(): number {
        return this._emailIndex;
    }

    set emailIndex(value: number) {
        this._emailIndex = value;
    }

    _validOrdreKoscReferenceWorkOrder = true;

    get validOrdreKoscReferenceWorkOrder(): boolean {
        return this._validOrdreKoscReferenceWorkOrder;
    }

    set validOrdreKoscReferenceWorkOrder(value: boolean) {
        this._validOrdreKoscReferenceWorkOrder = value;
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


    // public showObjectAndCorp(): void {
    //     if(this.selectedOrdreKosc.templateEmailClientInjoinableVo != null){
    //         this.selectedOrdreKosc.objetClient = eval(this.selectedOrdreKosc.templateEmailClientInjoinableVo.objet);
    //         this.selectedOrdreKosc.corpsClient = eval(this.selectedOrdreKosc.templateEmailClientInjoinableVo.corps);
    //     }
    // }

    set validOperatorLibelle(value: boolean) {
        this._validOperatorLibelle = value;
    }

    _validDepartementLibelle = true;

    get validDepartementLibelle(): boolean {
        return this._validDepartementLibelle;
    }

    set validDepartementLibelle(value: boolean) {
        this._validDepartementLibelle = value;
    }

    _validDepartementCode = true;

    get validDepartementCode(): boolean {
        return this._validDepartementCode;
    }

    set validDepartementCode(value: boolean) {
        this._validDepartementCode = value;
    }

    _validDepartementRegion = true;

    get validDepartementRegion(): boolean {
        return this._validDepartementRegion;
    }

    set validDepartementRegion(value: boolean) {
        this._validDepartementRegion = value;
    }

    _validTechnicienIdentifiant = true;

    get validTechnicienIdentifiant(): boolean {
        return this._validTechnicienIdentifiant;
    }

    set validTechnicienIdentifiant(value: boolean) {
        this._validTechnicienIdentifiant = value;
    }

    _validTemplateEmailClientInjoinableCode = true;

    get validTemplateEmailClientInjoinableCode(): boolean {
        return this._validTemplateEmailClientInjoinableCode;
    }

    set validTemplateEmailClientInjoinableCode(value: boolean) {
        this._validTemplateEmailClientInjoinableCode = value;
    }

    _validTemplateEmailClientInjoinableLibelle = true;

    get validTemplateEmailClientInjoinableLibelle(): boolean {
        return this._validTemplateEmailClientInjoinableLibelle;
    }

    set validTemplateEmailClientInjoinableLibelle(value: boolean) {
        this._validTemplateEmailClientInjoinableLibelle = value;
    }

    _validTemplateEmailKoscCode = true;

    get validTemplateEmailKoscCode(): boolean {
        return this._validTemplateEmailKoscCode;
    }

    set validTemplateEmailKoscCode(value: boolean) {
        this._validTemplateEmailKoscCode = value;
    }

    _validTemplateEmailKoscLibelle = true;

    get validTemplateEmailKoscLibelle(): boolean {
        return this._validTemplateEmailKoscLibelle;
    }

    set validTemplateEmailKoscLibelle(value: boolean) {
        this._validTemplateEmailKoscLibelle = value;
    }

    _validTemplateEmailPlanificationCode = true;

    // public async openCreateClient(client: string) {
    //     const isPermistted = await this.roleService.isPermitted('Client', 'edit');
    //     if (isPermistted) {
    //         this.selectedClient = new ClientVo();
    //         this.createClientDialog = true;
    //     } else {
    //         this.messageService.add({
    //             severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
    //         });
    //     }
    // }

    get validTemplateEmailPlanificationCode(): boolean {
        return this._validTemplateEmailPlanificationCode;
    }

    set validTemplateEmailPlanificationCode(value: boolean) {
        this._validTemplateEmailPlanificationCode = value;
    }

    _validTemplateEmailPlanificationLibelle = true;

    get validTemplateEmailPlanificationLibelle(): boolean {
        return this._validTemplateEmailPlanificationLibelle;
    }

    set validTemplateEmailPlanificationLibelle(value: boolean) {
        this._validTemplateEmailPlanificationLibelle = value;
    }

    // public async openCreateTemplateEmailKosc(templateEmailKosc: string) {
    //     const isPermistted = await this.roleService.isPermitted('TemplateEmailKosc', 'edit');
    //     if (isPermistted) {
    //         this.selectedTemplateEmailKosc = new TemplateEmailKoscVo();
    //         this.createTemplateEmailKoscDialog = true;
    //     } else {
    //         this.messageService.add({
    //             severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
    //         });
    //     }
    // }

    _validTemplateEmailReplanificationCode = true;

    get validTemplateEmailReplanificationCode(): boolean {
        return this._validTemplateEmailReplanificationCode;
    }

    set validTemplateEmailReplanificationCode(value: boolean) {
        this._validTemplateEmailReplanificationCode = value;
    }

    _validTemplateEmailReplanificationLibelle = true;

// methods

    get validTemplateEmailReplanificationLibelle(): boolean {
        return this._validTemplateEmailReplanificationLibelle;
    }

// getters and setters

    set validTemplateEmailReplanificationLibelle(value: boolean) {
        this._validTemplateEmailReplanificationLibelle = value;
    }

    _validTemplateEmailReportCode = true;

    get validTemplateEmailReportCode(): boolean {
        return this._validTemplateEmailReportCode;
    }

    set validTemplateEmailReportCode(value: boolean) {
        this._validTemplateEmailReportCode = value;
    }

    _validTemplateEmailReportLibelle = true;

    get validTemplateEmailReportLibelle(): boolean {
        return this._validTemplateEmailReportLibelle;
    }

    set validTemplateEmailReportLibelle(value: boolean) {
        this._validTemplateEmailReportLibelle = value;
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

    // get selectedClient(): ClientVo {
    //     return this.clientService.selectedClient;
    // }

    // set selectedClient(value: ClientVo) {
    //     this.clientService.selectedClient = value;
    // }
    //
    // get clients(): Array<ClientVo> {
    //     return this.clientService.clients;
    // }
    //
    // set clients(value: Array<ClientVo>) {
    //     this.clientService.clients = value;
    // }
    //
    // get createClientDialog(): boolean {
    //     return this.clientService.createClientDialog;
    // }
    //
    // set createClientDialog(value: boolean) {
    //     this.clientService.createClientDialog = value;
    // }

    set validEtatDemandeKoscLibelle(value: boolean) {
        this._validEtatDemandeKoscLibelle = value;
    }

    _validTemplateEmailClotureCode = true;

    get validTemplateEmailClotureCode(): boolean {
        return this._validTemplateEmailClotureCode;
    }

    set validTemplateEmailClotureCode(value: boolean) {
        this._validTemplateEmailClotureCode = value;
    }

    _validTemplateEmailClotureLibelle = true;

    get validTemplateEmailClotureLibelle(): boolean {
        return this._validTemplateEmailClotureLibelle;
    }

    set validTemplateEmailClotureLibelle(value: boolean) {
        this._validTemplateEmailClotureLibelle = value;
    }

    _validTemplateSuiviCode = true;

    get validTemplateSuiviCode(): boolean {
        return this._validTemplateSuiviCode;
    }

    set validTemplateSuiviCode(value: boolean) {
        this._validTemplateSuiviCode = value;
    }

    _validTemplateSuiviLibelle = true;

    get validTemplateSuiviLibelle(): boolean {
        return this._validTemplateSuiviLibelle;
    }

    set validTemplateSuiviLibelle(value: boolean) {
        this._validTemplateSuiviLibelle = value;
    }

    get ordreKoscs(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscs;
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

    get selectedTemplateEmailPlanification(): TemplateEmailPlanificationVo {
        return this.templateEmailPlanificationService.selectedTemplateEmailPlanification;
    }

    set selectedTemplateEmailPlanification(value: TemplateEmailPlanificationVo) {
        this.templateEmailPlanificationService.selectedTemplateEmailPlanification = value;
    }

    get templateEmailPlanifications(): Array<TemplateEmailPlanificationVo> {
        return this.templateEmailPlanificationService.templateEmailPlanifications;
    }

    set templateEmailPlanifications(value: Array<TemplateEmailPlanificationVo>) {
        this.templateEmailPlanificationService.templateEmailPlanifications = value;
    }

    get createTemplateEmailPlanificationDialog(): boolean {
        return this.templateEmailPlanificationService.createTemplateEmailPlanificationDialog;
    }

    set createTemplateEmailPlanificationDialog(value: boolean) {
        this.templateEmailPlanificationService.createTemplateEmailPlanificationDialog = value;
    }

    //
    get selectedTemplateEmailClientInjoinable(): TemplateEmailClientInjoinableVo {
        return this.templateEmailClientInjoinableService.selectedTemplateEmailClientInjoinable;
    }

    set selectedTemplateEmailClientInjoinable(value: TemplateEmailClientInjoinableVo) {
        this.templateEmailClientInjoinableService.selectedTemplateEmailClientInjoinable = value;
    }

    get templateEmailClientInjoinables(): Array<TemplateEmailClientInjoinableVo> {
        return this.templateEmailClientInjoinableService.templateEmailClientInjoinables;
    }

    set templateEmailClientInjoinables(value: Array<TemplateEmailClientInjoinableVo>) {
        this.templateEmailClientInjoinableService.templateEmailClientInjoinables = value;
    }

    get createTemplateEmailClientInjoinableDialog(): boolean {
        return this.templateEmailClientInjoinableService.createTemplateEmailClientInjoinableDialog;
    }

    // get selectedTemplateEmailKosc(): TemplateEmailKoscVo {
    //     return this.templateEmailKoscService.selectedTemplateEmailKosc;
    // }

    // set selectedTemplateEmailKosc(value: TemplateEmailKoscVo) {
    //     this.templateEmailKoscService.selectedTemplateEmailKosc = value;
    // }
    //
    // get templateEmailKoscs(): Array<TemplateEmailKoscVo> {
    //     return this.templateEmailKoscService.templateEmailKoscs;
    // }
    //
    // set templateEmailKoscs(value: Array<TemplateEmailKoscVo>) {
    //     this.templateEmailKoscService.templateEmailKoscs = value;
    // }
    //
    // get createTemplateEmailKoscDialog(): boolean {
    //     return this.templateEmailKoscService.createTemplateEmailKoscDialog;
    // }
    //
    // set createTemplateEmailKoscDialog(value: boolean) {
    //     this.templateEmailKoscService.createTemplateEmailKoscDialog = value;
    // }


    get searchOrdreKosc(): OrdreKoscVo {
        return this.ordreKoscService.searchOrdreKosc;
    }

    set searchordreKosc(value: OrdreKoscVo) {
        this.ordreKoscService.searchOrdreKosc = value;
    }

    set createTemplateEmailClientInjoinableDialog(value: boolean) {
        this.templateEmailClientInjoinableService.createTemplateEmailClientInjoinableDialog = value;
    }

    get selectedTemplateEmailCloture(): TemplateEmailClotureVo {
        return this.templateEmailClotureService.selectedTemplateEmailCloture;
    }

    set selectedTemplateEmailCloture(value: TemplateEmailClotureVo) {
        this.templateEmailClotureService.selectedTemplateEmailCloture = value;
    }

    get templateEmailClotures(): Array<TemplateEmailClotureVo> {
        return this.templateEmailClotureService.templateEmailClotures;
    }

    set templateEmailClotures(value: Array<TemplateEmailClotureVo>) {
        this.templateEmailClotureService.templateEmailClotures = value;
    }

    get createTemplateEmailClotureDialog(): boolean {
        return this.templateEmailClotureService.createTemplateEmailClotureDialog;
    }

    set createTemplateEmailClotureDialog(value: boolean) {
        this.templateEmailClotureService.createTemplateEmailClotureDialog = value;
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

    get selectedTemplateEmailReplanification(): TemplateEmailReplanificationVo {
        return this.templateEmailReplanificationService.selectedTemplateEmailReplanification;
    }

    set selectedTemplateEmailReplanification(value: TemplateEmailReplanificationVo) {
        this.templateEmailReplanificationService.selectedTemplateEmailReplanification = value;
    }

    get templateEmailReplanifications(): Array<TemplateEmailReplanificationVo> {
        return this.templateEmailReplanificationService.templateEmailReplanifications;
    }

    set templateEmailReplanifications(value: Array<TemplateEmailReplanificationVo>) {
        this.templateEmailReplanificationService.templateEmailReplanifications = value;
    }

    get createTemplateEmailReplanificationDialog(): boolean {
        return this.templateEmailReplanificationService.createTemplateEmailReplanificationDialog;
    }

    set createTemplateEmailReplanificationDialog(value: boolean) {
        this.templateEmailReplanificationService.createTemplateEmailReplanificationDialog = value;
    }

    get selectedEtatDemandeKosc(): EtatDemandeKoscVo {
        return this.etatDemandeKoscService.selectedEtatDemandeKosc;
    }

    set selectedEtatDemandeKosc(value: EtatDemandeKoscVo) {
        this.etatDemandeKoscService.selectedEtatDemandeKosc = value;
    }

    get etatDemandeKoscs(): Array<EtatDemandeKoscVo> {
        return this.etatDemandeKoscService.etatDemandeKoscs;
    }

    set etatDemandeKoscs(value: Array<EtatDemandeKoscVo>) {
        this.etatDemandeKoscService.etatDemandeKoscs = value;
    }

    get createEtatDemandeKoscDialog(): boolean {
        return this.etatDemandeKoscService.createEtatDemandeKoscDialog;
    }

    set createEtatDemandeKoscDialog(value: boolean) {
        this.etatDemandeKoscService.createEtatDemandeKoscDialog = value;
    }

    get selectedTemplateSuivi(): TemplateSuiviVo {
        return this.templateSuiviService.selectedTemplateSuivi;
    }

    set selectedTemplateSuivi(value: TemplateSuiviVo) {
        this.templateSuiviService.selectedTemplateSuivi = value;
    }

    get templateSuivis(): Array<TemplateSuiviVo> {
        return this.templateSuiviService.templateSuivis;
    }

    set templateSuivis(value: Array<TemplateSuiviVo>) {
        this.templateSuiviService.templateSuivis = value;
    }

    get createTemplateSuiviDialog(): boolean {
        return this.templateSuiviService.createTemplateSuiviDialog;
    }

    set createTemplateSuiviDialog(value: boolean) {
        this.templateSuiviService.createTemplateSuiviDialog = value;
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

    get selectedSourceReplanification(): SourceReplanificationVo {
        return this.sourceReplanificationService.selectedSourceReplanification;
    }

    set selectedSourceReplanification(value: SourceReplanificationVo) {
        this.sourceReplanificationService.selectedSourceReplanification = value;
    }

    get sourceReplanifications(): Array<SourceReplanificationVo> {
        return this.sourceReplanificationService.sourceReplanifications;
    }

    set sourceReplanifications(value: Array<SourceReplanificationVo>) {
        this.sourceReplanificationService.sourceReplanifications = value;
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

    get dateFormat() {
        return environment.dateFormatEdit;
    }

    get dateFormatColumn() {
        return environment.dateFormatRdv;
    }

    get selectedCauseKoOk(): CauseKoOkVo {
        return this.causeKoOkService.selectedCauseKoOk;
    }

    set selectedCauseKoOk(value: CauseKoOkVo) {
        this.causeKoOkService.selectedCauseKoOk = value;
    }

    get causeKoOks(): Array<CauseKoOkVo> {
        return this.causeKoOkService.causeKoOks;
    }

    set causeKoOks(value: Array<CauseKoOkVo>) {
        this.causeKoOkService.causeKoOks = value;
    }

    get selectedDefaultTemplateConfiguration(): DefaultTemplateConfigurationVo {

        return this.defaultTemplateConfigurationService.selectedDefaultTemplateConfiguration;
    }

    set selectedDefaultTemplateConfiguration(value: DefaultTemplateConfigurationVo) {
        this.defaultTemplateConfigurationService.selectedDefaultTemplateConfiguration = value;
    }

// methods
    ngOnInit(): void {


        this.selectedCauseKoOk = new CauseKoOkVo();
        this.defaultTemplateConfigurationService.findDefaultTemplateConfiguration().subscribe((data) =>
            this.selectedDefaultTemplateConfiguration = data,
        )

        this.causeKoOkService.findAll().subscribe((data) => this.causeKoOks = data);
        this.initPalinificationModel();
        this.initProblemeClientModel();
        this.initSources();
        this.selectedOperator = new OperatorVo();
        this.operatorService.findAll().subscribe((data) => this.operators = data);
        this.selectedDepartement = new DepartementVo();
        this.departementService.findAll().subscribe((data) => this.departements = data);
        this.selectedTechnicien = new TechnicienVo();
        this.technicienService.findAll().subscribe((data) => this.techniciens = data);
        // this.selectedClient = new ClientVo();
        // this.clientService.findAll().subscribe((data) => this.clients = data);
        this.selectedTemplateEmailClientInjoinable = new TemplateEmailClientInjoinableVo();
        this.templateEmailClientInjoinableService.findAll().subscribe((data) => this.templateEmailClientInjoinables = data);
        // this.selectedTemplateEmailKosc = new TemplateEmailKoscVo();
        // this.templateEmailKoscService.findAll().subscribe((data) => this.templateEmailKoscs = data);
        this.selectedTemplateEmailPlanification = new TemplateEmailPlanificationVo();
        this.templateEmailPlanificationService.findAll().subscribe((data) => this.templateEmailPlanifications = data);
        this.selectedTemplateEmailReplanification = new TemplateEmailReplanificationVo();
        this.templateEmailReplanificationService.findAll().subscribe((data) => this.templateEmailReplanifications = data);
        this.selectedEtatDemandeKosc = new EtatDemandeKoscVo();
        this.etatDemandeKoscService.findAll().subscribe((data) => this.etatDemandeKoscs = data);
        this.selectedTemplateEmailCloture = new TemplateEmailClotureVo();
        this.templateEmailClotureService.findAll().subscribe((data) => this.templateEmailClotures = data);
        this.selectedTemplateSuivi = new TemplateSuiviVo();
        this.templateSuiviService.findAll().subscribe((data) => this.templateSuivis = data);
    }

    public findEtatDemandeByCode(code: string) {
        let res = this.etatDemandeKoscService.findByCode(code, this.etatDemandeKoscs);
        // console.log(' ha l code  ' + code + ' ha res ' + res.code);
        return res;
    }

    public findByEtatDemandeCause(cause: string) {
        return this.causeKoOkService.findByCause(cause, this.causeKoOks);

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
                detail: 'Merci de corrig?? les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.ordreKoscService.edit().subscribe(ordreKosc => {
            const myIndex = this.ordreKoscs.findIndex(e => e.id === this.selectedOrdreKosc.id);
            this.ordreKoscs[myIndex] = ordreKosc;
            this.ordreKoscService.deleteIfEtatNotIn(this.searchOrdreKosc.etatDemandeKoscVos, this.ordreKoscs, ordreKosc);
            this.editOrdreKoscDialog = false;
            this.submitted = false;
            this.selectedOrdreKosc = new OrdreKoscVo();


        }, error => {
            console.log(error);
        });

    }



    initPalinificationModel(): void {
        this.palinificationModel = [
            {label: 'ConfirmationClient', icon: 'pi pi-file', command: () => this.changeEtat(this.etats[2])},
            {label: 'Mail Planification', icon: 'pi pi-file-excel', command: () => this.changeEtat(this.etats[3])},
        ];
    }


    private changeEtat(myEtat: string) {
        this.selectedOrdreKosc.etatDemandeKoscVo = this.findEtatDemandeByCode(myEtat);
        if (myEtat === this.etats[2]) {
            this.indexEdit = 1;
            this.emailIndex = 0;
            this.selectedOrdreKosc.fromConfirmationClient = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toConfirmationClient = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetConfirmationClient = eval(this.selectedDefaultTemplateConfiguration.templateEmailConfirmationClientVo.objet);
            this.selectedOrdreKosc.corpsConfirmationClient = eval(this.selectedDefaultTemplateConfiguration.templateEmailConfirmationClientVo.corps);

        } else if (myEtat === this.etats[3]) {
            this.indexEdit = 1;
            this.emailIndex = 1;
            this.selectedOrdreKosc.fromPlanification = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toPlanification = this.selectedDefaultTemplateConfiguration.emailKosc;
            this.selectedOrdreKosc.objetPlanification = eval(this.selectedDefaultTemplateConfiguration.templateEmailPlanificationVo.objet);
            this.selectedOrdreKosc.corpsPlanification = eval(this.selectedDefaultTemplateConfiguration.templateEmailPlanificationVo.corps);
        }
    }

    private initProblemeClientModel() {
        this.problemeClientModel = [
            {
                label: 'Client injoinable',
                icon: 'pi pi-file',
                command: () => this.selectTab(this.etats[0], this.causKoOks[0])
            },
            {
                label: 'Refus Client',
                icon: 'pi pi-file',
                command: () => this.selectTab(this.etats[0], this.causKoOks[1])
            },
            {
                label: 'Mauvais contact',
                icon: 'pi pi-file-excel',
                command: () => this.selectTab(this.etats[0], this.causKoOks[2])
            },
        ];
    }

    private selectTab(myEtat: string, myCause: string) {

        this.selectedOrdreKosc.etatDemandeKoscVo = this.findEtatDemandeByCode(myEtat);
        this.selectedOrdreKosc.causeKoOkVo = this.findByEtatDemandeCause(myCause);


        if (myCause === this.causKoOks[0]) {
            this.indexEdit = 1;
            this.emailIndex = 3;
            this.selectedOrdreKosc.fromClientInjoinable = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toClientInjoinable = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetClientInjoinable = eval(this.selectedDefaultTemplateConfiguration.templateEmailClientInjoinableVo.objet);
            this.selectedOrdreKosc.corpsClientInjoinable = eval(this.selectedDefaultTemplateConfiguration.templateEmailClientInjoinableVo.corps);

            this.selectedOrdreKosc.fromClientInjoinableKosc = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toClientInjoinableKosc = this.selectedDefaultTemplateConfiguration.emailKosc;
            this.selectedOrdreKosc.objetClientInjoinableKosc = eval(this.selectedDefaultTemplateConfiguration.templateEmailClientInjoinableKoscVo.objet);
            this.selectedOrdreKosc.corpsClientInjoinableKosc = eval(this.selectedDefaultTemplateConfiguration.templateEmailClientInjoinableKoscVo.corps);
        } else if (myCause === this.causKoOks[1]) {
            this.indexEdit = 1;
            this.emailIndex = 5;
            this.selectedOrdreKosc.fromRefus = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toRefus = this.selectedOrdreKosc.endCustumorContactEmail;
            this.selectedOrdreKosc.objetRefus = eval(this.selectedDefaultTemplateConfiguration.templateEmailRefusVo.objet);
            this.selectedOrdreKosc.corpsRefus = eval(this.selectedDefaultTemplateConfiguration.templateEmailRefusVo.corps);
        } else if (myCause === this.causKoOks[2]) {
            this.indexEdit = 1;
            this.emailIndex = 4;
            this.selectedOrdreKosc.fromMauvaisContact = this.selectedDefaultTemplateConfiguration.emailManeo;
            this.selectedOrdreKosc.toMauvaisContact = this.selectedDefaultTemplateConfiguration.emailKosc;
            this.selectedOrdreKosc.objetMauvaisContact = eval(this.selectedDefaultTemplateConfiguration.templateEmailMauvaisContactVo.objet);
            this.selectedOrdreKosc.corpsMauvaisContact = eval(this.selectedDefaultTemplateConfiguration.templateEmailMauvaisContactVo.corps);
        }
    }

    sendConfirmationEmailToClient() {
        this.showSpinner = true;
        this.blocked = true;

        this.ordreKoscService.sendConfirmationEmailToClient().subscribe(data => {
                if (data.envoyeConfirmationClient == true) {

                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Email envoy?? avec succ??s'
                    });
                    this.editOrdreKoscDialog = false;
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreurs', detail: '??chec d\'envoi'
                    });

                }
                this.showSpinner = false;
                this.blocked = false;
            }
        );

    }


    sendMailPlanificationEmail() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendMailPlanificationEmail().subscribe(data => {
                if (data.envoyePlanification == true) {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Email envoy?? avec succ??s'
                    });
                    this.editOrdreKoscDialog = false;
                } else {
                    this.messageService.add({
                            severity: 'error',
                            summary: 'Erreurs', detail: '??chec d\'envoi'
                        }
                    );
                }
                this.showSpinner = false;
                this.blocked = false;
            }
        );
    }

    sendClientInjoignableEmailToClient() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendClientInjoignableEmailToClient().subscribe(data => {
                if (data.envoyeClientInjoinable == true) {

                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Email envoy?? avec succ??s'
                    });
                    this.editOrdreKoscDialog = false;
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreurs', detail: '??chec d\'envoi'
                    });

                }
                this.showSpinner = false;
                this.blocked = false;
            }
        );

    }

    sendClientInjoignableEmailToKosc() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendClientInjoignableEmailToKosc().subscribe(data => {
                if (data.envoyeClientInjoinableKosc == true) {

                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Email envoy?? avec succ??s'
                    });
                    this.editOrdreKoscDialog = false;
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreurs', detail: '??chec d\'envoi'
                    });

                }
                this.showSpinner = false;
                this.blocked = false;
            }
        );
    }

    sendMauvaisContactEmail() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendMauvaisContactEmail().subscribe(data => {
                if (data.envoyeMauvaisContact == true) {

                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Email envoy?? avec succ??s'
                    });
                    this.editOrdreKoscDialog = false;
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreurs', detail: '??chec d\'envoi'
                    });
                }
                this.showSpinner = false;
                this.blocked = false;
            }
        );
    }

    sendRefusClientEmail() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendRefusClientEmail().subscribe(data => {
                if (data.envoyeRefus == true) {

                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Email envoy?? avec succ??s'
                    });
                    this.editOrdreKoscDialog = false;
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreurs', detail: '??chec d\'envoi'
                    });

                }
                this.showSpinner = false;
                this.blocked = false;
            }
        );
    }



    sendMailReplanification() {
        this.showSpinner = true;
        this.blocked = true;
        this.ordreKoscService.sendMailReplanification().subscribe(data => {
                if (data.envoyeReplanification == true) {

                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Email envoy?? avec succ??s'
                    });
                    this.editOrdreKoscDialog = false;
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreurs', detail: '??chec d\'envoi'
                    });
                }
                this.showSpinner = false;
                this.blocked = false;
            }
        );
    }

//openPopup
    public async openCreateTemplateEmailPlanification(templateEmailPlanification: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailPlanification', 'edit');
        if (isPermistted) {
            this.selectedTemplateEmailPlanification = new TemplateEmailPlanificationVo();
            this.createTemplateEmailPlanificationDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
            });
        }
    }

    public async openCreateTemplateEmailClientInjoinable(templateEmailClientInjoinable: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailClientInjoinable', 'edit');
        if (isPermistted) {
            this.selectedTemplateEmailClientInjoinable = new TemplateEmailClientInjoinableVo();
            this.createTemplateEmailClientInjoinableDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
            });
        }
    }

    public async openCreateTemplateEmailCloture(templateEmailCloture: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailCloture', 'edit');
        if (isPermistted) {
            this.selectedTemplateEmailCloture = new TemplateEmailClotureVo();
            this.createTemplateEmailClotureDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
            });
        }
    }

    public async openCreateDepartement(departement: string) {
        const isPermistted = await this.roleService.isPermitted('Departement', 'edit');
        if (isPermistted) {
            this.selectedDepartement = new DepartementVo();
            this.createDepartementDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
            });
        }
    }

    public async openCreateTemplateEmailReplanification(templateEmailReplanification: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReplanification', 'edit');
        if (isPermistted) {
            this.selectedTemplateEmailReplanification = new TemplateEmailReplanificationVo();
            this.createTemplateEmailReplanificationDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
            });
        }
    }

    public async openCreateEtatDemandeKosc(etatDemandeKosc: string) {
        const isPermistted = await this.roleService.isPermitted('EtatDemandeKosc', 'edit');
        if (isPermistted) {
            this.selectedEtatDemandeKosc = new EtatDemandeKoscVo();
            this.createEtatDemandeKoscDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
            });
        }
    }

    public async openCreateTemplateSuivi(templateSuivi: string) {
        const isPermistted = await this.roleService.isPermitted('TemplateSuivi', 'edit');
        if (isPermistted) {
            this.selectedTemplateSuivi = new TemplateSuiviVo();
            this.createTemplateSuiviDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
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
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
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
                severity: 'error', summary: 'erreur', detail: 'probl??me de permission'
            });
        }
    }

    hideEditDialog() {
        this.editOrdreKoscDialog = false;
        this.setValidation(true);
    }

    private initSources() {
        let v1 = new SourceReplanificationVo();
        let v2 = new SourceReplanificationVo();
        v1.id = 1;
        v1.libelle = 'Client';
        v1.code = 'client';
        v2.id = 1;
        v2.libelle = 'Kosc';
        v2.code = 'kosc';
        this.sourceReplanifications.push(v1);
        this.sourceReplanifications.push(v2);
    }

    private setValidation(value: boolean) {
        this.validOrdreKoscReferenceWorkOrder = value;
    }


//validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateOrdreKoscReferenceWorkOrder();

    }

    private validateOrdreKoscReferenceWorkOrder() {
        if (this.stringUtilService.isEmpty(this.selectedOrdreKosc.referenceWorkOrder)) {
            this.errorMessages.push('Reference work order non valide');
            this.validOrdreKoscReferenceWorkOrder = false;
        } else {
            this.validOrdreKoscReferenceWorkOrder = true;
        }
    }


}
