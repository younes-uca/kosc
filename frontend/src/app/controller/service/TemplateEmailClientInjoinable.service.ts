import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {TemplateEmailClientInjoinableVo} from '../model/TemplateEmailClientInjoinable.model';


@Injectable({
    providedIn: 'root'
})
export class TemplateEmailClientInjoinableService {
    public editTemplateEmailClientInjoinable$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/templateEmailClientInjoinable/';
        });
    }

    private _templateEmailClientInjoinables: Array<TemplateEmailClientInjoinableVo>;

    get templateEmailClientInjoinables(): Array<TemplateEmailClientInjoinableVo> {
        if (this._templateEmailClientInjoinables == null) {
            this._templateEmailClientInjoinables = new Array<TemplateEmailClientInjoinableVo>();
        }
        return this._templateEmailClientInjoinables;
    }

    set templateEmailClientInjoinables(value: Array<TemplateEmailClientInjoinableVo>) {
        this._templateEmailClientInjoinables = value;
    }

    private _selectedTemplateEmailClientInjoinable: TemplateEmailClientInjoinableVo;

    get selectedTemplateEmailClientInjoinable(): TemplateEmailClientInjoinableVo {
        if (this._selectedTemplateEmailClientInjoinable == null) {
            this._selectedTemplateEmailClientInjoinable = new TemplateEmailClientInjoinableVo();
        }
        return this._selectedTemplateEmailClientInjoinable;
    }

    set selectedTemplateEmailClientInjoinable(value: TemplateEmailClientInjoinableVo) {
        this._selectedTemplateEmailClientInjoinable = value;
    }

    private _templateEmailClientInjoinableSelections: Array<TemplateEmailClientInjoinableVo>;

    // methods

    get templateEmailClientInjoinableSelections(): Array<TemplateEmailClientInjoinableVo> {
        if (this._templateEmailClientInjoinableSelections == null) {
            this._templateEmailClientInjoinableSelections = new Array<TemplateEmailClientInjoinableVo>();
        }
        return this._templateEmailClientInjoinableSelections;
    }

    set templateEmailClientInjoinableSelections(value: Array<TemplateEmailClientInjoinableVo>) {
        this._templateEmailClientInjoinableSelections = value;
    }

    private _createTemplateEmailClientInjoinableDialog: boolean;

    get createTemplateEmailClientInjoinableDialog(): boolean {
        return this._createTemplateEmailClientInjoinableDialog;
    }

    set createTemplateEmailClientInjoinableDialog(value: boolean) {
        this._createTemplateEmailClientInjoinableDialog = value;
    }

    private _editTemplateEmailClientInjoinableDialog: boolean;

    // getters and setters

    get editTemplateEmailClientInjoinableDialog(): boolean {
        return this._editTemplateEmailClientInjoinableDialog;
    }

    set editTemplateEmailClientInjoinableDialog(value: boolean) {
        this._editTemplateEmailClientInjoinableDialog = value;
    }

    private _viewTemplateEmailClientInjoinableDialog: boolean;

    get viewTemplateEmailClientInjoinableDialog(): boolean {
        return this._viewTemplateEmailClientInjoinableDialog;
    }

    set viewTemplateEmailClientInjoinableDialog(value: boolean) {
        this._viewTemplateEmailClientInjoinableDialog = value;
    }

    private _searchTemplateEmailClientInjoinable: TemplateEmailClientInjoinableVo;

    get searchTemplateEmailClientInjoinable(): TemplateEmailClientInjoinableVo {
        if (this._searchTemplateEmailClientInjoinable == null) {
            this._searchTemplateEmailClientInjoinable = new TemplateEmailClientInjoinableVo();
        }
        return this._searchTemplateEmailClientInjoinable;
    }

    set searchTemplateEmailClientInjoinable(value: TemplateEmailClientInjoinableVo) {
        this._searchTemplateEmailClientInjoinable = value;
    }

    public findAll() {
        return this.http.get<Array<TemplateEmailClientInjoinableVo>>(this.API);
    }

    public save(): Observable<TemplateEmailClientInjoinableVo> {
        return this.http.post<TemplateEmailClientInjoinableVo>(this.API, this.selectedTemplateEmailClientInjoinable);
    }

    delete(templateEmailClientInjoinable: TemplateEmailClientInjoinableVo) {
        return this.http.delete<number>(this.API + 'id/' + templateEmailClientInjoinable.id);
    }

    public edit(): Observable<TemplateEmailClientInjoinableVo> {
        return this.http.put<TemplateEmailClientInjoinableVo>(this.API, this.selectedTemplateEmailClientInjoinable);
    }

    public findByCriteria(templateEmailClientInjoinable: TemplateEmailClientInjoinableVo): Observable<Array<TemplateEmailClientInjoinableVo>> {
        return this.http.post<Array<TemplateEmailClientInjoinableVo>>(this.API + 'search', templateEmailClientInjoinable);
    }

    public findByIdWithAssociatedList(templateEmailClientInjoinable: TemplateEmailClientInjoinableVo): Observable<TemplateEmailClientInjoinableVo> {
        return this.http.get<TemplateEmailClientInjoinableVo>(this.API + 'detail/id/' + templateEmailClientInjoinable.id);
    }

}
