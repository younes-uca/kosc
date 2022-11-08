import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {TemplateEmailRefusVo} from '../model/TemplateEmailRefus.model';


@Injectable({
    providedIn: 'root'
})
export class TemplateEmailRefusService {
    public editTemplateEmailRefus$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/templateEmailRefus/';
        });
    }

    private _templateEmailRefuss: Array<TemplateEmailRefusVo>;

    get templateEmailRefuss(): Array<TemplateEmailRefusVo> {
        if (this._templateEmailRefuss == null) {
            this._templateEmailRefuss = new Array<TemplateEmailRefusVo>();
        }
        return this._templateEmailRefuss;
    }

    set templateEmailRefuss(value: Array<TemplateEmailRefusVo>) {
        this._templateEmailRefuss = value;
    }

    private _selectedTemplateEmailRefus: TemplateEmailRefusVo;

    get selectedTemplateEmailRefus(): TemplateEmailRefusVo {
        if (this._selectedTemplateEmailRefus == null) {
            this._selectedTemplateEmailRefus = new TemplateEmailRefusVo();
        }
        return this._selectedTemplateEmailRefus;
    }

    set selectedTemplateEmailRefus(value: TemplateEmailRefusVo) {
        this._selectedTemplateEmailRefus = value;
    }

    private _templateEmailRefusSelections: Array<TemplateEmailRefusVo>;

    // methods

    get templateEmailRefusSelections(): Array<TemplateEmailRefusVo> {
        if (this._templateEmailRefusSelections == null) {
            this._templateEmailRefusSelections = new Array<TemplateEmailRefusVo>();
        }
        return this._templateEmailRefusSelections;
    }

    set templateEmailRefusSelections(value: Array<TemplateEmailRefusVo>) {
        this._templateEmailRefusSelections = value;
    }

    private _createTemplateEmailRefusDialog: boolean;

    get createTemplateEmailRefusDialog(): boolean {
        return this._createTemplateEmailRefusDialog;
    }

    set createTemplateEmailRefusDialog(value: boolean) {
        this._createTemplateEmailRefusDialog = value;
    }

    private _editTemplateEmailRefusDialog: boolean;

    // getters and setters

    get editTemplateEmailRefusDialog(): boolean {
        return this._editTemplateEmailRefusDialog;
    }

    set editTemplateEmailRefusDialog(value: boolean) {
        this._editTemplateEmailRefusDialog = value;
    }

    private _viewTemplateEmailRefusDialog: boolean;

    get viewTemplateEmailRefusDialog(): boolean {
        return this._viewTemplateEmailRefusDialog;
    }

    set viewTemplateEmailRefusDialog(value: boolean) {
        this._viewTemplateEmailRefusDialog = value;
    }

    private _searchTemplateEmailRefus: TemplateEmailRefusVo;

    get searchTemplateEmailRefus(): TemplateEmailRefusVo {
        if (this._searchTemplateEmailRefus == null) {
            this._searchTemplateEmailRefus = new TemplateEmailRefusVo();
        }
        return this._searchTemplateEmailRefus;
    }

    set searchTemplateEmailRefus(value: TemplateEmailRefusVo) {
        this._searchTemplateEmailRefus = value;
    }

    public findAll() {
        return this.http.get<Array<TemplateEmailRefusVo>>(this.API);
    }

    public save(): Observable<TemplateEmailRefusVo> {
        return this.http.post<TemplateEmailRefusVo>(this.API, this.selectedTemplateEmailRefus);
    }

    delete(templateEmailRefus: TemplateEmailRefusVo) {
        return this.http.delete<number>(this.API + 'id/' + templateEmailRefus.id);
    }

    public edit(): Observable<TemplateEmailRefusVo> {
        return this.http.put<TemplateEmailRefusVo>(this.API, this.selectedTemplateEmailRefus);
    }

    public findByCriteria(templateEmailRefus: TemplateEmailRefusVo): Observable<Array<TemplateEmailRefusVo>> {
        return this.http.post<Array<TemplateEmailRefusVo>>(this.API + 'search', templateEmailRefus);
    }

    public findByIdWithAssociatedList(templateEmailRefus: TemplateEmailRefusVo): Observable<TemplateEmailRefusVo> {
        return this.http.get<TemplateEmailRefusVo>(this.API + 'detail/id/' + templateEmailRefus.id);
    }

}
