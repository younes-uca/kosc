import {Component, OnInit} from '@angular/core';
import {SourceReplanificationService} from 'src/app/controller/service/SourceReplanification.service';
import {SourceReplanificationVo} from 'src/app/controller/model/SourceReplanification.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-source-replanification-view-chercheur',
    templateUrl: './source-replanification-view-chercheur.component.html',
    styleUrls: ['./source-replanification-view-chercheur.component.css']
})
export class SourceReplanificationViewChercheurComponent implements OnInit {


    constructor(private datePipe: DatePipe, private sourceReplanificationService: SourceReplanificationService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

    get sourceReplanifications(): Array<SourceReplanificationVo> {
        return this.sourceReplanificationService.sourceReplanifications;
    }

    set sourceReplanifications(value: Array<SourceReplanificationVo>) {
        this.sourceReplanificationService.sourceReplanifications = value;
    }

// getters and setters

    get selectedSourceReplanification(): SourceReplanificationVo {
        return this.sourceReplanificationService.selectedSourceReplanification;
    }

    set selectedSourceReplanification(value: SourceReplanificationVo) {
        this.sourceReplanificationService.selectedSourceReplanification = value;
    }

    get viewSourceReplanificationDialog(): boolean {
        return this.sourceReplanificationService.viewSourceReplanificationDialog;

    }

    set viewSourceReplanificationDialog(value: boolean) {
        this.sourceReplanificationService.viewSourceReplanificationDialog = value;
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
        this.viewSourceReplanificationDialog = false;
    }
}
