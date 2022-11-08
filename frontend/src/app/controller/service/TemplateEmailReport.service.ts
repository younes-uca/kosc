import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {TemplateEmailReportVo} from '../model/TemplateEmailReport.model';


@Injectable({
    providedIn: 'root'
})
export class TemplateEmailReportService {
    public editTemplateEmailReport$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/templateEmailReport/';
        });
    }

    private _templateEmailReports: Array<TemplateEmailReportVo>;

    get templateEmailReports(): Array<TemplateEmailReportVo> {
        if (this._templateEmailReports == null) {
            this._templateEmailReports = new Array<TemplateEmailReportVo>();
        }
        return this._templateEmailReports;
    }

    set templateEmailReports(value: Array<TemplateEmailReportVo>) {
        this._templateEmailReports = value;
    }

    private _selectedTemplateEmailReport: TemplateEmailReportVo;

    get selectedTemplateEmailReport(): TemplateEmailReportVo {
        if (this._selectedTemplateEmailReport == null) {
            this._selectedTemplateEmailReport = new TemplateEmailReportVo();
        }
        return this._selectedTemplateEmailReport;
    }

    set selectedTemplateEmailReport(value: TemplateEmailReportVo) {
        this._selectedTemplateEmailReport = value;
    }

    private _templateEmailReportSelections: Array<TemplateEmailReportVo>;

    // methods

    get templateEmailReportSelections(): Array<TemplateEmailReportVo> {
        if (this._templateEmailReportSelections == null) {
            this._templateEmailReportSelections = new Array<TemplateEmailReportVo>();
        }
        return this._templateEmailReportSelections;
    }

    set templateEmailReportSelections(value: Array<TemplateEmailReportVo>) {
        this._templateEmailReportSelections = value;
    }

    private _createTemplateEmailReportDialog: boolean;

    get createTemplateEmailReportDialog(): boolean {
        return this._createTemplateEmailReportDialog;
    }

    set createTemplateEmailReportDialog(value: boolean) {
        this._createTemplateEmailReportDialog = value;
    }

    private _editTemplateEmailReportDialog: boolean;

    // getters and setters

    get editTemplateEmailReportDialog(): boolean {
        return this._editTemplateEmailReportDialog;
    }

    set editTemplateEmailReportDialog(value: boolean) {
        this._editTemplateEmailReportDialog = value;
    }

    private _viewTemplateEmailReportDialog: boolean;

    get viewTemplateEmailReportDialog(): boolean {
        return this._viewTemplateEmailReportDialog;
    }

    set viewTemplateEmailReportDialog(value: boolean) {
        this._viewTemplateEmailReportDialog = value;
    }

    private _searchTemplateEmailReport: TemplateEmailReportVo;

    get searchTemplateEmailReport(): TemplateEmailReportVo {
        if (this._searchTemplateEmailReport == null) {
            this._searchTemplateEmailReport = new TemplateEmailReportVo();
        }
        return this._searchTemplateEmailReport;
    }

    set searchTemplateEmailReport(value: TemplateEmailReportVo) {
        this._searchTemplateEmailReport = value;
    }

    public findAll() {
        return this.http.get<Array<TemplateEmailReportVo>>(this.API);
    }

    public save(): Observable<TemplateEmailReportVo> {
        return this.http.post<TemplateEmailReportVo>(this.API, this.selectedTemplateEmailReport);
    }

    delete(templateEmailReport: TemplateEmailReportVo) {
        return this.http.delete<number>(this.API + 'id/' + templateEmailReport.id);
    }

    public edit(): Observable<TemplateEmailReportVo> {
        return this.http.put<TemplateEmailReportVo>(this.API, this.selectedTemplateEmailReport);
    }

    public findByCriteria(templateEmailReport: TemplateEmailReportVo): Observable<Array<TemplateEmailReportVo>> {
        return this.http.post<Array<TemplateEmailReportVo>>(this.API + 'search', templateEmailReport);
    }

    public findByIdWithAssociatedList(templateEmailReport: TemplateEmailReportVo): Observable<TemplateEmailReportVo> {
        return this.http.get<TemplateEmailReportVo>(this.API + 'detail/id/' + templateEmailReport.id);
    }

}
