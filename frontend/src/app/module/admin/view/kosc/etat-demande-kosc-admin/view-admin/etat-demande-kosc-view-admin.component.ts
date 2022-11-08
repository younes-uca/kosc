import {Component, OnInit} from '@angular/core';
import {EtatDemandeKoscService} from 'src/app/controller/service/EtatDemandeKosc.service';
import {EtatDemandeKoscVo} from 'src/app/controller/model/EtatDemandeKosc.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-etat-demande-kosc-view-admin',
    templateUrl: './etat-demande-kosc-view-admin.component.html',
    styleUrls: ['./etat-demande-kosc-view-admin.component.css']
})
export class EtatDemandeKoscViewAdminComponent implements OnInit {


    constructor(private datePipe: DatePipe, private etatDemandeKoscService: EtatDemandeKoscService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

    get etatDemandeKoscs(): Array<EtatDemandeKoscVo> {
        return this.etatDemandeKoscService.etatDemandeKoscs;
    }

    set etatDemandeKoscs(value: Array<EtatDemandeKoscVo>) {
        this.etatDemandeKoscService.etatDemandeKoscs = value;
    }

// getters and setters

    get selectedEtatDemandeKosc(): EtatDemandeKoscVo {
        return this.etatDemandeKoscService.selectedEtatDemandeKosc;
    }

    set selectedEtatDemandeKosc(value: EtatDemandeKoscVo) {
        this.etatDemandeKoscService.selectedEtatDemandeKosc = value;
    }

    get viewEtatDemandeKoscDialog(): boolean {
        return this.etatDemandeKoscService.viewEtatDemandeKoscDialog;

    }

    set viewEtatDemandeKoscDialog(value: boolean) {
        this.etatDemandeKoscService.viewEtatDemandeKoscDialog = value;
    }

    get dateFormat() {
        return environment.dateFormatView;
    }

    get dateFormatColumn() {
        return environment.dateFormatList;
    }

// methods
    ngOnInit(): void {
    }

    hideViewDialog() {
        this.viewEtatDemandeKoscDialog = false;
    }
}
