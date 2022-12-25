import {Component, OnInit} from '@angular/core';
import {OrdreKoscService} from 'src/app/controller/service/OrdreKosc.service';
import {OrdreKoscVo} from 'src/app/controller/model/OrdreKosc.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';
@Component({
    selector: 'app-emailing-view-admin',
    templateUrl: './emailing-view-admin.component.html',
    styleUrls: ['./emailing-view-admin.component.css']
})
export class EmailingViewAdminComponent implements OnInit {


    constructor(private datePipe: DatePipe, private ordreKoscService: OrdreKoscService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

// methods
    ngOnInit(): void {

    }

    hideViewDialog() {
        this.viewOrdreKoscDialog = false;
    }


// getters and setters
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

    get viewOrdreKoscDialog(): boolean {
        return this.ordreKoscService.viewOrdreKoscDialog;

    }

    set viewOrdreKoscDialog(value: boolean) {
        this.ordreKoscService.viewOrdreKoscDialog = value;
    }



    get dateFormat() {
        return environment.dateFormatView;
    }

    get dateFormatColumn() {
        return environment.dateFormatList;
    }

}
