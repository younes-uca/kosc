import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {TemplateSuiviVo} from '../model/TemplateSuivi.model';


@Injectable({
    providedIn: 'root'
})
export class TemplateSuiviService {
    public editTemplateSuivi$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/templateSuivi/';
        });
    }

    private _templateSuivis: Array<TemplateSuiviVo>;

    get templateSuivis(): Array<TemplateSuiviVo> {
        if (this._templateSuivis == null) {
            this._templateSuivis = new Array<TemplateSuiviVo>();
        }
        return this._templateSuivis;
    }

    set templateSuivis(value: Array<TemplateSuiviVo>) {
        this._templateSuivis = value;
    }

    private _selectedTemplateSuivi: TemplateSuiviVo;

    get selectedTemplateSuivi(): TemplateSuiviVo {
        if (this._selectedTemplateSuivi == null) {
            this._selectedTemplateSuivi = new TemplateSuiviVo();
        }
        return this._selectedTemplateSuivi;
    }

    set selectedTemplateSuivi(value: TemplateSuiviVo) {
        this._selectedTemplateSuivi = value;
    }

    private _templateSuiviSelections: Array<TemplateSuiviVo>;

    // methods

    get templateSuiviSelections(): Array<TemplateSuiviVo> {
        if (this._templateSuiviSelections == null) {
            this._templateSuiviSelections = new Array<TemplateSuiviVo>();
        }
        return this._templateSuiviSelections;
    }

    set templateSuiviSelections(value: Array<TemplateSuiviVo>) {
        this._templateSuiviSelections = value;
    }

    private _createTemplateSuiviDialog: boolean;

    get createTemplateSuiviDialog(): boolean {
        return this._createTemplateSuiviDialog;
    }

    set createTemplateSuiviDialog(value: boolean) {
        this._createTemplateSuiviDialog = value;
    }

    private _editTemplateSuiviDialog: boolean;

    // getters and setters

    get editTemplateSuiviDialog(): boolean {
        return this._editTemplateSuiviDialog;
    }

    set editTemplateSuiviDialog(value: boolean) {
        this._editTemplateSuiviDialog = value;
    }

    private _viewTemplateSuiviDialog: boolean;

    get viewTemplateSuiviDialog(): boolean {
        return this._viewTemplateSuiviDialog;
    }

    set viewTemplateSuiviDialog(value: boolean) {
        this._viewTemplateSuiviDialog = value;
    }

    private _searchTemplateSuivi: TemplateSuiviVo;

    get searchTemplateSuivi(): TemplateSuiviVo {
        if (this._searchTemplateSuivi == null) {
            this._searchTemplateSuivi = new TemplateSuiviVo();
        }
        return this._searchTemplateSuivi;
    }

    set searchTemplateSuivi(value: TemplateSuiviVo) {
        this._searchTemplateSuivi = value;
    }

    public findAll() {
        return this.http.get<Array<TemplateSuiviVo>>(this.API);
    }

    public save(): Observable<TemplateSuiviVo> {
        return this.http.post<TemplateSuiviVo>(this.API, this.selectedTemplateSuivi);
    }

    delete(templateSuivi: TemplateSuiviVo) {
        return this.http.delete<number>(this.API + 'id/' + templateSuivi.id);
    }

    public edit(): Observable<TemplateSuiviVo> {
        return this.http.put<TemplateSuiviVo>(this.API, this.selectedTemplateSuivi);
    }

    public findByCriteria(templateSuivi: TemplateSuiviVo): Observable<Array<TemplateSuiviVo>> {
        return this.http.post<Array<TemplateSuiviVo>>(this.API + 'search', templateSuivi);
    }

    public findByIdWithAssociatedList(templateSuivi: TemplateSuiviVo): Observable<TemplateSuiviVo> {
        return this.http.get<TemplateSuiviVo>(this.API + 'detail/id/' + templateSuivi.id);
    }

}
