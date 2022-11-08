import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {CauseKoOkVo} from '../model/CauseKoOk.model';


@Injectable({
    providedIn: 'root'
})
export class CauseKoOkService {
    public editCauseKoOk$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/causeKoOk/';
        });
    }

    private _causeKoOks: Array<CauseKoOkVo>;

    get causeKoOks(): Array<CauseKoOkVo> {
        if (this._causeKoOks == null) {
            this._causeKoOks = new Array<CauseKoOkVo>();
        }
        return this._causeKoOks;
    }

    set causeKoOks(value: Array<CauseKoOkVo>) {
        this._causeKoOks = value;
    }

    private _selectedCauseKoOk: CauseKoOkVo;

    get selectedCauseKoOk(): CauseKoOkVo {
        if (this._selectedCauseKoOk == null) {
            this._selectedCauseKoOk = new CauseKoOkVo();
        }
        return this._selectedCauseKoOk;
    }

    set selectedCauseKoOk(value: CauseKoOkVo) {
        this._selectedCauseKoOk = value;
    }

    private _causeKoOkSelections: Array<CauseKoOkVo>;

    // methods

    get causeKoOkSelections(): Array<CauseKoOkVo> {
        if (this._causeKoOkSelections == null) {
            this._causeKoOkSelections = new Array<CauseKoOkVo>();
        }
        return this._causeKoOkSelections;
    }

    set causeKoOkSelections(value: Array<CauseKoOkVo>) {
        this._causeKoOkSelections = value;
    }

    private _createCauseKoOkDialog: boolean;

    get createCauseKoOkDialog(): boolean {
        return this._createCauseKoOkDialog;
    }

    set createCauseKoOkDialog(value: boolean) {
        this._createCauseKoOkDialog = value;
    }

    private _editCauseKoOkDialog: boolean;

    get editCauseKoOkDialog(): boolean {
        return this._editCauseKoOkDialog;
    }

    // getters and setters

    set editCauseKoOkDialog(value: boolean) {
        this._editCauseKoOkDialog = value;
    }

    private _viewCauseKoOkDialog: boolean;

    get viewCauseKoOkDialog(): boolean {
        return this._viewCauseKoOkDialog;
    }

    set viewCauseKoOkDialog(value: boolean) {
        this._viewCauseKoOkDialog = value;
    }

    private _searchCauseKoOk: CauseKoOkVo;

    get searchCauseKoOk(): CauseKoOkVo {
        if (this._searchCauseKoOk == null) {
            this._searchCauseKoOk = new CauseKoOkVo();
        }
        return this._searchCauseKoOk;
    }

    set searchCauseKoOk(value: CauseKoOkVo) {
        this._searchCauseKoOk = value;
    }

    public findByCause(cause: string, causes: Array<CauseKoOkVo>) {
        return causes.find(c => c.code === cause);

    }

    public findAll() {
        return this.http.get<Array<CauseKoOkVo>>(this.API);
    }

    public save(): Observable<CauseKoOkVo> {
        return this.http.post<CauseKoOkVo>(this.API, this.selectedCauseKoOk);
    }

    delete(causeKoOk: CauseKoOkVo) {
        return this.http.delete<number>(this.API + 'id/' + causeKoOk.id);
    }

    public edit(): Observable<CauseKoOkVo> {
        return this.http.put<CauseKoOkVo>(this.API, this.selectedCauseKoOk);
    }

    public findByCriteria(causeKoOk: CauseKoOkVo): Observable<Array<CauseKoOkVo>> {
        return this.http.post<Array<CauseKoOkVo>>(this.API + 'search', causeKoOk);
    }

    public findByIdWithAssociatedList(causeKoOk: CauseKoOkVo): Observable<CauseKoOkVo> {
        return this.http.get<CauseKoOkVo>(this.API + 'detail/id/' + causeKoOk.id);
    }

}
