import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {OrdreKoscVo} from "../../../../../controller/model/OrdreKosc.model";
import {OrdreKoscService} from "../../../../../controller/service/OrdreKosc.service";
import {isNullOrUndefined} from "util";

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

    cols: any[] = [];
    items: MenuItem[];
    findByCriteriaShow = false;
    home: MenuItem;

    constructor(private ordreKoscService: OrdreKoscService) {
    }

    ngOnInit(): void {

        this.loadOrdreKoscs();
        this.items = [
            {label: 'Inbox', routerLink: '/app/admin/kosc/inbox/list'},

        ];

        this.home = {icon: 'pi pi-home', routerLink: '/'};
    }


    displayEmail = false;

    async showEmail() {

        this.displayEmail = true;


    }
    isToRefusEmpty(ordreKoscVo: OrdreKoscVo) {
        if (ordreKoscVo.toRefus != null) {
            return true;
        } else {
            return false;
        }
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
}
