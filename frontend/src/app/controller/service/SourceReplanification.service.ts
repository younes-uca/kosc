import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {SourceReplanificationVo} from '../model/SourceReplanification.model';


@Injectable({
    providedIn: 'root'
})
export class SourceReplanificationService {
    public editSourceReplanification$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/sourceReplanification/';
        });
    }

    private _sourceReplanifications: Array<SourceReplanificationVo>;

    get sourceReplanifications(): Array<SourceReplanificationVo> {
        if (this._sourceReplanifications == null) {
            this._sourceReplanifications = new Array<SourceReplanificationVo>();
        }
        return this._sourceReplanifications;
    }

    set sourceReplanifications(value: Array<SourceReplanificationVo>) {
        this._sourceReplanifications = value;
    }

    private _selectedSourceReplanification: SourceReplanificationVo;

    get selectedSourceReplanification(): SourceReplanificationVo {
        if (this._selectedSourceReplanification == null) {
            this._selectedSourceReplanification = new SourceReplanificationVo();
        }
        return this._selectedSourceReplanification;
    }

    set selectedSourceReplanification(value: SourceReplanificationVo) {
        this._selectedSourceReplanification = value;
    }

    private _sourceReplanificationSelections: Array<SourceReplanificationVo>;

    // methods

    get sourceReplanificationSelections(): Array<SourceReplanificationVo> {
        if (this._sourceReplanificationSelections == null) {
            this._sourceReplanificationSelections = new Array<SourceReplanificationVo>();
        }
        return this._sourceReplanificationSelections;
    }

    set sourceReplanificationSelections(value: Array<SourceReplanificationVo>) {
        this._sourceReplanificationSelections = value;
    }

    private _createSourceReplanificationDialog: boolean;

    get createSourceReplanificationDialog(): boolean {
        return this._createSourceReplanificationDialog;
    }

    set createSourceReplanificationDialog(value: boolean) {
        this._createSourceReplanificationDialog = value;
    }

    private _editSourceReplanificationDialog: boolean;

    // getters and setters

    get editSourceReplanificationDialog(): boolean {
        return this._editSourceReplanificationDialog;
    }

    set editSourceReplanificationDialog(value: boolean) {
        this._editSourceReplanificationDialog = value;
    }

    private _viewSourceReplanificationDialog: boolean;

    get viewSourceReplanificationDialog(): boolean {
        return this._viewSourceReplanificationDialog;
    }

    set viewSourceReplanificationDialog(value: boolean) {
        this._viewSourceReplanificationDialog = value;
    }

    private _searchSourceReplanification: SourceReplanificationVo;

    get searchSourceReplanification(): SourceReplanificationVo {
        if (this._searchSourceReplanification == null) {
            this._searchSourceReplanification = new SourceReplanificationVo();
        }
        return this._searchSourceReplanification;
    }

    set searchSourceReplanification(value: SourceReplanificationVo) {
        this._searchSourceReplanification = value;
    }

    public findAll() {
        return this.http.get<Array<SourceReplanificationVo>>(this.API);
    }

    public save(): Observable<SourceReplanificationVo> {
        return this.http.post<SourceReplanificationVo>(this.API, this.selectedSourceReplanification);
    }

    delete(sourceReplanification: SourceReplanificationVo) {
        return this.http.delete<number>(this.API + 'id/' + sourceReplanification.id);
    }

    public edit(): Observable<SourceReplanificationVo> {
        return this.http.put<SourceReplanificationVo>(this.API, this.selectedSourceReplanification);
    }

    public findByCriteria(sourceReplanification: SourceReplanificationVo): Observable<Array<SourceReplanificationVo>> {
        return this.http.post<Array<SourceReplanificationVo>>(this.API + 'search', sourceReplanification);
    }

    public findByIdWithAssociatedList(sourceReplanification: SourceReplanificationVo): Observable<SourceReplanificationVo> {
        return this.http.get<SourceReplanificationVo>(this.API + 'detail/id/' + sourceReplanification.id);
    }

}
