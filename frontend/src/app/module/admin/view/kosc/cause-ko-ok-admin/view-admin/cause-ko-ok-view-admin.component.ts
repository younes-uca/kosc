import {Component, OnInit} from '@angular/core';
import {CauseKoOkService} from 'src/app/controller/service/CauseKoOk.service';
import {CauseKoOkVo} from 'src/app/controller/model/CauseKoOk.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-cause-ko-ok-view-admin',
    templateUrl: './cause-ko-ok-view-admin.component.html',
    styleUrls: ['./cause-ko-ok-view-admin.component.css']
})
export class CauseKoOkViewAdminComponent implements OnInit {


    constructor(private datePipe: DatePipe, private causeKoOkService: CauseKoOkService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

    get causeKoOks(): Array<CauseKoOkVo> {
        return this.causeKoOkService.causeKoOks;
    }

    set causeKoOks(value: Array<CauseKoOkVo>) {
        this.causeKoOkService.causeKoOks = value;
    }

// getters and setters

    get selectedCauseKoOk(): CauseKoOkVo {
        return this.causeKoOkService.selectedCauseKoOk;
    }

    set selectedCauseKoOk(value: CauseKoOkVo) {
        this.causeKoOkService.selectedCauseKoOk = value;
    }

    get viewCauseKoOkDialog(): boolean {
        return this.causeKoOkService.viewCauseKoOkDialog;

    }

    set viewCauseKoOkDialog(value: boolean) {
        this.causeKoOkService.viewCauseKoOkDialog = value;
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
        this.viewCauseKoOkDialog = false;
    }
}
