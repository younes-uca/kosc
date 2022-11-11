import {Component, OnInit} from '@angular/core';
import {JourFerieService} from 'src/app/controller/service/JourFerie.service';
import {JourFerieVo} from 'src/app/controller/model/JourFerie.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-jour-ferie-view-admin',
    templateUrl: './jour-ferie-view-admin.component.html',
    styleUrls: ['./jour-ferie-view-admin.component.css']
})
export class JourFerieViewAdminComponent implements OnInit {


    constructor(private datePipe: DatePipe, private jourFerieService: JourFerieService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router

    ) {
    }


// methods
    ngOnInit(): void {

    }

    hideViewDialog() {
        this.viewJourFerieDialog = false;
    }


    get jourFeries(): Array<JourFerieVo> {
        return this.jourFerieService.jourFeries;
    }

    set jourFeries(value: Array<JourFerieVo>) {
        this.jourFerieService.jourFeries = value;
    }

// getters and setters

    get selectedJourFerie(): JourFerieVo {
        return this.jourFerieService.selectedJourFerie;
    }

    set selectedJourFerie(value: JourFerieVo) {
        this.jourFerieService.selectedJourFerie = value;
    }

    get viewJourFerieDialog(): boolean {
        return this.jourFerieService.viewJourFerieDialog;

    }

    set viewJourFerieDialog(value: boolean) {
        this.jourFerieService.viewJourFerieDialog = value;
    }



    get dateFormat() {
        return environment.dateFormatView;
    }

    get dateFormatColumn() {
        return environment.dateFormatList;
    }

}
