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
import {TechnicienVo} from 'src/app/controller/model/Technicien.model';
import {TechnicienService} from 'src/app/controller/service/Technicien.service';
import {TemplateEmailReplanificationVo} from 'src/app/controller/model/TemplateEmailReplanification.model';
import {TemplateEmailReplanificationService} from 'src/app/controller/service/TemplateEmailReplanification.service';
import {TemplateSuiviVo} from 'src/app/controller/model/TemplateSuivi.model';
import {TemplateSuiviService} from 'src/app/controller/service/TemplateSuivi.service';
import {OperatorVo} from 'src/app/controller/model/Operator.model';
import {OperatorService} from 'src/app/controller/service/Operator.service';
import {DepartementVo} from 'src/app/controller/model/Departement.model';
import {DepartementService} from 'src/app/controller/service/Departement.service';
import {TemplateEmailClientInjoinableKoscVo} from 'src/app/controller/model/TemplateEmailClientInjoinableKosc.model';
import {
    TemplateEmailClientInjoinableKoscService
} from 'src/app/controller/service/TemplateEmailClientInjoinableKosc.service';
import {TemplateEmailClientInjoinableVo} from 'src/app/controller/model/TemplateEmailClientInjoinable.model';
import {TemplateEmailClientInjoinableService} from 'src/app/controller/service/TemplateEmailClientInjoinable.service';
import {TemplateEmailPlanificationVo} from 'src/app/controller/model/TemplateEmailPlanification.model';
import {TemplateEmailPlanificationService} from 'src/app/controller/service/TemplateEmailPlanification.service';
import {RegionVo} from "../../../../../../controller/model/Region.model";
import {RegionService} from "../../../../../../controller/service/Region.service";
import {
    DefaultTemplateConfigurationService
} from "../../../../../../controller/service/DefaultTemplateConfiguration.service";
import {DefaultTemplateConfigurationVo} from "../../../../../../controller/model/DefaultTemplateConfiguration.model";
import {AuthService} from "../../../../../../controller/service/Auth.service";
import {User} from "../../../../../../controller/model/User.model";
import {UserService} from "../../../../../../controller/service/user.service";

@Component({
    selector: 'app-emailing-edit-admin',
    templateUrl: './emailing-edit-admin.component.html',
    styleUrls: ['./emailing-edit-admin.component.css']
})
export class EmailingEditAdminComponent implements OnInit {


    // methods

    constructor(private datePipe: DatePipe, private ordreKoscService: OrdreKoscService
        , private stringUtilService: StringUtilService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
        , private regionService: RegionService
        , private templateEmailClotureService: TemplateEmailClotureService
        , private etatDemandeKoscService: EtatDemandeKoscService
        , private templateEmailClientInjoinableInjoinableService: TemplateEmailClientInjoinableService
        , private technicienService: TechnicienService
        , private templateEmailReplanificationService: TemplateEmailReplanificationService
        , private templateSuiviService: TemplateSuiviService
        , private operatorService: OperatorService
        , private departementService: DepartementService
        , private templateEmailClientInjoinableKoscService: TemplateEmailClientInjoinableKoscService
        , private templateEmailClientInjoinableService: TemplateEmailClientInjoinableService
        , private templateEmailPlanificationService: TemplateEmailPlanificationService
        , private defaultTemplateConfigurationService: DefaultTemplateConfigurationService
        , private userService: UserService
    ) {

    }

    showSpinner = false;
    blocked = false;
    indexEdit = 0;
    indexDemande = 0;
    indexClient = 0;
    indexManeo = 0;

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

    get searchOrdreKosc(): OrdreKoscVo {
        return this.ordreKoscService.searchOrdreKosc;
    }

    set searchordreKosc(value: OrdreKoscVo) {
        this.ordreKoscService.searchOrdreKosc = value;
    }

    get ordreKoscs(): Array<OrdreKoscVo> {
        return this.ordreKoscService.ordreKoscsSuiviRdv;
    }

    set ordreKoscs(value: Array<OrdreKoscVo>) {
        this.ordreKoscService.ordreKoscsSuiviRdv = value;
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


    get dateFormat() {
        return environment.dateFormatEdit;
    }

    get dateFormatColumn() {
        return environment.dateFormatEdit;
    }

    get selectedUser(): User[] {
        return this.userService.selectedUsers;
    }

    set selectedUser(value: User[]) {
        this.userService.selectedUsers = value;
    }

    get users(): Array<User> {
        return this.userService.users;
    }

    set users(value: Array<User>) {
        this.userService.users = value;
    }


    ngOnInit(): void {

        // this.selectedUser = new User[];
        // this.userService.findAll().subscribe((data) => this.users = data);

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
        this.ordreKoscService.edit().subscribe(ordreKosc => {
            const myIndex = this.ordreKoscs.findIndex(e => e.id === this.selectedOrdreKosc.id);
            this.ordreKoscs[myIndex] = ordreKosc;
            // this.ordreKoscService.deleteIfEtatNotIn(this.searchOrdreKosc.etatDemandeKoscVos, this.ordreKoscs, ordreKosc);
            this.editOrdreKoscDialog = false;
            this.submitted = false;
            this.selectedOrdreKosc = new OrdreKoscVo();

        }, error => {
            console.log(error);
        });

    }


    hideEditDialog() {
        this.editOrdreKoscDialog = false;

    }

// validation methods
    private validateForm(): void {
        this.errorMessages = new Array<string>();
        //this.validateOrdreKoscReferenceWorkOrder();

    }

    private deleteFromList(selectedOrdreKosc: OrdreKoscVo) {
        const position = this.ordreKoscs.findIndex(e => e.id == selectedOrdreKosc.id);
        position > -1 ? this.ordreKoscs.splice(position, 1) : false;
    }
    public formatDdMmYy(date: Date): string {
        return date != null ? this.datePipe.transform(date, 'd/M/yyyy') : '';
    }

    public formatHhMm(date: Date): string {
        return date != null ? this.datePipe.transform(date, 'hh:mm') : '';
    }
}
