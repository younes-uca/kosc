import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {TemplateEmailPlanificationVo} from '../model/TemplateEmailPlanification.model';


@Injectable({
    providedIn: 'root'
})
export class TemplateEmailPlanificationService {
    public editTemplateEmailPlanification$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/templateEmailPlanification/';
        });
    }

    private _templateEmailPlanifications: Array<TemplateEmailPlanificationVo>;

    get templateEmailPlanifications(): Array<TemplateEmailPlanificationVo> {
        if (this._templateEmailPlanifications == null) {
            this._templateEmailPlanifications = new Array<TemplateEmailPlanificationVo>();
        }
        return this._templateEmailPlanifications;
    }

    set templateEmailPlanifications(value: Array<TemplateEmailPlanificationVo>) {
        this._templateEmailPlanifications = value;
    }

    private _selectedTemplateEmailPlanification: TemplateEmailPlanificationVo;

    get selectedTemplateEmailPlanification(): TemplateEmailPlanificationVo {
        if (this._selectedTemplateEmailPlanification == null) {
            this._selectedTemplateEmailPlanification = new TemplateEmailPlanificationVo();
        }
        return this._selectedTemplateEmailPlanification;
    }

    set selectedTemplateEmailPlanification(value: TemplateEmailPlanificationVo) {
        this._selectedTemplateEmailPlanification = value;
    }

    private _templateEmailPlanificationSelections: Array<TemplateEmailPlanificationVo>;

    // methods

    get templateEmailPlanificationSelections(): Array<TemplateEmailPlanificationVo> {
        if (this._templateEmailPlanificationSelections == null) {
            this._templateEmailPlanificationSelections = new Array<TemplateEmailPlanificationVo>();
        }
        return this._templateEmailPlanificationSelections;
    }

    set templateEmailPlanificationSelections(value: Array<TemplateEmailPlanificationVo>) {
        this._templateEmailPlanificationSelections = value;
    }

    private _createTemplateEmailPlanificationDialog: boolean;

    get createTemplateEmailPlanificationDialog(): boolean {
        return this._createTemplateEmailPlanificationDialog;
    }

    set createTemplateEmailPlanificationDialog(value: boolean) {
        this._createTemplateEmailPlanificationDialog = value;
    }

    private _editTemplateEmailPlanificationDialog: boolean;

    // getters and setters

    get editTemplateEmailPlanificationDialog(): boolean {
        return this._editTemplateEmailPlanificationDialog;
    }

    set editTemplateEmailPlanificationDialog(value: boolean) {
        this._editTemplateEmailPlanificationDialog = value;
    }

    private _viewTemplateEmailPlanificationDialog: boolean;

    get viewTemplateEmailPlanificationDialog(): boolean {
        return this._viewTemplateEmailPlanificationDialog;
    }

    set viewTemplateEmailPlanificationDialog(value: boolean) {
        this._viewTemplateEmailPlanificationDialog = value;
    }

    private _searchTemplateEmailPlanification: TemplateEmailPlanificationVo;

    get searchTemplateEmailPlanification(): TemplateEmailPlanificationVo {
        if (this._searchTemplateEmailPlanification == null) {
            this._searchTemplateEmailPlanification = new TemplateEmailPlanificationVo();
        }
        return this._searchTemplateEmailPlanification;
    }

    set searchTemplateEmailPlanification(value: TemplateEmailPlanificationVo) {
        this._searchTemplateEmailPlanification = value;
    }

    public findAll() {
        return this.http.get<Array<TemplateEmailPlanificationVo>>(this.API);
    }

    public save(): Observable<TemplateEmailPlanificationVo> {
        return this.http.post<TemplateEmailPlanificationVo>(this.API, this.selectedTemplateEmailPlanification);
    }

    delete(templateEmailPlanification: TemplateEmailPlanificationVo) {
        return this.http.delete<number>(this.API + 'id/' + templateEmailPlanification.id);
    }

    public edit(): Observable<TemplateEmailPlanificationVo> {
        return this.http.put<TemplateEmailPlanificationVo>(this.API, this.selectedTemplateEmailPlanification);
    }

    public findByCriteria(templateEmailPlanification: TemplateEmailPlanificationVo): Observable<Array<TemplateEmailPlanificationVo>> {
        return this.http.post<Array<TemplateEmailPlanificationVo>>(this.API + 'search', templateEmailPlanification);
    }

    public findByIdWithAssociatedList(templateEmailPlanification: TemplateEmailPlanificationVo): Observable<TemplateEmailPlanificationVo> {
        return this.http.get<TemplateEmailPlanificationVo>(this.API + 'detail/id/' + templateEmailPlanification.id);
    }

}
