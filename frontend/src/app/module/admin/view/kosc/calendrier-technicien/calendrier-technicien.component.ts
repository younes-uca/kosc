import {Component, Injectable, OnInit} from '@angular/core';
import {EventService} from "../../../../../demo/service/eventservice";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import {DepartementTechnicienService} from "../../../../../controller/service/DepartementTechnicien.service";
import {DepartementVo} from "../../../../../controller/model/Departement.model";
import {TechnicienVo} from "../../../../../controller/model/Technicien.model";
import {RoleService} from "../../../../../controller/service/role.service";
import {DatePipe} from "@angular/common";
import {DepartementTechnicienVo} from "../../../../../controller/model/DepartementTechnicien.model";
import {environment} from "../../../../../../environments/environment";
import {TechnicienService} from "../../../../../controller/service/Technicien.service";
import {DepartementService} from "../../../../../controller/service/Departement.service";
import {MessageService} from "primeng/api";
import tippy from "tippy.js";



@Component({
    selector: 'app-calendrier-technicien',
    templateUrl: './calendrier-technicien.component.html',
    styleUrls: ['./calendrier-technicien.component.scss']
})
export class CalendrierTechnicienComponent implements OnInit {

    deptTechEvents = [];
    arretTravailEvents = [];
    options: any;
    header: any;
    event: any;


    constructor(private eventService: EventService, private departementTechnicienService: DepartementTechnicienService,
                private roleService: RoleService, private datepipe: DatePipe, private technicienService: TechnicienService
        , private departementService: DepartementService, private messageService: MessageService) {
    }

    ngOnInit() {
        this.loadDepartementTechniciens();
        this.addEvents();


        this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            eventDidMount: this.handleEventHover.bind(this),
            initialView: 'dayGridMonth',
            timeZone: 'local',
            dateClick: this.handleDateClick.bind(this), // bind is important!
            // eventClick: this.handleEventClick.bind(this),
            // events: [
            //     { title: 'event 1', date: '2022-06-01' },
            //     { title: 'event 2', date: '2022-06-02' }
            // ]
            events: this.deptTechEvents,
            eventColor: '#547a3b',
            weekends: false,
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            eventTimeFormat: {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                meridiem: false
            }
        };


    }
    public async loadDepartementTechniciens() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DepartementTechnicien', 'list');
        isPermistted ? this.departementTechnicienService.findAll().subscribe(departementTechniciens => this.departementTechniciens = departementTechniciens, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    addEvents() {
        this.departementTechniciens.forEach(e => {
            this.event = {
                title: e.technicienVo.nom + ' ' + e.technicienVo.prenom,
                start: e.dateDebut,
                end: e.dateFin,
                // content: e.id,
                displayEventTime: true,
            };
            this.deptTechEvents.push(this.event);
            console.log(this.event);
        })
    }


    handleDateClick(arg) {
        // alert('date click! ' + arg.dateStr)
        this.openCreateDepartementTechnicien('dptTech');
    }

    handleEventClick() {
        this.viewDepartementTechnicien(this.selectedDepartementTechnicien);
        console.log('click on event works');
    }

    handleEventHover(info) {
        tippy(info.el, {
            content: info.event.title,
        })
    }

    public async openCreateDepartementTechnicien(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if (isPermistted) {
            this.selectedDepartementTechnicien = new DepartementTechnicienVo();
            this.createDepartementTechnicienDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    public async viewDepartementTechnicien(departementTechnicien: DepartementTechnicienVo) {
        const isPermistted = await this.roleService.isPermitted('DepartementTechnicien', 'view');
        if (isPermistted) {
            this.departementTechnicienService.findByIdWithAssociatedList(departementTechnicien).subscribe(res => {
                this.selectedDepartementTechnicien = res;
                this.selectedDepartementTechnicien.dateDebut = new Date(departementTechnicien.dateDebut);
                this.selectedDepartementTechnicien.dateFin = new Date(departementTechnicien.dateFin);

                this.viewDepartementTechnicienDialog = true;
            });
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }

    }

    get viewDepartementTechnicienDialog(): boolean {
        return this.departementTechnicienService.viewDepartementTechnicienDialog;
    }

    set viewDepartementTechnicienDialog(value: boolean) {
        this.departementTechnicienService.viewDepartementTechnicienDialog = value;
    }

    _submitted = false;
    private _errorMessages = new Array<string>();
    _validDepartementTechnicienTechnicien = true;
    _validDepartementTechnicienDepartement = true;
    _validDepartementTechnicienDateDebut = true;


    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }


    get errorMessages(): string[] {
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }


    get validDepartementTechnicienTechnicien(): boolean {
        return this._validDepartementTechnicienTechnicien;
    }

    set validDepartementTechnicienTechnicien(value: boolean) {
        this._validDepartementTechnicienTechnicien = value;
    }


    get validDepartementTechnicienDepartement(): boolean {
        return this._validDepartementTechnicienDepartement;
    }

    set validDepartementTechnicienDepartement(value: boolean) {
        this._validDepartementTechnicienDepartement = value;
    }


    get validDepartementTechnicienDateDebut(): boolean {
        return this._validDepartementTechnicienDateDebut;
    }

    set validDepartementTechnicienDateDebut(value: boolean) {
        this._validDepartementTechnicienDateDebut = value;
    }

    _validDepartementTechnicienDateFin = true;

    get validDepartementTechnicienDateFin(): boolean {
        return this._validDepartementTechnicienDateFin;
    }

    set validDepartementTechnicienDateFin(value: boolean) {
        this._validDepartementTechnicienDateFin = value;
    }



    get departementTechniciens(): Array<DepartementTechnicienVo> {
        return this.departementTechnicienService.departementTechniciens;
    }

    set departementTechniciens(value: Array<DepartementTechnicienVo>) {
        this.departementTechnicienService.departementTechniciens = value;
    }

    get selectedDepartementTechnicien(): DepartementTechnicienVo {
        return this.departementTechnicienService.selectedDepartementTechnicien;
    }

    set selectedDepartementTechnicien(value: DepartementTechnicienVo) {
        this.departementTechnicienService.selectedDepartementTechnicien = value;
    }

    get createDepartementTechnicienDialog(): boolean {
        return this.departementTechnicienService.createDepartementTechnicienDialog;

    }

    set createDepartementTechnicienDialog(value: boolean) {
        this.departementTechnicienService.createDepartementTechnicienDialog = value;
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

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }
}


