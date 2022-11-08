import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {TemplateEmailCriVo} from '../model/TemplateEmailCri.model';


@Injectable({
    providedIn: 'root'
})
export class TemplateEmailCriService {
    public editTemplateEmailCri$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/templateEmailCri/';
        });
    }

    private _templateEmailCris: Array<TemplateEmailCriVo>;

    get templateEmailCris(): Array<TemplateEmailCriVo> {
        if (this._templateEmailCris == null) {
            this._templateEmailCris = new Array<TemplateEmailCriVo>();
        }
        return this._templateEmailCris;
    }

    set templateEmailCris(value: Array<TemplateEmailCriVo>) {
        this._templateEmailCris = value;
    }

    private _selectedTemplateEmailCri: TemplateEmailCriVo;

    get selectedTemplateEmailCri(): TemplateEmailCriVo {
        if (this._selectedTemplateEmailCri == null) {
            this._selectedTemplateEmailCri = new TemplateEmailCriVo();
        }
        return this._selectedTemplateEmailCri;
    }

    set selectedTemplateEmailCri(value: TemplateEmailCriVo) {
        this._selectedTemplateEmailCri = value;
    }

    private _templateEmailCriSelections: Array<TemplateEmailCriVo>;

    // methods

    get templateEmailCriSelections(): Array<TemplateEmailCriVo> {
        if (this._templateEmailCriSelections == null) {
            this._templateEmailCriSelections = new Array<TemplateEmailCriVo>();
        }
        return this._templateEmailCriSelections;
    }

    set templateEmailCriSelections(value: Array<TemplateEmailCriVo>) {
        this._templateEmailCriSelections = value;
    }

    private _createTemplateEmailCriDialog: boolean;

    get createTemplateEmailCriDialog(): boolean {
        return this._createTemplateEmailCriDialog;
    }

    set createTemplateEmailCriDialog(value: boolean) {
        this._createTemplateEmailCriDialog = value;
    }

    private _editTemplateEmailCriDialog: boolean;

    // getters and setters

    get editTemplateEmailCriDialog(): boolean {
        return this._editTemplateEmailCriDialog;
    }

    set editTemplateEmailCriDialog(value: boolean) {
        this._editTemplateEmailCriDialog = value;
    }

    private _viewTemplateEmailCriDialog: boolean;

    get viewTemplateEmailCriDialog(): boolean {
        return this._viewTemplateEmailCriDialog;
    }

    set viewTemplateEmailCriDialog(value: boolean) {
        this._viewTemplateEmailCriDialog = value;
    }

    private _searchTemplateEmailCri: TemplateEmailCriVo;

    get searchTemplateEmailCri(): TemplateEmailCriVo {
        if (this._searchTemplateEmailCri == null) {
            this._searchTemplateEmailCri = new TemplateEmailCriVo();
        }
        return this._searchTemplateEmailCri;
    }

    set searchTemplateEmailCri(value: TemplateEmailCriVo) {
        this._searchTemplateEmailCri = value;
    }

    public findAll() {
        return this.http.get<Array<TemplateEmailCriVo>>(this.API);
    }

    public save(): Observable<TemplateEmailCriVo> {
        return this.http.post<TemplateEmailCriVo>(this.API, this.selectedTemplateEmailCri);
    }

    delete(templateEmailCri: TemplateEmailCriVo) {
        return this.http.delete<number>(this.API + 'id/' + templateEmailCri.id);
    }

    public edit(): Observable<TemplateEmailCriVo> {
        return this.http.put<TemplateEmailCriVo>(this.API, this.selectedTemplateEmailCri);
    }

    public findByCriteria(templateEmailCri: TemplateEmailCriVo): Observable<Array<TemplateEmailCriVo>> {
        return this.http.post<Array<TemplateEmailCriVo>>(this.API + 'search', templateEmailCri);
    }

    public findByIdWithAssociatedList(templateEmailCri: TemplateEmailCriVo): Observable<TemplateEmailCriVo> {
        return this.http.get<TemplateEmailCriVo>(this.API + 'detail/id/' + templateEmailCri.id);
    }

}
