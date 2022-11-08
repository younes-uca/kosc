import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {TemplateEmailClientInjoinableKoscVo} from '../model/TemplateEmailClientInjoinableKosc.model';


@Injectable({
    providedIn: 'root'
})
export class TemplateEmailClientInjoinableKoscService {
    public editTemplateEmailClientInjoinableKosc$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/templateEmailClientInjoinableKosc/';
        });
    }

    private _templateEmailClientInjoinableKoscs: Array<TemplateEmailClientInjoinableKoscVo>;

    get templateEmailClientInjoinableKoscs(): Array<TemplateEmailClientInjoinableKoscVo> {
        if (this._templateEmailClientInjoinableKoscs == null) {
            this._templateEmailClientInjoinableKoscs = new Array<TemplateEmailClientInjoinableKoscVo>();
        }
        return this._templateEmailClientInjoinableKoscs;
    }

    set templateEmailClientInjoinableKoscs(value: Array<TemplateEmailClientInjoinableKoscVo>) {
        this._templateEmailClientInjoinableKoscs = value;
    }

    private _selectedTemplateEmailClientInjoinableKosc: TemplateEmailClientInjoinableKoscVo;

    get selectedTemplateEmailClientInjoinableKosc(): TemplateEmailClientInjoinableKoscVo {
        if (this._selectedTemplateEmailClientInjoinableKosc == null) {
            this._selectedTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();
        }
        return this._selectedTemplateEmailClientInjoinableKosc;
    }

    set selectedTemplateEmailClientInjoinableKosc(value: TemplateEmailClientInjoinableKoscVo) {
        this._selectedTemplateEmailClientInjoinableKosc = value;
    }

    private _templateEmailClientInjoinableKoscSelections: Array<TemplateEmailClientInjoinableKoscVo>;

    // methods

    get templateEmailClientInjoinableKoscSelections(): Array<TemplateEmailClientInjoinableKoscVo> {
        if (this._templateEmailClientInjoinableKoscSelections == null) {
            this._templateEmailClientInjoinableKoscSelections = new Array<TemplateEmailClientInjoinableKoscVo>();
        }
        return this._templateEmailClientInjoinableKoscSelections;
    }

    set templateEmailClientInjoinableKoscSelections(value: Array<TemplateEmailClientInjoinableKoscVo>) {
        this._templateEmailClientInjoinableKoscSelections = value;
    }

    private _createTemplateEmailClientInjoinableKoscDialog: boolean;

    get createTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this._createTemplateEmailClientInjoinableKoscDialog;
    }

    set createTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this._createTemplateEmailClientInjoinableKoscDialog = value;
    }

    private _editTemplateEmailClientInjoinableKoscDialog: boolean;

    // getters and setters

    get editTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this._editTemplateEmailClientInjoinableKoscDialog;
    }

    set editTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this._editTemplateEmailClientInjoinableKoscDialog = value;
    }

    private _viewTemplateEmailClientInjoinableKoscDialog: boolean;

    get viewTemplateEmailClientInjoinableKoscDialog(): boolean {
        return this._viewTemplateEmailClientInjoinableKoscDialog;
    }

    set viewTemplateEmailClientInjoinableKoscDialog(value: boolean) {
        this._viewTemplateEmailClientInjoinableKoscDialog = value;
    }

    private _searchTemplateEmailClientInjoinableKosc: TemplateEmailClientInjoinableKoscVo;

    get searchTemplateEmailClientInjoinableKosc(): TemplateEmailClientInjoinableKoscVo {
        if (this._searchTemplateEmailClientInjoinableKosc == null) {
            this._searchTemplateEmailClientInjoinableKosc = new TemplateEmailClientInjoinableKoscVo();
        }
        return this._searchTemplateEmailClientInjoinableKosc;
    }

    set searchTemplateEmailClientInjoinableKosc(value: TemplateEmailClientInjoinableKoscVo) {
        this._searchTemplateEmailClientInjoinableKosc = value;
    }

    public findAll() {
        return this.http.get<Array<TemplateEmailClientInjoinableKoscVo>>(this.API);
    }

    public save(): Observable<TemplateEmailClientInjoinableKoscVo> {
        return this.http.post<TemplateEmailClientInjoinableKoscVo>(this.API, this.selectedTemplateEmailClientInjoinableKosc);
    }

    delete(templateEmailClientInjoinableKosc: TemplateEmailClientInjoinableKoscVo) {
        return this.http.delete<number>(this.API + 'id/' + templateEmailClientInjoinableKosc.id);
    }

    public edit(): Observable<TemplateEmailClientInjoinableKoscVo> {
        return this.http.put<TemplateEmailClientInjoinableKoscVo>(this.API, this.selectedTemplateEmailClientInjoinableKosc);
    }

    public findByCriteria(templateEmailClientInjoinableKosc: TemplateEmailClientInjoinableKoscVo): Observable<Array<TemplateEmailClientInjoinableKoscVo>> {
        return this.http.post<Array<TemplateEmailClientInjoinableKoscVo>>(this.API + 'search', templateEmailClientInjoinableKosc);
    }

    public findByIdWithAssociatedList(templateEmailClientInjoinableKosc: TemplateEmailClientInjoinableKoscVo): Observable<TemplateEmailClientInjoinableKoscVo> {
        return this.http.get<TemplateEmailClientInjoinableKoscVo>(this.API + 'detail/id/' + templateEmailClientInjoinableKosc.id);
    }

}
