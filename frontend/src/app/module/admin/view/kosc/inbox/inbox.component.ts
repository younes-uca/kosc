import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {OrdreKoscVo} from "../../../../../controller/model/OrdreKosc.model";
import {OrdreKoscService} from "../../../../../controller/service/OrdreKosc.service";
import {isNullOrUndefined} from "util";
import {RoleService} from "../../../../../controller/service/role.service";
import {EtatDemandeKoscService} from "../../../../../controller/service/EtatDemandeKosc.service";
import {EtatDemandeKoscVo} from "../../../../../controller/model/EtatDemandeKosc.model";
import {DepartementService} from "../../../../../controller/service/Departement.service";
import {TechnicienService} from "../../../../../controller/service/Technicien.service";
import {TechnicienVo} from "../../../../../controller/model/Technicien.model";
import {DepartementVo} from "../../../../../controller/model/Departement.model";

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
    departements: Array<DepartementVo>;
    techniciens: Array<TechnicienVo>;
    etatDemandeKoscs: Array<EtatDemandeKoscVo>;
    cols: any[] = [];
    items: MenuItem[];
    findByCriteriaShow = false;
    home: MenuItem;

    constructor(private ordreKoscService: OrdreKoscService
        , private roleService: RoleService
        , private etatDemandeKoscService: EtatDemandeKoscService
        , private messageService: MessageService
        , private departementService: DepartementService
        , private technicienService: TechnicienService
    ) {
    }

    ngOnInit(): void {

        this.loadEtatDemandeKoscIncluding(['planification']);
        this.loadDepartement();
        this.loadTechnicien();

        // this.loadOrdreKoscs();
        this.items = [
            {label: 'Inbox', routerLink: '/app/admin/kosc/inbox/list'},

        ];

        this.home = {icon: 'pi pi-home', routerLink: '/'};
        this.searchRequest();

    }


    displayEmail = false;

    async showEmail(ordreKosc: OrdreKoscVo) {
        this.selectedOrdreKosc = ordreKosc;
        this.displayEmail = true;

    }

    isToRefusEmpty(ordreKoscVo: OrdreKoscVo) {
        if (ordreKoscVo.toRefus != null) {
            return true;
        } else {
            return false;
        }
    }


    public async loadEtatDemandeKoscIncluding(etatNonDesire: Array<String>) {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.etatDemandeKoscService.findAll().subscribe(etatDemandeKoscs => {
                this.etatDemandeKoscs = etatDemandeKoscs;
                this.searchOrdreKosc.etatDemandeKoscVos = this.etatDemandeKoscs.filter(e => etatNonDesire.indexOf(e.code) != -1);
                // console.log( this.searchOrdreKosc.etatDemandeKoscVos);
            }, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public searchRequest() {
        console.log(" this.searchOrdreKosc :" + this.searchOrdreKosc.etatDemandeKoscVos);
        this.ordreKoscService.findByCriteria(this.searchOrdreKosc).subscribe(ordreKoscs => {
            this.ordreKoscs = ordreKoscs;
            this.ordreKoscs.forEach( e => {
                console.log(e.emailObjet);
            })

        }, error => console.log(error));
    }


    public async loadDepartement() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.departementService.findAll().subscribe(departements => this.departements = departements, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadTechnicien() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        isPermistted ? this.technicienService.findAll().subscribe(techniciens => this.techniciens = techniciens, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

    }

    public async loadOrdreKoscs() {
        // await this.roleService.findAll();
        // const isPermistted = await this.roleService.isPermitted('OrdreKosc', 'list');
        // isPermistted ?
        this.ordreKoscService.findAll().subscribe(ordreKoscs => {
                this.ordreKoscs = ordreKoscs;
                this.ordreKoscs = this.ordreKoscs.filter(e => e.toRefus != null);
            },
            error => console.log(error));
        // : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
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

    get searchOrdreKosc(): OrdreKoscVo {
        return this.ordreKoscService.searchOrdreKosc;
    }

    set searchOrdreKosc(value: OrdreKoscVo) {
        this.ordreKoscService.searchOrdreKosc = value;
    }

}
