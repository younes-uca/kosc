import {Component, OnInit} from '@angular/core';
import {TemplateEmailCriService} from 'src/app/controller/service/TemplateEmailCri.service';
import {TemplateEmailCriVo} from 'src/app/controller/model/TemplateEmailCri.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-template-email-cri-view-chercheur',
    templateUrl: './template-email-cri-view-chercheur.component.html',
    styleUrls: ['./template-email-cri-view-chercheur.component.css']
})
export class TemplateEmailCriViewChercheurComponent implements OnInit {


    constructor(private datePipe: DatePipe, private templateEmailCriService: TemplateEmailCriService
        , private roleService: RoleService
        , private messageService: MessageService
        , private router: Router
    ) {
    }

    get templateEmailCris(): Array<TemplateEmailCriVo> {
        return this.templateEmailCriService.templateEmailCris;
    }

    set templateEmailCris(value: Array<TemplateEmailCriVo>) {
        this.templateEmailCriService.templateEmailCris = value;
    }

// getters and setters

    get selectedTemplateEmailCri(): TemplateEmailCriVo {
        return this.templateEmailCriService.selectedTemplateEmailCri;
    }

    set selectedTemplateEmailCri(value: TemplateEmailCriVo) {
        this.templateEmailCriService.selectedTemplateEmailCri = value;
    }

    get viewTemplateEmailCriDialog(): boolean {
        return this.templateEmailCriService.viewTemplateEmailCriDialog;

    }

    set viewTemplateEmailCriDialog(value: boolean) {
        this.templateEmailCriService.viewTemplateEmailCriDialog = value;
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
        this.viewTemplateEmailCriDialog = false;
    }
}
