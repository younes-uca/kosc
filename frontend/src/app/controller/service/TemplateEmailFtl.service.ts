import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {TemplateEmailFtlVo} from '../model/TemplateEmailFtl.model';


@Injectable({
    providedIn: 'root'
})
export class TemplateEmailFtlService {
    public editTemplateEmailFtl$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/templateEmailFtl/';
        });
    }

    private _templateEmailFtls: Array<TemplateEmailFtlVo>;

    get templateEmailFtls(): Array<TemplateEmailFtlVo> {
        if (this._templateEmailFtls == null) {
            this._templateEmailFtls = new Array<TemplateEmailFtlVo>();
        }
        return this._templateEmailFtls;
    }

    set templateEmailFtls(value: Array<TemplateEmailFtlVo>) {
        this._templateEmailFtls = value;
    }

    private _selectedTemplateEmailFtl: TemplateEmailFtlVo;

    get selectedTemplateEmailFtl(): TemplateEmailFtlVo {
        if (this._selectedTemplateEmailFtl == null) {
            this._selectedTemplateEmailFtl = new TemplateEmailFtlVo();
        }
        return this._selectedTemplateEmailFtl;
    }

    set selectedTemplateEmailFtl(value: TemplateEmailFtlVo) {
        this._selectedTemplateEmailFtl = value;
    }

    private _templateEmailFtlSelections: Array<TemplateEmailFtlVo>;

    // methods

    get templateEmailFtlSelections(): Array<TemplateEmailFtlVo> {
        if (this._templateEmailFtlSelections == null) {
            this._templateEmailFtlSelections = new Array<TemplateEmailFtlVo>();
        }
        return this._templateEmailFtlSelections;
    }

    set templateEmailFtlSelections(value: Array<TemplateEmailFtlVo>) {
        this._templateEmailFtlSelections = value;
    }

    private _createTemplateEmailFtlDialog: boolean;

    get createTemplateEmailFtlDialog(): boolean {
        return this._createTemplateEmailFtlDialog;
    }

    set createTemplateEmailFtlDialog(value: boolean) {
        this._createTemplateEmailFtlDialog = value;
    }

    private _editTemplateEmailFtlDialog: boolean;

    // getters and setters

    get editTemplateEmailFtlDialog(): boolean {
        return this._editTemplateEmailFtlDialog;
    }

    set editTemplateEmailFtlDialog(value: boolean) {
        this._editTemplateEmailFtlDialog = value;
    }

    private _viewTemplateEmailFtlDialog: boolean;

    get viewTemplateEmailFtlDialog(): boolean {
        return this._viewTemplateEmailFtlDialog;
    }

    set viewTemplateEmailFtlDialog(value: boolean) {
        this._viewTemplateEmailFtlDialog = value;
    }

    private _searchTemplateEmailFtl: TemplateEmailFtlVo;

    get searchTemplateEmailFtl(): TemplateEmailFtlVo {
        if (this._searchTemplateEmailFtl == null) {
            this._searchTemplateEmailFtl = new TemplateEmailFtlVo();
        }
        return this._searchTemplateEmailFtl;
    }

    set searchTemplateEmailFtl(value: TemplateEmailFtlVo) {
        this._searchTemplateEmailFtl = value;
    }

    public findAll() {
        return this.http.get<Array<TemplateEmailFtlVo>>(this.API);
    }

    public save(): Observable<TemplateEmailFtlVo> {
        return this.http.post<TemplateEmailFtlVo>(this.API, this.selectedTemplateEmailFtl);
    }

    delete(templateEmailFtl: TemplateEmailFtlVo) {
        return this.http.delete<number>(this.API + 'id/' + templateEmailFtl.id);
    }

    public edit(): Observable<TemplateEmailFtlVo> {
        return this.http.put<TemplateEmailFtlVo>(this.API, this.selectedTemplateEmailFtl);
    }

    public findByCriteria(templateEmailFtl: TemplateEmailFtlVo): Observable<Array<TemplateEmailFtlVo>> {
        return this.http.post<Array<TemplateEmailFtlVo>>(this.API + 'search', templateEmailFtl);
    }

    public findByIdWithAssociatedList(templateEmailFtl: TemplateEmailFtlVo): Observable<TemplateEmailFtlVo> {
        return this.http.get<TemplateEmailFtlVo>(this.API + 'detail/id/' + templateEmailFtl.id);
    }

}
